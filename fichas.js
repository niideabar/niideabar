/* ===================================================================
   FICHAS — al tocar un plato o una cerveza se abre su ficha
   - La clave es el nombre EXACTO que tiene en carta.js.
   - Los precios NO van aquí: se cogen solos de carta.js (sala o terraza).
   - Cervezas: textos copiados de las fichas de La Casa de la Cerveza.
     "vaso" y "logo" son imágenes de /img/cervezas/ (sin extensión).
     "marida" son nombres exactos de platos de la carta de NI.
   - Platos: "foto" es la imagen de /img/carta/ (sin extensión).
   =================================================================== */

var FICHAS = {
  "Quesadillas 4 quesos": {
    tipo: "plato", foto: "quesadilla-4-quesos",
    desc: "Dos tortillas de trigo bien doradas y, entre medias, una mezcla de cuatro quesos fundidos que se estira al cortarla. Llega a la mesa en tabla de madera con su guacamole para mojar.",
    lleva: ["Tortilla de trigo", "Mezcla de 4 quesos", "Guacamole"],
    // alergenos: ["Gluten", "Lácteos"],  // pendiente de confirmar con las etiquetas
  },

  "Tequeños (6 uds.)": {
    tipo: "plato", foto: "tequenos",
    desc: "Palitos de masa rellenos de queso blanco, horneados hasta que se doran y el queso asoma fundido por las puntas. Se mojan en mermelada de fresa: el contraste dulce y salado, a la venezolana.",
    lleva: ["Masa de trigo", "Queso blanco", "Mermelada de fresa"],
    // alergenos: ["Gluten", "Lácteos"],  // pendiente de confirmar con las etiquetas
  },

  "Croquetas de jamón (6 uds.)": {
    tipo: "plato", foto: "croquetas-jamon",
    desc: "Croquetas de jamón cremosas por dentro y doradas por fuera, en tabla de madera con kétchup para mojar. Un clásico de barra que nunca falla.",
    lleva: ["Croquetas de jamón", "Kétchup"],
  },

  "Nachos con queso y salsa guacamole": {
    tipo: "plato", foto: "nachos",
    desc: "Un buen bol de totopos de maíz con queso fundido por encima, de los que se estiran al cogerlos, y guacamole aparte para mojar. Para compartir con unas cañas.",
    lleva: ["Totopos de maíz", "Queso fundido", "Guacamole"],
  },

  "Alitas de pollo": {
    tipo: "plato", foto: "alitas-barbacoa",
    desc: "Alitas de pollo horneadas hasta que la piel queda dorada y crujiente, con la salsa que elijas aparte para mojar: mayonesa, kétchup, barbacoa o baconesa. Se comen con las manos, sin complejos.",
    lleva: ["Alitas de pollo", "Salsa a elegir: mayonesa, kétchup, barbacoa o baconesa"],
  },

  "Perrito clásico": {
    tipo: "plato", foto: "perrito-clasico",
    desc: "Pan de perrito tierno con su salchicha, mayonesa, un hilo de kétchup y cebolla crujiente por encima. Si lo prefieres, pídelo con salsa barbacoa en vez de kétchup. Llega con patatas chips de acompañamiento.",
    lleva: ["Pan de perrito", "Salchicha", "Mayonesa", "Kétchup (o barbacoa, si la pides)", "Cebolla crujiente", "Patatas chips"],
  },

  "Gratinado cebolla frita": {
    tipo: "plato", foto: "perrito-gratinado-cebolla",
    desc: "Pan de perrito con su salchicha, cubierto de queso fundido y gratinado, con hilos de kétchup y mayonesa y un buen puñado de cebolla frita crujiente por encima. Llega con patatas chips de acompañamiento.",
    lleva: ["Pan de perrito", "Salchicha", "Queso gratinado", "Kétchup", "Mayonesa", "Cebolla frita", "Patatas chips"],
  },

  "Gratinado bacon": {
    tipo: "plato", foto: "perrito-gratinado-bacon",
    desc: "Pan de perrito con su salchicha, cubierto de queso fundido y gratinado y dados de bacon bien tostados. Por encima, un buen hilo de baconesa. Llega con patatas chips de acompañamiento.",
    lleva: ["Pan de perrito", "Salchicha", "Queso gratinado", "Bacon en dados", "Baconesa", "Patatas chips"],
  },

  "Gyozas de pollo y vegetales": {
    tipo: "plato", foto: "gyozas-pollo",
    desc: "Empanadillas japonesas de masa fina rellenas de pollo y verduras, doradas por fuera y jugosas por dentro. Se sirven en tabla de madera con salsa de soja para mojar.",
    lleva: ["Gyozas de pollo y verduras", "Salsa de soja"],
  },

  "Hamburguesa de pollo con pan rústico": {
    tipo: "plato", foto: "hamburguesa-pollo",
    desc: "Pollo empanado y crujiente en pan rústico con queso fundido, lechuga fresca, una buena rodaja de tomate y kétchup. Llega con patatas chips de acompañamiento.",
    lleva: ["Pan rústico", "Pollo empanado", "Queso fundido", "Lechuga", "Tomate", "Kétchup", "Patatas chips"],
  },

  "Margarita": {
    tipo: "plato", foto: "pizza-margarita",
    desc: "La pizza de siempre: base de tomate y mucha mozzarella fundida y gratinada, con el borde dorado y crujiente. Sencilla y sin fallo.",
    lleva: ["Masa de pizza", "Tomate", "Mozzarella"],
  },

  "Doble pepperoni": {
    tipo: "plato", foto: "doble-pepperoni",
    desc: "Pizza con base de tomate y mozzarella fundida, cubierta con doble ración de pepperoni que se riza y se tuesta en los bordes al hornearse. Para los que nunca tienen bastante.",
    lleva: ["Masa de pizza", "Tomate", "Mozzarella", "Doble de pepperoni"],
  },

  "Quesadillas 4 quesos con pollo": {
    tipo: "plato", foto: "quesadilla-pollo",
    desc: "Quesadilla de cuatro quesos fundidos con dados de pollo, entre dos tortillas de trigo doradas a la plancha. Llega cortada en triángulos, lista para compartir, con guacamole para mojar.",
    lleva: ["Tortilla de trigo", "Mezcla de 4 quesos", "Pollo en dados", "Guacamole"],
  },

  "Quesadilla 4 quesos con pulled": {
    tipo: "plato", foto: "quesadilla-pulled-2",
    desc: "Nuestra quesadilla de cuatro quesos con pulled pork: carne de cerdo deshilachada, jugosa y con su salsa, entre dos tortillas de trigo doradas. Llega cortada en triángulos, lista para compartir, con guacamole para mojar.",
    lleva: ["Tortilla de trigo", "Mezcla de 4 quesos", "Pulled pork", "Guacamole"],
  },

  "Aros de cebolla": {
    tipo: "plato", foto: "aros-cebolla",
    desc: "Aros de cebolla rebozados y horneados hasta quedar dorados y crujientes por fuera, con la cebolla tierna y dulce por dentro. Vienen con la salsa que elijas para mojar: mayonesa, kétchup, barbacoa o baconesa.",
    lleva: ["Aros de cebolla rebozados", "Salsa a elegir: mayonesa, kétchup, barbacoa o baconesa"],
  },

  "Patatas gajo 4 salsas": {
    tipo: "plato", foto: "patatas-gajo",
    desc: "Patatas en gajo con su piel, especiadas y horneadas hasta que quedan doradas y crujientes por fuera y tiernas por dentro. Llegan en un plato redondo con cuatro salsas alrededor para ir mojando.",
    lleva: ["Patata en gajo con piel", "Especias", "4 salsas para mojar"],
  },

  "Patatas boniato 4 salsas": {
    tipo: "plato", foto: "patatas-boniato",
    desc: "Bastones de boniato horneados, dorados por fuera y tiernos y dulces por dentro, con un toque de sal y especias. Llegan en un plato redondo con cuatro salsas alrededor para ir mojando.",
    lleva: ["Boniato en bastones", "Sal y especias", "4 salsas para mojar"],
  },

  "Rabas de calamar": {
    tipo: "plato", foto: "rabas-calamar",
    desc: "Tiras de calamar rebozadas, doradas y crujientes por fuera y tiernas por dentro. Se sirven en pizarra con mayonesa y alioli para mojar y un gajo de limón.",
    lleva: ["Calamar rebozado", "Mayonesa", "Alioli", "Limón"],
  },

  "Empanadillas criollas (2 uds.)": {
    tipo: "plato", foto: "empanadillas-criollas",
    desc: "Dos empanadillas criollas de masa fina, horneadas hasta quedar doradas y crujientes. Eliges el relleno: jamón y queso, espinacas, caprese o pollo. Llegan con patatas chips de acompañamiento.",
    lleva: ["2 empanadillas criollas", "Relleno a elegir: jamón y queso, espinacas, caprese o pollo", "Patatas chips"],
  },

  "Lágrimas de pollo": {
    tipo: "plato", foto: "lagrimas-pollo",
    desc: "Tiras de pollo empanadas y horneadas hasta quedar bien doradas y crujientes, con la carne jugosa por dentro. Se sirven en tabla de madera con la salsa que elijas para mojar: mayonesa, kétchup, barbacoa o baconesa.",
    lleva: ["Pollo empanado", "Salsa a elegir: mayonesa, kétchup, barbacoa o baconesa"],
  },

  /* ---------- Fichas propias de NI (no están en JB) ---------- */
  "Amstel": {
      "tipo": "cerveza",
      "vaso": "amstel",
      "estilo": "Lager",
      "origen": "Ámsterdam (Países Bajos)",
      "alcohol": "5,0 %",
      "servicio": "Doble o pinta, bien fría",
      "cata": "Rubia dorada y brillante, con espuma blanca y compacta. Aroma suave a cereal y malta, cuerpo ligero y un amargor muy moderado. Refrescante y fácil de beber: la caña de toda la vida.",
      "historia": "Nació en 1870 en Ámsterdam y tomó el nombre del río Amstel, junto al que estaba la fábrica. En España la elabora Heineken España, que en 2018 renovó su receta para hacerla 100 % malta de cebada.",
      "marida": ["Patatas gajo 4 salsas", "Croquetas de jamón (6 uds.)", "Perrito clásico"]
  },

  "Corona": {
      "tipo": "cerveza",
      "vaso": "corona",
      "estilo": "Pale lager",
      "origen": "México",
      "alcohol": "4,5 %",
      "servicio": "Tercio bien frío, con una rodaja de lima en el cuello",
      "cata": "Dorada pálida y muy clara, de cuerpo ligero y burbuja viva. Aroma suave a cereal, apenas amarga y con un final limpio y seco. La lima le añade un toque cítrico y todavía más frescura.",
      "historia": "Nació en 1925 con la Cervecería Modelo, en Ciudad de México. Fue pionera en embotellar una lager en botella transparente, que hoy es su seña de identidad.",
      "marida": ["Nachos con queso y salsa guacamole", "Quesadillas 4 quesos con pollo", "Alitas de pollo"]
  },

  /* ---------- CERVEZAS (textos de JB) ---------- */
  "18/70 La Rubia": {
      "tipo": "cerveza",
      "vaso": "18-70-la-rubia",
      "logo": "18-70-la-rubia-logo",
      "estilo": "Lager rubio oscuro",
      "origen": "País Vasco (España)",
      "alcohol": "6,2 %",
      "servicio": "Vaso de pinta, bien fría",
      "cata": "Intensa de sabor y aun así muy fácil de beber. Aroma frutal y un amargor que aportan sus lúpulos: Nugget, herbal y amaderado, y Perle, muy aromático.",
      "historia": "Nació en las barras del País Vasco, donde se vendía en barril y en producciones limitadas. Los hosteleros la convirtieron en su seña de identidad.",
      "marida": [
          "Alitas de pollo",
          "Hamburguesa de pulled pork, queso gratinado",
          "Croquetas de jamón (6 uds.)"
      ]
  },

  "Lagunitas IPA": {
      "tipo": "cerveza",
      "vaso": "lagunitas-ipa",
      "estilo": "India Pale Ale",
      "origen": "EE. UU. (California)",
      "alcohol": "6,2 %",
      "amargor": "51,5",
      "cata": "Dorada, con corona de espuma blanca. En nariz, hierba, flores, resina, cítricos y fruta tropical. En boca es amarga pero equilibrada, con notas de hierba, flores y caramelo; cuerpo medio y final seco.",
      "historia": "Tony Magee empezó a hacer cerveza en la cocina de casa, en el norte de California, hasta que casi quema los fogones. Su mujer le pidió que se fuera a otra parte, y en 1993 abrió Lagunitas Brewing Company junto al pueblo de Lagunitas.",
      "marida": [
          "Alitas de pollo",
          "Nachos con queso y salsa guacamole",
          "Samosas de pollo al curry (6 uds.)"
      ]
  },

  "Ladrón de Manzanas": {
      "tipo": "cerveza",
      "vaso": "ladron-de-manzanas",
      "estilo": "Sidra de manzana",
      "origen": "España",
      "alcohol": "4,5 %",
      "cata": "Elaborada con zumo de manzana fermentado. Dorada, con burbuja fina, dulzor y acidez equilibrados y un final fresco a manzana. Con hielo entra sola.",
      "historia": "Llegó a España en 2017 como alternativa a la cerveza: una sidra moderna y refrescante, pensada para tomar bien fría y con hielo.",
      "marida": [
          "Quesadillas 4 quesos",
          "Aros de cebolla",
          "Empanadillas criollas (2 uds.)"
      ]
  },

  "Águila": {
      "tipo": "cerveza",
      "vaso": "aguila",
      "estilo": "Lager",
      "origen": "Madrid (España)",
      "alcohol": "5,5 %",
      "amargor": "25",
      "cata": "Fácil de beber y muy equilibrada: intensidad de malta caramelizada y frescura de una mezcla de lúpulos, con la variedad Lemondrop.",
      "historia": "Homenaje a su origen en el barrio madrileño de Delicias. El azul de la etiqueta viene del azulejo que coronaba su primera fábrica, en la calle General Lacy.",
      "marida": [
          "Rabas de calamar",
          "Patatas gajo 4 salsas",
          "Croquetas de jamón (6 uds.)"
      ]
  },

  "Águila sin filtrar": {
      "tipo": "cerveza",
      "vaso": "aguila-sin-filtrar",
      "estilo": "Lager especial sin filtrar",
      "origen": "Madrid (España)",
      "alcohol": "5,5 %",
      "amargor": "25",
      "cata": "La misma receta que su lager especial, pero sin filtrar: conserva toda la levadura, es naturalmente turbia y con más cuerpo. Como recién salida del tanque de fermentación.",
      "historia": "Usa «late hopping»: el lúpulo Lemondrop se añade al final de la cocción, lo que intensifica su aroma y le da frescor.",
      "marida": [
          "Croquetas de jamón (6 uds.)",
          "Gratinado ibérico",
          "Patatas gajo 4 salsas"
      ]
  },

  "Heineken": {
      "tipo": "cerveza",
      "vaso": "heineken",
      "estilo": "Lager estilo pilsen",
      "origen": "Países Bajos",
      "alcohol": "5,0 %",
      "cata": "Amarillo claro y brillante, con espuma blanca cremosa y persistente. Aroma afrutado a plátano de su fermentación lenta en frío, dulzor ligero de malta pilsen y amargor suave. Seca, de cuerpo ligero y final fresco.",
      "historia": "Nació en 1874 en una pequeña cervecería familiar de Ámsterdam. La idea de Alfred Heineken de que la cerveza podía viajar fue la clave de su expansión por todo el mundo.",
      "marida": [
          "Margarita",
          "Perrito clásico",
          "Patatas gajo 4 salsas"
      ]
  },

  "Cruzcampo Gran Reserva": {
      "tipo": "cerveza",
      "vaso": "cruzcampo-gran-reserva",
      "estilo": "Lager tostada",
      "origen": "Sevilla (España)",
      "alcohol": "6,4 %",
      "amargor": "25",
      "cata": "Ámbar brillante con espuma compacta y cremosa. Aroma intenso a malta tostada, cítricos, manzana roja, anacardos y toques de regaliz. Entrada ligeramente dulce, como una mousse, con recuerdos a frutos secos amielados y final largo y amargo.",
      "marida": [
          "Rabas de calamar",
          "Jamón y champiñón",
          "Croquetas de jamón (6 uds.)"
      ]
  },

  "Guinness": {
      "tipo": "cerveza",
      "vaso": "guinness",
      "logo": "guinness-logo",
      "estilo": "Stout irlandesa",
      "origen": "Dublín (Irlanda)",
      "alcohol": "4,2 %",
      "cata": "Color negro rubí, espuma cremosa blanco marfil y aroma a café torrefacto. Sabor intenso y a la vez suave, que recuerda a las nueces amargas. Paso de boca limpio y seco, con final a regaliz amargo.",
      "marida": [
          "Hamburguesa de pulled pork, queso gratinado",
          "Barbacoa",
          "Coulant de chocolate"
      ]
  },

  "La Cibeles": {
      "tipo": "cerveza",
      "vaso": "la-cibeles",
      "estilo": "Blond ale artesana",
      "origen": "Madrid (España)",
      "alcohol": "4,5 %",
      "amargor": "29",
      "cata": "Rubio dorado intenso. Aroma cítrico y maltoso a la vez, con notas de malta dulce; afrutada, algo ácida y nada amarga.",
      "historia": "Ligera y refrescante, con lúpulos florales (predomina el de León) y una de las mejores aguas del mundo: la de Madrid.",
      "marida": [
          "Quesadillas 4 quesos",
          "Lágrimas de pollo",
          "Croquetas de jamón (6 uds.)"
      ]
  },

  "Cibeles Imperial IPA": {
      "tipo": "cerveza",
      "vaso": "cibeles-imperial-ipa",
      "estilo": "Imperial IPA",
      "origen": "Madrid (España)",
      "alcohol": "7,0 %",
      "amargor": "75",
      "cata": "Color bronce denso y espuma consistente. Notas de naranja y maracuyá dulce; se nota el alcohol de entrada y después un amargor ácido intenso, sin resecar.",
      "historia": "Más de 5 kilos de lúpulos aromáticos: la reina de los aromas de La Cibeles. Amargor intenso arropado por maracuyá, mango y uva. Todo un reto para novatos.",
      "marida": [
          "Alitas de pollo",
          "Doble pepperoni",
          "Nachos con queso y salsa guacamole"
      ]
  },

  "El Alcázar": {
      "tipo": "cerveza",
      "vaso": "el-alcazar",
      "estilo": "Lager",
      "origen": "Jaén (España)",
      "alcohol": "6,0 %",
      "amargor": "25",
      "cata": "Malta especial Biscuit que le da color ámbar, equilibrada con el amargor frutal y cítrico del lúpulo Citra: maracuyá, mango, lima y grosella. Con «late hopping», muy aromática y refrescante.",
      "historia": "Nació en Jaén en 1928. Toma su nombre del Castillo de Santa Catalina, el «Alcázar Nuevo» que domina la ciudad desde las alturas.",
      "marida": [
          "Rabas de calamar",
          "Patatas gajo 4 salsas",
          "Sándwich mixto con queso gratinado"
      ]
  },

  "Desperados": {
      "tipo": "cerveza",
      "vaso": "desperados",
      "estilo": "Pale lager aromatizada con tequila",
      "origen": "Francia",
      "alcohol": "5,9 %",
      "amargor": "13",
      "cata": "Dorada. En nariz manda el aroma a tequila, con toques cítricos y de maíz. En boca es rubia y con cuerpo, con ese toque de tequila, ligeramente amarga y con cítricos refrescantes.",
      "historia": "Rebelde y con carácter: una cerveza que rompe con la forma tradicional de beber cerveza.",
      "marida": [
          "Nachos con queso y salsa guacamole",
          "Quesadillas 4 quesos con pollo",
          "Alitas de pollo"
      ]
  },

  "Judas": {
      "tipo": "cerveza",
      "vaso": "judas",
      "estilo": "Strong ale belga",
      "origen": "Bélgica",
      "alcohol": "8,5 %",
      "amargor": "25",
      "cata": "Rubia de alta fermentación, de color dorado intenso. Espuma muy persistente y burbuja fina. Predomina el dulzor sobre el amargor, con notas cítricas y afrutadas.",
      "historia": "Nació en 1986 en la cervecera belga Alken-Maes, fundada en 1880. Entra muy fácil para su graduación: es traicionera, como su nombre.",
      "marida": [
          "Cuatro quesos",
          "Gratinado bacon",
          "Tequeños (6 uds.)"
      ]
  },

  "Mort Subite": {
      "tipo": "cerveza",
      "vaso": "mort-subite",
      "estilo": "Lambic de cereza",
      "origen": "Bélgica",
      "alcohol": "4,3 %",
      "cata": "Rojo cereza, con espuma del mismo tono. Poco carbónico, aroma limpio a cerezas maduras y sabor dulce y persistente a cereza. Cuerpo ligero y final muy agradable.",
      "historia": "Las lambic se elaboran por fermentación espontánea. Su nombre («muerte súbita») viene de un juego de dados muy popular en «La Cour Royale», un bar famoso de Bruselas a principios del siglo XX.",
      "marida": [
          "Coulant de chocolate",
          "Gofre de chocolate",
          "Quesadillas 4 quesos"
      ]
  },

  "Heineken 0,0": {
      "tipo": "cerveza",
      "vaso": "heineken-0-0",
      "estilo": "Lager sin alcohol",
      "origen": "Países Bajos",
      "alcohol": "0,0 %",
      "cata": "Refrescantes notas afrutadas, cuerpo suave y sabor a malta bien equilibrado. Ingredientes 100 % naturales y su propia levadura «tipo A».",
      "historia": "El alcohol se retira con un proceso natural y después el maestro cervecero la ajusta para conservar su sabor afrutado con notas de malta.",
      "marida": [
          "Margarita",
          "Empanadillas criollas (2 uds.)",
          "Patatas gajo 4 salsas"
      ]
  },

  "Paulaner (0,5 L)": {
      "tipo": "cerveza",
      "vaso": "paulaner-0-5-l",
      "logo": "paulaner-0-5-l-logo",
      "estilo": "Trigo sin filtrar (Weissbier)",
      "origen": "Múnich (Alemania)",
      "alcohol": "5,5 %",
      "amargor": "12 EBU",
      "servicio": "Vaso alto de trigo",
      "cata": "Un clásico de las cervezas de trigo alemanas: suave, cremosa y refrescante. Perfil definido a plátano y clavo, propio de su levadura, con suaves toques cítricos y la ligera acidez del trigo.",
      "historia": "«Naturtrüb» significa turbia de forma natural: lleva su levadura y no se filtra. Amargor muy bajo, ideal para quien no busca una cerveza amarga.",
      "marida": [
          "Perrito clásico",
          "Gratinado cebolla frita",
          "Patatas boniato 4 salsas"
      ]
  },

  "Amstel Oro 0,0": {
      "tipo": "cerveza",
      "vaso": "amstel-oro-0-0",
      "estilo": "Lager tostada sin alcohol",
      "origen": "España",
      "alcohol": "0,0 %",
      "cata": "Suave, refrescante y de cuerpo ligero. Dorada con reflejos brillantes y espuma consistente, ligeramente amarga, con notas de chocolate, moka y café.",
      "historia": "Se elabora con cuatro maltas doradas tostadas en tres tiempos: secado, tostado y un golpe de fuego final. De ahí su color y su aroma a malta tostada.",
      "marida": [
          "Hamburguesa de pollo con pan rústico",
          "Lágrimas de pollo",
          "Croquetas de jamón (6 uds.)"
      ]
  },

  "Hop House 13": {
      "tipo": "cerveza",
      "vaso": "hop-house-13",
      "estilo": "Pale lager",
      "origen": "Irlanda",
      "alcohol": "5,0 %",
      "amargor": "21",
      "cata": "Ámbar dorado con una densa capa de espuma. Aroma ligero y lupulado, con notas florales y cítricas. En boca, albaricoque y melocotón: viva y refrescante, con una malta sutil de cuerpo medio.",
      "historia": "La lager de Guinness: más lúpulo, más carácter y más sabor, hecha con la famosa levadura Guinness y cebada irlandesa.",
      "marida": [
          "Hamburguesa de pollo con pan rústico",
          "Lágrimas de pollo",
          "Patatas gajo 4 salsas"
      ]
  },

  "Cibeles sin gluten": {
      "tipo": "cerveza",
      "vaso": "cibeles-sin-gluten",
      "estilo": "Session IPA sin gluten",
      "origen": "Madrid (España)",
      "alcohol": "5,1 %",
      "amargor": "24",
      "cata": "Sabe igual que el resto de La Cibeles: amargor moderado y bien equilibrado, con protagonismo de la malta en boca. Carbonatación baja y natural, muy fácil de beber. En nariz, mango y resinas de su lúpulo en seco.",
      "historia": "Menos de 10 mg/kg de gluten: apta para intolerantes, gracias a unas enzimas que degradan el gluten sin quitar sabor."
  }
};
