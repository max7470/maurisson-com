import type { Lang } from './ui';

export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
  back: string;
}

export const legal: Record<Lang, LegalContent> = {
  fr: {
    metaTitle: 'Mentions, vie privée & règles de la maison — Chez Maurisson',
    metaDescription: 'Mentions légales, politique de confidentialité, cookies et conditions de séjour de maurisson.com.',
    eyebrow: 'Mentions',
    title: 'Mentions, vie privée & règles de la maison',
    intro: 'Petit site personnel, mentions légales courtes mais propres. Voici qui édite quoi, ce qu\'on garde (presque rien), comment exercer ses droits, et la poignée de règles qui rendent une maison vivable. Pour le reste, c\'est l\'esprit de la maison : on parle quand il y a un sujet.',
    lastUpdated: 'Dernière mise à jour : 16 mai 2026',
    back: 'Retour à l\'accueil',
    sections: [
      {
        heading: 'L\'éditeur',
        body: 'Maxime Kleinkenberg — alias Maurisson pour le piano, le jardin et internet. Hôte Airbnb depuis 2022, développeur par passion, musicien quand le clavier l\'appelle, jardinier quand les plantes se plaignent. J\'édite ce site à titre personnel, depuis Herve, en Belgique.\n\nPour me joindre, un seul canal : contact@maurisson.com. Je lis tout, je réponds vite.',
      },
      {
        heading: 'L\'hébergement',
        body: 'Le site tourne sur un serveur loué en Europe, derrière un proxy DNS classique. Rien d\'exotique, rien à signaler. Si vous avez besoin de plus de détail pour une raison précise — recours, audit, simple curiosité technique — écrivez, je donne.',
      },
      {
        heading: 'Vos données',
        body: 'Aucune donnée nominative n\'est collectée quand vous arrivez ici : pas de formulaire d\'inscription, pas de tracking publicitaire, pas de pixel social. Le site mesure simplement, de façon agrégée, combien de personnes passent et d\'où elles viennent — c\'est Google Analytics, qui dépose deux cookies techniques que votre navigateur peut bloquer à tout moment.\n\nSi vous m\'écrivez, je garde votre adresse email le temps de répondre, puis je la range avec le reste. Si vous réservez la chambre via Airbnb, c\'est Airbnb qui gère vos données — pas moi.\n\nConformément au RGPD, vous avez le droit d\'accéder à ce qu\'on aurait sur vous, de le corriger, de le faire effacer. Un email à contact@maurisson.com suffit, je traite ça sous 48 heures.',
      },
      {
        heading: 'Conditions de séjour',
        body: 'La réservation, le paiement et les annulations passent par Airbnb : ce sont leurs Conditions Générales qui font foi. Une fois sur place, vous êtes dans une maison, pas dans une chaîne.\n\nQuelques règles courtes, posées comme on poserait des serviettes propres :\n— Vous arrivez quand ça vous arrange. Un message la veille suffit.\n— La chambre est à vous, toute la maison aussi : piano, cuisine, terrasse, jardin, hamac.\n— Sushi, le chat roux, est inclus dans le tarif. Il viendra vous inspecter — c\'est son boulot.\n— Le piano accepte les jeux raisonnables. Disons pas à 7h, pas à 23h.\n— Vous avez votre étagère dans le frigo. Le café du matin est offert.\n— Pas de fête, pas de groupes : c\'est une maison, pas une salle.\n— On fume dehors, on respecte le voisinage, on referme le portail derrière soi.\n\nLe reste se règle en parlant. Ça a très bien marché pendant 62 séjours, ça devrait continuer.',
      },
      {
        heading: 'Contenus issus de sources tierces',
        body: 'Certaines parties du site (Music Hub, Green Hub) affichent ou réutilisent des données issues de bases collaboratives et de services tiers. L\'usage est strictement personnel et non commercial.\n\nSi vous êtes ayant droit et que vous souhaitez le retrait d\'un contenu, une rectification, ou simplement discuter de l\'usage : écrivez à contact@maurisson.com. Toute demande sérieuse est traitée sous 48 heures.',
      },
      {
        heading: 'Propriété intellectuelle',
        body: 'Les textes, les photos, le code, les guides — tout ce qu\'il y a ici est fait à la main, à Herve. Si quelque chose vous plaît assez pour le reprendre, écrivez : on trouve toujours un arrangement, en général c\'est juste une question d\'attribution.\n\nLes noms et logos cités (Airbnb, Spotify, PlantNet, Google Analytics, et les autres) appartiennent à leurs propriétaires. Je m\'en sers, je ne les revendique pas.',
      },
      {
        heading: 'Droit applicable',
        body: 'Tout ça est soumis au droit belge. En cas de désaccord et faute de discussion possible, les tribunaux de Liège sont compétents.\n\nMais franchement, un café et une conversation suffisent neuf fois sur dix. C\'est aussi ça, recevoir chez soi.',
      },
    ],
  },
  nl: {
    metaTitle: 'Vermeldingen, privacy & huisregels — Chez Maurisson',
    metaDescription: 'Juridische vermeldingen, privacybeleid, cookies en verblijfsvoorwaarden van maurisson.com.',
    eyebrow: 'Vermeldingen',
    title: 'Vermeldingen, privacy & huisregels',
    intro: 'Klein persoonlijk site, korte maar nette juridische vermeldingen. Hier vind je wie wat uitgeeft, wat we bijhouden (bijna niets), hoe je je rechten kunt uitoefenen, en het handvol regels dat een huis leefbaar houdt. Voor de rest geldt de geest van het huis: we praten als er een onderwerp is.',
    lastUpdated: 'Laatst bijgewerkt: 16 mei 2026',
    back: 'Terug naar de homepagina',
    sections: [
      {
        heading: 'De uitgever',
        body: 'Maxime Kleinkenberg — voor de piano, de tuin en het internet ook bekend als Maurisson. Airbnb-gastheer sinds 2022, ontwikkelaar uit passie, muzikant als de toetsen roepen, tuinier als de planten klagen. Ik geef deze site persoonlijk uit, vanuit Herve in België.\n\nEén enkel contactkanaal: contact@maurisson.com. Ik lees alles en antwoord snel.',
      },
      {
        heading: 'De hosting',
        body: 'De site staat op een gehuurde server in Europa, achter een gewone DNS-proxy. Niets exotisch, niets te melden. Heb je om een specifieke reden meer detail nodig — geschil, audit, technische nieuwsgierigheid — stuur een mailtje, dan deel ik het.',
      },
      {
        heading: 'Jouw gegevens',
        body: 'Bij het bezoek aan deze site worden geen persoonsgegevens automatisch verzameld: geen aanmeldformulier, geen reclame-tracking, geen social-media-pixel. De site meet enkel geaggregeerd hoeveel mensen voorbijkomen en vanwaar — dat is Google Analytics, dat twee technische cookies plaatst die je browser op elk moment kan blokkeren.\n\nStuur je me een e-mail, dan bewaar ik je adres zolang dat nodig is om te antwoorden, en archiveer het daarna met de rest. Boek je de kamer via Airbnb, dan beheert Airbnb je gegevens — niet ik.\n\nConform de AVG heb je recht op inzage in wat wij eventueel over jou hebben, op rectificatie en op wissing. Een e-mail naar contact@maurisson.com volstaat, ik behandel het binnen 48 uur.',
      },
      {
        heading: 'Verblijfsvoorwaarden',
        body: 'Boeking, betaling en annuleringen verlopen via Airbnb: hun Algemene Voorwaarden gelden. Eens ter plaatse zit je in een huis, niet in een keten.\n\nEen paar korte regels, gelegd zoals je schone handdoeken neerlegt:\n— Je komt aan wanneer het je uitkomt. Een berichtje de avond ervoor volstaat.\n— De kamer is van jou, het hele huis ook: piano, keuken, terras, tuin, hangmat.\n— Sushi, de rode kat, zit in het tarief. Hij komt je inspecteren — dat is zijn job.\n— De piano staat open voor redelijke speelmomenten. Zeg maar niet om 7u, niet om 23u.\n— Je hebt je eigen plek in de koelkast. De ochtendkoffie wordt aangeboden.\n— Geen feestjes, geen groepen: het is een huis, geen zaal.\n— We roken buiten, respecteren de buren, sluiten het hek achter ons.\n\nDe rest wordt al pratend opgelost. Dat liep al 62 verblijven prima, dat zou moeten blijven duren.',
      },
      {
        heading: 'Inhoud uit derde bronnen',
        body: 'Bepaalde delen van de site (Music Hub, Green Hub) tonen of hergebruiken gegevens uit collaboratieve databanken en diensten van derden. Het gebruik is strikt persoonlijk en niet-commercieel.\n\nBen je rechthebbende en wens je de verwijdering van een inhoud, een rectificatie of gewoon een gesprek over het gebruik: schrijf naar contact@maurisson.com. Elke serieuze aanvraag wordt binnen 48 uur behandeld.',
      },
      {
        heading: 'Intellectuele eigendom',
        body: 'De teksten, foto\'s, code, handleidingen — alles wat hier staat, is met de hand gemaakt, in Herve. Bevalt je iets genoeg om het over te nemen? Schrijf even: we vinden altijd een regeling, meestal volstaat een vermelding.\n\nDe genoemde namen en logo\'s (Airbnb, Spotify, PlantNet, Google Analytics en de anderen) zijn eigendom van hun rechthebbenden. Ik gebruik ze, ik claim ze niet.',
      },
      {
        heading: 'Toepasselijk recht',
        body: 'Dit alles valt onder Belgisch recht. Bij geschil en bij gebrek aan minnelijke regeling zijn de rechtbanken van Luik bevoegd.\n\nMaar eerlijk gezegd, een koffie en een gesprek volstaan negen op de tien keer. Ook dat is gasten ontvangen.',
      },
    ],
  },
  en: {
    metaTitle: 'Notice, privacy & house rules — Chez Maurisson',
    metaDescription: 'Legal notice, privacy policy, cookies and house rules of maurisson.com.',
    eyebrow: 'Legal',
    title: 'Notice, privacy & house rules',
    intro: 'Small personal site, short but clean legal notice. Here\'s who publishes what, what we keep (almost nothing), how to exercise your rights, and the handful of rules that make a house liveable. For the rest, the house spirit applies: we talk when there\'s something to talk about.',
    lastUpdated: 'Last updated: 16 May 2026',
    back: 'Back to the homepage',
    sections: [
      {
        heading: 'The publisher',
        body: 'Maxime Kleinkenberg — also known as Maurisson when it comes to piano, garden and the internet. Airbnb host since 2022, developer by passion, musician when the keys call, gardener when the plants complain. I publish this site personally, from Herve, Belgium.\n\nOne contact channel: contact@maurisson.com. I read everything and reply quickly.',
      },
      {
        heading: 'Hosting',
        body: 'The site runs on a rented server in Europe, behind a regular DNS proxy. Nothing exotic, nothing to flag. If you need more detail for a specific reason — dispute, audit, plain technical curiosity — write, I\'ll share.',
      },
      {
        heading: 'Your data',
        body: 'No personal data is collected automatically when you arrive: no sign-up form, no advertising tracking, no social pixel. The site simply measures, in aggregate, how many people pass through and where they come from — that\'s Google Analytics, which sets two technical cookies your browser can block at any time.\n\nIf you email me, I keep your address for as long as it takes to reply, then archive it with the rest. If you book the room via Airbnb, Airbnb handles your data — not me.\n\nUnder GDPR, you have the right to access whatever we may have on you, to correct it, to have it erased. An email to contact@maurisson.com is enough — I handle it within 48 hours.',
      },
      {
        heading: 'House rules',
        body: 'Booking, payment and cancellations go through Airbnb: their Terms apply. Once you\'re here, you\'re in a house, not in a chain.\n\nA few short rules, laid out like clean towels:\n— You arrive when it suits you. A message the night before is plenty.\n— The room is yours, so is the whole house: piano, kitchen, terrace, garden, hammock.\n— Sushi, the ginger cat, is included in the price. He\'ll come and inspect you — that\'s his job.\n— The piano is open for reasonable playing. Say, not at 7am, not at 11pm.\n— You have your own shelf in the fridge. Morning coffee is on the house.\n— No parties, no groups: it\'s a home, not a venue.\n— We smoke outside, respect the neighbours, and close the gate behind us.\n\nThe rest gets sorted by talking. That\'s worked for 62 stays, it should keep working.',
      },
      {
        heading: 'Third-party content',
        body: 'Some parts of the site (Music Hub, Green Hub) display or reuse data from collaborative databases and third-party services. Use is strictly personal and non-commercial.\n\nIf you\'re a rights holder and would like a piece of content removed, a correction, or simply a conversation about usage: write to contact@maurisson.com. Any serious request is handled within 48 hours.',
      },
      {
        heading: 'Intellectual property',
        body: 'The texts, photos, code, guides — everything here is hand-made, in Herve. If something appeals enough to reuse, write: we\'ll always find an arrangement, usually it\'s just a matter of attribution.\n\nThe names and logos mentioned (Airbnb, Spotify, PlantNet, Google Analytics, and the others) belong to their owners. I use them, I don\'t claim them.',
      },
      {
        heading: 'Applicable law',
        body: 'All of this is governed by Belgian law. In the event of a disagreement and absent any amicable resolution, the courts of Liège have jurisdiction.\n\nBut honestly, a coffee and a conversation work nine times out of ten. That\'s also part of hosting.',
      },
    ],
  },
  de: {
    metaTitle: 'Hinweise, Datenschutz & Hausregeln — Chez Maurisson',
    metaDescription: 'Impressum, Datenschutzerklärung, Cookies und Aufenthaltsbedingungen von maurisson.com.',
    eyebrow: 'Impressum',
    title: 'Hinweise, Datenschutz & Hausregeln',
    intro: 'Kleine persönliche Website, kurze aber saubere rechtliche Hinweise. Hier finden Sie, wer was herausgibt, was wir aufbewahren (fast nichts), wie Sie Ihre Rechte ausüben, und die Handvoll Regeln, die ein Haus bewohnbar machen. Für den Rest gilt der Geist des Hauses: Wir sprechen, wenn es etwas zu besprechen gibt.',
    lastUpdated: 'Zuletzt aktualisiert: 16. Mai 2026',
    back: 'Zurück zur Startseite',
    sections: [
      {
        heading: 'Der Herausgeber',
        body: 'Maxime Kleinkenberg — fürs Klavier, den Garten und das Internet auch als Maurisson bekannt. Airbnb-Gastgeber seit 2022, Entwickler aus Leidenschaft, Musiker, wenn die Tasten rufen, Gärtner, wenn sich die Pflanzen beschweren. Ich gebe diese Website privat heraus, aus Herve in Belgien.\n\nEin einziger Kontaktkanal: contact@maurisson.com. Ich lese alles und antworte schnell.',
      },
      {
        heading: 'Hosting',
        body: 'Die Website läuft auf einem gemieteten Server in Europa, hinter einem üblichen DNS-Proxy. Nichts Exotisches, nichts Auffälliges. Brauchen Sie aus einem konkreten Grund mehr Detail — Streitfall, Audit, technische Neugier — schreiben Sie, ich teile es.',
      },
      {
        heading: 'Ihre Daten',
        body: 'Beim Besuch dieser Website werden keine personenbezogenen Daten automatisch erhoben: kein Anmeldeformular, kein Werbe-Tracking, kein Social-Media-Pixel. Die Website misst lediglich aggregiert, wie viele Personen vorbeikommen und woher sie stammen — das ist Google Analytics, das zwei technische Cookies setzt, die Ihr Browser jederzeit blockieren kann.\n\nSchreiben Sie mir eine E-Mail, bewahre ich Ihre Adresse so lange auf, wie es zur Beantwortung nötig ist, und archiviere sie danach mit dem Rest. Buchen Sie das Zimmer über Airbnb, verwaltet Airbnb Ihre Daten — nicht ich.\n\nGemäß DSGVO haben Sie das Recht auf Auskunft über das, was wir eventuell über Sie haben, auf Berichtigung und auf Löschung. Eine E-Mail an contact@maurisson.com genügt — ich bearbeite sie innerhalb von 48 Stunden.',
      },
      {
        heading: 'Aufenthaltsbedingungen',
        body: 'Buchung, Zahlung und Stornierung laufen über Airbnb: es gelten deren AGB. Vor Ort sind Sie in einem Haus, nicht in einer Kette.\n\nEin paar kurze Regeln, hingelegt wie saubere Handtücher:\n— Sie kommen an, wann es Ihnen passt. Eine Nachricht am Vorabend genügt.\n— Das Zimmer gehört Ihnen, das ganze Haus auch: Klavier, Küche, Terrasse, Garten, Hängematte.\n— Sushi, die rote Katze, ist im Preis inbegriffen. Sie kommt zur Inspektion — das ist ihr Job.\n— Das Klavier steht für vernünftige Spielzeiten offen. Sagen wir nicht um 7 Uhr, nicht um 23 Uhr.\n— Sie haben Ihr Fach im Kühlschrank. Der Morgenkaffee geht aufs Haus.\n— Keine Partys, keine Gruppen: Es ist ein Zuhause, kein Saal.\n— Wir rauchen draußen, respektieren die Nachbarn und schließen das Tor hinter uns.\n\nDer Rest klärt sich im Gespräch. Das hat 62 Aufenthalte lang funktioniert, das sollte so bleiben.',
      },
      {
        heading: 'Inhalte aus Dritt-Quellen',
        body: 'Einige Teile der Website (Music Hub, Green Hub) zeigen oder verwenden Daten aus kollaborativen Datenbanken und Diensten Dritter. Die Nutzung ist ausschließlich privat und nicht kommerziell.\n\nSind Sie Rechteinhaber und wünschen die Entfernung eines Inhalts, eine Berichtigung oder einfach ein Gespräch über die Nutzung: Schreiben Sie an contact@maurisson.com. Jede ernsthafte Anfrage wird binnen 48 Stunden bearbeitet.',
      },
      {
        heading: 'Urheberrecht',
        body: 'Die Texte, Fotos, der Code, die Anleitungen — alles hier ist handgemacht, in Herve. Gefällt Ihnen etwas genug, um es zu übernehmen, schreiben Sie: Wir finden immer eine Lösung, meist ist es eine Frage der Quellenangabe.\n\nDie genannten Namen und Logos (Airbnb, Spotify, PlantNet, Google Analytics und die anderen) gehören ihren Inhabern. Ich nutze sie, ich beanspruche sie nicht.',
      },
      {
        heading: 'Anwendbares Recht',
        body: 'All dies unterliegt belgischem Recht. Bei Streitfällen und mangels gütlicher Einigung sind die Gerichte in Lüttich zuständig.\n\nAber ehrlich gesagt, ein Kaffee und ein Gespräch reichen in neun von zehn Fällen. Auch das gehört zum Gastgeben.',
      },
    ],
  },
};
