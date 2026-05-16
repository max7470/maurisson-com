export type Review = {
  author: string;
  date: string;
  lang: 'fr' | 'nl' | 'en' | 'de' | 'da';
  text: string;
  rating: number;
  stay?: string;
};

export const reviews: Review[] = [
  {
    author: 'Loan',
    date: 'Novembre 2025',
    lang: 'fr',
    rating: 5,
    text: "On dit souvent que certains hôtes \u201Cdéroulent le tapis rouge\u201D ; lui a carrément sorti le tapis rouge, les projecteurs et peut-être même un orchestre. Propre comme une poêle à raclette neuve, confortable, calme, lumineux — mieux que mon propre appartement.",
  },
  {
    author: 'Sophie',
    date: 'Octobre 2025',
    lang: 'fr',
    rating: 5,
    text: "Un hôte comme on en rencontre peu. Disponible, discret, à l'écoute, bienveillant. L'endroit est très cosy, chaleureux et inspirant. Le lit est très confortable, endroit très silencieux la nuit. On te donne 7 étoiles.",
  },
  {
    author: 'Mart',
    date: 'Décembre 2025',
    lang: 'en',
    rating: 5,
    text: "Maxime is the most hospitable host I have ever had. From the moment we got there we felt incredibly welcome. We even had a moment with Maxime making some music together that gave our stay an extra personal touch. PS. His cat Sushi is the cutest cat ever.",
  },
  {
    author: 'Lenne',
    date: 'Januari 2026',
    lang: 'nl',
    rating: 5,
    text: 'Maxime is een superhost, supervriendelijk en we voelden ons hier direct thuis. Mi casa es su casa is hier echt van toepassing. Merci voor de warme ontvangst amigo.',
  },
  {
    author: 'Arian',
    date: 'Dezember 2025',
    lang: 'de',
    rating: 5,
    text: 'Maxime war als Gastgeber äußerst zuvorkommend. Man konnte sich bei ihm wie zu Hause fühlen. Würde jederzeit wieder bei ihm zu Gast sein.',
  },
  {
    author: 'Daria',
    date: 'December 2025',
    lang: 'en',
    rating: 5,
    text: "Maxime's place was great. Beautifully decorated and comfortable. He really tried to make us comfortable, offered us food, recommendations for local restaurants. We were also very happy to have met Sushi, his extremely friendly orange cat.",
  },
  {
    author: 'Pascal',
    date: 'Juillet 2025',
    lang: 'fr',
    rating: 5,
    text: "Difficile de faire plus accueillant. J'ai dû passer par Airbnb une 20aine de fois, jamais je n'ai eu d'hôte plus volontaire pour rendre le séjour facile.",
  },
  {
    author: 'Hanne',
    date: 'April 2026',
    lang: 'da',
    rating: 5,
    text: 'Fantastisk sted. Maxime er meget venlig og deler gerne ud af alt. Vi giver Maxime alle de stjerner man kan give.',
  },
  {
    author: 'Johan',
    date: 'April 2026',
    lang: 'nl',
    rating: 5,
    text: 'Hele leuke ervaring. Je verblijft in het huis samen met de zeer vriendelijke en relaxte eigenaar. Je kunt alles in zijn keuken gebruiken en hij vertrouwd je zijn persoonlijke spullen toe wat erg bijzonder is.',
  },
  {
    author: 'Dorothée',
    date: 'Avril 2026',
    lang: 'fr',
    rating: 5,
    text: "Maxime et Karen (et le chat) ont été très accueillants. Quand ils disent de faire comme chez nous, ils le pensent. C'est certainement un logement que je chercherais à relouer.",
  },
];

export const stats = {
  rating: '4,91',
  count: 62,
  categories: {
    arrivee: 5.0,
    communication: 5.0,
    precision: 4.9,
    qualitePrix: 4.9,
    proprete: 4.8,
    emplacement: 4.8,
  },
};
