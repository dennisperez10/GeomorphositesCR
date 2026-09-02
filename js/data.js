/**
 * Datos de geomorfositios de Costa Rica.
 * Cada objeto: id, category, name, region, lat, lng, elevation_m (o null),
 * summary (texto para tarjeta y modal), images: [{url, credit}]
 */
const SITES = [
  // -------- volcánico --------
  {
    id: "arenal",
    category: "volcanico",
    name: "Volcán Arenal",
    region: "La Fortuna, San Carlos, Alajuela",
    lat: 10.463,
    lng: -84.703,
    elevation_m: 1670,
    summary: "El volcán Arenal es un estratovolcán de perfil cónico casi perfecto, formado por la acumulación de capas alternas de lava andesítico-basáltica y piroclastos. Permaneció inactivo durante siglos hasta que una erupción explosiva en 1968 destruyó los poblados de Pueblo Nuevo y Tabacón, marcando el inicio de casi cuarenta años de actividad estromboliana continua, con flujos de lava y coladas piroclásticas visibles desde La Fortuna. Desde 2010 se mantiene en reposo, aunque conserva fumarolas activas en el cráter. Su geoforma icónica lo convierte en un geomorfositio de referencia mundial para el estudio de estratovolcanes jóvenes y en el principal atractivo turístico-científico del país.",
    images: [
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arenal_Volcano_(70602).jpg", credit: "Rhododendrites - CC BY-SA 4.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arenal_volcano_(70785p).jpg", credit: "Rhododendrites - CC BY-SA 4.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Volc%C3%A1n_Arenal%2C_2019.jpg", credit: "Tapia379 - CC BY 4.0"}
    ]
  },
  {
    id: "poas",
    category: "volcanico",
    name: "Volcán Poás",
    region: "Poás, Alajuela",
    lat: 10.2,
    lng: -84.233,
    elevation_m: 2697,
    summary: "El Poás es un estratovolcán activo que alberga una de las mayores lagunas cratéricas ácidas del mundo, de tonalidad turquesa y fumarolas visibles, además del cráter inactivo Botos con su laguna fría. Su historial eruptivo reciente incluye erupciones freáticas y freatomagmáticas frecuentes, destacando los episodios de 2017 y 2019, que obligaron a cerrar temporalmente el parque nacional. La combinación de un cráter activo de acceso relativamente sencillo, gradientes térmicos, depósitos de azufre y un paisaje de páramo circundante lo convierte en un geomorfositio excepcional para observar procesos hidrotermales en tiempo real.",
    images: [
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Poas_crater.jpg", credit: "Peter Andersen - CC BY-SA 3.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Poas_Volcano_004.jpg", credit: "MongeNajera - CC BY-SA 3.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panorama4_Poas_volcano_crater.jpg", credit: "Mario Roberto Durán Ortiz (Mariordo) - CC BY-SA 3.0"}
    ]
  },
  {
    id: "irazu",
    category: "volcanico",
    name: "Volcán Irazú",
    region: "Oreamuno, Cartago",
    lat: 9.9792,
    lng: -83.8525,
    elevation_m: 3432,
    summary: "El Irazú es el volcán activo más alto de Costa Rica, un estratovolcán compuesto por múltiples cráteres, entre ellos el cráter principal con una laguna verdosa de aguas ácidas y el cráter Diego de la Haya. Su erupción más notable ocurrió entre 1963 y 1965, cuando expulsó grandes volúmenes de ceniza que cubrieron el Valle Central y afectaron severamente la agricultura de la región. Actualmente se mantiene en calma relativa, con actividad fumarólica menor. Su cima despejada permite, en días claros, observar simultáneamente los océanos Pacífico y Atlántico, rasgo poco común entre los volcanes del país.",
    images: [
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Irazu_Volcano_Crater_(6300447492).jpg", credit: "Bernal Saborio - CC BY-SA 2.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lookout_Irazu_volcano_CRI_01_2020_3827.jpg", credit: "Mario Roberto Durán Ortiz (Mariordo) - CC BY-SA 4.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rest_area_Irazu_volcano_CRI_01_2020_3822.jpg", credit: "Mario Roberto Durán Ortiz (Mariordo) - CC BY-SA 4.0"}
    ]
  },
  {
    id: "rincon-de-la-vieja",
    category: "volcanico",
    name: "Volcán Rincón de la Vieja",
    region: "Liberia, Guanacaste",
    lat: 10.83,
    lng: -85.324,
    elevation_m: 1916,
    summary: "Rincón de la Vieja es un complejo volcánico formado por una alineación de más de nueve conos y cráteres construidos sobre una antigua caldera, cuyo punto más alto corresponde al cono activo Santa María, con una laguna cratérica ácida. Su actividad reciente se manifiesta mediante erupciones freáticas frecuentes, algunas con columnas de ceniza y lahares menores en sus flancos. El área circundante exhibe un notable dinamismo geotérmico superficial, con volcanes de lodo, fumarolas y aguas termales que evidencian el sistema hidrotermal activo bajo la superficie, dentro del Parque Nacional Rincón de la Vieja, en el corazón de Guanacaste.",
    images: [
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cima_Rincon_de_la_Vieja.JPG", credit: "Yasif89 - CC BY-SA 4.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Clouds_Gather_on_Rinc%C3%B3n_de_la_Vieja_Volcano_(crater-052025-loiacono-4358).jpg", credit: "NASA / Milan Loiacono - Dominio público"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rinc%C3%B3n_de_la_Vieja_Volcano_Costa_Rica_Mud_Bubble_bursting_7860.jpg", credit: "Paul Harrison - CC BY-SA 4.0"}
    ]
  },
  {
    id: "turrialba",
    category: "volcanico",
    name: "Volcán Turrialba",
    region: "Turrialba, Cartago",
    lat: 10.018,
    lng: -83.764,
    elevation_m: 3340,
    summary: "El Turrialba es un extenso estratovolcán basáltico-a-dacítico ubicado en un amplio collado al noreste del Irazú, con tres cráteres alineados en dirección noroeste-sureste. Tras un largo período de calma, reinició su actividad eruptiva en 2010 con emisiones de ceniza y gases que se intensificaron entre 2014 y 2017, generando columnas eruptivas que afectaron la calidad del aire y la aviación en el Valle Central. Desde entonces mantiene fases de desgasificación persistente con episodios explosivos esporádicos, y es un geomorfositio de referencia para el monitoreo volcánico costarricense.",
    images: [
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Turrialba_Volcano_cone_Sept_2005_.jpg", credit: "Fbolanos - CC BY-SA 4.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Turrialba_Volcano%2C_Costa_Rica.JPG", credit: "Luis Manuel Madrigal Mena - CC BY 3.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Volc%C3%A1n_Turrialba_2013.JPG", credit: "Coliner - CC BY-SA 3.0"}
    ]
  },
  {
    id: "tenorio",
    category: "volcanico",
    name: "Volcán Tenorio",
    region: "Bijagua, Upala, Alajuela",
    lat: 10.6728,
    lng: -85.015,
    elevation_m: 1916,
    summary: "El Tenorio es un estratovolcán andesítico inactivo, compuesto por varios picos y cráteres gemelos, sin registro de erupciones históricas, lo que ha permitido el desarrollo de espesos bosques nubosos en sus laderas. Su relevancia como geomorfositio no radica en la actividad eruptiva, sino en un fenómeno hidrogeológico singular: la mezcla de aguas ricas en minerales de origen volcánico procedentes de sus flancos da origen al río Celeste, cuya coloración turquesa resulta de la dispersión óptica de partículas suspendidas. Este proceso, junto con cascadas, pozas termales y fumarolas cercanas, ha convertido al Parque Nacional Volcán Tenorio en uno de los atractivos turístico-científicos más singulares de Costa Rica.",
    images: [
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tenorio_volcano_01.jpg", credit: "Cephas - CC BY-SA 4.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tenorio_volcano_02.jpg", credit: "Cephas - CC BY-SA 4.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Laguna_azul%2C_Rio_Celeste%2C_Parq_Tenorio.jpg", credit: "Yasif89 - CC BY-SA 4.0"}
    ]
  },

  // -------- tectónico --------
  {
    id: "falla-aguacaliente",
    category: "tectonico",
    name: "Falla de Aguacaliente – Valle del Guarco",
    region: "Cartago",
    lat: 9.8591,
    lng: -83.9244,
    elevation_m: 1450,
    summary: "El Valle del Guarco es la expresión morfológica directa del Sistema de Falla Aguacaliente, un conjunto de fracturas de rumbo este-oeste con componente normal y sinestral que atraviesa el sur de Cartago. El movimiento repetido de estas fallas durante el Cuaternario ha hundido paulatinamente el bloque donde se asienta la ciudad, generando una depresión tectónica alargada flanqueada por escarpes y lomeríos facetados hacia los Cerros de La Carpintera. Este sistema ha producido sismos históricos destructivos, entre ellos el terremoto de Cartago de 1910, y permite observar cómo la sismicidad activa moldea valles intermontanos.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Valle_del_Guarco%2C_Cartago%2C_Costa_Rica_01.jpg", credit: "Rodtico21 - CC BY-SA 4.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Valle_del_Guarco%2C_Cartago%2C_Costa_Rica_02.jpg", credit: "Rodtico21 - CC BY-SA 4.0"}
    ]
  },
  {
    id: "cerro-de-la-muerte",
    category: "tectonico",
    name: "Cerro de la Muerte – Cordillera de Talamanca",
    region: "San José / Cartago, límite con Pérez Zeledón",
    lat: 9.567,
    lng: -83.75,
    elevation_m: 3451,
    summary: "El macizo de Cerro de la Muerte, punto culminante de la Cordillera de Talamanca en su tramo central, es un bloque cortical levantado por el empuje de la cordillera submarina de Cocos al subducir bajo la placa Caribe desde el Mioceno tardío. Este levantamiento, todavía activo, ha exhumado un núcleo de rocas plutónicas e ígneas que hoy superan los 3400 metros, creando el relieve más alto del país fuera de los volcanes. Sus laderas empinadas y su páramo de altura son resultado directo de fallas inversas y transcurrentes asociadas a la colisión de la dorsal.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Cerro-de-la-muerte.jpg", credit: "Lsobrado - CC BY-SA 3.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/8/83/Cerro_muerte_1.jpg", credit: "MongeNajera - CC BY-SA 3.0"}
    ]
  },
  {
    id: "cerros-de-escazu",
    category: "tectonico",
    name: "Cerros de Escazú",
    region: "San José (Escazú, Mora, Aserrí)",
    lat: 9.85,
    lng: -84.15,
    elevation_m: 1986,
    summary: "Los Cerros de Escazú forman un horst alargado que se eleva cerca de 1600 metros sobre el piso del Valle Central, delimitado al norte por las fallas Escazú, Belo Horizonte y Río Azul, de carácter inverso y transcurrente. Desde finales del Mioceno, la tectónica transpresiva del cinturón deformado de Costa Rica ha plegado y levantado rocas sedimentarias marinas intruidas por plutones, separando este bloque montañoso del graben central donde se asienta San José. El contraste topográfico abrupto entre la cordillera y el valle es visible desde gran parte de la capital.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cerros_de_Escaz%C3%BA_after_rain.jpg", credit: "O'Dea - CC BY-SA 4.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/b/be/Cerros_de_Escaz%C3%BA_%281%29.JPG", credit: "Rodtico21 - CC BY-SA 3.0"}
    ]
  },
  {
    id: "valle-de-orosi",
    category: "tectonico",
    name: "Valle de Orosí",
    region: "Paraíso / Orosi, Cartago",
    lat: 9.828,
    lng: -83.862,
    elevation_m: 1025,
    summary: "El Valle de Orosí es una depresión intraarco de origen tectónico, hundida entre los macizos volcánicos de Irazú y Turrialba y las estribaciones de Talamanca, en el sector oriental del graben central de Costa Rica. Su formación responde a fallamiento normal y transtensivo que fracturó el basamento durante el Cuaternario, permitiendo que el río Reventazón y sus afluentes rellenaran la cuenca con sedimentos aluviales y volcánicos sobre los que hoy se cultiva café. El escarpe observado desde el Mirador de Orosí marca el borde de falla que separa la meseta de Paraíso del fondo del valle.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Vista_del_Valle_de_Orosi.jpg", credit: "André Oliva - CC BY-SA 3.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mirador_Valle_de_Orosi%2C_Cartago%2C_Costa_Rica_-_panoramio.jpg", credit: "Peloy (Allan H.M.) - CC BY-SA 3.0"}
    ]
  },

  // -------- fluvial --------
  {
    id: "catarata-toro",
    category: "fluvial",
    name: "Catarata del Toro",
    region: "Bajos del Toro, Alajuela",
    lat: 10.2543,
    lng: -84.2714,
    elevation_m: 1600,
    summary: "La Catarata del Toro es una caída de agua de aproximadamente 90 metros formada por el río Toro al precipitarse dentro de un antiguo cráter volcánico colapsado, en las estribaciones del complejo Poás-Platanar. El curso fluvial ha excavado progresivamente material piroclástico, lavas y coladas de lahar mediante erosión remontante y abrasión hidráulica, exponiendo paredes rocosas con tonalidades rojizas y anaranjadas producto de la oxidación de minerales volcánicos. El encajonamiento del cauce y la formación de una poza de erosión en la base evidencian procesos activos de incisión vertical, siendo un caso de estudio del modelado fluvial sobre relieve volcánico reciente.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Catarata_del_Toro._Waterfall._Costa_Rica.jpg", credit: "Steve Jurvetson - CC BY 2.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Catartata_del_toro_ibo_bonilla_arquitecto.JPG", credit: "Axxis10 - CC BY-SA 3.0"}
    ]
  },
  {
    id: "cataratas-la-paz",
    category: "fluvial",
    name: "Cataratas de La Paz",
    region: "Vara Blanca, Alajuela/Heredia",
    lat: 10.2017,
    lng: -84.1615,
    elevation_m: 1400,
    summary: "Las Cataratas de La Paz son un conjunto de cinco saltos escalonados que el río La Paz ha tallado sobre las laderas orientales del volcán Poás, en Vara Blanca. El desnivel abrupto del terreno, heredado de coladas de lava y depósitos piroclásticos, generó puntos de ruptura que el agua erosiona diferencialmente según la dureza de la roca, produciendo saltos verticales separados por rápidos y pozas. El transporte de sedimentos volcánicos ha esculpido cauces estrechos y paredes casi verticales cubiertas de bosque nuboso, en uno de los atractivos hídricos más visitados del país.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/3/34/La_Paz_Waterfall%2C_Costa_Rica.JPG", credit: "Erebus555 - CC BY-SA 3.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Behind_La_Paz_Waterfall%2C_Costa_Rica.jpg", credit: "BobJGalindo (Fimbriata) - CC BY-SA 4.0"}
    ]
  },
  {
    id: "canon-rio-pacuare",
    category: "fluvial",
    name: "Cañón del Río Pacuare",
    region: "Turrialba / Siquirres, Cartago-Limón",
    lat: 9.9514,
    lng: -83.5745,
    elevation_m: 300,
    summary: "El cañón del río Pacuare se desarrolla en la vertiente caribeña de la cordillera de Talamanca, donde el río ha incidido profundamente sobre rocas volcánicas y metamórficas para formar paredes escarpadas de hasta varias decenas de metros. El fuerte gradiente topográfico entre las tierras altas y la llanura costera favorece una energía hidráulica elevada, responsable del transporte y pulido de grandes bloques y del desarrollo de numerosos rápidos. Reconocido internacionalmente por el rafting de aguas bravas, es también un geomorfositio relevante para comprender la dinámica erosiva de ríos de montaña tropical.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Rio_Pacuare_Costa_Rica_002.JPG", credit: "Grez - CC BY-SA 3.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/9/96/CascadaRioPacuareCostaRica.jpg", credit: "Gengiskanhg - CC BY-SA 3.0"}
    ]
  },
  {
    id: "valle-rio-savegre",
    category: "fluvial",
    name: "Valle del Río Savegre",
    region: "San Gerardo de Dota, San José",
    lat: 9.559,
    lng: -83.8158,
    elevation_m: 2200,
    summary: "El valle del río Savegre, en San Gerardo de Dota, fue modelado por procesos fluviales y de vertiente sobre las rocas de la cordillera de Talamanca, cerca del Cerro de la Muerte. Desde su nacimiento a más de 3400 metros, el río ha excavado un valle de perfil predominantemente en V, con rápidos, pequeñas cataratas y sectores de meandros donde disminuye la pendiente. La erosión vertical y el transporte de sedimentos gruesos han expuesto afloramientos rocosos y generado terrazas fluviales. Declarada Reserva de Biosfera por la UNESCO, esta cuenca conjuga geodiversidad, biodiversidad y procesos hidrogeomorfológicos activos.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Costa_Rica_-_San_Gerardo_de_Dota_01.jpg", credit: "Wayne77 - CC BY-SA 4.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Cataract_on_the_Rio_Savegre.jpg", credit: "Dennis from Bethany, USA - CC BY 2.0"}
    ]
  },

  // -------- kárstico --------
  {
    id: "barra-honda",
    category: "karstico",
    name: "Parque Nacional Barra Honda (sistema de cavernas)",
    region: "Nicoya, Guanacaste",
    lat: 10.18565,
    lng: -85.297892,
    elevation_m: 300,
    summary: "El Parque Nacional Barra Honda protege un macizo de calizas arrecifales de edad miocena que se eleva como una isla rocosa sobre la llanura aluvial del río Tempisque. Durante millones de años, la infiltración de agua de lluvia ligeramente ácida ha disuelto el carbonato de calcio a lo largo de fracturas y planos de estratificación, generando un laberinto de más de 40 cavernas, entre ellas Terciopelo, Santa Ana y La Trampa, con estalactitas, estalagmitas, columnas y helictitas. Barra Honda es el geomorfositio kárstico mejor documentado de Costa Rica, valioso por su rareza geológica y su aporte a la espeleogénesis tropical.",
    images: [
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Barra%20Honda.jpg", credit: "Lutz Maertens (Trendy64) - dominio público"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Barra%20Honda%20National%20Park%2001.JPG", credit: "Shamhain - CC BY-SA 3.0"}
    ]
  },
  {
    id: "cuevas-venado",
    category: "karstico",
    name: "Cuevas de Venado (Caverna Gabinarraca)",
    region: "Venado, San Carlos, Alajuela",
    lat: 10.553594,
    lng: -84.768438,
    elevation_m: 400,
    summary: "El sistema kárstico de Cuevas de Venado se desarrolla en calizas bioclásticas de la Formación Venado, de edad miocena, parcialmente cubiertas por depósitos volcánicos cuaternarios. El agua de lluvia, enriquecida en dióxido de carbono, se infiltra por más de treinta dolinas y sumideros y disuelve la roca caliza a lo largo de fallas geológicas, esculpiendo las cuevas Gabinarraca, Menonitas e Higuera, con casi cinco kilómetros de galerías topografiadas, ríos subterráneos activos y espeleotemas diversos, incluidas geodas de yeso poco comunes. Ilustra la carstificación tropical acelerada por la alta pluviosidad regional.",
    images: [
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cavernas%20venado-01.jpg", credit: "J. Monge-Nájera - CC BY-SA 3.0"},
      {url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cavernas%20venado-38.jpg", credit: "J. Monge-Nájera - CC BY-SA 3.0"}
    ]
  },

  // -------- glaciar --------
  {
    id: "valle-morrenas",
    category: "glaciar",
    name: "Valle de las Morrenas",
    region: "Parque Nacional Chirripó, Pérez Zeledón, San José",
    lat: 9.49053,
    lng: -83.48654,
    elevation_m: 3150,
    summary: "El Valle de las Morrenas ocupa una artesa glaciar en forma de U, tallada por el hielo que cubrió las partes altas del Cerro Chirripó durante el máximo glacial del Pleistoceno tardío, hace más de 20 000 años. Al retroceder, el hielo dejó acumulaciones desordenadas de bloques y detritos —las morrenas— que hoy represan una cadena de pequeños lagos tipo paternóster alimentados por el deshielo estacional. Los sedimentos del fondo conservan un registro casi continuo de la actividad glaciar y fluvial de los últimos diez mil años, siendo referencia clave para reconstruir la deglaciación de la Cordillera de Talamanca.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/2/28/Lagos_Las_Morenas.JPG", credit: "Cephas - CC BY-SA 4.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Valle_de_lagos.jpg", credit: "Carlos Rojas (Milenioscuro) - dominio público"}
    ]
  },
  {
    id: "lago-ditkevi",
    category: "glaciar",
    name: "Laguna Ditkevi (Lagos del Chirripó)",
    region: "Parque Nacional Chirripó, Pérez Zeledón, San José",
    lat: 9.46858,
    lng: -83.48115,
    elevation_m: 3580,
    summary: "La Laguna Ditkevi ocupa el fondo de un circo glaciar excavado por un pequeño casquete de hielo que coronó el macizo del Chirripó durante el Pleistoceno tardío. El hielo, al fluir pendiente abajo, arrancó y pulió la roca del anfiteatro mediante procesos de arranque y abrasión, profundizando una cubeta que quedó cerrada por un umbral rocoso al desaparecer el hielo, hace unos diez mil años. Sobre ese escalón se acumuló agua de deshielo y lluvia, formando el lago actual. Es una de más de treinta lagunas de origen glaciar identificadas en el parque, testimonio de la única glaciación documentada en Centroamérica.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Lagos_del_Chirripo.JPG", credit: "Cephas - CC BY-SA 4.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Lago_San_Juan.jpeg", credit: "Geovanni Ugalde - CC BY-SA 3.0"}
    ]
  },
  {
    id: "los-crestones",
    category: "glaciar",
    name: "Los Crestones (Cerro Terbi)",
    region: "Parque Nacional Chirripó, Pérez Zeledón, San José",
    lat: 9.45278,
    lng: -83.49662,
    elevation_m: 3720,
    summary: "Los Crestones son un conjunto de agujas y paredones de roca ígnea de hasta 60 metros de altura que sobresalen en la cresta del Cerro Terbi, dentro del macizo del Chirripó. Su forma actual resulta de la combinación entre el fracturamiento original de la roca y la intensa erosión glaciar y periglaciar que actuó sobre la cima durante el Pleistoceno, cuando un pequeño casquete de hielo cubrió estas alturas y sus bordes funcionaron como circos que esculpieron crestas agudas. Declarado Símbolo Nacional de Costa Rica, ilustra cómo la glaciación tropical de montaña modeló el paisaje más alto del país.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Los_Crestones.jpg", credit: "Investigatioaperta - CC BY-SA 4.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/CR_Chirripo_PN_0411_035_%2817022479237%29.jpg", credit: "Diego Tirira - CC BY-SA 2.0"}
    ]
  },

  // -------- marino --------
  {
    id: "isla-del-coco",
    category: "marino",
    name: "Isla del Coco",
    region: "Parque Nacional Isla del Coco, Puntarenas",
    lat: 5.5281,
    lng: -87.0611,
    elevation_m: 634,
    summary: "Isla del Coco es una isla oceánica de origen volcánico situada sobre la placa de Cocos, a más de 500 km de la costa pacífica continental. Su relieve escarpado —acantilados de más de 180 metros y bahías profundas como Chatham y Wafer— resulta del enfriamiento de coladas de lava submarina y de la posterior erosión marina intensa, que ha tallado arcos, cuevas y plataformas rocosas en su litoral. El aislamiento geográfico y la constante acción del oleaje del Pacífico han esculpido una costa abrupta con escasas playas. Declarada Patrimonio Natural de la Humanidad, combina vulcanismo insular, abrasión marina activa y biodiversidad endémica en un solo paisaje.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Bah%C3%ADa_Chatham_Isla_del_Coco.JPG", credit: "Axxis10 - CC BY-SA 4.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Los_Moais_Riscos_en_Isla_del_Coco.JPG", credit: "Axxis10 - CC BY-SA 3.0"}
    ]
  },
  {
    id: "punta-catedral",
    category: "marino",
    name: "Punta Catedral",
    region: "Parque Nacional Manuel Antonio, Quepos, Puntarenas",
    lat: 9.3765,
    lng: -84.1469,
    elevation_m: 92,
    summary: "Punta Catedral fue originalmente un islote rocoso de origen volcánico separado de tierra firme por un brazo de mar. Durante miles de años, las corrientes costeras y el oleaje del Pacífico depositaron arena y sedimentos en la zona de menor energía entre el islote y la costa, formando un cordón arenoso doble que terminó uniendo ambas masas: un tómbolo clásico, hoy ocupado por la playa y el bosque del parque. Este proceso de sedimentación progresiva, aún activo, ejemplifica cómo la refracción del oleaje alrededor de un obstáculo genera zonas de acumulación, y es uno de los geomorfositios costeros más representativos y visitados de Costa Rica.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Playa_Manuel_Antonio._Quepos._Costa_Rica.jpg", credit: "Rodtico21 - CC BY-SA 4.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Manuel_Antonio_National_Park_from_the_sea_06.jpg", credit: "Sunset Sails - CC BY 4.0"}
    ]
  },
  {
    id: "playa-ostional",
    category: "marino",
    name: "Playa Ostional",
    region: "Refugio Nacional de Vida Silvestre Ostional, Santa Cruz, Guanacaste",
    lat: 9.9958,
    lng: -85.7013,
    elevation_m: null,
    summary: "Playa Ostional es una playa de arena volcánica gris ubicada en la costa pacífica de Guanacaste, formada por la acumulación de sedimentos terrígenos transportados por ríos cercanos y redistribuidos por el oleaje y las corrientes litorales. Su perfil suave y la granulometría fina de la arena, junto con la pendiente moderada del frente de playa, crean condiciones óptimas para que miles de tortugas lora aniden simultáneamente durante las llamadas arribadas. El constante removido de arena por el oleaje y por las propias tortugas mantiene una dinámica sedimentaria activa que renueva la playa cada temporada, en un geomorfositio excepcional a nivel mundial.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Arribada_de_tortugas_Lora.JPG", credit: "Laranapeleona - dominio público"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/27732-_Epic_pacific_beach_at_Refugio_Nacional_Ostional.jpg", credit: "Panegyrics of Granovetter - CC BY-SA 2.0"}
    ]
  },
  {
    id: "isla-del-cano",
    category: "marino",
    name: "Isla del Caño",
    region: "Reserva Biológica Isla del Caño, Península de Osa, Puntarenas",
    lat: 8.7089,
    lng: -83.8739,
    elevation_m: 110,
    summary: "Isla del Caño es un macizo aislado del margen continental de la península de Osa, emplazado sobre basamento oceánico y coronado por una plataforma casi plana a unos 110 metros de altura. Su costa presenta acantilados abruptos y extensas plataformas de abrasión marina, superficies rocosas horizontales talladas por el impacto continuo del oleaje sobre antiguas terrazas emergidas, visibles especialmente durante la marea baja. Estas plataformas registran fluctuaciones relativas del nivel del mar y episodios de levantamiento tectónico asociados a la subducción de la placa de Coco bajo la placa Caribe, siendo clave para estudiar la erosión marina y la evolución costera del Pacífico Sur costarricense.",
    images: [
      {url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Isla_del_Cano_beach_mjo.JPG", credit: "Michael James O'Connor - CC BY-SA 3.0"},
      {url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Vista_panor%C3%A1mica_de_Isla_del_Ca%C3%B1o.jpg", credit: "SILGOHI - CC BY-SA 4.0"}
    ]
  }
];
