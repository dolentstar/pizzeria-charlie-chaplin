// Dati del sito. Il template (index.html) legge solo questo file.
window.SITE = {
  name: "Pizzeria Charlie Chaplin",
  shortName: "Charlie Chaplin",
  tagline: "Pizzeria · Farinata",
  since: "1988",
  city: "Torino",
  seoTitle: "Pizzeria Charlie Chaplin · Via Monginevro 152, Torino",
  seoDescription: "Pizzeria Charlie Chaplin, Via Monginevro 152 Torino. Dal 1988 pizza al padellino e al mattone, farinata e focacce. Sala, asporto e consegna a domicilio.",
  logo: "img/logo.webp",
  address: "Via Monginevro 152, 10141 Torino",
  addressShort: "Via Monginevro 152, Torino",
  addressLead: "Si mangia in sala, si ordina da asporto o con consegna a domicilio.",
  mapsQuery: "Pizzeria Charlie Chaplin, Via Monginevro 152, Torino",
  phone: "011 385 5075",
  phoneIntl: "+390113855075",
  whatsapp: "",
  email: "vittoriosem@gmail.com",
  social: { facebook: "https://www.facebook.com/PizzeriaCharlieChaplintorino/", instagram: "https://www.instagram.com/pizzeriacharliechaplin/" },
  piva: "",
  footerLine: "Locale accogliente a conduzione familiare",
  theme: { primary: "#5a1a1f", primaryDark: "#3d1115", accent: "#9a6a22", accentLight: "#e8c98a", soft: "#f1e6d6", cream: "#f6ecdb", paper: "#fbf6ec", line: "#e6d8c0" },

  hero: {
    image: "img/pizza-burrata.webp",
    imageAlt: "Pizza con mortadella, burrata e granella di pistacchio",
    eyebrow: "Via Monginevro · Torino · dal 1988",
    title: "Padellino, mattone",
    titleEm: "e farinata",
    lead: "Oltre 50 pizze, al padellino da 20 cm o al mattone da 33 cm, farinata a porzione e focacce. In sala, da asporto o a domicilio.",
    cta: "Chiama e ordina",
    badges: ["Dal 1988", "Conduzione familiare", "Asporto", "Consegna a domicilio"]
  },

  pillars: [
    { t: "Pizza al padellino", d: "Cotta nel tegamino: più soffice, formato 20 cm." },
    { t: "Pizza al mattone", d: "Cotta direttamente sul mattone: più croccante, formato 33 cm." },
    { t: "Farinata", d: "Semplice o farcita: con cipolla, stracchino, salsiccia, lardo e altro." },
    { t: "Crêpes e dolci", d: "Crêpes e focacce dolci alla Nutella, al pistacchio o alla marmellata." }
  ],

  story: {
    image: "img/sala.webp",
    imageAlt: "La sala della pizzeria con il murale di Charlie Chaplin",
    eyebrow: "Chi siamo",
    title: "Dal 1988 in Via Monginevro",
    paragraphs: [
      "Un locale accogliente a conduzione familiare, con Charlie Chaplin dipinto sulla parete della sala.",
      "Le nostre specialità sono la <strong>pizza al padellino</strong>, la <strong>pizza al mattone</strong> e la <strong>farinata</strong>: oltre 50 pizze tra rosse, bianche e speciali, da gustare al tavolo o da portare a casa."
    ],
    bullets: ["Oltre 50 tipi di pizza", "Ogni pizza in due formati: 20 cm e 33 cm", "Servizio al tavolo, asporto e consegna a domicilio", "Crêpes, focacce dolci e dolci"],
    stamp: true
  },

  menu: {
    eyebrow: "Il menù",
    title: "Tutto il menù",
    lead: "Pizze rosse, bianche e speciali in due formati, farinata, focacce, sfizi, dolci e bevande. Prezzi in euro.",
    notes: [
      "Nelle pizze il primo prezzo è per il padellino (20 cm), il secondo per il mattone (33 cm).",
      "* Prodotto surgelato.",
      "Alcuni ingredienti possono contenere allergeni. Comunicateci le vostre esigenze alimentari e chiedete al personale l'elenco degli allergeni."
    ],
    categories: [
 {id:"rosse", t:"Pizze rosse", s:"Rosse", note:"Prezzi: padellino 20 cm · mattone 33 cm", items:[
  ["Povera", "3,00 · 4,00", "pomodoro, origano"],
  ["Margherita", "4,00 · 5,00", "pomodoro, mozzarella fiordilatte, origano"],
  ["Marinara", "4,50 · 5,50", "pomodoro, acciughe, aglio, olio extra vergine d'oliva, prezzemolo"],
  ["Greca", "5,00 · 6,00", "pomodoro, mozzarella fiordilatte, olive, origano"],
  ["Cipolla", "5,00 · 6,00", "pomodoro, mozzarella fiordilatte, cipolla, origano"],
  ["Gorgonzola", "5,00 · 6,00", "pomodoro, mozzarella fiordilatte, gorgonzola"],
  ["Tedesca", "5,00 · 6,00", "pomodoro, mozzarella fiordilatte, wurstel"],
  ["Funghi", "5,00 · 6,00", "pomodoro, mozzarella, funghi, origano"],
  ["Prosciutto", "5,00 · 6,00", "pomodoro, mozzarella fiordilatte, prosciutto, origano"],
  ["Carnivora", "5,00 · 6,00", "pomodoro, mozzarella fiordilatte, aglio, peperoncino, origano"],
  ["Rucola", "5,00 · 6,00", "pomodoro, mozzarella fiordilatte, rucola"],
  ["Valdostana", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, prosciutto, fontina"],
  ["Patafrì", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, patatine fritte"],
  ["Parmigiana", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, melanzane grigliate, grana, origano"],
  ["Bismark", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, prosciutto, uovo, origano"],
  ["Capri", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, prosciutto, funghi, origano"],
  ["Scamorza", "6,00 · 6,50", "pomodoro, mozzarella fiordilatte, scamorza affumicata"],
  ["Lupo Alberto", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, peperoni, olive, origano"],
  ["Gorgo e cipolla", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, gorgonzola, cipolla"],
  ["Livornese", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, tonno, olive, cipolla"],
  ["Siciliana", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, acciughe, cipolla, olive, origano"],
  ["Tonno e carciofini", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, tonno, carciofini"],
  ["Vegetariana", "6,00 · 7,50", "pomodoro, mozzarella fiordilatte, verdure grigliate, origano"],
  ["Diavola", "6,00 · 7,00", "pomodoro, mozzarella fiordilatte, salamino piccante, olive, peperoncino, origano"],
  ["Gustosa", "6,00 · 7,50", "pomodoro, mozzarella, tonno, peperoni"],
  ["Carbonara", "6,00 · 7,50", "pomodoro, mozzarella fiordilatte, pancetta, uovo, panna, pepe"],
  ["Americana", "6,00 · 7,50", "pomodoro, mozzarella fiordilatte, wurstel, patatine fritte*"],
  ["Capricciosa", "6,00 · 7,50", "pomodoro, mozzarella fiordilatte, prosciutto, funghi, carciofini, origano"],
  ["Burrata", "7,00 · 8,00", "pomodoro, burrata (fine cottura), origano"],
  ["4 formaggi", "6,50 · 7,50", "pomodoro, mozzarella fiordilatte, fontina, gorgonzola, parmigiano"],
  ["4 stagioni", "6,00 · 7,50", "pomodoro, mozzarella fiordilatte, prosciutto, olive, funghi, carciofini, origano"],
  ["4 salumi", "7,00 · 8,00", "pomodoro, mozzarella fiordilatte, salamino piccante, salsiccia fresca, wurstel, prosciutto, origano"]
 ]},
 {id:"speciali", t:"Pizze speciali", s:"Speciali", note:"Per i più affamati · padellino 20 cm · mattone 33 cm", items:[
  ["Porcina", "7,00 · 9,50", "mozzarella fiordilatte, funghi porcini*, salsiccia fresca"],
  ["Charlie Chaplin", "7,50 · 8,50", "pomodoro, mozzarella fiordilatte, salamino, olive, funghi, carciofini, cipolla, origano"],
  ["La completa", "7,50 · 8,50", "pomodoro, mozzarella fiordilatte, salamino, olive, tonno, uovo, origano"],
  ["Danese", "7,50 · 8,50", "pomodoro, aglio, prezzemolo, tonno, olive, acciughe, grana"],
  ["Mexican", "7,50 · 8,50", "pomodoro, mozzarella fiordilatte, salamino, cipolla, fagioli, jalapenos, tortilla chips"],
  ["Banchiera", "7,50 · 8,50", "pomodoro, carciofini, funghi, melanzane, peperoni, cipolla, rucola"],
  ["Maialina", "7,50 · 8,50", "pomodoro, mozzarella fiordilatte, salamino, salsiccia, 'nduja"],
  ["Friarielli", "7,00 · 8,50", "pomodoro, mozzarella fiordilatte, friarielli, salsiccia fresca"],
  ["Provola", "7,50", "pomodoro, mozzarella fiordilatte, provola affumicata, salsiccia fresca · solo padellino"]
 ]},
 {id:"bianche", t:"Pizze bianche", s:"Bianche", note:"Prezzi: padellino 20 cm · mattone 33 cm", items:[
  ["Biancaneve", "4,50 · 5,50", "mozzarella fiordilatte, olio extra vergine, origano"],
  ["San Daniele", "6,00 · 7,00", "mozzarella fiordilatte, prosciutto crudo"],
  ["Delicata", "6,00 · 7,00", "mozzarella fiordilatte, stracchino, rucola, olio extravergine d'oliva"],
  ["Papalina", "6,50 · 7,50", "mozzarella fiordilatte, prosciutto, panna"],
  ["Gorgo e noci", "6,50 · 8,00", "mozzarella fiordilatte, gorgonzola, noci"],
  ["Saporita", "6,50 · 7,50", "mozzarella fiordilatte, stracchino, speck"],
  ["Golosa", "7,00 · 8,00", "mozzarella fiordilatte, pomodorini, fontina, speck"],
  ["Bufala", "6,50 · 7,50", "mozzarella di bufala, pomodorini, olio extra vergine d'oliva, origano"],
  ["Contadina", "6,50 · 7,50", "mozzarella fiordilatte, salsiccia fresca, cipolla"]
 ]},
 {id:"farinata", t:"Farinata e focacce", s:"Farinata", note:"Farinata a porzione", items:[
  ["Farinata semplice", "3,00", ""],
  ["Farinata con cipolla", "3,50", ""],
  ["Farinata prosciutto e mozzarella", "4,00", ""],
  ["Farinata con bufala", "4,00", ""],
  ["Farinata con salsiccia", "4,00", ""],
  ["Farinata con stracchino", "4,00", ""],
  ["Farinata con lardo", "4,00", ""],
  ["Farinata gorgonzola e cipolla", "4,50", ""],
  ["Farinata con salamino e cipolla", "4,50", ""],
  ["Farinata con salsiccia e cipolla", "4,50", ""],
  ["Focaccia bianca", "3,00", "olio extra vergine d'oliva e sale"],
  ["Focaccia al rosmarino", "3,50", ""],
  ["Focaccia al crudo", "6,00", ""],
  ["Focaccia al lardo", "6,00", ""],
  ["Focaccia allo speck", "6,00", ""],
  ["Focaccia Italia", "7,00", "pomodorini, rucola, grana"],
  ["Focaccia di Recco", "8,00", "ripiena di stracchino"]
 ]},
 {id:"sfizi", t:"Sfizi e insalate", s:"Sfizi", items:[
  ["Patatine fritte", "3,50", "a porzione"],
  ["Lampascioni", "5,00", "tipici cipollotti selvatici pugliesi sott'olio"],
  ["Pomodori secchi", "5,00", "a porzione"],
  ["Verdure grigliate con salsa verde", "5,00", "condite con bagnetto: olio extra vergine, prezzemolo e aglio"],
  ["Caprese", "5,00", "pomodoro, mozzarella fiordilatte, origano, olio extra vergine d'oliva"],
  ["Caprese di bufala", "6,00", "pomodoro, mozzarella di bufala, origano, olio extra vergine d'oliva"],
  ["Insalata tonno", "7,50", "pomodoro, mozzarella fiordilatte, tonno, mais, cipolla, olive"]
 ]},
 {id:"dolci", t:"Dolci, crêpes e focacce dolci", s:"Dolci", note:"Dolci Bindi", items:[
  ["Crêpes alla Nutella", "4,00", ""],
  ["Crêpes alla marmellata di albicocca", "4,00", ""],
  ["Crêpes alla marmellata di frutti di bosco", "4,00", ""],
  ["Crêpes al Grand Marnier", "4,50", "zucchero di canna e liquore dolce"],
  ["Crêpes al pistacchio", "5,00", ""],
  ["Focaccia alla Nutella", "5,00", ""],
  ["Focaccia alla marmellata di albicocca", "5,00", ""],
  ["Focaccia alla marmellata di frutti di bosco", "5,00", ""],
  ["Focaccia al pistacchio", "6,00", ""],
  ["Profiteroles", "4,00", ""],
  ["Tiramisù", "4,00", ""],
  ["Meringata", "4,00", ""],
  ["Cannolo siciliano", "4,00", ""],
  ["Scrigno mele e mandorle", "4,00", ""],
  ["Tartufo nocciola", "4,50", ""],
  ["Tartufo al pistacchio", "4,50", ""],
  ["Delizia al limone", "4,50", ""]
 ]},
 {id:"bevande", t:"Birre e bevande", s:"Bevande", items:[
  ["Birra Messina alla spina piccola", "3,00", "con cristalli di sale"],
  ["Birra Messina alla spina media", "4,50", "con cristalli di sale"],
  ["Menabrea", "3,00 · 4,00", "33 cl · 66 cl"],
  ["Ichnusa", "3,00 · 4,00", "33 cl · 66 cl"],
  ["Beck's", "3,00 · 4,00", "33 cl · 66 cl"],
  ["Moretti", "3,00", "66 cl"],
  ["Heineken", "4,00", "66 cl"],
  ["Moretti rossa", "3,50", "33 cl"],
  ["Ceres", "3,00", "33 cl"],
  ["Tennent's Super", "3,00", "33 cl"],
  ["Corona", "3,00", "33 cl"],
  ["Coca-Cola, Coca-Cola Zero, Fanta, Sprite", "2,00", "33 cl"],
  ["Estathè limone o pesca", "2,00", "33 cl"],
  ["Acqua naturale o frizzante", "1,20", "50 cl"]
 ]},
 {id:"vini", t:"Vini", s:"Vini", note:"Bottiglia 75 cl", items:[
  ["Roero Arneis", "10,00", "bianco"],
  ["Dolcetto", "10,00", "rosso"],
  ["Barbera", "10,00", "rosso"],
  ["Bonarda", "10,00", "rosso"]
 ]},
]
  },

  gallery: {
    eyebrow: "Galleria",
    title: "Dal forno di Via Monginevro",
    lead: "La sala e alcune delle nostre pizze.",
    images: [
      { src: "img/sala.webp", alt: "La sala con il murale di Charlie Chaplin" },
      { src: "img/pizza-mattone.webp", alt: "Pizza bianca con funghi e prosciutto crudo" },
      { src: "img/pizza-funghi.webp", alt: "Pizza con mozzarella e funghi" },
      { src: "img/gnocco-fritto.webp", alt: "Burrata, prosciutto e gnocco fritto" },
      { src: "img/pizza-cuore.webp", alt: "Pizza margherita a forma di cuore" }
    ]
  },

  // lunedì → domenica; [ora, min, ora, min]; [] = chiuso
  hours: [
  ["Lunedì",   [[12,0,14,30],[18,30,23,0]]],
  ["Martedì",  []],
  ["Mercoledì",[[18,30,23,30]]],
  ["Giovedì",  [[12,0,14,30],[18,30,23,30]]],
  ["Venerdì",  [[12,0,14,0],[18,30,22,30]]],
  ["Sabato",   [[18,30,23,30]]],
  ["Domenica", [[18,30,23,30]]],
],
  hoursNote: "Chiuso il martedì."
};
