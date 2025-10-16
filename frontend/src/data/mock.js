// Mock data for Eva Tazzari portfolio

export const translations = {
  nav: {
    home: { it: 'Home', en: 'Home' },
    works: { it: 'Opere', en: 'Works' },
    bio: { it: 'Bio', en: 'Bio' },
    articles: { it: 'Articoli', en: 'Articles' },
    contact: { it: 'Contatti', en: 'Contact' }
  },
  home: {
    hero: {
      it: 'Trasformo pensieri in sculture indossabili e installazioni. Racconto la direzione del mondo e l'impatto della tecnologia sulla vita, cercando la bellezza viva nelle fratture.',
      en: 'I transform thoughts into wearable sculptures and installations. I tell the story of the world\'s direction and technology\'s impact on life, seeking living beauty in fractures.'
    },
    intro: {
      it: 'Eva Tazzari è un\'artista e scultrice contemporanea italiana che esplora l\'intersezione tra corpo, tecnologia e natura. Le sue opere sfidano le convenzioni attraverso forme organiche e materiali innovativi.',
      en: 'Eva Tazzari is an Italian contemporary artist and sculptor who explores the intersection between body, technology, and nature. Her works challenge conventions through organic forms and innovative materials.'
    },
    featured: { it: 'Opere in Evidenza', en: 'Featured Works' },
    latest: { it: 'Ultimo Articolo', en: 'Latest Article' },
    readMore: { it: 'Leggi di più', en: 'Read more' },
    viewWork: { it: 'Vedi opera', en: 'View work' },
    allWorks: { it: 'Tutte le opere', en: 'All works' },
    contactCTA: { it: 'Visita lo studio', en: 'Studio visit' }
  },
  works: {
    title: { it: 'Opere', en: 'Works' },
    all: { it: 'Tutte', en: 'All' },
    sculpture: { it: 'Scultura', en: 'Sculpture' },
    wearable: { it: 'Wearable', en: 'Wearable' },
    installation: { it: 'Installazioni', en: 'Installations' },
    year: { it: 'Anno', en: 'Year' },
    technique: { it: 'Tecnica', en: 'Technique' },
    dimensions: { it: 'Dimensioni', en: 'Dimensions' },
    series: { it: 'Serie', en: 'Series' },
    exhibition: { it: 'Esposizione', en: 'Exhibition' },
    available: { it: 'Disponibile', en: 'Available' },
    sold: { it: 'Venduto', en: 'Sold' }
  },
  bio: {
    title: { it: 'Bio', en: 'Bio' },
    exhibitions: { it: 'Mostre e Collaborazioni', en: 'Exhibitions & Collaborations' }
  },
  articles: {
    title: { it: 'Articoli', en: 'Articles' },
    published: { it: 'Pubblicato il', en: 'Published on' }
  },
  contact: {
    title: { it: 'Contatti', en: 'Contact' },
    subtitle: { it: 'Mettiamoci in contatto', en: 'Get in touch' },
    name: { it: 'Nome', en: 'Name' },
    email: { it: 'Email', en: 'Email' },
    message: { it: 'Messaggio', en: 'Message' },
    send: { it: 'Invia', en: 'Send' },
    success: { it: 'Messaggio inviato con successo!', en: 'Message sent successfully!' },
    error: { it: 'Errore nell\'invio del messaggio', en: 'Error sending message' }
  }
};

export const artworks = [
  {
    id: 1,
    title: { it: 'Frammenti Digitali', en: 'Digital Fragments' },
    year: 2024,
    category: 'sculpture',
    technique: { it: 'Bronzo e resina', en: 'Bronze and resin' },
    dimensions: '45 x 30 x 25 cm',
    description: {
      it: 'Un\'esplorazione della frammentazione della memoria nell\'era digitale, dove i ricordi si dissolvono e si ricompongono in nuove forme.',
      en: 'An exploration of memory fragmentation in the digital age, where memories dissolve and recompose into new forms.'
    },
    series: { it: 'Fratture', en: 'Fractures' },
    exhibition: 'Biennale di Venezia 2024',
    available: true,
    image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800&q=80',
    featured: true
  },
  {
    id: 2,
    title: { it: 'Corpo Connesso', en: 'Connected Body' },
    year: 2023,
    category: 'wearable',
    technique: { it: 'Argento, fibra ottica', en: 'Silver, fiber optic' },
    dimensions: '15 x 12 x 8 cm',
    description: {
      it: 'Una scultura indossabile che riflette sulla connessione costante tra corpo e tecnologia nel mondo contemporaneo.',
      en: 'A wearable sculpture reflecting on the constant connection between body and technology in the contemporary world.'
    },
    series: { it: 'Wearable Tech', en: 'Wearable Tech' },
    exhibition: 'Milano Design Week 2023',
    available: false,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    featured: true
  },
  {
    id: 3,
    title: { it: 'Rete Organica', en: 'Organic Network' },
    year: 2024,
    category: 'installation',
    technique: { it: 'Installazione multimediale', en: 'Multimedia installation' },
    dimensions: '400 x 300 x 250 cm',
    description: {
      it: 'Un\'installazione immersiva che esplora le reti invisibili che ci connettono, sia digitali che biologiche.',
      en: 'An immersive installation exploring the invisible networks that connect us, both digital and biological.'
    },
    series: { it: 'Reti', en: 'Networks' },
    exhibition: 'Triennale Milano 2024',
    available: false,
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80',
    featured: true
  },
  {
    id: 4,
    title: { it: 'Metamorfosi', en: 'Metamorphosis' },
    year: 2023,
    category: 'sculpture',
    technique: { it: 'Marmo e acciaio', en: 'Marble and steel' },
    dimensions: '80 x 40 x 35 cm',
    description: {
      it: 'Una riflessione sulla trasformazione continua dell\'identità umana nell\'epoca della tecnologia.',
      en: 'A reflection on the continuous transformation of human identity in the age of technology.'
    },
    series: { it: 'Fratture', en: 'Fractures' },
    exhibition: 'Galleria d\'Arte Moderna, Roma',
    available: true,
    image: 'https://images.unsplash.com/photo-1574631175154-2f8e3e6d6f4f?w=800&q=80',
    featured: false
  },
  {
    id: 5,
    title: { it: 'Pelle Digitale', en: 'Digital Skin' },
    year: 2022,
    category: 'wearable',
    technique: { it: 'Polimeri bio-compatibili', en: 'Bio-compatible polymers' },
    dimensions: '20 x 15 x 10 cm',
    description: {
      it: 'Un gioiello scultoreo che interroga i confini tra naturale e artificiale.',
      en: 'A sculptural jewel questioning the boundaries between natural and artificial.'
    },
    series: { it: 'Wearable Tech', en: 'Wearable Tech' },
    exhibition: 'Museo del Novecento, Milano',
    available: true,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    featured: false
  },
  {
    id: 6,
    title: { it: 'Spazio Liquido', en: 'Liquid Space' },
    year: 2023,
    category: 'installation',
    technique: { it: 'Video proiezione, suono', en: 'Video projection, sound' },
    dimensions: '600 x 400 x 300 cm',
    description: {
      it: 'Un ambiente immersivo che esplora la fluidità dello spazio nell\'era digitale.',
      en: 'An immersive environment exploring the fluidity of space in the digital age.'
    },
    series: { it: 'Reti', en: 'Networks' },
    exhibition: 'Maxxi Roma 2023',
    available: false,
    image: 'https://images.unsplash.com/photo-1551354485-98828bca2f28?w=800&q=80',
    featured: false
  }
];

export const bioData = {
  short: {
    it: 'Eva Tazzari è un\'artista e scultrice contemporanea italiana nata a Bologna. Il suo lavoro esplora l\'intersezione tra corpo, tecnologia e natura attraverso sculture, gioielli indossabili e installazioni multimediali.',
    en: 'Eva Tazzari is an Italian contemporary artist and sculptor born in Bologna. Her work explores the intersection between body, technology, and nature through sculptures, wearable jewelry, and multimedia installations.'
  },
  extended: {
    it: 'Eva Tazzari è un\'artista e scultrice contemporanea italiana che vive e lavora tra Bologna e Milano. La sua ricerca artistica si concentra sull\'esplorazione dell\'impatto della tecnologia sulla vita quotidiana e sull\'identità umana. Attraverso l\'uso di materiali tradizionali come bronzo e marmo, insieme a tecnologie contemporanee come fibre ottiche e polimeri bio-compatibili, Tazzari crea opere che interrogano i confini tra naturale e artificiale, tra corpo e macchina. Le sue sculture indossabili e le installazioni multimediali invitano lo spettatore a riflettere sulla direzione del mondo contemporaneo, cercando bellezza e poesia nelle fratture della nostra epoca.',
    en: 'Eva Tazzari is an Italian contemporary artist and sculptor who lives and works between Bologna and Milan. Her artistic research focuses on exploring the impact of technology on daily life and human identity. Through the use of traditional materials such as bronze and marble, alongside contemporary technologies like fiber optics and bio-compatible polymers, Tazzari creates works that question the boundaries between natural and artificial, between body and machine. Her wearable sculptures and multimedia installations invite viewers to reflect on the direction of the contemporary world, seeking beauty and poetry in the fractures of our time.'
  },
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
  exhibitions: [
    { year: 2024, event: { it: 'Biennale di Venezia', en: 'Venice Biennale' } },
    { year: 2024, event: { it: 'Triennale Milano', en: 'Milan Triennale' } },
    { year: 2023, event: { it: 'Milano Design Week', en: 'Milan Design Week' } },
    { year: 2023, event: { it: 'Maxxi Roma - "Corpi Digitali"', en: 'Maxxi Rome - "Digital Bodies"' } },
    { year: 2022, event: { it: 'Museo del Novecento, Milano', en: 'Museum of the Twentieth Century, Milan' } },
    { year: 2022, event: { it: 'Galleria d\'Arte Moderna, Roma', en: 'Gallery of Modern Art, Rome' } }
  ]
};

export const articles = [
  {
    id: 1,
    title: {
      it: 'La Bellezza nelle Fratture: Arte e Tecnologia',
      en: 'Beauty in Fractures: Art and Technology'
    },
    date: '2024-01-15',
    excerpt: {
      it: 'Una riflessione sul rapporto tra arte contemporanea e innovazione tecnologica, e come le fratture digitali possano diventare spazi di bellezza.',
      en: 'A reflection on the relationship between contemporary art and technological innovation, and how digital fractures can become spaces of beauty.'
    },
    content: {
      it: 'Nel mondo contemporaneo, la tecnologia ha trasformato radicalmente il nostro modo di percepire e creare arte. Le fratture che emergono dall\'impatto tecnologico sulla nostra vita quotidiana non sono solo cicatrici, ma aperture verso nuove possibilità espressive. Come artista, cerco di esplorare questi spazi intermedi, dove il corpo incontra la macchina, dove il naturale si fonde con l\'artificiale. Le mie sculture indossabili nascono da questa ricerca: non sono solo oggetti estetici, ma dispositivi concettuali che interrogano la nostra identità nell\'era digitale.',
      en: 'In the contemporary world, technology has radically transformed our way of perceiving and creating art. The fractures that emerge from technological impact on our daily lives are not just scars, but openings toward new expressive possibilities. As an artist, I seek to explore these intermediate spaces, where body meets machine, where natural merges with artificial. My wearable sculptures are born from this research: they are not just aesthetic objects, but conceptual devices questioning our identity in the digital age.'
    },
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80',
    featured: true
  },
  {
    id: 2,
    title: {
      it: 'Materiali del Futuro: Tradizione e Innovazione',
      en: 'Materials of the Future: Tradition and Innovation'
    },
    date: '2023-11-22',
    excerpt: {
      it: 'Come il dialogo tra materiali tradizionali e contemporanei apre nuove possibilità espressive nella scultura.',
      en: 'How dialogue between traditional and contemporary materials opens new expressive possibilities in sculpture.'
    },
    content: {
      it: 'La scelta dei materiali in scultura non è mai neutrale. Quando lavoro il bronzo accanto alle fibre ottiche, quando accosto il marmo ai polimeri bio-compatibili, sto creando un dialogo tra epoche e visioni del mondo diverse. Questa ibridazione materica riflette la condizione contemporanea: siamo esseri biologici che vivono in un mondo sempre più tecnologico, corpi antichi in ambienti digitali.',
      en: 'The choice of materials in sculpture is never neutral. When I work bronze alongside fiber optics, when I juxtapose marble with bio-compatible polymers, I am creating a dialogue between different eras and worldviews. This material hybridization reflects the contemporary condition: we are biological beings living in an increasingly technological world, ancient bodies in digital environments.'
    },
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80',
    featured: false
  },
  {
    id: 3,
    title: {
      it: 'Il Corpo come Interfaccia',
      en: 'The Body as Interface'
    },
    date: '2023-09-10',
    excerpt: {
      it: 'Riflessioni sulle sculture indossabili e il corpo come punto di contatto tra umano e tecnologico.',
      en: 'Reflections on wearable sculptures and the body as a point of contact between human and technological.'
    },
    content: {
      it: 'Le mie sculture indossabili trasformano il corpo in un\'interfaccia viva tra dimensione biologica e digitale. Non sono semplici gioielli o accessori, ma dispositivi concettuali che interrogano il nostro rapporto con la tecnologia. Quando indossi una mia opera, diventi parte di un dialogo più ampio sulla natura dell\'identità contemporanea.',
      en: 'My wearable sculptures transform the body into a living interface between biological and digital dimensions. They are not simple jewelry or accessories, but conceptual devices questioning our relationship with technology. When you wear one of my works, you become part of a broader dialogue on the nature of contemporary identity.'
    },
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    featured: false
  }
];
