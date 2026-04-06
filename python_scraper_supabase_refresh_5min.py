import json
import re
import time
from datetime import datetime, UTC

import requests
from playwright.sync_api import sync_playwright

# =========================
# CONFIGURACION
# =========================
OFFICIAL_URL = "https://tuboleto.cultura.pe/disponibilidad/llaqta_machupicchu"
SUPABASE_URL = "https://klmikzfstasntvgmxsuj.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbWlremZzdGFzbnR2Z214c3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzOTUyMjYsImV4cCI6MjA5MDk3MTIyNn0.AJLc5hqP6BLS1hd99SqV7xKIWZPP_8cS1gF16PiHr7o"

# Frecuencia recomendada:
# - 5 minutos todo el dia
# - si quieres, puedes activar modo critico por la mañana
NORMAL_INTERVAL_SECONDS = 300   # 5 min
CRITICAL_INTERVAL_SECONDS = 120 # 2 min
USE_CRITICAL_WINDOW = True

# Ventana critica local (hora de Chile) para capturar mas seguido
CRITICAL_START_HOUR = 5
CRITICAL_END_HOUR = 9

HEADLESS = True

ROUTE_MAP = {
    "Ruta 1-A: Montaña Machupicchu": "ruta_1a",
    "Ruta 1-B: Terraza superior": "ruta_1b",
    "Ruta 2-A: Clásico Diseñada": "ruta_2a",
    "Ruta 2-B: Terraza Inferior": "ruta_2b",
    "Ruta 3-A: Montaña Waynapicchu": "ruta_3a",
    "Ruta 3-B: Realeza diseñada": "ruta_3b",
}


def normalize_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def extract_first_number(text: str, pattern: str):
    m = re.search(pattern, text, flags=re.IGNORECASE)
    return int(m.group(1)) if m else None


def extract_first_text(text: str, pattern: str):
    m = re.search(pattern, text, flags=re.IGNORECASE)
    return m.group(1) if m else None


def extract_metric_from_route_block(text: str, route_label: str, metric_name: str):
    idx = text.find(route_label)
    if idx == -1:
        return None
    snippet = text[idx: idx + 700]
    m = re.search(rf"(\d+)\s+{re.escape(metric_name)}", snippet, flags=re.IGNORECASE)
    return int(m.group(1)) if m else None


def parse_page_data(text: str):
    data = {
        "captured_at": datetime.now(UTC).isoformat(),
        "source_url": OFFICIAL_URL,
        "fecha_disponibilidad": extract_first_text(text, r"Disponibilidad para el día\s*(\d{2}/\d{2}/\d{4})"),
        "turnos_disponibles": extract_first_number(text, r"Disponibles:\s*(\d+)"),
        "turnos_entregados": extract_first_number(text, r"Entregados:\s*(\d+)"),
        "raw_excerpt": text[:2500],
        "parser_version": "v2_fast_refresh",
        "fetch_status": "success",
        "notes": None,
    }

    for route_label, prefix in ROUTE_MAP.items():
        data[f"{prefix}_aforo"] = extract_metric_from_route_block(text, route_label, "AFORO")
        data[f"{prefix}_vendidos"] = extract_metric_from_route_block(text, route_label, "VENDIDOS")
        data[f"{prefix}_disponibles"] = extract_metric_from_route_block(text, route_label, "DISPONIBLES")

    return data


def fetch_visible_text() -> str:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=HEADLESS)
        page = browser.new_page(viewport={"width": 1440, "height": 2400})
        try:
            page.goto(OFFICIAL_URL, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(5000)
            text = page.locator("body").inner_text(timeout=30000)
            return normalize_spaces(text)
        finally:
            browser.close()


def insert_into_supabase(payload: dict):
    endpoint = SUPABASE_URL.rstrip("/") + "/rest/v1/ticket_snapshots"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    }
    response = requests.post(endpoint, headers=headers, json=payload, timeout=45)
    print("HTTP Supabase:", response.status_code)
    print("Respuesta Supabase:", response.text[:1000])
    response.raise_for_status()
    return response.json()


def run_once():
    text = fetch_visible_text()
    print("TEXTO CAPTURADO (primeros 1200 caracteres):")
    print(text[:1200])

    data = parse_page_data(text)

    print("\nDATA CAPTURADA:")
    print(json.dumps(data, ensure_ascii=False, indent=2))

    inserted = insert_into_supabase(data)
    print("\nINSERTADO EN SUPABASE:")
    print(json.dumps(inserted, ensure_ascii=False, indent=2))


def get_sleep_seconds() -> int:
    now = datetime.now()
    if USE_CRITICAL_WINDOW and CRITICAL_START_HOUR <= now.hour < CRITICAL_END_HOUR:
        return CRITICAL_INTERVAL_SECONDS
    return NORMAL_INTERVAL_SECONDS


def loop_forever():
    print("Scraper iniciado.")
    print(f"URL: {OFFICIAL_URL}")
    print(f"Modo critico: {'ON' if USE_CRITICAL_WINDOW else 'OFF'}")
    print(f"Intervalo normal: {NORMAL_INTERVAL_SECONDS} segundos")
    print(f"Intervalo critico: {CRITICAL_INTERVAL_SECONDS} segundos")

    while True:
        try:
            print("\n==============================")
            print("Hora inicio:", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
            run_once()
        except Exception as e:
            print("ERROR EN SCRAPER:", str(e))

        sleep_seconds = get_sleep_seconds()
        print(f"\nEsperando {sleep_seconds} segundos para la siguiente captura...")
        time.sleep(sleep_seconds)


if __name__ == "__main__":
    # Para probar una sola vez:
    # run_once()

    # Para dejarlo corriendo:
    loop_forever()
