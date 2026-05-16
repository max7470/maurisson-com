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
    metaTitle: 'Mentions légales & vie privée — Chez Maurisson',
    metaDescription: 'Mentions légales, politique de confidentialité et cookies du site maurisson.com.',
    eyebrow: 'Mentions',
    title: 'Mentions légales & vie privée',
    intro: 'Mentions légales, vie privée et cookies applicables au site maurisson.com.',
    lastUpdated: 'Dernière mise à jour : 16 mai 2026',
    back: 'Retour à l\'accueil',
    sections: [
      {
        heading: 'Éditeur',
        body: 'Maxime Kleinkenberg, Herve, Belgique. Contact : contact@maurisson.com.',
      },
      {
        heading: 'Hébergement',
        body: 'Le site est hébergé sur un serveur loué en Europe.',
      },
      {
        heading: 'Données personnelles & cookies',
        body: 'Aucune donnée nominative n\'est collectée automatiquement à votre arrivée sur le site. Si vous écrivez à contact@maurisson.com, votre adresse email est conservée le temps nécessaire au traitement de votre demande.\n\nLe site utilise Google Analytics 4 pour mesurer la fréquentation de façon agrégée. Deux cookies techniques (_ga, _ga_*) sont déposés à votre première visite et peuvent être bloqués par votre navigateur. Aucun cookie publicitaire, aucun tracking tiers.\n\nConformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et d\'effacement sur les données vous concernant. Pour l\'exercer : contact@maurisson.com.',
      },
      {
        heading: 'Réservations',
        body: 'La réservation, le paiement et les annulations s\'effectuent via la plateforme Airbnb. Les Conditions Générales d\'Airbnb s\'appliquent à toute réservation.',
      },
      {
        heading: 'Contenus issus de sources tierces',
        body: 'Certaines parties du site (Music Hub, Green Hub) affichent ou réutilisent des données issues de bases collaboratives et de services tiers. L\'usage est strictement personnel et non commercial. Toute demande de retrait ou de rectification est traitée sous 48 heures à contact@maurisson.com.',
      },
      {
        heading: 'Propriété intellectuelle',
        body: 'Sauf mention contraire, les textes, photographies et code source du site sont la propriété de Maxime Kleinkenberg. Toute reproduction sans autorisation préalable est interdite. Les marques tierces citées appartiennent à leurs propriétaires respectifs.',
      },
      {
        heading: 'Droit applicable',
        body: 'Le présent site est soumis au droit belge. Les tribunaux de Liège sont seuls compétents en cas de litige.',
      },
    ],
  },
  nl: {
    metaTitle: 'Juridische vermeldingen & privacy — Chez Maurisson',
    metaDescription: 'Juridische vermeldingen, privacybeleid en cookies van maurisson.com.',
    eyebrow: 'Vermeldingen',
    title: 'Juridische vermeldingen & privacy',
    intro: 'Juridische vermeldingen, privacy en cookies van toepassing op de site maurisson.com.',
    lastUpdated: 'Laatst bijgewerkt: 16 mei 2026',
    back: 'Terug naar de homepagina',
    sections: [
      {
        heading: 'Uitgever',
        body: 'Maxime Kleinkenberg, Herve, België. Contact: contact@maurisson.com.',
      },
      {
        heading: 'Hosting',
        body: 'De site wordt gehost op een gehuurde server in Europa.',
      },
      {
        heading: 'Persoonsgegevens & cookies',
        body: 'Bij het bezoek aan de site worden geen persoonsgegevens automatisch verzameld. Stuur je een e-mail naar contact@maurisson.com, dan wordt je e-mailadres bewaard zolang dat nodig is voor de behandeling van je vraag.\n\nDe site gebruikt Google Analytics 4 om bezoekersaantallen geaggregeerd te meten. Twee technische cookies (_ga, _ga_*) worden bij je eerste bezoek geplaatst en kunnen door je browser worden geblokkeerd. Geen reclame-cookies, geen tracking van derden.\n\nConform de AVG heb je recht op inzage, rectificatie en wissing van de gegevens die op jou betrekking hebben. Stuur daarvoor een e-mail naar contact@maurisson.com.',
      },
      {
        heading: 'Boekingen',
        body: 'Boeking, betaling en annulering verlopen via het Airbnb-platform. De Algemene Voorwaarden van Airbnb zijn van toepassing op elke boeking.',
      },
      {
        heading: 'Inhoud uit derde bronnen',
        body: 'Bepaalde delen van de site (Music Hub, Green Hub) tonen of hergebruiken gegevens uit collaboratieve databanken en diensten van derden. Het gebruik is strikt persoonlijk en niet-commercieel. Elke aanvraag tot verwijdering of rectificatie wordt binnen 48 uur behandeld via contact@maurisson.com.',
      },
      {
        heading: 'Intellectuele eigendom',
        body: 'Tenzij anders vermeld, zijn de teksten, foto\'s en broncode van de site eigendom van Maxime Kleinkenberg. Elke reproductie zonder voorafgaande toestemming is verboden. De vermelde merken van derden blijven eigendom van hun respectievelijke eigenaars.',
      },
      {
        heading: 'Toepasselijk recht',
        body: 'Deze site is onderworpen aan het Belgisch recht. De rechtbanken van Luik zijn exclusief bevoegd in geval van geschil.',
      },
    ],
  },
  en: {
    metaTitle: 'Legal notice & privacy — Chez Maurisson',
    metaDescription: 'Legal notice, privacy policy and cookies of maurisson.com.',
    eyebrow: 'Legal',
    title: 'Legal notice & privacy',
    intro: 'Legal notice, privacy and cookies applicable to maurisson.com.',
    lastUpdated: 'Last updated: 16 May 2026',
    back: 'Back to the homepage',
    sections: [
      {
        heading: 'Publisher',
        body: 'Maxime Kleinkenberg, Herve, Belgium. Contact: contact@maurisson.com.',
      },
      {
        heading: 'Hosting',
        body: 'The site is hosted on a rented server in Europe.',
      },
      {
        heading: 'Personal data & cookies',
        body: 'No personal data is automatically collected when you visit the site. If you write to contact@maurisson.com, your email address is kept for as long as necessary to handle your request.\n\nThe site uses Google Analytics 4 to measure traffic in an aggregated way. Two technical cookies (_ga, _ga_*) are set on your first visit and can be blocked by your browser. No advertising cookies, no third-party tracking.\n\nUnder GDPR, you have a right of access, rectification and erasure regarding the data concerning you. To exercise these rights: contact@maurisson.com.',
      },
      {
        heading: 'Bookings',
        body: 'Booking, payment and cancellations are handled through the Airbnb platform. Airbnb\'s Terms and Conditions apply to every booking.',
      },
      {
        heading: 'Third-party content',
        body: 'Some parts of the site (Music Hub, Green Hub) display or reuse data from collaborative databases and third-party services. Use is strictly personal and non-commercial. Any request for removal or rectification is handled within 48 hours at contact@maurisson.com.',
      },
      {
        heading: 'Intellectual property',
        body: 'Unless stated otherwise, the texts, photographs and source code of the site are the property of Maxime Kleinkenberg. Any reproduction without prior authorisation is forbidden. Third-party trademarks mentioned remain the property of their respective owners.',
      },
      {
        heading: 'Applicable law',
        body: 'This site is governed by Belgian law. The courts of Liège have exclusive jurisdiction in case of dispute.',
      },
    ],
  },
  de: {
    metaTitle: 'Impressum & Datenschutz — Chez Maurisson',
    metaDescription: 'Impressum, Datenschutzerklärung und Cookies von maurisson.com.',
    eyebrow: 'Impressum',
    title: 'Impressum & Datenschutz',
    intro: 'Impressum, Datenschutz und Cookies für die Website maurisson.com.',
    lastUpdated: 'Zuletzt aktualisiert: 16. Mai 2026',
    back: 'Zurück zur Startseite',
    sections: [
      {
        heading: 'Herausgeber',
        body: 'Maxime Kleinkenberg, Herve, Belgien. Kontakt: contact@maurisson.com.',
      },
      {
        heading: 'Hosting',
        body: 'Die Website wird auf einem gemieteten Server in Europa gehostet.',
      },
      {
        heading: 'Personenbezogene Daten & Cookies',
        body: 'Beim Besuch der Website werden keine personenbezogenen Daten automatisch erhoben. Senden Sie eine E-Mail an contact@maurisson.com, wird Ihre E-Mail-Adresse so lange aufbewahrt, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist.\n\nDie Website verwendet Google Analytics 4, um die Reichweite aggregiert zu messen. Zwei technische Cookies (_ga, _ga_*) werden beim ersten Besuch gesetzt und können von Ihrem Browser blockiert werden. Keine Werbe-Cookies, kein Tracking durch Dritte.\n\nGemäß DSGVO haben Sie ein Recht auf Auskunft, Berichtigung und Löschung der Sie betreffenden Daten. Zur Ausübung dieser Rechte: contact@maurisson.com.',
      },
      {
        heading: 'Buchungen',
        body: 'Buchung, Zahlung und Stornierung erfolgen über die Plattform Airbnb. Die AGB von Airbnb gelten für jede Buchung.',
      },
      {
        heading: 'Inhalte aus Dritt-Quellen',
        body: 'Einige Teile der Website (Music Hub, Green Hub) zeigen oder verwenden Daten aus kollaborativen Datenbanken und Diensten Dritter. Die Nutzung ist ausschließlich privat und nicht kommerziell. Jede Anfrage zur Entfernung oder Berichtigung wird binnen 48 Stunden über contact@maurisson.com bearbeitet.',
      },
      {
        heading: 'Urheberrecht',
        body: 'Sofern nicht anders angegeben, sind die Texte, Fotografien und der Quellcode der Website Eigentum von Maxime Kleinkenberg. Jede Vervielfältigung ohne vorherige Genehmigung ist untersagt. Genannte Marken Dritter bleiben Eigentum ihrer jeweiligen Inhaber.',
      },
      {
        heading: 'Anwendbares Recht',
        body: 'Diese Website unterliegt belgischem Recht. Die Gerichte in Lüttich sind im Streitfall ausschließlich zuständig.',
      },
    ],
  },
};
