export const languages = {
  fr: 'FR',
  nl: 'NL',
  en: 'EN',
  de: 'DE',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

export const AIRBNB_URL = 'https://airbnb.be/h/maurisson';
export const WHATSAPP = '+32 498 34 53 06';
export const WHATSAPP_URL = 'https://wa.me/32498345306';
export const MUSIC_HUB_URL = 'https://musichub.maurisson.com';
export const GREEN_HUB_URL = 'https://greenhub.maurisson.com';
export const SITES_URL = 'https://sites.maurisson.com';
export const MANUELS_URL = 'https://manuels.maurisson.com';

export const ui = {
  fr: {
    'nav.house': 'La maison',
    'nav.room': 'La chambre',
    'nav.region': 'La région',
    'nav.host': 'L\'hôte',
    'nav.reviews': 'Avis',
    'nav.book': 'Réserver',
    'nav.music': 'Music Hub',
    'nav.green': 'Green Hub',
    'nav.sites': 'Productions',
    'nav.manuels': 'Manuels',

    'hero.eyebrow': 'Herve · Belgique',
    'hero.title.l1': 'Une chambre',
    'hero.title.l2': 'une maison',
    'hero.title.l3': 'à partager',
    'hero.sub': 'À 20 minutes de Maastricht, d\'Aix-la-Chapelle et de Spa-Francorchamps. Un piano dans le salon, un chat roux dans le jardin, et vous qui vous posez.',
    'hero.cta.primary': 'Voir les dates',
    'hero.cta.secondary': 'Découvrir',
    'hero.badge': 'Coup de cœur voyageurs',
    'hero.rating': '4,91 · 53 avis',

    'intro.title': 'Pas un hôtel. Pas un Airbnb anonyme.',
    'intro.body': 'Chez Maurisson, vous louez une chambre — et vous avez les clés de toute la maison. Le salon, le piano, la cuisine, la terrasse, le jardin, le hamac sous l\'arbre. Je vis ici. Vous êtes chez moi, donc vous êtes un peu chez vous.',

    'room.eyebrow': 'Votre chambre',
    'room.title': 'Au calme, en rez-de-jardin',
    'room.body': 'Chambre privée avec serrure, lit double, tête de lit en bois, literie en coton. Vous êtes seul à cet étage. Une guitare vous attend contre le mur si l\'envie monte au réveil.',
    'room.feature.1.title': 'Serrure & intimité',
    'room.feature.1.body': 'Verrou sur votre porte. Wifi dédié à votre chambre, en plus de celui du haut.',
    'room.feature.2.title': 'Lit double',
    'room.feature.2.body': 'Linge de lit en coton, tête de lit en bois massif, chevet avec lumière tamisée.',
    'room.feature.3.title': 'Rez-de-jardin',
    'room.feature.3.body': 'Étage privé pour vous. Silence garanti, petite fenêtre côté jardin.',

    'house.eyebrow': 'La maison',
    'house.title': 'Vous avez accès à tout le reste.',
    'house.body': 'Le salon et ses guitares, le piano droit devant le papier peint Orla Kiely, la cuisine équipée avec espace dédié dans le frigo, le coin repas, la machine expresso, la terrasse, le jardin, le hamac. Rien n\'est en retrait. La maison est vivante — si vous avez une envie de playlist, lancez-vous.',
    'house.tile.1': 'Salon & instruments',
    'house.tile.2': 'Piano droit',
    'house.tile.3': 'Cuisine équipée',
    'house.tile.4': 'Terrasse & BBQ',
    'house.tile.5': 'Jardin & hamac',
    'house.tile.6': 'Salle de bain moderne',

    'region.eyebrow': 'La région',
    'region.title': 'Entre trois pays.',
    'region.body': 'Herve, au cœur du Pays de Herve, entre Liège, Maastricht et Aix-la-Chapelle. Le vert belge, les collines, les fermes. Spa-Francorchamps à 20 minutes pour les passionnés, les Hautes Fagnes un peu plus loin pour ceux qui marchent. Autoroute à deux minutes, rue sans issue face à un espace vert : c\'est calme, c\'est central, c\'est un bon compromis.',
    'region.pin.1.title': 'Maastricht',
    'region.pin.1.sub': '25 min · NL',
    'region.pin.2.title': 'Aix-la-Chapelle',
    'region.pin.2.sub': '25 min · DE',
    'region.pin.3.title': 'Spa-Francorchamps',
    'region.pin.3.sub': '20 min · BE',
    'region.pin.4.title': 'Liège',
    'region.pin.4.sub': '20 min · BE',

    'host.eyebrow': 'L\'hôte',
    'host.title': 'Maxime. Et Sushi.',
    'host.body': 'Je vis sur place. Disponible si vous avez besoin de quelque chose, discret si vous préférez votre tranquillité. Je connais bien la région et je peux vous orienter vers les bons endroits pour manger, randonner ou visiter. Pas de programme imposé, pas de protocole — juste une maison ouverte. Sushi, le chat roux, viendra probablement vous inspecter. C\'est son boulot.',
    'host.signature': 'Maxime · Superhost depuis 2022',
    'host.sushi': 'Chat roux, social',

    'gallery.eyebrow': 'La visite',
    'gallery.title': 'Chaque pièce a son humeur.',

    'reviews.eyebrow': 'Les voyageurs',
    'reviews.title': '4,91 · 53 avis · Coup de cœur voyageurs',
    'reviews.sub': 'Ce que les gens racontent, dans leurs mots, dans leurs langues.',

    'amenities.eyebrow': 'Les détails',
    'amenities.title': 'Tout ce qu\'il faut, rien de superflu.',

    'cta.title': 'Poser ses valises ?',
    'cta.body': 'Voir les dates disponibles, les prix et réserver directement sur Airbnb.',
    'cta.button': 'Voir les disponibilités',
    'cta.whatsapp': 'Ou écrivez-moi sur WhatsApp',

    'footer.tagline': 'Une chambre, une maison, en Belgique.',
    'footer.made': 'Chez Maurisson · Herve, Belgique',

    'lang.switch': 'Langue',
  },
  nl: {
    'nav.house': 'Het huis',
    'nav.room': 'De kamer',
    'nav.region': 'De streek',
    'nav.host': 'De gastheer',
    'nav.reviews': 'Reviews',
    'nav.book': 'Boeken',
    'nav.music': 'Music Hub',
    'nav.green': 'Green Hub',
    'nav.sites': 'Producties',
    'nav.manuels': 'Handleidingen',

    'hero.eyebrow': 'Herve · België',
    'hero.title.l1': 'Eén kamer',
    'hero.title.l2': 'één huis',
    'hero.title.l3': 'om te delen',
    'hero.sub': 'Op 20 minuten van Maastricht, Aken en Spa-Francorchamps. Een piano in de woonkamer, een rode kat in de tuin, en jij — die er even helemaal bent.',
    'hero.cta.primary': 'Bekijk data',
    'hero.cta.secondary': 'Ontdekken',
    'hero.badge': 'Favoriet van reizigers',
    'hero.rating': '4,91 · 53 reviews',

    'intro.title': 'Geen hotel. Geen anonieme Airbnb.',
    'intro.body': 'Bij Maurisson huur je een kamer — en krijg je de sleutel van het hele huis. De woonkamer, de piano, de keuken, het terras, de tuin, de hangmat onder de boom. Ik woon hier. Je bent bij mij thuis — en dus ook een beetje bij jezelf.',

    'room.eyebrow': 'Jouw kamer',
    'room.title': 'Rustig, op de benedenverdieping',
    'room.body': 'Privékamer met slot, tweepersoonsbed, houten hoofdbord, katoenen beddengoed. Je bent alleen op deze verdieping. Een gitaar leunt tegen de muur — voor wie er \'s ochtends zin in heeft.',
    'room.feature.1.title': 'Slot & privacy',
    'room.feature.1.body': 'Grendel op je deur. Eigen wifi in je kamer, plus het netwerk boven.',
    'room.feature.2.title': 'Tweepersoonsbed',
    'room.feature.2.body': 'Katoenen beddengoed, massief houten hoofdbord, nachtkastje met zacht licht.',
    'room.feature.3.title': 'Benedenverdieping',
    'room.feature.3.body': 'Eigen verdieping. Stilte gegarandeerd, raampje aan de tuinzijde.',

    'house.eyebrow': 'Het huis',
    'house.title': 'De rest mag je ook gebruiken.',
    'house.body': 'De woonkamer met gitaren, de piano voor het Orla Kiely-behang, de volledig uitgeruste keuken met jouw eigen plek in de koelkast, de eettafel, het espressoapparaat, het terras, de tuin, de hangmat. Niets is afgesloten. Het is een levend huis — als je zin hebt om een playlist aan te zetten, doe het.',
    'house.tile.1': 'Salon & instrumenten',
    'house.tile.2': 'Piano',
    'house.tile.3': 'Volledige keuken',
    'house.tile.4': 'Terras & BBQ',
    'house.tile.5': 'Tuin & hangmat',
    'house.tile.6': 'Moderne badkamer',

    'region.eyebrow': 'De streek',
    'region.title': 'Tussen drie landen.',
    'region.body': 'Herve, in het Land van Herve, tussen Luik, Maastricht en Aken. Het Belgische groen, glooiende heuvels, boerderijen. Spa-Francorchamps op 20 minuten voor de fans, de Hoge Venen iets verder voor wie wandelt. Snelweg op twee minuten, doodlopende straat tegenover een groene zone: rustig, centraal, de juiste balans.',
    'region.pin.1.title': 'Maastricht',
    'region.pin.1.sub': '25 min · NL',
    'region.pin.2.title': 'Aken',
    'region.pin.2.sub': '25 min · DE',
    'region.pin.3.title': 'Spa-Francorchamps',
    'region.pin.3.sub': '20 min · BE',
    'region.pin.4.title': 'Luik',
    'region.pin.4.sub': '20 min · BE',

    'host.eyebrow': 'De gastheer',
    'host.title': 'Maxime. En Sushi.',
    'host.body': 'Ik woon hier. Beschikbaar als je iets nodig hebt, discreet als je liever je rust hebt. Ik ken de streek goed en kan je naar de juiste plekken sturen om te eten, te wandelen of te bezoeken. Geen opgelegd programma, geen protocol — gewoon een open huis. Sushi, de rode kat, komt je waarschijnlijk inspecteren. Dat is zijn job.',
    'host.signature': 'Maxime · Superhost sinds 2022',
    'host.sushi': 'Rode kat, sociaal',

    'gallery.eyebrow': 'De rondleiding',
    'gallery.title': 'Elke ruimte heeft zijn sfeer.',

    'reviews.eyebrow': 'De reizigers',
    'reviews.title': '4,91 · 53 reviews · Favoriet van reizigers',
    'reviews.sub': 'Wat mensen zeggen, in hun eigen woorden, in hun eigen taal.',

    'amenities.eyebrow': 'De details',
    'amenities.title': 'Alles wat nodig is, niets overbodigs.',

    'cta.title': 'Zin om te komen?',
    'cta.body': 'Bekijk beschikbare data, prijzen en boek rechtstreeks via Airbnb.',
    'cta.button': 'Bekijk beschikbaarheid',
    'cta.whatsapp': 'Of stuur me een WhatsApp',

    'footer.tagline': 'Eén kamer, één huis, in België.',
    'footer.made': 'Chez Maurisson · Herve, België',

    'lang.switch': 'Taal',
  },
  en: {
    'nav.house': 'The house',
    'nav.room': 'The room',
    'nav.region': 'The region',
    'nav.host': 'The host',
    'nav.reviews': 'Reviews',
    'nav.book': 'Book',
    'nav.music': 'Music Hub',
    'nav.green': 'Green Hub',
    'nav.sites': 'Productions',
    'nav.manuels': 'Manuals',

    'hero.eyebrow': 'Herve · Belgium',
    'hero.title.l1': 'One room',
    'hero.title.l2': 'one house',
    'hero.title.l3': 'to share',
    'hero.sub': '20 minutes from Maastricht, Aachen and Spa-Francorchamps. A piano in the living room, a ginger cat in the garden, and you — finally somewhere else.',
    'hero.cta.primary': 'Check dates',
    'hero.cta.secondary': 'Explore',
    'hero.badge': 'Guest favourite',
    'hero.rating': '4.91 · 53 reviews',

    'intro.title': 'Not a hotel. Not a faceless Airbnb.',
    'intro.body': 'At Maurisson, you rent a room — and you get the keys to the whole house. The living room, the piano, the kitchen, the terrace, the garden, the hammock under the tree. I live here. You\'re at my place, which means you\'re a little at home too.',

    'room.eyebrow': 'Your room',
    'room.title': 'Quiet, on the garden level',
    'room.body': 'Private room with lock, double bed, wooden headboard, cotton linens. You have the whole floor to yourself. A guitar leans against the wall in case the morning asks for it.',
    'room.feature.1.title': 'Lock & privacy',
    'room.feature.1.body': 'Bolt on your door. Dedicated wifi in your room, plus the upstairs network.',
    'room.feature.2.title': 'Double bed',
    'room.feature.2.body': 'Cotton bedding, solid wood headboard, bedside lamp with soft light.',
    'room.feature.3.title': 'Garden level',
    'room.feature.3.body': 'Private floor for you. Guaranteed silence, small window facing the garden.',

    'house.eyebrow': 'The house',
    'house.title': 'Everything else is yours too.',
    'house.body': 'The living room and its guitars, the upright piano against the Orla Kiely wallpaper, the fully-equipped kitchen with your own shelf in the fridge, the dining table, the espresso machine, the terrace, the garden, the hammock. Nothing is off-limits. It\'s a living house — if you feel like putting a playlist on, go ahead.',
    'house.tile.1': 'Living room & instruments',
    'house.tile.2': 'Upright piano',
    'house.tile.3': 'Full kitchen',
    'house.tile.4': 'Terrace & BBQ',
    'house.tile.5': 'Garden & hammock',
    'house.tile.6': 'Modern bathroom',

    'region.eyebrow': 'The region',
    'region.title': 'Between three countries.',
    'region.body': 'Herve, in the heart of the Pays de Herve, between Liège, Maastricht and Aachen. Belgian green, rolling hills, farmsteads. Spa-Francorchamps 20 minutes away for the gearheads, the High Fens a bit further for walkers. Highway two minutes away, dead-end street facing a green space: quiet, central, the right balance.',
    'region.pin.1.title': 'Maastricht',
    'region.pin.1.sub': '25 min · NL',
    'region.pin.2.title': 'Aachen',
    'region.pin.2.sub': '25 min · DE',
    'region.pin.3.title': 'Spa-Francorchamps',
    'region.pin.3.sub': '20 min · BE',
    'region.pin.4.title': 'Liège',
    'region.pin.4.sub': '20 min · BE',

    'host.eyebrow': 'The host',
    'host.title': 'Maxime. And Sushi.',
    'host.body': 'I live here. Available if you need something, discreet if you\'d rather be on your own. I know the region well and can point you to the right places to eat, hike or visit. No schedule imposed, no protocol — just an open house. Sushi, the ginger cat, will probably come and inspect you. That\'s his job.',
    'host.signature': 'Maxime · Superhost since 2022',
    'host.sushi': 'Ginger cat, social',

    'gallery.eyebrow': 'The tour',
    'gallery.title': 'Every room has its own mood.',

    'reviews.eyebrow': 'The guests',
    'reviews.title': '4.91 · 53 reviews · Guest favourite',
    'reviews.sub': 'What people say, in their own words, in their own languages.',

    'amenities.eyebrow': 'The details',
    'amenities.title': 'Everything needed, nothing in the way.',

    'cta.title': 'Ready to drop your bags?',
    'cta.body': 'See available dates, prices and book directly on Airbnb.',
    'cta.button': 'Check availability',
    'cta.whatsapp': 'Or message me on WhatsApp',

    'footer.tagline': 'One room, one house, in Belgium.',
    'footer.made': 'Chez Maurisson · Herve, Belgium',

    'lang.switch': 'Language',
  },
  de: {
    'nav.house': 'Das Haus',
    'nav.room': 'Das Zimmer',
    'nav.region': 'Die Region',
    'nav.host': 'Der Gastgeber',
    'nav.reviews': 'Bewertungen',
    'nav.book': 'Buchen',
    'nav.music': 'Music Hub',
    'nav.green': 'Green Hub',
    'nav.sites': 'Produktionen',
    'nav.manuels': 'Anleitungen',

    'hero.eyebrow': 'Herve · Belgien',
    'hero.title.l1': 'Ein Zimmer',
    'hero.title.l2': 'ein Haus',
    'hero.title.l3': 'zum Teilen',
    'hero.sub': '20 Minuten von Maastricht, Aachen und Spa-Francorchamps entfernt. Ein Klavier im Wohnzimmer, eine rote Katze im Garten — und Sie, endlich anderswo.',
    'hero.cta.primary': 'Termine prüfen',
    'hero.cta.secondary': 'Entdecken',
    'hero.badge': 'Gästeliebling',
    'hero.rating': '4,91 · 53 Bewertungen',

    'intro.title': 'Kein Hotel. Kein gesichtsloses Airbnb.',
    'intro.body': 'Bei Maurisson mieten Sie ein Zimmer — und bekommen den Schlüssel zum ganzen Haus. Das Wohnzimmer, das Klavier, die Küche, die Terrasse, den Garten, die Hängematte unter dem Baum. Ich lebe hier. Sie sind bei mir zu Hause — also auch ein bisschen bei sich selbst.',

    'room.eyebrow': 'Ihr Zimmer',
    'room.title': 'Ruhig, auf Gartenebene',
    'room.body': 'Privates Zimmer mit Schloss, Doppelbett, Holzkopfteil, Baumwollwäsche. Sie haben das Stockwerk für sich. Eine Gitarre lehnt an der Wand — falls der Morgen danach fragt.',
    'room.feature.1.title': 'Schloss & Privatsphäre',
    'room.feature.1.body': 'Riegel an Ihrer Tür. Eigenes WLAN im Zimmer, plus das obere Netzwerk.',
    'room.feature.2.title': 'Doppelbett',
    'room.feature.2.body': 'Baumwollwäsche, massives Holzkopfteil, Nachttischlampe mit weichem Licht.',
    'room.feature.3.title': 'Gartenebene',
    'room.feature.3.body': 'Eigene Etage. Garantierte Ruhe, kleines Fenster zum Garten.',

    'house.eyebrow': 'Das Haus',
    'house.title': 'Der Rest gehört auch Ihnen.',
    'house.body': 'Das Wohnzimmer mit seinen Gitarren, das Klavier vor der Orla-Kiely-Tapete, die voll ausgestattete Küche mit Ihrem Fach im Kühlschrank, der Esstisch, die Espressomaschine, die Terrasse, der Garten, die Hängematte. Nichts ist abgesperrt. Es ist ein lebendiges Haus — wenn Sie Lust auf eine Playlist haben, legen Sie los.',
    'house.tile.1': 'Wohnzimmer & Instrumente',
    'house.tile.2': 'Klavier',
    'house.tile.3': 'Volle Küche',
    'house.tile.4': 'Terrasse & Grill',
    'house.tile.5': 'Garten & Hängematte',
    'house.tile.6': 'Modernes Bad',

    'region.eyebrow': 'Die Region',
    'region.title': 'Zwischen drei Ländern.',
    'region.body': 'Herve, im Herzen des Pays de Herve, zwischen Lüttich, Maastricht und Aachen. Belgisches Grün, sanfte Hügel, Bauernhöfe. Spa-Francorchamps in 20 Minuten für die Fans, die Hohen Fenne etwas weiter für Wanderer. Autobahn zwei Minuten entfernt, Sackgasse gegenüber einer Grünfläche: ruhig, zentral, die richtige Balance.',
    'region.pin.1.title': 'Maastricht',
    'region.pin.1.sub': '25 Min · NL',
    'region.pin.2.title': 'Aachen',
    'region.pin.2.sub': '25 Min · DE',
    'region.pin.3.title': 'Spa-Francorchamps',
    'region.pin.3.sub': '20 Min · BE',
    'region.pin.4.title': 'Lüttich',
    'region.pin.4.sub': '20 Min · BE',

    'host.eyebrow': 'Der Gastgeber',
    'host.title': 'Maxime. Und Sushi.',
    'host.body': 'Ich wohne hier. Verfügbar, wenn Sie etwas brauchen, diskret, wenn Sie Ihre Ruhe bevorzugen. Ich kenne die Region gut und kann Sie zu den richtigen Orten zum Essen, Wandern oder Besuchen lenken. Kein aufgezwungenes Programm, kein Protokoll — nur ein offenes Haus. Sushi, die rote Katze, wird Sie wahrscheinlich inspizieren. Das ist ihr Job.',
    'host.signature': 'Maxime · Superhost seit 2022',
    'host.sushi': 'Rote Katze, sozial',

    'gallery.eyebrow': 'Der Rundgang',
    'gallery.title': 'Jeder Raum hat seine Stimmung.',

    'reviews.eyebrow': 'Die Gäste',
    'reviews.title': '4,91 · 53 Bewertungen · Gästeliebling',
    'reviews.sub': 'Was Menschen sagen, in ihren eigenen Worten, in ihrer Sprache.',

    'amenities.eyebrow': 'Die Details',
    'amenities.title': 'Alles Nötige, nichts Überflüssiges.',

    'cta.title': 'Bereit, die Koffer abzustellen?',
    'cta.body': 'Verfügbare Termine, Preise und Buchung direkt bei Airbnb.',
    'cta.button': 'Verfügbarkeit prüfen',
    'cta.whatsapp': 'Oder schreiben Sie mir per WhatsApp',

    'footer.tagline': 'Ein Zimmer, ein Haus, in Belgien.',
    'footer.made': 'Chez Maurisson · Herve, Belgien',

    'lang.switch': 'Sprache',
  },
} as const;

export type UIKey = keyof typeof ui.fr;

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function localizedPath(lang: Lang, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  if (lang === defaultLang) return '/' + clean;
  return '/' + lang + '/' + clean;
}
