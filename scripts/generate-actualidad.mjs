import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'actualidad');
fs.mkdirSync(out, { recursive: true });

const updated = '2026-10-05';
const official = {
  cultura: 'https://www.gob.pe/institucion/cultura/noticias',
  mincetur: 'https://www.gob.pe/institucion/mincetur/noticias',
  sernanp: 'https://www.gob.pe/institucion/sernanp/noticias',
  tickets: 'https://www.machupicchu.gob.pe/',
};

const articles = [
  {
    slug:'huaico-mandor-marzo-2026', type:'Noticia explicada', date:'2026-03-30',
    title:'Huaico en Mandor: qué ocurrió en la ruta Hidroeléctrica–Machu Picchu',
    desc:'Cronología del huaico de marzo de 2026 en Mandor, afectación del tramo ferroviario y qué deben revisar los viajeros antes de usar la ruta.',
    sections:[
      ['Qué ocurrió','El 30 de marzo de 2026 un huaico en Mandor afectó el tramo ferroviario entre los kilómetros 114 y 115 de la ruta Machupicchu–Hidroeléctrica. Mincetur informó que el sector quedó temporalmente inoperativo mientras se evaluaba el terreno y se retiraban los escombros. La ruta Ollantaytambo–Machupicchu siguió operando en ese momento.'],
      ['La indicación para viajeros','Durante la emergencia, la autoridad pidió no usar ni promover la ruta Machupicchu–Hidroeléctrica. Los pasajeros debían coordinar con su operador y conservar comprobantes para reprogramaciones o devoluciones. Ese aviso fue temporal y no describe necesariamente la situación de hoy.'],
      ['Qué aprender para un próximo viaje','En temporada de lluvias conviene dejar margen entre conexiones, llevar batería, agua, impermeable y una reserva de dinero. Revise fuentes oficiales la tarde anterior y otra vez antes de salir; una publicación antigua no sustituye un parte operativo vigente.']
    ],
    sources:[['Comunicado de Mincetur, 30/03/2026','https://www.gob.pe/institucion/mincetur/noticias/1372956-comunicado'],['Reporte de TVPerú','https://tvperu.gob.pe/noticias/nacionales/huaico-afecta-acceso-a-machu-picchu-mincul-dispone-reprogramaciones-y-devoluciones']]
  },
  {
    slug:'reapertura-hidroelectrica-machu-picchu-abril-2026', type:'Noticia explicada', date:'2026-04-06',
    title:'Ruta Machu Picchu–Hidroeléctrica: reapertura tras el huaico de 2026',
    desc:'Cómo se restableció el tramo Machu Picchu–Hidroeléctrica tras el huaico y qué significa una reapertura para el viajero.',
    sections:[
      ['Restablecimiento del tramo','Después del huaico del 30 de marzo, las autoridades y el concesionario limpiaron y evaluaron el sector afectado. El informe de emergencia de Indeci registró la limpieza culminada y el tránsito restablecido el 5 de abril de 2026.'],
      ['Reapertura no significa riesgo cero','La habilitación confirma que la autoridad permitió nuevamente el tránsito, pero las condiciones pueden cambiar con nuevas lluvias. Antes de iniciar una caminata o traslado desde Santa Teresa, confirme el parte del mismo día con operador, municipalidad o Iperú.'],
      ['Cómo reorganizar el itinerario','No conecte esta ruta con un vuelo o bus nocturno sin margen. Si el acceso se interrumpe, priorice las instrucciones locales, evite atajos y solicite por escrito opciones de reprogramación.']
    ],
    sources:[['Informe de emergencia Indeci','https://portal.indeci.gob.pe/wp-content/uploads/2026/03/INFORME-DE-EMERGENCIA-N.%C2%BA-1165-25ABR2026-HUAICO-EN-EL-DISTRITO-DE-MACHUPICCHU-CUSCO-1.pdf'],['Radio Nacional, 06/04/2026','https://www.radionacional.gob.pe/noticias/nacional/restablecen-tramo-machu-picchu-hidroelectrica-ministro-de-comercio-exterior-explica-situacion']]
  },
  {
    slug:'trenes-restablecidos-ollantaytambo-machu-picchu-enero-2026', type:'Noticia explicada', date:'2026-01-01',
    title:'Trenes Ollantaytambo–Machu Picchu: restablecimiento de enero de 2026',
    desc:'Resumen oficial del restablecimiento ferroviario tras el incidente de diciembre de 2025 y consejos para confirmar el servicio.',
    sections:[
      ['Qué informó la autoridad','Mincetur comunicó el 1 de enero de 2026 que los trenes hacia Machu Picchu operaban nuevamente en sus rutas y horarios. La recuperación fue posterior al accidente ferroviario del 30 de diciembre de 2025 y a una restitución progresiva anunciada por el MTC.'],
      ['Cómo comprobar un tren','El estado de una ruta no se deduce de redes sociales antiguas. Revise el correo y la web de su empresa ferroviaria, confirme estación y hora, y llegue con anticipación. Si existe contingencia, pida la instrucción por un canal verificable.'],
      ['Proteja las conexiones','En días posteriores a una interrupción pueden existir reacomodos. Evite programar el regreso a Cusco pegado a un vuelo y conserve boletos, recibos y capturas de cualquier cambio comunicado por el operador.']
    ],
    sources:[['Mincetur, 01/01/2026','https://www.gob.pe/institucion/mincetur/noticias/1325481-mincetur-trenes-hacia-machu-picchu-operan-con-normalidad-en-todas-sus-rutas-y-horarios'],['MTC, 31/12/2025','https://www.gob.pe/institucion/mtc/noticias/1324668-se-restablece-operatividad-en-la-via-ollantaytambo-machu-picchu']]
  },
  {
    slug:'bloqueo-via-ferrea-septiembre-2025', type:'Noticia explicada', date:'2025-09-16',
    title:'Bloqueo ferroviario de septiembre de 2025: impacto en Machu Picchu',
    desc:'Qué pasó en el kilómetro 88, cómo afectó a turistas y qué medidas de contingencia ayudan ante bloqueos ferroviarios.',
    sections:[
      ['El hecho','La Policía Nacional informó sobre un bloqueo en Corihuayrachina, kilómetro 88 de la línea férrea, el 15 de septiembre de 2025. El comunicado registró turistas varados y afectación de la evacuación; el servicio se reanudó después de recuperar condiciones operativas.'],
      ['Qué hacer ante un bloqueo','No se acerque al punto de protesta ni intente cruzarlo. Mantenga contacto con el operador, el alojamiento e Iperú, y siga a la Policía de Turismo. Los tiempos publicados en grupos sociales suelen quedar obsoletos rápidamente.'],
      ['Plan práctico','Guarde agua, medicación, batería y efectivo para una noche adicional. Informe a su alojamiento de destino y evite comprar transportes informales ofrecidos como salida inmediata.']
    ],
    sources:[['Comunicado PNP N.° 16-2025','https://www.gob.pe/institucion/pnp/noticias/1250775-comunicado-n-16-2025'],['Comunicación de reanudación de Inca Rail','https://www.smv.gob.pe/ConsultasP8/temp/Hecho%20de%20Importancia%28%20Reanudar%20operaciones%29.pdf']]
  },
  {
    slug:'derrumbe-ruta-montana-machu-picchu-marzo-2025', type:'Noticia explicada', date:'2025-03-08',
    title:'Cierre de la Montaña Machu Picchu por derrumbe: caso de marzo de 2025',
    desc:'Qué ocurrió con la ruta 1-A a Montaña Machu Picchu en marzo de 2025 y cómo gestionar un cierre parcial del circuito.',
    sections:[
      ['Cierre parcial','El Ministerio de Cultura dispuso el cierre temporal del acceso a Montaña Machupicchu, Circuito 1 Ruta 1-A, después de un deslizamiento de rocas y árboles asociado a lluvias intensas. El cierre afectó esa ruta, no equivale a afirmar que toda la llaqta cerró.'],
      ['Lea el alcance exacto','Los comunicados pueden referirse a una montaña, circuito, sendero o franja horaria. Compare el nombre de su boleto con la ruta afectada y espere instrucciones oficiales antes de cambiar todo el viaje.'],
      ['Si su circuito resulta afectado','Conserve el ticket y la comunicación. Pregunte en el canal oficial por cambio, devolución o alternativa; no asuma que otra ruta estará disponible porque los aforos son independientes.']
    ],
    sources:[['Ministerio de Cultura, 08/03/2025','https://www.gob.pe/institucion/cultura/noticias/1122621-cusco-ministerio-de-cultura-dispone-cierre-temporal-de-acceso-a-la-montana-de-machupicchu-por-causa-de-derrumbe']]
  },
  {
    slug:'derrumbe-km-103-cedrobamba-febrero-2025', type:'Noticia explicada', date:'2025-02-02',
    title:'Derrumbe en Cedrobamba, km 103: reporte de febrero de 2025',
    desc:'Explicación del derrumbe de Cedrobamba y lecciones para planificar viajes ferroviarios en temporada de lluvias.',
    sections:[
      ['El reporte','Indeci registró un derrumbe en Cedrobamba, kilómetro 103, el 2 de febrero de 2025. Las lluvias intensas afectaron la vía férrea y se reportó el descarrilamiento de una locomotora.'],
      ['Por qué importa la ubicación','Los kilómetros ferroviarios ayudan a distinguir un incidente localizado de un cierre general. Para el viajero, la fuente decisiva sigue siendo el estado operativo comunicado por autoridad y empresa para su tren concreto.'],
      ['Prevención útil','Durante lluvias, deje holgura, evite desplazamientos nocturnos improvisados y lleve la información de reserva sin depender solo de internet. Nunca ingrese a una zona ferroviaria para observar o sortear un bloqueo.']
    ],
    sources:[['Reporte preliminar Indeci N.° 0251','https://portal.indeci.gob.pe/emergencias/reporte-preliminar-n-0251-2-2-2025-coen-indeci-2250-horas-derrumbe-de-cerro-en-el-distrito-machupicchu-cusco/']]
  },
  {
    slug:'como-verificar-estado-trenes-machu-picchu', type:'Guía operativa',
    title:'Cómo verificar el estado de los trenes a Machu Picchu',
    desc:'Método rápido para comprobar operación, estación, horario y cambios de un tren a Machu Picchu sin depender de rumores.',
    sections:[
      ['Tres comprobaciones','Revise primero el canal oficial de la empresa que emitió su boleto. Después consulte comunicados de Mincetur, MTC o Cultura si hay una emergencia amplia. Finalmente confirme con su alojamiento o Iperú si la información no coincide.'],
      ['Datos que debe contrastar','Verifique fecha, número de servicio, estación de salida y llegada, hora de presentación y tramo afectado. “Ruta abierta” no garantiza que todos los trenes mantengan su horario original.'],
      ['Cuándo revisar','Hágalo 24 horas antes, al despertar y antes de salir hacia la estación. Guarde una captura del último aviso y mantenga el teléfono del operador disponible.']
    ], sources:[['Noticias de Mincetur',official.mincetur],['Noticias del MTC','https://www.gob.pe/institucion/mtc/noticias']]
  },
  {
    slug:'que-hacer-si-cancelan-tren-machu-picchu', type:'Guía operativa',
    title:'Qué hacer si cancelan tu tren a Machu Picchu',
    desc:'Pasos para proteger entradas, alojamiento y conexiones cuando un tren a Machu Picchu se cancela o suspende.',
    sections:[
      ['Primero: seguridad e información','No busque una vía alternativa no autorizada. Pida al operador la causa, alcance y duración estimada, y solicite las opciones disponibles por escrito. Las condiciones pueden cambiar mientras se inspecciona la vía.'],
      ['Orden de llamadas','Contacte empresa ferroviaria, alojamiento, agencia si corresponde y emisor de la entrada. Luego modifique bus, hotel o vuelo. Mantenga todos los recibos si piensa solicitar cobertura al seguro.'],
      ['Reprogramación o devolución','Las reglas dependen del proveedor y de la contingencia. No prometemos un resultado universal: conserve comprobantes, respete plazos y use canales oficiales para cada solicitud.']
    ], sources:[['Noticias de Mincetur',official.mincetur],['Portal oficial de Machupicchu',official.tickets]]
  },
  {
    slug:'caminata-hidroelectrica-aguas-calientes-seguridad', type:'Guía de seguridad',
    title:'Caminata Hidroeléctrica–Aguas Calientes: guía de seguridad',
    desc:'Qué revisar antes de caminar entre Hidroeléctrica y Aguas Calientes, especialmente durante lluvias o alertas.',
    sections:[
      ['Antes de salir','Confirme que la ruta esté habilitada el mismo día. Revise lluvia, luz disponible y estado físico; no inicie tarde ni con una alerta activa. Lleve calzado con agarre, impermeable, agua, identificación y batería.'],
      ['La vía sigue siendo ferroviaria','Hay trenes y zonas operativas. Use únicamente pasos y senderos permitidos, manténgase fuera de rieles, túneles, puentes y áreas señalizadas, y obedezca a personal ferroviario y autoridades. Si una autoridad restringe el acceso, no continúe.'],
      ['Cuándo desistir','Regrese o busque ayuda ante crecida de agua, caída de piedras, barro en movimiento, visibilidad insuficiente o instrucción de cierre. El itinerario puede reprogramarse; la exposición a un huaico no.']
    ], sources:[['Mincetur: cierre preventivo por huaico', 'https://www.gob.pe/institucion/mincetur/noticias/1372956-comunicado'],['Iperú','https://www.peru.travel/es/masperu/iperu']]
  },
  {
    slug:'caminar-linea-tren-machu-picchu-riesgos', type:'Guía de seguridad',
    title:'Caminar por la línea del tren a Machu Picchu: riesgos y límites',
    desc:'Por qué una vía férrea activa no debe tratarse como sendero y cómo actuar en el tramo Hidroeléctrica–Aguas Calientes.',
    sections:[
      ['No es una vereda','Una línea férrea activa tiene trenes, maquinaria, puentes y sectores sin escape lateral. No camine sobre los rieles, no ingrese a túneles y no cruce barreras o zonas restringidas.'],
      ['Use solo el paso permitido','Algunos viajeros recorren el corredor Hidroeléctrica–Aguas Calientes, pero eso no convierte toda la infraestructura ferroviaria en zona peatonal. Siga el sendero habilitado y las instrucciones presenciales del concesionario, Policía y autoridades.'],
      ['Si cambia el tiempo','Una lluvia fuerte puede producir caída de rocas o huaicos. No use la vía como alternativa a un cierre: en marzo de 2026 la autoridad pidió expresamente no utilizar la ruta afectada hasta su restablecimiento.']
    ], sources:[['Comunicado de seguridad Mincetur','https://www.gob.pe/institucion/mincetur/noticias/1372956-comunicado'],['Indeci: emergencias','https://portal.indeci.gob.pe/emergencias/']]
  },
  {
    slug:'derrumbes-machu-picchu-temporada-lluvias', type:'Guía de prevención',
    title:'Derrumbes en Machu Picchu durante la temporada de lluvias',
    desc:'Cómo interpretar alertas de deslizamientos y organizar un viaje con margen durante la temporada lluviosa en Cusco.',
    sections:[
      ['Un riesgo localizado y cambiante','Las lluvias pueden afectar un punto ferroviario, una carretera o un sendero sin cerrar todo Machu Picchu. Identifique el sector, kilómetro, fecha y autoridad de cada aviso.'],
      ['Señales de alerta','Aléjese de laderas si observa caída de piedras, agua turbia repentina, grietas, árboles inclinados o ruido de material. No permanezca tomando fotografías y avise a personal local.'],
      ['Diseño del itinerario','Añada una noche de margen antes de vuelos, use reservas modificables y comparta su ruta. Consulte Senamhi e Indeci, pero para operación turística confirme además con Cultura y su transportista.']
    ], sources:[['Indeci: emergencias','https://portal.indeci.gob.pe/emergencias/'],['Senamhi: avisos','https://www.senamhi.gob.pe/?p=avisos']]
  },
  {
    slug:'ruta-santa-teresa-hidroelectrica-lluvias', type:'Guía de ruta',
    title:'Santa Teresa–Hidroeléctrica en lluvias: qué revisar antes de viajar',
    desc:'Lista de comprobación para la ruta alternativa por Santa Teresa e Hidroeléctrica cuando hay lluvias en Cusco.',
    sections:[
      ['Compruebe ambos tramos','La carretera hasta Hidroeléctrica y el acceso posterior pueden tener condiciones distintas. Pregunte por ambos, no solo si “Machu Picchu está abierto”.'],
      ['Evite promesas informales','Un conductor o publicación antigua no sustituye un cierre oficial. Verifique hora de salida, punto de llegada, equipaje permitido y plan si el tramo final queda restringido.'],
      ['Margen y equipo','Viaje de día, lleve impermeable, abrigo ligero, agua y batería. No programe la llegada inmediatamente antes de su ingreso a la llaqta: una demora vial puede hacerle perder el horario.']
    ], sources:[['Noticias de Mincetur',official.mincetur],['Indeci: emergencias','https://portal.indeci.gob.pe/emergencias/']]
  },
  {
    slug:'plan-contingencia-24-horas-machu-picchu', type:'Guía operativa',
    title:'Plan de contingencia de 24 horas para viajar a Machu Picchu',
    desc:'Un plan simple de comunicaciones, dinero y reservas para responder a cierres o demoras sin improvisar.',
    sections:[
      ['Doce a veinticuatro horas antes','Confirme entrada, tren, estación, alojamiento y clima. Descargue boletos, mapas y teléfonos. Avise a una persona de confianza dónde estará.'],
      ['Kit mínimo','Lleve medicación, agua, batería externa, impermeable, documento y fondos para alimentación o una noche adicional. Separe copias digitales de comprobantes.'],
      ['Si ocurre una interrupción','Quédese en un lugar seguro, confirme con la fuente responsable y reorganice en orden: acceso a Machu Picchu, transporte, alojamiento y conexiones posteriores. No siga a grupos por rutas no verificadas.']
    ], sources:[['Iperú','https://www.peru.travel/es/masperu/iperu'],['Portal oficial de Machupicchu',official.tickets]]
  },
  {
    slug:'entrada-machu-picchu-afectada-por-cierre', type:'Guía operativa',
    title:'Qué pasa con tu entrada si hay un cierre en Machu Picchu',
    desc:'Cómo distinguir un cierre total, parcial o de acceso y qué documentos conservar para pedir una solución.',
    sections:[
      ['Identifique el tipo de cierre','Puede afectarse una ruta específica, la Red de Caminos Inka, un tramo ferroviario o el ingreso general. Lea el nombre exacto del circuito y la vigencia del aviso.'],
      ['No compre otra entrada de inmediato','Primero consulte al emisor o a su agencia. Otro circuito puede tener aforo independiente y no ser un reemplazo automático.'],
      ['Documentación','Guarde ticket, comprobante, aviso oficial y pruebas de la afectación. Solicite instrucciones sobre reprogramación o devolución dentro de los plazos comunicados para el incidente.']
    ], sources:[['Portal oficial de Machupicchu',official.tickets],['Noticias del Ministerio de Cultura',official.cultura]]
  },
  {
    slug:'reprogramaciones-devoluciones-emergencias', type:'Guía operativa',
    title:'Reprogramaciones y devoluciones por emergencias en Machu Picchu',
    desc:'Qué pedir, qué conservar y en qué orden gestionar trenes, entradas y servicios ante una emergencia.',
    sections:[
      ['Cada servicio tiene su regla','Entrada, tren, bus, hotel y tour son contratos distintos. Una devolución en uno no activa automáticamente las demás.'],
      ['Expediente básico','Conserve confirmación, recibo, documento, aviso oficial y respuesta del proveedor. Registre fecha, canal y número de caso, sin publicar datos personales.'],
      ['Orden recomendado','Priorice seguridad y alojamiento; luego reprogramación de acceso y transporte. Revise el seguro antes de aceptar una alternativa que pueda afectar una reclamación.']
    ], sources:[['Portal oficial de Machupicchu',official.tickets],['Noticias de Mincetur',official.mincetur]]
  },
  {
    slug:'cierre-camino-inca-febrero', type:'Guía de planificación',
    title:'Cierre del Camino Inca en febrero: cómo planificar',
    desc:'Por qué la Red de Caminos Inka cierra por mantenimiento en febrero y qué alternativas revisar.',
    sections:[
      ['Cierre programado','Sernanp confirmó para 2026 el cierre temporal durante todo febrero de las rutas 1, 2, 3, 5 y 6 de la Red de Caminos Inka, con reapertura desde el 1 de marzo. Es una medida anual de conservación y seguridad.'],
      ['Machu Picchu no es lo mismo que Camino Inca','El cierre de la red de trekking no implica por sí solo el cierre de la llaqta. Los accesos disponibles y circuitos deben revisarse en el portal oficial para el año del viaje.'],
      ['Qué reservar','Si viaja en febrero, no compre un paquete que prometa operar la ruta cerrada. Compare tren, ruta por carretera y entradas oficiales, y confirme por escrito qué incluye su operador.']
    ], sources:[['Sernanp: cierre febrero 2026','https://www.gob.pe/institucion/sernanp/noticias/1340984-comunicado-red-de-caminos-inka-suspension-temporal-por-conservacion-y-mantenimiento-anual'],['Sernanp: reapertura 2026','https://www.gob.pe/institucion/sernanp/noticias/1359896-el-santuario-historico-de-machupicchu-reabre-su-red-de-caminos-inka-tras-temporada-de-lluvias']]
  },
  {
    slug:'senales-riesgo-huaico-deslizamiento', type:'Guía de seguridad',
    title:'Señales de huaico o deslizamiento: cómo actuar en una ruta turística',
    desc:'Indicadores prácticos para alejarse de una zona inestable y pedir ayuda durante un viaje a Machu Picchu.',
    sections:[
      ['Señales que exigen distancia','Caída repetida de piedras, grietas nuevas, postes o árboles inclinados, rugido del terreno, corriente con barro o subida repentina del agua son motivos para retirarse.'],
      ['Cómo actuar','No cruce el flujo ni vuelva por equipaje. Aléjese de quebradas y laderas siguiendo las instrucciones del personal; comunique ubicación y número de personas a emergencias.'],
      ['Después del evento','No reingrese porque haya dejado de llover. Espere habilitación de la autoridad competente: el terreno y la vía necesitan inspección.']
    ], sources:[['Indeci: preparación','https://www.gob.pe/indeci'],['Senamhi: avisos','https://www.senamhi.gob.pe/?p=avisos']]
  },
  {
    slug:'equipaje-emergencia-ruta-hidroelectrica', type:'Lista práctica',
    title:'Equipaje para la ruta Hidroeléctrica y una posible contingencia',
    desc:'Lista ligera para lluvia, caminata y una demora inesperada en la ruta a Aguas Calientes.',
    sections:[
      ['Seguridad y clima','Calzado con agarre, impermeable, capa seca, gorro, agua y protector solar. Evite cargar más de lo que puede caminar con seguridad.'],
      ['Documentos y energía','Documento, boletos descargados, números de reserva, teléfono y batería externa. Proteja todo en bolsa impermeable.'],
      ['Reserva de contingencia','Medicación, colación, efectivo fraccionado y artículos para una noche adicional. La llaqta limita bolsos mayores de 40 × 35 × 20 cm, así que confirme dónde dejar equipaje grande.']
    ], sources:[['Normas de conducta de Machupicchu','https://www.machupicchu.gob.pe/normas-de-conducta/'],['Iperú','https://www.peru.travel/es/masperu/iperu']]
  },
  {
    slug:'fuentes-oficiales-estado-machu-picchu', type:'Directorio',
    title:'Fuentes oficiales para revisar el estado de Machu Picchu',
    desc:'Dónde comprobar entradas, cierres, clima, emergencias y transporte antes de viajar.',
    sections:[
      ['Acceso y patrimonio','Use el portal oficial de Machupicchu y las noticias del Ministerio de Cultura para circuitos, entradas y cierres dentro del santuario.'],
      ['Clima y emergencias','Senamhi publica avisos meteorológicos e Indeci consolida reportes de emergencia. Compruebe fecha, distrito y vigencia del documento.'],
      ['Transporte y asistencia','Para afectaciones generales revise MTC y Mincetur; para su servicio concreto, el canal del operador. Iperú orienta al turista. Compare al menos dos fuentes si hay mensajes contradictorios.']
    ], sources:[['Portal oficial de Machupicchu',official.tickets],['Senamhi','https://www.senamhi.gob.pe/'],['Indeci','https://portal.indeci.gob.pe/'],['Iperú','https://www.peru.travel/es/masperu/iperu']]
  },
  {
    slug:'alertas-ruta-ollantaytambo-machu-picchu', type:'Guía operativa',
    title:'Alertas en la ruta Ollantaytambo–Machu Picchu: cómo interpretarlas',
    desc:'Cómo leer comunicados de operación ferroviaria y decidir si mantener o cambiar el itinerario.',
    sections:[
      ['Lea cinco datos','Busque fecha y hora, tramo, empresa o autoridad, servicios afectados y próxima actualización. Un aviso de Hidroeléctrica no siempre afecta Ollantaytambo.'],
      ['Suspensión, restricción y restablecimiento','Una suspensión detiene la operación; una restricción puede reducir horarios; un restablecimiento puede ser progresivo. Confirme su número de tren aun cuando la vía figure abierta.'],
      ['Decisión de viaje','No se desplace a la estación si el operador indica esperar. Si el servicio opera, llegue con anticipación y lleve margen para reacomodos. La seguridad prima sobre una conexión ajustada.']
    ], sources:[['MTC: noticias','https://www.gob.pe/institucion/mtc/noticias'],['Mincetur: noticias',official.mincetur]]
  }
];

const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const fmt = d => new Intl.DateTimeFormat('es-PE',{dateStyle:'long',timeZone:'UTC'}).format(new Date(`${d}T12:00:00Z`));
const css = `:root{--ink:#15251f;--green:#123f32;--mint:#eaf4ef;--gold:#d6a84b;--paper:#fffdf8}*{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;color:var(--ink);background:var(--paper);line-height:1.7}a{color:#0b664b}header{background:var(--green);color:white;padding:18px 5vw}header a{color:white;text-decoration:none;font-weight:800}.hero{padding:70px 5vw 46px;background:linear-gradient(135deg,#123f32,#20694f);color:white}.wrap{max-width:900px;margin:auto}.eyebrow{color:#ffe29a;font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:.8rem}h1{font-size:clamp(2rem,6vw,4.2rem);line-height:1.05;margin:.4rem 0 1rem}h2{line-height:1.2;margin-top:2.2rem}.meta{opacity:.86}.notice{margin:28px 0;padding:18px;border-left:5px solid var(--gold);background:#fff6dd}.content{padding:38px 5vw 70px}.sources,.related{background:var(--mint);padding:22px;border-radius:18px;margin-top:35px}.sources li,.related li{margin:.55rem 0}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;padding:35px 0}.card{border:1px solid #cddbd5;border-radius:16px;padding:22px;background:white}.card h2{font-size:1.25rem;margin:.3rem 0}.card a{text-decoration:none}.tag{display:inline-block;background:#dff1e9;color:#164c3b;padding:3px 9px;border-radius:999px;font-size:.75rem;font-weight:800}footer{background:#0d2d24;color:#d9eee6;padding:28px 5vw}footer a{color:white}@media(max-width:600px){.hero{padding-top:48px}}`;
fs.writeFileSync(path.join(out,'actualidad.css'), css);

function jsonLd(a){ return JSON.stringify({'@context':'https://schema.org','@type':a.type.startsWith('Noticia')?'NewsArticle':'Article',headline:a.title,description:a.desc,datePublished:a.date||updated,dateModified:updated,mainEntityOfPage:`https://machuline.com/actualidad/${a.slug}`,author:{'@type':'Organization',name:'Machuline'},publisher:{'@type':'Organization',name:'Machuline',url:'https://machuline.com/'}}).replaceAll('<','\\u003c'); }
function shell(a, body){const canonical=`https://machuline.com/actualidad/${a.slug}`;return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(a.title)} | Machuline</title><meta name="description" content="${esc(a.desc)}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${canonical}"><link rel="stylesheet" href="/actualidad/actualidad.css"><meta property="og:type" content="article"><meta property="og:title" content="${esc(a.title)}"><meta property="og:description" content="${esc(a.desc)}"><meta property="og:url" content="${canonical}"><script type="application/ld+json">${jsonLd(a)}</script></head><body><header><div class="wrap"><a href="/">MACHULINE</a> · <a href="/actualidad/">Actualidad y seguridad</a></div></header>${body}<footer><div class="wrap">Machuline · Planifica con fuentes verificables · <a href="/planificador-viaje-cusco">Abrir planificador</a></div></footer></body></html>`}

for(const a of articles){
  const sections=a.sections.map(([h,p])=>`<section><h2>${esc(h)}</h2><p>${esc(p)}</p></section>`).join('');
  const sources=a.sources.map(([n,u])=>`<li><a href="${u}" rel="noopener noreferrer">${esc(n)}</a></li>`).join('');
  const related=articles.filter(x=>x.slug!==a.slug).slice((articles.indexOf(a)+3)%12,(articles.indexOf(a)+3)%12+3);
  const rel=related.map(x=>`<li><a href="/actualidad/${x.slug}">${esc(x.title)}</a></li>`).join('');
  const date=a.date?` · Hecho publicado: ${fmt(a.date)}`:'';
  const body=`<main><div class="hero"><div class="wrap"><div class="eyebrow">${esc(a.type)}</div><h1>${esc(a.title)}</h1><p>${esc(a.desc)}</p><p class="meta">Revisado: 5 de octubre de 2026${date}</p></div></div><article class="content"><div class="wrap"><div class="notice"><strong>Comprueba el estado de hoy.</strong> Esta página explica un antecedente o una medida de prevención. Antes de viajar, confirma operación y restricciones con la autoridad y tu proveedor.</div>${sections}<aside class="sources"><h2>Fuentes consultadas</h2><ul>${sources}</ul></aside><aside class="related"><h2>También te puede ayudar</h2><ul>${rel}</ul></aside></div></article></main>`;
  fs.writeFileSync(path.join(out,`${a.slug}.html`),shell(a,body));
}

const cards=articles.map(a=>`<article class="card"><span class="tag">${esc(a.type)}</span><h2><a href="/actualidad/${a.slug}">${esc(a.title)}</a></h2><p>${esc(a.desc)}</p></article>`).join('');
const indexBody=`<main><div class="hero"><div class="wrap"><div class="eyebrow">Centro de información</div><h1>Actualidad, rutas y seguridad en Machu Picchu</h1><p>Noticias explicadas y guías prácticas para tomar decisiones sin depender de rumores.</p><p class="meta">Revisado: 5 de octubre de 2026</p></div></div><div class="content"><div class="wrap"><div class="notice"><strong>No somos un canal de emergencias.</strong> Verifica siempre el estado operativo del día con Cultura, Mincetur, Indeci, Iperú y tu transportista.</div><div class="grid">${cards}</div></div></div></main>`;
const fake={slug:'',title:'Actualidad de Machu Picchu',desc:'Noticias verificadas, cierres, rutas y consejos de seguridad para planificar una visita a Machu Picchu.',type:'Article'};
fs.writeFileSync(path.join(out,'index.html'),shell(fake,indexBody));

const base=[
  ['https://machuline.com/','daily','1.0'],
  ['https://machuline.com/planificador-viaje-cusco','weekly','0.9'],
  ['https://machuline.com/guias/entradas-presenciales-machu-picchu','monthly','0.8'],
  ['https://machuline.com/guias/como-llegar-machu-picchu','monthly','0.8'],
  ['https://machuline.com/guias/aguas-calientes-santa-teresa','monthly','0.8'],
  ['https://machuline.com/actualidad/','daily','0.9'],
  ...articles.map(a=>[`https://machuline.com/actualidad/${a.slug}`,a.type.startsWith('Noticia')?'monthly':'weekly','0.8'])
];
const urls=base.map(([u,f,p])=>`  <url><loc>${u}</loc><lastmod>${updated}</lastmod><changefreq>${f}</changefreq><priority>${p}</priority></url>`).join('\n');
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`Generated ${articles.length} articles, hub and sitemap (${base.length} URLs).`);
