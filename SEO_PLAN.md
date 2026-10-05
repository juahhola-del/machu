# Plan SEO de MachuLine — 90 días

Fecha base: 5 de octubre de 2026  
Dominio canónico: `https://machuline.com`  
Objetivo: convertir MachuLine en una fuente útil para planificar Machu Picchu y captar búsquedas no asociadas a la marca.

## Estado al 5 de octubre de 2026

- Publicado el centro `/actualidad/` con 20 contenidos indexables sobre cierres, derrumbes, operación ferroviaria, Camino Inca y seguridad en la ruta por Hidroeléctrica.
- Cada contenido diferencia entre antecedente fechado y guía vigente, incluye fuentes primarias, canonical, metadatos sociales y datos estructurados `Article` o `NewsArticle`.
- El sitemap pasó inicialmente a 26 URLs y la portada enlaza el nuevo centro para facilitar descubrimiento y distribución de autoridad interna.
- El planificador ahora aplica restricciones de duración, muestra actividades omitidas, contempla circuito y condición física e incluye la cadena completa de regreso a Cusco.
- Publicado el clúster `/itinerarios/` con rutas diferenciadas de 2, 3, 4, 5 y 6 días; el sitemap pasa a 32 URLs.
- Próxima rutina editorial: revisar el centro dos veces por semana en temporada de lluvias; actualizar la misma URL cuando cambie un estado operativo y no crear duplicados por cada rumor.

### Calendario de mantenimiento del centro de actualidad

1. Lunes y jueves: revisar Cultura, Mincetur, MTC, Indeci, Sernanp y Senamhi.
2. Cuando haya incidencia: publicar solo después de una fuente verificable, indicar fecha/hora y tramo exacto.
3. Tras la reapertura: actualizar la noticia original, conservar la cronología y enlazar el comunicado de restablecimiento.
4. Mensualmente: revisar enlaces rotos, títulos con impresiones pero bajo CTR y consultas nuevas en Search Console.

## Principio de trabajo

MachuLine no debe competir como otra agencia que repite tours. Su ventaja es resolver decisiones que otros sitios dejan fragmentadas: entradas presenciales, presión por ruta, tiempos humanos, elección de base e itinerarios personalizados.

Cada nueva página debe responder una intención concreta, aportar información comprobable y conducir a una herramienta útil. No se publicarán páginas generadas en masa sin valor propio.

## Línea base

- Search Console está verificado para `machuline.com`.
- Al comenzar este plan, Search Console todavía está procesando los primeros datos.
- No había sitemap enviado.
- La portada no tenía H1, descripción, canonical ni datos estructurados.
- El planificador se servía como `application/octet-stream` por carecer de extensión HTML.
- Las tarjetas de guías no eran enlaces rastreables.
- Varias imágenes del planificador no existían y las imágenes principales pesaban entre 1,5 y 2,8 MB.

## Fase 0 — Fundamentos técnicos (semana 1)

### Entregables

- [x] Definir `machuline.com` como dominio canónico.
- [x] Crear `robots.txt` y `sitemap.xml`.
- [x] Añadir title, meta description, Open Graph y robots meta.
- [x] Añadir datos estructurados básicos: Organization, WebSite, WebApplication y Article.
- [x] Convertir el planificador en una URL HTML indexable y limpia.
- [x] Crear enlaces internos reales desde la portada.
- [x] Convertir imágenes principales a WebP.
- [ ] Reconectar GitHub con Vercel y desplegar producción.
- [ ] Verificar respuestas 200, `text/html`, canonical y sitemap en producción.
- [ ] Enviar `https://machuline.com/sitemap.xml` a Search Console.
- [ ] Solicitar indexación de la portada, el planificador y las tres primeras guías.
- [ ] Comprobar datos estructurados con Rich Results Test.

### Criterio de cierre

Las cinco URLs del sitemap responden 200, son HTML indexable, declaran canonical propio y aparecen como descubiertas en Search Console.

## Fase 1 — Arquitectura de contenidos (semanas 2 a 4)

Crear grupos temáticos y conectarlos mediante enlaces contextuales.

### Grupo A: entradas y circuitos

1. Entradas presenciales a Machu Picchu.
2. Entradas online frente a compra presencial.
3. Circuitos y rutas de Machu Picchu: diferencias y público recomendado.
4. Huayna Picchu: entrada, horario y planificación previa.
5. Qué hacer si no encuentras la ruta deseada.

### Grupo B: cómo llegar y dónde dormir

1. Cómo llegar desde Cusco a Machu Picchu.
2. Cusco → Ollantaytambo → Aguas Calientes.
3. Ruta económica por Santa Teresa e Hidroeléctrica.
4. Aguas Calientes o Santa Teresa.
5. Cuántas noches conviene dormir en Aguas Calientes.

### Grupo C: itinerarios por duración

1. Cusco y Machu Picchu en 3 días.
2. Itinerario de 5 días.
3. Itinerario de 7 días.
4. Itinerario de 10 días.
5. Itinerario de 14 o 15 días con destinos secundarios.

Cada itinerario debe incluir tiempos de traslado, noches por base, alternativas, restricciones y un CTA que cargue esa duración en el planificador.

### Grupo D: temporada y decisiones

1. Mejor época para visitar Machu Picchu.
2. Temporada de lluvias y ruta por Hidroeléctrica.
3. Entrada AM o PM.
4. Qué hacer en Aguas Calientes después de comprar la entrada.
5. Cocalmayo y Santa Teresa: cuándo añadirlos.

### Estándar editorial

Cada página debe tener:

- intención principal y una pregunta que resuelva;
- autor o responsable editorial;
- fecha de revisión visible;
- fuentes oficiales enlazadas cerca de la afirmación relevante;
- advertencia clara cuando horarios, precios o reglas puedan cambiar;
- al menos dos enlaces internos útiles;
- CTA hacia el planificador o hacia el estado en vivo;
- title único, descripción única, H1 único y canonical propio;
- imágenes con texto alternativo descriptivo y peso controlado.

## Fase 2 — Confianza y experiencia (semanas 4 a 6)

- Crear página “Cómo funciona MachuLine”.
- Publicar metodología de presión, prefila y reportes comunitarios.
- Separar con claridad datos oficiales, cálculos propios y aportes de viajeros.
- Crear página “Fuentes y última actualización”.
- Añadir contacto, identidad del proyecto y política de privacidad.
- Mostrar fecha y zona horaria de cada dato en vivo.
- Evitar presentar estimaciones como disponibilidad oficial.
- Añadir navegación persistente entre Inicio, Planificador y Guías.

## Fase 3 — Producto como ventaja SEO (semanas 6 a 9)

- Permitir enlaces compartibles del planificador con parámetros no sensibles.
- Crear ejemplos indexables revisados editorialmente, no combinaciones automáticas infinitas.
- Enlazar cada guía con una configuración relevante del planificador.
- Ofrecer comparación clara entre tren, Hidroeléctrica y compra presencial.
- Añadir bloques “por qué esta ruta” y “qué invalida esta opción”.
- Mantener las páginas de resultados personales con `noindex` si generan contenido duplicado o privado.

## Fase 4 — Autoridad y distribución (semanas 8 a 12)

- Conseguir enlaces desde alojamientos, guías locales y recursos legítimos de Cusco.
- Crear activos enlazables: comparador de rutas, cronología de compra y mapas simples.
- Evaluar Google Business Profile solo si MachuLine cumple los requisitos de negocio elegible.
- Publicar versiones en inglés únicamente después de consolidar las páginas en español.
- Implementar `hreflang` cuando exista contenido traducido equivalente.
- No comprar enlaces ni publicar artículos genéricos en masa.

## Medición semanal

Registrar cada lunes:

- páginas enviadas, indexadas y excluidas;
- clics e impresiones orgánicas;
- consultas sin la palabra “Machuline”;
- posición media por grupo temático;
- CTR por URL y consulta;
- conversiones desde contenido hacia el planificador;
- usuarios que completan una simulación;
- Core Web Vitals en móvil;
- páginas con enlaces rotos o canonical incorrecto.

## Metas iniciales

### Primeros 30 días

- 100 % de las URLs estratégicas descubiertas.
- Cero errores de sitemap y cero bloqueos accidentales.
- Primeras impresiones para consultas no asociadas a la marca.
- Todas las páginas principales aprobadas en móvil y sin imágenes rotas.

### Primeros 60 días

- Al menos 12 contenidos útiles publicados y enlazados.
- Consultas visibles en los cuatro grupos temáticos.
- CTR mejorado en páginas que ya reciben impresiones mediante ajustes de title y snippet.

### Primeros 90 días

- Al menos 20 páginas editoriales de calidad.
- Crecimiento sostenido de clics no asociados a la marca.
- Identificar cinco consultas con posiciones 5–20 para optimización prioritaria.
- Medir qué contenidos generan uso real del planificador.

## Cadencia operativa

- Lunes: revisar Search Console y priorizar incidencias.
- Martes y miércoles: producir o actualizar contenido.
- Jueves: enlaces internos, datos estructurados y optimización visual.
- Viernes: pruebas móviles, QA técnico y registro de resultados.

## Próximas cinco tareas

1. Reconectar Vercel con `juahhola-del/machu` y desplegar el commit `52b6cbc`.
2. Validar todas las URLs de producción y enviar el sitemap.
3. Crear navegación global y una portada real para `/guias/`.
4. Publicar la guía de circuitos y rutas con información oficial vigente.
5. Añadir medición de clics desde guías hacia el planificador.
