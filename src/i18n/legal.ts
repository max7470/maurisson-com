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
    metaTitle: 'Mentions légales — Chez Maurisson',
    metaDescription: 'Mentions légales, politique de confidentialité et cookies du site maurisson.com.',
    eyebrow: 'Mentions',
    title: 'Mentions légales, vie privée & cookies',
    intro: 'Ce site est édité à titre personnel par Maxime Kleinkenberg. Il présente une chambre d\'hôtes louée via Airbnb et quelques projets personnels (Music Hub, Green Hub, Productions, Manuels). Voici, en clair, qui édite quoi, ce qui est collecté, et comment exercer vos droits.',
    lastUpdated: 'Dernière mise à jour : 16 mai 2026',
    back: 'Retour à l\'accueil',
    sections: [
      {
        heading: 'Éditeur du site',
        body: 'Maxime Kleinkenberg — Herve, Belgique.\nContact : contact@maurisson.com.\n\nLe site maurisson.com est édité à titre personnel et ne constitue pas une activité commerciale en propre. La chambre d\'hôtes est louée et facturée via la plateforme Airbnb ; les conditions générales d\'Airbnb s\'appliquent à toute réservation.',
      },
      {
        heading: 'Hébergement',
        body: 'Le site est hébergé sur un serveur Hetzner Online GmbH (Falkenstein, Allemagne), déployé via Coolify, derrière un proxy DNS Cloudflare, Inc. (San Francisco, États-Unis). Les emails contact@maurisson.com sont routés par Cloudflare Email Routing vers une boîte Gmail (Google Ireland Ltd.).',
      },
      {
        heading: 'Données personnelles & RGPD',
        body: 'Aucune donnée nominative n\'est collectée automatiquement à votre arrivée sur le site. Si vous écrivez à contact@maurisson.com, votre adresse email et le contenu de votre message sont conservés le temps nécessaire au suivi, puis archivés ou supprimés. Si vous réservez via Airbnb, c\'est Airbnb qui collecte et traite vos données — ce site n\'en reçoit aucune copie.\n\nConformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, d\'effacement, de limitation et d\'opposition sur les données qui vous concernent. Pour l\'exercer, écrivez à contact@maurisson.com.',
      },
      {
        heading: 'Mesure d\'audience (Google Analytics 4)',
        body: 'Ce site utilise Google Analytics 4 (identifiant G-ZL0LY1LPJK, Google Ireland Ltd.) pour mesurer la fréquentation de manière agrégée. Les statistiques sont conservées 14 mois. Aucune information ne nous permet de vous identifier nominativement. Pour refuser ce traçage : activer "Do Not Track" dans votre navigateur, ou utiliser une extension type uBlock Origin, Privacy Badger, Ghostery.',
      },
      {
        heading: 'Cookies',
        body: 'Ce site dépose uniquement les cookies de mesure d\'audience Google Analytics (_ga, _ga_ZL0LY1LPJK), à votre première visite. Aucun cookie publicitaire, aucun cookie de tracking tiers, aucun pixel social. Vous pouvez à tout moment supprimer ces cookies depuis les réglages de votre navigateur.',
      },
      {
        heading: 'Propriété intellectuelle',
        body: 'Sauf mention contraire, les textes, photographies, illustrations et code source du site sont la propriété de Maxime Kleinkenberg. Toute reproduction, totale ou partielle, sans autorisation préalable est interdite. Les marques tierces citées (Airbnb, Spotify, PlantNet, etc.) restent la propriété de leurs détenteurs respectifs.',
      },
      {
        heading: 'Droit applicable',
        body: 'Le présent site est soumis au droit belge. En cas de litige et à défaut d\'accord amiable, les tribunaux de Liège sont seuls compétents.',
      },
    ],
  },
  nl: {
    metaTitle: 'Juridische vermeldingen — Chez Maurisson',
    metaDescription: 'Juridische vermeldingen, privacybeleid en cookies van maurisson.com.',
    eyebrow: 'Vermeldingen',
    title: 'Juridische vermeldingen, privacy & cookies',
    intro: 'Deze site wordt persoonlijk uitgegeven door Maxime Kleinkenberg. Hij presenteert een gastenkamer die via Airbnb wordt verhuurd en enkele persoonlijke projecten (Music Hub, Green Hub, Producties, Handleidingen). Hier vind je in heldere taal wie wat uitgeeft, wat er verzameld wordt en hoe je je rechten kunt uitoefenen.',
    lastUpdated: 'Laatst bijgewerkt: 16 mei 2026',
    back: 'Terug naar de homepagina',
    sections: [
      {
        heading: 'Uitgever van de site',
        body: 'Maxime Kleinkenberg — Herve, België.\nContact: contact@maurisson.com.\n\nDe site maurisson.com wordt persoonlijk uitgegeven en vormt geen zelfstandige commerciële activiteit. De gastenkamer wordt verhuurd en gefactureerd via het Airbnb-platform; de algemene voorwaarden van Airbnb zijn van toepassing op elke boeking.',
      },
      {
        heading: 'Hosting',
        body: 'De site wordt gehost op een server van Hetzner Online GmbH (Falkenstein, Duitsland), gedeployed via Coolify, achter een DNS-proxy van Cloudflare, Inc. (San Francisco, VS). De e-mails contact@maurisson.com worden via Cloudflare Email Routing doorgestuurd naar een Gmail-mailbox (Google Ireland Ltd.).',
      },
      {
        heading: 'Persoonsgegevens & AVG',
        body: 'Bij het bezoek aan de site worden geen persoonsgegevens automatisch verzameld. Stuur je een e-mail naar contact@maurisson.com, dan worden je e-mailadres en de inhoud van je bericht bewaard zolang dat nodig is voor de opvolging en daarna gearchiveerd of verwijderd. Boek je via Airbnb, dan worden je gegevens door Airbnb verzameld en verwerkt — deze site ontvangt daar geen kopie van.\n\nConform de AVG heb je recht op inzage, rectificatie, wissing, beperking en bezwaar voor wat betreft je gegevens. Stuur daarvoor een e-mail naar contact@maurisson.com.',
      },
      {
        heading: 'Bezoekersmeting (Google Analytics 4)',
        body: 'Deze site gebruikt Google Analytics 4 (identifier G-ZL0LY1LPJK, Google Ireland Ltd.) om bezoekersaantallen geaggregeerd te meten. De statistieken worden 14 maanden bewaard. Geen enkele informatie laat ons toe je persoonlijk te identificeren. Wil je dit weigeren: activeer "Do Not Track" in je browser of installeer een extensie als uBlock Origin, Privacy Badger of Ghostery.',
      },
      {
        heading: 'Cookies',
        body: 'Deze site plaatst enkel meet-cookies van Google Analytics (_ga, _ga_ZL0LY1LPJK) bij je eerste bezoek. Geen reclame-cookies, geen tracking-cookies van derden, geen social-media-pixels. Je kunt deze cookies op elk moment verwijderen via je browserinstellingen.',
      },
      {
        heading: 'Intellectuele eigendom',
        body: 'Tenzij anders vermeld, zijn de teksten, foto\'s, illustraties en broncode van de site eigendom van Maxime Kleinkenberg. Elke gehele of gedeeltelijke reproductie zonder voorafgaande toestemming is verboden. De vermelde merken van derden (Airbnb, Spotify, PlantNet, enz.) blijven eigendom van hun respectievelijke eigenaars.',
      },
      {
        heading: 'Toepasselijk recht',
        body: 'Deze site is onderworpen aan het Belgisch recht. Bij geschil en bij gebrek aan minnelijk akkoord zijn de rechtbanken van Luik exclusief bevoegd.',
      },
    ],
  },
  en: {
    metaTitle: 'Legal notice — Chez Maurisson',
    metaDescription: 'Legal notice, privacy policy and cookies of maurisson.com.',
    eyebrow: 'Legal',
    title: 'Legal notice, privacy & cookies',
    intro: 'This site is published personally by Maxime Kleinkenberg. It presents a guest room rented via Airbnb and a few personal projects (Music Hub, Green Hub, Productions, Manuals). Here\'s, plainly stated, who publishes what, what is collected, and how to exercise your rights.',
    lastUpdated: 'Last updated: 16 May 2026',
    back: 'Back to the homepage',
    sections: [
      {
        heading: 'Site publisher',
        body: 'Maxime Kleinkenberg — Herve, Belgium.\nContact: contact@maurisson.com.\n\nThe site maurisson.com is published personally and does not constitute a standalone commercial activity. The guest room is rented and invoiced through the Airbnb platform; Airbnb\'s terms and conditions apply to every booking.',
      },
      {
        heading: 'Hosting',
        body: 'The site is hosted on a server operated by Hetzner Online GmbH (Falkenstein, Germany), deployed via Coolify, behind a DNS proxy from Cloudflare, Inc. (San Francisco, USA). Emails to contact@maurisson.com are routed via Cloudflare Email Routing to a Gmail inbox (Google Ireland Ltd.).',
      },
      {
        heading: 'Personal data & GDPR',
        body: 'No personal data is automatically collected when you visit the site. If you email contact@maurisson.com, your email address and the content of your message are kept for as long as needed for follow-up, then archived or deleted. If you book via Airbnb, Airbnb collects and processes your data — this site receives no copy.\n\nUnder GDPR, you have the right to access, rectify, erase, restrict and object to the processing of your data. To exercise these rights, write to contact@maurisson.com.',
      },
      {
        heading: 'Audience measurement (Google Analytics 4)',
        body: 'This site uses Google Analytics 4 (identifier G-ZL0LY1LPJK, Google Ireland Ltd.) to measure traffic in an aggregated way. Statistics are retained for 14 months. No information lets us identify you personally. To opt out: enable "Do Not Track" in your browser or use an extension such as uBlock Origin, Privacy Badger or Ghostery.',
      },
      {
        heading: 'Cookies',
        body: 'This site only sets Google Analytics measurement cookies (_ga, _ga_ZL0LY1LPJK) on your first visit. No advertising cookies, no third-party tracking cookies, no social pixels. You can delete these cookies at any time from your browser settings.',
      },
      {
        heading: 'Intellectual property',
        body: 'Unless stated otherwise, the texts, photographs, illustrations and source code of the site are the property of Maxime Kleinkenberg. Any reproduction, in whole or in part, without prior authorisation is forbidden. Third-party trademarks mentioned (Airbnb, Spotify, PlantNet, etc.) remain the property of their respective owners.',
      },
      {
        heading: 'Applicable law',
        body: 'This site is governed by Belgian law. In case of dispute and failing an amicable settlement, the courts of Liège shall have exclusive jurisdiction.',
      },
    ],
  },
  de: {
    metaTitle: 'Impressum — Chez Maurisson',
    metaDescription: 'Impressum, Datenschutzerklärung und Cookies von maurisson.com.',
    eyebrow: 'Impressum',
    title: 'Impressum, Datenschutz & Cookies',
    intro: 'Diese Website wird privat von Maxime Kleinkenberg herausgegeben. Sie stellt ein über Airbnb vermietetes Gästezimmer sowie einige persönliche Projekte (Music Hub, Green Hub, Produktionen, Anleitungen) vor. Hier finden Sie klar formuliert, wer was herausgibt, was erhoben wird und wie Sie Ihre Rechte ausüben können.',
    lastUpdated: 'Zuletzt aktualisiert: 16. Mai 2026',
    back: 'Zurück zur Startseite',
    sections: [
      {
        heading: 'Herausgeber',
        body: 'Maxime Kleinkenberg — Herve, Belgien.\nKontakt: contact@maurisson.com.\n\nDie Website maurisson.com wird privat herausgegeben und stellt keine eigenständige gewerbliche Tätigkeit dar. Das Gästezimmer wird über die Plattform Airbnb vermietet und abgerechnet; die AGB von Airbnb gelten für jede Buchung.',
      },
      {
        heading: 'Hosting',
        body: 'Die Website wird auf einem Server der Hetzner Online GmbH (Falkenstein, Deutschland) gehostet, über Coolify bereitgestellt und durch einen DNS-Proxy von Cloudflare, Inc. (San Francisco, USA) geleitet. Die E-Mails an contact@maurisson.com werden via Cloudflare Email Routing an ein Gmail-Postfach (Google Ireland Ltd.) weitergeleitet.',
      },
      {
        heading: 'Personenbezogene Daten & DSGVO',
        body: 'Beim Besuch der Website werden keine personenbezogenen Daten automatisch erhoben. Wenn Sie eine E-Mail an contact@maurisson.com senden, werden Ihre E-Mail-Adresse und der Inhalt Ihrer Nachricht so lange aufbewahrt, wie es für die Bearbeitung erforderlich ist, und anschließend archiviert oder gelöscht. Wenn Sie über Airbnb buchen, erhebt und verarbeitet Airbnb Ihre Daten — diese Website erhält keine Kopie davon.\n\nGemäß DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch in Bezug auf Ihre Daten. Schreiben Sie dazu an contact@maurisson.com.',
      },
      {
        heading: 'Reichweitenmessung (Google Analytics 4)',
        body: 'Diese Website verwendet Google Analytics 4 (Kennung G-ZL0LY1LPJK, Google Ireland Ltd.), um die Besucherzahlen aggregiert zu messen. Die Statistiken werden 14 Monate aufbewahrt. Keine Information erlaubt eine namentliche Identifizierung. Zum Widerspruch: "Do Not Track" im Browser aktivieren oder eine Erweiterung wie uBlock Origin, Privacy Badger oder Ghostery verwenden.',
      },
      {
        heading: 'Cookies',
        body: 'Diese Website setzt beim ersten Besuch ausschließlich Mess-Cookies von Google Analytics (_ga, _ga_ZL0LY1LPJK). Keine Werbe-Cookies, keine Tracking-Cookies von Dritten, keine Social-Media-Pixel. Sie können diese Cookies jederzeit über Ihre Browser-Einstellungen löschen.',
      },
      {
        heading: 'Urheberrecht',
        body: 'Sofern nicht anders angegeben, sind die Texte, Fotografien, Illustrationen und der Quellcode der Website Eigentum von Maxime Kleinkenberg. Jede vollständige oder teilweise Vervielfältigung ohne vorherige Genehmigung ist untersagt. Genannte Marken Dritter (Airbnb, Spotify, PlantNet usw.) bleiben Eigentum ihrer jeweiligen Inhaber.',
      },
      {
        heading: 'Anwendbares Recht',
        body: 'Diese Website unterliegt belgischem Recht. Im Streitfall und mangels gütlicher Einigung sind ausschließlich die Gerichte in Lüttich zuständig.',
      },
    ],
  },
};
