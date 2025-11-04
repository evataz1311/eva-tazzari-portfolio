// Mock data for Eva Tazzari portfolio

export const translations = {
  nav: {
    home: { it: 'Home', en: 'Home' },
    works: { it: 'Opere', en: 'Works' },
    bio: { it: 'Bio', en: 'Bio' },
    articles: { it: "BLOG", en: "BLOG" },
    contact: { it: 'Contatti', en: 'Contact' }
  },
  home: {
    hero: {
      it: `Vorrei donare il pensiero che nascendo sul mio substrato, attraverso il linguaggio universale dell’arte, si insinua nelle pieghe dell’essere altrui.`,
      en: `I wish to offer the thought that, born from my own substratum and conveyed through the universal language of art, insinuates itself into the folds of others’ being.`,
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
    title: { it: "Vedo il mondo un po’", en: "I See the World... Just a Little" },
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
  title: { it: 'The Beautiful Cage', en: 'The Beautiful Cage' },
  year: 2025,
  category: 'wearable',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: 'variabile',
  description: { 
    it: 'Un abito-gabbia, fatto di piastrelle, di volti di Barbie: icona di un ideale imposto. IMPERFEZIONE. DIVERSITÀ. Crepe e scheggiature diventano forza. Ogni corpo lo trasforma: l’abito cambia, si fa opera diversa. La passerella è performance. Il corpo è al centro. La diversità è bellezza.', 
    en: 'A cage-dress made of tiles, of Barbie faces: an icon of an imposed ideal. IMPERFECTION. DIVERSITY. Cracks and chips become strength. Every body transforms it: the dress changes, becoming a different work. The runway is performance. The body is at the center. Diversity is beauty.' 
  },
  image: '/media/works/the beautiful cage.JPG',
  featured: true 
},
{
  id: 2,
  title: { it: 'Fragment of the Cage White', en: 'Fragment of the Cage White' },
  year: 2025,
  category: 'wearable',
  technique: { it: 'mista', en: 'Mixed media' },
  dimensions: 'variabile',
  description: { 
    it: 'Una cintura come gesto di ribellione silenziosa. Volti replicati, icone di un ideale imposto, si incrinano, si sporcano, si fanno umani. Ogni piastrella, un frammento imperfetto. La serialità si rompe. La bellezza si ricostruisce nelle crepe, nel difetto che diventa identità.', 
    en: 'A belt as a gesture of silent rebellion. Replicated faces, icons of an imposed ideal, crack, get soiled, become human. Each tile is an imperfect fragment. Seriality breaks. Beauty is rebuilt in the cracks, in the flaw that becomes identity.' 
  },
image: '/media/works/Fragment of the cage White2.png',
  featured: true
},
{
  id: 3,
  title: { it: 'Fragment of the Cage Black', en: 'Fragment of the Cage Black' },
  year: 2025,
  category: 'wearable',
  technique: { it: 'mista', en: 'Mixed media' },
  dimensions: 'variabile',
  description: { 
    it: 'Una cintura come gesto di ribellione silenziosa. Volti replicati, icone di un ideale imposto, si incrinano, si sporcano, si fanno umani. Ogni piastrella, un frammento imperfetto. La serialità si rompe. La bellezza si ricostruisce nelle crepe, nel difetto che diventa identità.', 
    en: 'A belt as a gesture of silent rebellion. Replicated faces, icons of an imposed ideal, crack, get soiled, become human. Each tile is an imperfect fragment. Seriality breaks. Beauty is rebuilt in the cracks, in the flaw that becomes identity.' 
  },
image: '/media/works/Fragment of the cage Black.png',
  featured: true
},
{
  id: 4,
  title: { it: 'Human low Cost', en: 'Human low Cost' },
  year: 2025,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '75 x 50 x 70 cm',
  description: { 
    it: 'Un corpo smontato, frammentato, svenduto. Human Low Cost è un atto e una domanda. Quanto vale l’essere umano? Mani, gambe, busti: tutto in saldo. Solo il volto resta fuori, non ha prezzo, non si compra. L’asta è chiusa, il messaggio no.', 
    en: 'A body dismantled, fragmented, sold off. Human Low Cost is an act and a question. How much is a human being worth? Hands, legs, torsos: everything on sale. Only the face remains outside, it has no price, it cannot be bought. The auction is closed; the message is not.' 
  },
image: '/media/works/human low cost 2.jpeg',
  featured: false
},
{
  id: 5,
  title: { it: 'Blindness foulard', en: 'Blindness foulard' },
  year: 2025,
  category: 'wearable',
  technique: { it: 'nan', en: '' },
  dimensions: '145 x 190 x variabile',
  description: { 
    it: 'L’opera diventa corpo, movimento, presenza. Il volto blu di Blindness si trasforma su seta, cambia con chi lo indossa. Arte e moda si fondono in un unico gesto: ogni piega, ogni luce riflessa reinventa l’opera, rendendola viva, sensibile, umana.', 
    en: 'The work becomes body, movement, presence. The blue face of Blindness transforms on silk, changing with the wearer. Art and fashion merge into a single gesture: every fold, every reflected light reinvents the work, making it alive, sensitive, human.' 
  },
image: '/media/works/blindness foulard.png',
  featured: false
},
{
  id: 6,
  title: { it: 'Transhuman progetto 10', en: 'Transhuman progetto 10' },
  year: 2024,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '30 x 22 x 30 cm',
  description: { 
    it: 'Una bambola nuda rinchiusa in una gabbia, seduta su uno schermo spento. La bellezza è prigioniera, intrappolata tra le sbarre degli stereotipi digitali. I social riflettono e amplificano il suo silenzio, trasformando il corpo in immagine, l’identità in performance.', 
    en: 'A naked doll locked in a cage, seated on a dark screen. Beauty is imprisoned, trapped between the bars of digital stereotypes. Social media reflect and amplify its silence, turning the body into image and identity into performance.' 
  },
image: '/media/works/Transhuman progetto 10.jpg',
  featured: false
},
{
  id: 7,
  title: { it: 'Homologacion in black', en: 'Homologacion in black' },
  year: 2024,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '39 x 27 x 34 cm',
  description: { 
    it: 'Volti replicati, perfetti nella loro serialità. Ogni quadrato è una cella, ogni volto un’unità di misura dell’identità. Tutto uguale, tutto calibrato. Poi la crepa: un volto spezzato rompe il ritmo, introduce il disordine. L’anomalia non è errore, è respiro. La diversità si manifesta dove il sistema fallisce. Nel frammento, l’umano riaffiora.', 
    en: 'Replicated faces, perfect in their seriality. Each square is a cell, each face a unit of measure of identity. Everything the same, everything calibrated. Then the crack: a broken face disrupts the rhythm and introduces disorder. The anomaly is not an error; it is breath. Diversity manifests where the system fails. In the fragment, the human resurfaces.' 
  },
image: '/media/works/homologacion_black.jpg',
  featured: false
},
{
  id: 8,
  title: { it: 'Transhuman progetto 9', en: 'Transhuman progetto 9' },
  year: 2024,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: 'variabile',
  description: { 
    it: 'Lo stereotipo di corpo perfetto offerto al fuoco. La luce arde, riflette, purifica e consuma. Il sacrificio è silenzioso: la perfezione si immola sull’altare della tecnologia. La bambola giace su un’ara sacra. La pelle liscia, il corpo standardizzato, il volto senza espressione. L’immagine del desiderio diventa rito. Il fuoco non libera, brucia l’identità: la bellezza la sua vittima.', 
    en: 'The stereotype of the perfect body offered to the fire. Light burns, reflects, purifies, and consumes. The sacrifice is silent: perfection immolates itself on the altar of technology. The doll lies on a sacred altar. Smooth skin, standardized body, expressionless face. The image of desire becomes a rite. The fire does not free; it burns identity: beauty is its victim.' 
  },
image: '/media/works/transhuman_progetto9_1.jpg',
  featured: false
},
{
  id: 9,
  title: { it: 'Progetto anima fragile n 3', en: 'Progetto anima fragile n 3' },
  year: 2024,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '38 x 38 x 16 cm',
  description: { 
    it: 'Corpi smontati, volti senza sguardo, frammenti di perfezione gettati in una gabbia di metallo. Il contenitore non elabora più dati: ora conserva scarti d’identità. La plastica è pelle standardizzata, la bellezza ridotta a protocollo. Qui la femminilità non è immagine, ma residuo. Un archivio di ciò che resta dopo l’omologazione.', 
    en: 'Bodies taken apart, faces without a gaze, fragments of perfection thrown into a metal cage. The container no longer processes data: it now stores scraps of identity. Plastic is standardized skin, beauty reduced to a protocol. Here femininity is not image, but residue. An archive of what remains after homogenization.' 
  },
image: '/media/works/anima fragile progetto 3_1.jpg',
  featured: false
},
{
  id: 10,
  title: { it: 'Progetto essere umani - soggetto 2', en: 'Progetto essere umani - soggetto 2' },
  year: 2024,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '45 x 45 x 185 cm',
  description: { 
    it: 'Un corpo di plastica, coperto da parole che diventano pelle. “Essere o essere umani?” inciso ovunque, come un comando, come un dubbio. Il corpo posa, ma non vive. La benda sugli occhi cancella la visione e amplifica la domanda. È una figura che imita l’umano, lo ripete, lo consuma. La voce dell’identità si fa eco, prigioniera dell’omologazione.', 
    en: 'A plastic body, covered with words that become skin. “To be or to be human?” engraved everywhere, like a command, like a doubt. The body poses but does not live. The blindfold erases vision and amplifies the question. It is a figure that imitates the human, repeats it, consumes it. The voice of identity becomes an echo, imprisoned by homogenization.' 
  },
image: '/media/works/progetto essere umani soggetto 2.png',
  featured: false
},
{
  id: 11,
  title: { it: 'Progetto essere umani - soggetto 1', en: 'Progetto essere umani - soggetto 1' },
  year: 2024,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '40 x 40 x 185 cm',
  description: { 
    it: 'Un corpo artificiale, privo di vita, ricoperto da parole che interrogano la propria stessa esistenza. Domande che diventano pelle, pensieri ossessivi incisi sul simulacro dell’umano. Il manichino non parla, ma domanda. Essere o apparire.', 
    en: 'An artificial body, devoid of life, covered with words that question its very existence. Questions that become skin, obsessive thoughts engraved on the simulacrum of the human. The mannequin does not speak, but it asks. To be or to appear.' 
  },
image: '/media/works/Progetto Essere Umani soggetto 1.png',
  featured: false
},
{
  id: 12,
  title: { it: 'Senza titolo installazione', en: 'Senza titolo installazione' },
  year: 2024,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: 'variabile',
  description: { 
    it: 'Quattro teste di neonato rinchiuse in strutture metalliche, vecchi case di computer. La fragilità dell’origine incontra la freddezza del sistema. Le teste, immobili, sembrano respirare il vuoto tecnologico che le contiene. Ogni modulo è un frammento di crescita artificiale, un organismo in espansione. La materia tenera diventa parte della macchina, la nascita si trasforma in produzione.', 
    en: 'Four newborn heads enclosed in metal structures, old computer cases. The fragility of origin meets the coldness of the system. The heads, motionless, seem to breathe the technological void that contains them. Each module is a fragment of artificial growth, an organism in expansion. The tender matter becomes part of the machine; birth is transformed into production.' 
  },
image: '/media/works/progetto senza titolo 2.jpg',
  featured: false
},
{
  id: 13,
  title: { it: 'Progetto senza titolo forse metamorfosi', en: 'Progetto senza titolo forse metamorfosi' },
  year: 2024,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '180 x 60 x 40 cm',
  description: { 
    it: 'Due maschere sospese tra luce e buio. La materia si trasforma, si tende , si deforma. Una sorta di bozzolo che contiene due essere in fase di transizione. La trasformazione non è completa. Una risplende di luce vitale, l\'altra è al bui, come in attesa.', 
    en: 'Two masks suspended between light and darkness. The matter transforms, stretches, deforms. A sort of cocoon that contains two beings in transition. The transformation is not complete. One shines with vital light, the other is in the dark, as if waiting.' 
  },
  image: '/media/works/progetto senza titolo forse metamorfosi 1.png',
  featured: false
},
{
  id: 14,
  title: { it: 'Progetto transhuman', en: 'Progetto transhuman' },
  year: 2024,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '18 x 26 x 18 cm',
  description: { 
    it: 'Un volto nero emerge dal corpo di un computer aperto. Carne e circuito, un solo organismo. I fili tracciano mappe sulla pelle, linee di codice incarnato. Il metallo non invade, si fonde. Lo schermo riflette l’ombra, doppio digitale dell’essere. È un dialogo tra il dentro e il fuori. L’umano è ancora lì, ma parla in silenzio.', 
    en: 'A black face emerges from the body of an open computer. Flesh and circuitry, a single organism. Wires trace maps on the skin, lines of embodied code. The metal does not invade; it fuses. The screen reflects the shadow, the digital double of being. It is a dialogue between inside and outside. The human is still there, but it speaks in silence.' 
  },
  image: '/media/works/transhuman asus 1.jpg',
  featured: false
},
{
  id: 15,
  title: { it: 'Senza titolo installazione luminosa', en: 'Senza titolo installazione luminosa' },
  year: 2024,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '30 x 35 x 19 cm',
  description: { 
    it: 'Un volto intrappolato nella macchina. La carne si fa hardware, l’anima si codifica. La luce rossa avvolge l\'intera scena. Il rosso è il colore del pericolo, ma anche della vita, caldo e distante. La coscienza diventa un flusso di dati. Il corpo, contenitore vuoto, attende un comando. L’umano non è più ospite, ma parte del sistema.', 
    en: 'A face trapped in the machine. Flesh becomes hardware, the soul is encoded. Red light envelops the entire scene. Red is the color of danger, but also of life, warm and distant. Consciousness becomes a stream of data. The body, an empty container, awaits a command. The human is no longer a guest, but part of the system.' 
  },
  image: '/media/works/transhuman_red.jpg',
  featured: false
},
{
  id: 16,
  title: { it: 'Senza titolo installazione luminosa', en: 'Senza titolo installazione luminosa' },
  year: 2024,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '60 x 40 x 10 cm',
  description: { 
    it: 'Un volto sospeso nel buio, attraversato dalla luce che diventa soglia. La trascendenza qui è passaggio di stato: dall’umano al post-umano, dalla carne al codice. L’aura che circonda il volto. L’occhio forato dalla luce. È un’estasi tecnologica. La trascendenza è verso l’interno del sistema. L’anima non sale, si connette.', 
    en: 'A face suspended in the dark, crossed by light that becomes a threshold. Transcendence here is a change of state: from human to post-human, from flesh to code. The aura that surrounds the face. The eye pierced by the light. It is a technological ecstasy. Transcendence is toward the inside of the system. The soul does not rise; it connects.' 
  },
  image: '/media/works/transhuman intstallazione luminosa.jpg',
  featured: false
},
{
  id: 17,
  title: { it: 'Transhuman simbiosys', en: 'Transhuman simbiosys' },
  year: 2024,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '21 x 23 x 15 cm',
  description: { 
    it: 'Un volto d’argento, metà carne metà codice. “Simbiosys”. La pelle si apre e i circuiti respirano. Il confine si dissolve: ciò che era umano ora pulsa di metallo. Non più invasione, ma convivenza. La macchina ci abita, ci alimenta, ci trasforma.', 
    en: 'A silver face, half flesh and half code. “Simbiosys.” The skin opens and the circuits breathe. The boundary dissolves: what was human now throbs with metal. No longer invasion, but coexistence. The machine inhabits us, feeds us, transforms us.' 
  },
  image: '/media/works/transhuman simbiosys.png',
  featured: false
},
{
  id: 18,
  title: { it: 'Medusa', en: 'Medusa' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '60 x 40 x 10 cm',
  description: { 
    it: 'Il volto è crepato, attraversato da fili come vene o pensieri. “Medusa”. Il mito rovesciato: non è lei a pietrificare, è la rete che immobilizza. Ogni cavo un pensiero, un legame, una catena. La carne resiste, ma è già connessa. L’anima vibra ancora, fragile, sotto il rumore dei circuiti.', 
    en: 'The face is cracked, crossed by wires like veins or thoughts. “Medusa.” The myth reversed: it is not she who petrifies, it is the network that immobilizes. Every cable is a thought, a bond, a chain. Flesh resists, but it is already connected. The soul still vibrates, fragile, under the noise of the circuits.' 
  },
  image: '/media/works/medusa.jpg',
  featured: false
},
{
  id: 19,
  title: { it: 'Transhuman', en: 'Transhuman' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '50 x 50 x 20 cm',
  description: { 
    it: 'Un volto bianco, avvolto da una tastiera. Un ponte tra due mondi. L’uomo e la macchina. La visione si spegne dietro un filtro di codice. “TransHuman” racconta in silenzio: la connessione diventa prigione e la parola, silenzio.', 
    en: 'A white face, wrapped in a keyboard. A bridge between two worlds: the human and the machine. Vision goes dark behind a filter of code. “TransHuman” speaks in silence: connection becomes prison and the word, silence.' 
  },
  image: '/media/works/las senoritas 3.jpg',
  featured: false
},
{
  id: 20,
  title: { it: 'Transhuman', en: 'Transhuman' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '20 x 50 x 10 cm',
  description: { 
    it: 'Un volto nero emerge da un campo di tasti sparsi. Lettere, comandi, frammenti di linguaggio si mescolano alla pelle. L’umano e il digitale si confondono: la parola si fa codice, il respiro diventa input. Un corpo in rete, connesso e perduto.', 
    en: 'A black face emerges from a field of scattered keys. Letters, commands, fragments of language mingle with the skin. The human and the digital blur: the word becomes code, breath becomes input. A body in the network, connected and lost.' 
  },
  image: '/media/works/neural eugenics.jpg',
  featured: false
},
{
  id: 21,
  title: { it: 'Las Senoritas', en: 'Las Senoritas' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '60 x 40 x 15 cm',
  description: { 
    it: 'Corpi di bambole intrecciati in un abbraccio ambiguo e rituale. “Las Señoritas” mette a nudo la femminilità artificiale, la trasforma in gesto consapevole. La plastica e il gesso, il dorato e il carne: contrasti che diventano libertà. Bellezza imperfetta, ribelle, autentica.', 
    en: 'Doll bodies intertwined in an ambiguous, ritual embrace. “Las Señoritas” lays bare artificial femininity and turns it into a conscious gesture. Plastic and plaster, gold and flesh: contrasts that become freedom. Imperfect, rebellious, authentic beauty.' 
  },
  image: '/media/works/homologacion 6 pannelli.png',
  featured: false
},
{
  id: 22,
  title: { it: 'Neural eugenics', en: 'Neural eugenics' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '16 x 20 x 18 cm',
  description: { 
    it: 'Un feto di gesso, puro e immobile, è nutrito da un cordone ombelicale di cavi colorati che come vene artificiali lo tengono in vita. “Neural Eugenics” indaga il limite tra progresso e controllo, tra nascita e manipolazione. Un corpo fragile nel dominio della tecnologia: promessa di vita o esperimento di potere?', 
    en: 'A plaster fetus, pure and motionless, is nourished by an umbilical cord of colored cables that, like artificial veins, keep it alive. “Neural Eugenics” probes the boundary between progress and control, between birth and manipulation. A fragile body in the domain of technology: a promise of life or an experiment in power?' 
  },
  image: '/media/works/las senoritas.jpg',
  featured: false
},
{
  id: 23,
  title: { it: 'Homologation', en: 'Homologation' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '60 x 40 x 7 cm',
  description: { 
    it: 'Volti femminili in gesso, ripetuti e ordinati, raccontano l’omologazione. Tutti uguali, eppure fragilmente diversi. Alcune formelle si incrinano, resistono. L’opera riflette sulla perdita dell’identità nell’era della conformità e sul coraggio sottile di chi, anche spezzandosi, resta sé stesso.', 
    en: 'Female plaster faces, repeated and ordered, tell of homogenization. All the same, yet fragilely different. Some tiles crack and resist. The work reflects on the loss of identity in the age of conformity and on the subtle courage of those who, even while breaking, remain themselves.' 
  },
  image: '/media/works/human low cost 2.jpeg',
  featured: false
},
{
  id: 24,
  title: { it: 'Las Senoritas', en: 'Las Senoritas' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '60 x 50 x 15 cm',
  description: { 
    it: 'Bambole intrecciate in una danza sospesa tra erotismo e ironia. Corpi perfetti e plastici si sfiorano su un fondo dorato, tra desiderio e artificio. “Las Señoritas” racconta la mercificazione del femminile e la libertà di chi sceglie di mostrarsi oltre lo stereotipo.', 
    en: 'Dolls intertwined in a dance suspended between eroticism and irony. Perfect, plastic bodies brush against each other on a golden ground, between desire and artifice. “Las Señoritas” tells of the commodification of the feminine and the freedom of those who choose to show themselves beyond the stereotype.' 
  },
  image: '/media/works/lambs.jpg',
  featured: false
},
{
  id: 25,
  title: { it: 'Senza titolo installazione', en: 'Senza titolo installazione' },
  year: 2023,
  category: 'installation',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: 'variabile',
  description: { 
    it: 'Umanità e tecnologia si confondono. L’infanzia si fa oggetto, la dolcezza plastica diventa inquieta. Corpi assenti, volti replicati, identità prodotte in serie. Un archivio muto del nostro tempo digitale.', 
    en: 'Humanity and technology blur. Childhood becomes object; plastic sweetness turns uneasy. Absent bodies, replicated faces, identities produced in series. A mute archive of our digital time.' 
  },
  image: '/media/works/senza_titolo.png',
  featured: false
},
{
  id: 26,
  title: { it: 'Beyond', en: 'Beyond' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '20 x 20 x 10 cm',
  description: { 
    it: 'Mani bianche emergono da una tela dai colori fluidi, come in un tentativo di attraversarla. È il gesto di chi cerca aria, spazio, libertà. Rompere la superficie diventa un atto di resistenza, un modo per andare oltre ciò che si impone come limite.', 
    en: 'White hands emerge from a canvas of fluid colors, as if attempting to pass through it. It is the gesture of someone seeking air, space, freedom. Breaking the surface becomes an act of resistance, a way of going beyond what imposes itself as a limit.' 
  },
  image: '/media/works/beyond2_2.jpg',
  featured: false
},
{
  id: 27,
  title: { it: 'Blindness', en: 'Blindness' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '19.5 x 30.5 x 10 cm',
  description: { 
    it: 'Un volto blu emerge da una scheda madre, gli occhi sigillati da incrostazioni. L’umanità si fonde con la tecnologia, perdendo il proprio sguardo. Blindness è una reliquia del presente: un corpo digitale che ha dimenticato di vedere.', 
    en: 'A blue face emerges from a motherboard, the eyes sealed by incrustations. Humanity merges with technology, losing its own gaze. Blindness is a relic of the present: a digital body that has forgotten how to see.' 
  },
  image: '/media/works/blindness 1.png',
  featured: false
},
{
  id: 28,
  title: { it: 'Unconventional in red', en: 'Unconventional in red' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: 'variabile',
  description: { 
    it: 'Una griglia di auto rosse, perfette, allineate. In mezzo, una sola dorata rompe l’ordine. Il rosso è conformità, il dorato resistenza. Un invito a scegliere la propria direzione, anche quando il mondo impone una corsia unica.', 
    en: 'A grid of red cars, perfect and aligned. In the middle, a single golden one breaks the order. Red is conformity; gold is resistance. An invitation to choose one’s own direction, even when the world imposes a single lane.' 
  },
  image: '/media/works/unconventional_in_red.jpg',
  featured: false
},
{
  id: 29,
  title: { it: 'Anima fragile', en: 'Anima fragile' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '30 x 60 x 7 cm',
  description: { 
    it: 'Un corpo di Barbie, bianco e frammentato, giace su una lastra di metallo. Le fratture ricompongono una figura imperfetta, ma viva. Simbolo della femminilità costruita e spezzata, l’opera racconta la fragilità come forza, la bellezza come resistenza.', 
    en: 'A Barbie body, white and fragmented, lies on a metal plate. The fractures recompose an imperfect yet living figure. A symbol of constructed and broken femininity, the work speaks of fragility as strength, beauty as resistance.' 
  },
  image: '/media/works/anima fragile2.jpg',
  featured: false
},
{
  id: 30,
  title: { it: 'Anima fragile', en: 'Anima fragile' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '30 x 60 x 7 cm',
  description: { 
    it: 'Un corpo di Barbie, bianco e frammentato, giace su una lastra di metallo. Le fratture ricompongono una figura imperfetta, ma viva. Simbolo della femminilità costruita e spezzata, l’opera racconta la fragilità come forza, la bellezza come resistenza.', 
    en: 'A Barbie body, white and fragmented, lies on a metal plate. The fractures recompose an imperfect yet living figure. A symbol of constructed and broken femininity, the work speaks of fragility as strength, beauty as resistance.' 
  },
  image: '/media/works/anima fragile1.jpg',
  featured: false
},
{
  id: 31,
  title: { it: 'Oblivion', en: 'Oblivion' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '30 x 60 x 7 cm',
  description: { 
    it: 'Volti emergono dal nero, sospesi tra visibilità e scomparsa, o l’identità si affievolisce, si arrende al vuoto che la inghiotte? L’oblio dell’individuo in bilico nell’era dell’omologazione.', 
    en: 'Faces emerge from the black, suspended between visibility and disappearance—or does identity grow faint, yielding to the void that swallows it? The oblivion of the individual poised in the age of homogenization.' 
  },
  image: '/media/works/oblivion.jpg',
  featured: false
},
{
  id: 32,
  title: { it: 'Buried', en: 'Buried' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '50 x 40 x 5 cm',
  description: { 
    it: 'Un corpo sepolto nella terra, intrappolato tra peso e respiro. Le pieghe del tessuto si contorcono come carne che tenta di emergere. Le tracce d’oro sono ferite e speranza insieme, la luce che resiste sotto la materia, dove la vita non smette di lottare', 
    en: 'A body buried in the earth, trapped between weight and breath. The folds of the fabric writhe like flesh trying to emerge. The traces of gold are wounds and hope at once, the light that endures beneath the matter, where life does not stop fighting.' 
  },
  image: '/media/works/Buried.jpg',
  featured: false
},
{
  id: 33,
  title: { it: 'Breath', en: 'Breath' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'gesso', en: 'Plaster' },
  dimensions: '15 x 19.5 x 5 cm',
  description: { 
    it: 'Un volto nero emerge dalla superficie, il respiro prima dell’urlo. Il suono in attesa, il silenzio si fa materia. Un bagliore dorato all’interno dell’energia trattenuta che continua a pulsare sotto la costrizione.', 
    en: 'A black face emerges from the surface, the breath before the scream. Sound in waiting, silence turning into matter. A golden glow within the restrained energy that keeps pulsing under constraint.' 
  },
  image: '/media/works/breath.jpg',
  featured: false
},
{
  id: 34,
  title: { it: 'Beyond', en: 'Beyond' },
  year: 2023,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '30 x 40 x 10 cm',
  description: { 
    it: 'Una fessura si apre sulla superficie nera, lasciando filtrare la luce. Due mani emergono, come resti. Beyond è uno squarcio e una soglia: un invito a guardare oltre ciò che si vede. L’opera bidimensionale rivela ogni sua dimensione, il retro diventa parte della visione, e chi osserva diventa parte dell’opera stessa, cercando nel buio la possibilità di un altrove.', 
    en: 'A fissure opens in the black surface, letting the light filter through. Two hands emerge like remnants. Beyond is a gash and a threshold: an invitation to look beyond what is seen. The two-dimensional work reveals all its dimensions; the back becomes part of the vision, and the viewer becomes part of the work itself, searching in the dark for the possibility of an elsewhere.' 
  },
  image: '/media/works/beyond_1.jpg',
  featured: false
},
{
  id: 35,
  title: { it: 'The Silence of the Lambs', en: 'The Silence of the Lambs' },
  year: 2022,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '55 x 30 x 6 cm',
  description: { 
    it: 'Una bambola avvolta in un velo bianco giace immobile, silenziata. Il corpo, fragile e senza volto, parla di violenza invisibile e di identità cancellata. Un simbolo di purezza ferita e di silenzio imposto, che diventa il grido muto della sopraffazione.', 
    en: 'A doll wrapped in a white veil lies motionless, silenced. The body, fragile and faceless, speaks of invisible violence and erased identity. A symbol of wounded purity and imposed silence that becomes the mute cry of oppression.' 
  },
  image: '/media/works/lambs.jpg',
  featured: false
},
{
  id: 36,
  title: { it: 'Unconventional in blue', en: 'Unconventional in blue' },
  year: 2022,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '55 x 30 x 6 cm',
  description: { 
    it: 'Un mare di auto blu, perfette e identiche. Al centro, una sola dorata rompe la regola: è la differenza che brilla, la scelta di non aderire. In un mondo che chiede uniformità, è il coraggio di essere sé stessi.', 
    en: 'A sea of blue cars, perfect and identical. In the center, a single golden one breaks the rule: it is the difference that shines, the choice not to conform. In a world that demands uniformity, it is the courage to be oneself.' 
  },
  image: '/media/works/unconventional in blu.jpg',
  featured: false
},
{
  id: 37,
  title: { it: 'Unconcentional', en: 'Unconcentional' },
  year: 2022,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '40 x 100 x 6 cm',
  description: { 
    it: 'Una griglia ordinata di auto bianche, modelli imposti e uniformi. Solo una rompe lo schema: sceglie la propria strada, non si adatta. Diversa, non convenzionale. Giusta o sbagliata?', 
    en: 'An orderly grid of white cars, imposed and uniform models. Only one breaks the pattern: it chooses its own road, it does not fit in. Different, unconventional. Right or wrong?' 
  },
  image: '/media/works/unconventional_verticale.jpg',
  featured: false
},
{
  id: 38,
  title: { it: 'WAR', en: 'WAR' },
  year: 2022,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '80 x 40 x 6 cm',
  description: { 
    it: 'Soldatini bianchi in file ordinate, tutti uguali, legati da un filo rosso che attraversa la tavola. L’individualità scompare, resta il meccanismo della guerra. Al centro, una macchia dorata: residuo di valore o speranza che sopravvive al caos.', 
    en: 'White toy soldiers in orderly rows, all identical, tied by a red thread that crosses the panel. Individuality disappears; what remains is the mechanism of war. In the center, a golden stain: a residue of value or a hope that survives the chaos.' 
  },
  image: '/media/works/war.jpg',
  featured: false
},
{
  id: 39,
  title: { it: 'Metamorphosis', en: 'Metamorphosis' },
  year: 2021,
  category: 'sculpture',
  technique: { it: 'tecnica mista', en: 'Mixed media' },
  dimensions: '30 x 55 x 6 cm',
  description: { 
    it: 'Ritratto del mio ritorno all’arte: il mio corpo in rilievo emerge da un drappo rivestito in foglia d’oro, come da un bozzolo. La lamina, fragile e imperfetta, conserva le pieghe del passato e si apre a una nuova fase, tra protezione e rinascita.', 
    en: 'Portrait of my return to art: my body in relief emerges from a cloth lined with gold leaf, as from a cocoon. The foil, fragile and imperfect, retains the folds of the past and opens to a new phase, between protection and rebirth.' 
  },
  image: '/media/works/metamorphosis.jpg',
  featured: false
}

];

export const bioData = {
  short: {
    it: 'Lavoro tra sculture indossabili e performance, con incursioni di video art e AI. Trasformo l\'attrito in forma. Le mie opere interrogano corpo, diversità e omologazione. ',
    en: 'I work across wearable sculpture and performance, with forays into video art and AI. I turn friction into form. My works question the body, diversity, and conformity.'
  },
  extended: {
  it: `Nata in Italia nel 1970, la mia vita è stata un percorso in strade molto diverse fra loro. E l'arte è stata una di queste strade, tra interruzioni e riprese.

 Un bel giorno, nel 2021, l'arte ha ripreso il comando: si è trasformata in fondamentale veicolo di espressione e condivisione.

Ora vivo vicino a Málaga e lavoro tra Spagna e Italia.

Faccio performance e sculture indossabili, disegni, dipinti e sculture, video art, e sperimento con la IA. Uso resina, gesso, giocattoli recuperati, resti di tecnologia quando serve.

Nelle opere cerco di porre domande. Mi interrogo su diversità, omologazione, corpo. Non offro soluzioni. Ogni pezzo è una narrazione visiva, un connettore fra me e il mondo, fra me e gli occhi di chi guarda.

Scrivo. Per me stessa, di me stessa, ma anche del mondo che mi circonda.

Pubblico articoli su elitemundilive.org `,
  en: `Born in Italy in 1970, my life has followed very different paths and art has been one of them, with pauses and restarts. Then one day, in 2021, art took the lead again: it became a vital vehicle for expression and sharing. I now live near Málaga and work between Spain and Italy. I create performances and wearable sculptures, drawings, paintings and sculptures, video art, and I experiment with AI. I use resin, plaster, and when useful, discarded tech components. In my work I try to ask questions. I reflect on diversity, conformity, and the body. I don’t offer solutions. Each piece is a visual narrative, a connector between me and the world, between me and the viewer’s gaze. I write for myself, about myself, and about the world around me. I publish articles on elitemundilive.org `
},

   
image: '/media/bio/eva-bio.png',



  exhibitions: [
    { year: 2025, event: { it: 'Palazzo Bovara, Milano, Italia (Settembre)', en: 'Palazzo Bovara, Milan, Italy (September)' } },
    { year: 2025, event: { it: 'Hotel Marriott, Cannes, Francia', en: 'Marriott Hotel, Cannes, France' } },
    { year: 2025, event: { it: 'Palazzo Bovara, Milano, Italia (Febbraio)', en: 'Palazzo Bovara, Milan, Italy (February)' } },
    { year: 2024, event: { it: 'Luxembourg Art Prize, Lussemburgo, Lussemburgo (certificato di merito artistico)', en: 'Luxembourg Art Prize, Luxembourg, Luxembourg (Certificate of Artistic Merit)' } },
    { year: 2024, event: { it: 'Premio Combat Prize, Italia (segnalazione della giuria — Video Art)', en: 'Premio Combat Prize, Italy (Jury Mention — Video Art)' } },
    { year: 2023, event: { it: 'Teatro Factory32, Milano, Italia ', en: 'Teatro Factory32, Milan, Italy' } },
    { year: 2023, event: { it: 'Luxembourg Art Prize, Lussemburgo, Lussemburgo (certificato di merito artistico)', en: 'Luxembourg Art Prize, Luxembourg, Luxembourg (Certificate of Artistic Merit)' } },
    { year: 2023, event: { it: 'Explora, Online ', en: 'Explora, Online' } },
    { year: 2023, event: { it: 'La Flor Negra, Málaga, Spagna ', en: 'La Flor Negra, Málaga, Spain' } },
    { year: 2022, event: { it: 'Luxembourg Art Prize, Lussemburgo, Lussemburgo (certificato di merito artistico)', en: 'Luxembourg Art Prize, Luxembourg, Luxembourg (Certificate of Artistic Merit)' } },
    { year: 2022, event: { it: 'JustArt, Online ', en: 'JustArt, Online' } },
   { year: 2022, event: { it: 'Galleria Dantebus, Roma, Italia ', en: 'Galleria Dantebus, Rome, Italy' } }
]
};
export const articles = [
{
    id: 2,
    title: {

      it: ' Málaga, 20 ottobre 2023, venerdì ',
      en: ' Málaga, Friday 20 October 2023 ',
    },
    date: '20/10/2023',
    excerpt: {
      it: '   ',
      en: '   '
    },
    content: {
      it: `Vedo il mondo un po’ strano. La gente cammina e sembra non accorgersene.
Odio la gente. Amo le persone.
Ogni tanto si incontra qualcuno illuminato, si percepisce che è illuminato, ma non ci si espone subito. Si inizia con piccoli frammenti di pensiero, qualche indizio; l’altro fa altrettanto. E si continua così. Se il tempo lo consente si arriverà a palesarsi e tutto allora sarà più facile.
Comunque il mondo che vedo è bello, ma solo in apparenza.
Mi si conceda una nota poetico popolare: è come lavarsi la faccia ma non il culo!

Il mondo ci vuole belli, tonici, sani, preparati.
Il mondo ci vuole giovani.
Il mondo ci vuole omologati.
Il mondo ci vuole schiavi.
Ma chi è il mondo?

La bellezza merceologica, i filtri dei social per togliere i difetti… ma poi, perché sono difetti?
Le rughe, i capelli bianchi, un po’ di ciccia?
E poi il mondo, ma lo sapete che hanno coniato un termine per definire i “normali”? oddio, se dico normali sono omofoba? Sono razzista? Io non sono normale, sono CISGENDER… pazzesco… e io che pensavo di essere solo normale… e la famiglia queer? Ovvero la famiglia che ti scegli? Tipo il compagno? Perché non possiamo solo chiamarlo famiglia?

Di fronte all’intelligenza artificiale, non so se sentirmi come un dominicano di fronte alle sfrontatezze galileiane o come Sarah Connor di fronte al primo Terminator (perché poi il secondo si redime, come per sviare i pensieri).

A me non piace questa idea di tutti uguali, che però ci insegnano che diversi è bello, ma in fondo se sei diverso sei ghettizzato, perché diverso è bello solo se entri in una definizione, in uno schema preconfezionato, che stabilisce che la tua diversità è bella. Altrimenti, diverso non è bene.
Cercando di scrivere questi pensieri, cos¡ un po’ liberamente, mi rendo conto di ingarbugliarmi sempre di più.

Solo il futuro ci darà ragione o torto. Il tempo, giudice imparziale, potrà dire all’umanità se la strada intrapresa è una matrix di follia o il sentiero della ragione.

Mi piace questa idea di tirar fuori le opere da magazzini polverosi, dalla terra. Opere abbandonate, che ci raccontano un presente ormai passato, che ci dicono (o meglio, cerchiamo di interpretare) quello che le persone del momento avrebbero voluto dire.
E le mie opere, se fossero in un futuro, cosa racconterebbero? Cosa vorrei che raccontassero? La voglia di apertura verso un mondo metafisico (mi viene in mente Beyond con le mie mani che squarciano la tela) o il Grande Fratello (come nei piccoli quadratini di Homologation)?
In tutto comunque esiste un pensiero positivo, il difetto di fabbrica, il diverso, l’eroe… vorrei essere un eroe? Non so, il peso del personaggio mi schiaccerebbe.

Torniamo alla positività: la macchinina diversa e dorata è la positività. È avere la forza di guardare fuori dal coro, di saltare i paradigmi, di osare. Il mondo ci vorrebbe tutti ordinati.

E allora ci si scopre dentro a un corpo con un’anima fragile, che non ci sta ai condizionamenti, alle imposizioni… si soffre. L’eroe soffre sempre. Perché l’eroe deve soffrire sempre? `,
      en: ` I see the world just a little strange. People walk around and seem not to notice.
I hate people. I love persons.
Every now and then, you meet someone enlightened, you can sense it, but you don't show yourself right away. You start with little fragments of thought, a few hints; the other does the same. And so it goes. If time allows, you'll eventually come into the open, and everything becomes easier.
Anyway, the world I see is beautiful, but only on the surface.
Allow me a bit of poetic street wisdom: it's like washing your face but not your arse!
The world wants us beautiful, toned, healthy, prepared.

The world wants us young.
The world wants us standardised.
The world wants us enslaved.
But who is “the world”?

Beauty as a product, social media filters to erase flaws… but why are they flaws? Wrinkles, white hair, a bit of chub?
And then the world, do you know they invented a word to define the “normal” ones? Oh God, if I say “normal” am I being homophobic? Racist? I'm not normal, I'm CISGENDER… crazy… and I thought I was just normal… and the queer family? The one you choose for yourself? Like your partner? Why can't we just call it “family”?

In front of artificial intelligence, I don't know if I feel more like a Dominican faced with Galileo's arrogance or like Sarah Connor facing the first Terminator (because the second one redeems itself, like it's trying to throw us off).

I don't like this idea of everyone being the same, yet they teach us that being different is beautiful, but deep down, if you're different, you get pushed aside, because different is only beautiful if it fits within a definition, a pre-packaged label that says your kind of different is acceptable. Otherwise, different isn't good.
Trying to write all these thoughts, freely like this, I realise I'm getting more and more tangled.

Only the future will tell us if we were right or wrong. Time, the impartial judge, will reveal whether humanity is walking a path of madness or the road to reason.

I like this idea of pulling artworks out of dusty storage rooms, from underground. Abandoned works that tell us about a present that is now the past, that say to us (or at least we try to interpret) what the people of that moment wanted to express.
And my works, if they were found in the future, what would they say? What would I want them to say? The desire to open up to a metaphysical world (Beyond, with my hands tearing the canvas) or Big Brother (like in the little squares of Homologation)?
In everything, there's always a thread of positivity, the factory defect, the different one, the hero… would I want to be a hero? I don't know, the weight of that character would crush me. `
    },
    image: '/media/works/01.jpg',
    featured: true
  },

{
    id: 3,
    title: {
      it: ' Málaga, 1 novembre 2023, mercoledì ',
      en: ' Málaga, Wednesday 1 November 2023 '
    },
    date: '01/11/2023',
    excerpt: {
      it: '  ',
      en: '  '
    },
    content: {
      it: ` Mi piace TikTok, mi sento come quando da bambina mi incantavo davanti a un caleidoscopio. 
Immagini che scorrono. 
Senza mai essere uguali l’una all’altra.
Senza apparente senso.
Senza apparente connessione. 
Immagini che se perdi non ritroverai mai più, perché ci sono milioni di combinazioni e nessuna sarà mai uguale all’altra.

Ogni tanto può sembrare così. 
Ma è un caleidoscopio solo in apparenza. Il grande Fratello controlla anche questo.

Alcune immagini non appariranno mai, perché fanno vedere.
Alcuni pensieri non appariranno mai, perché fanno pensare.
Alcuni suoni non appariranno mai, perché fanno udire.

Lo so. Eppure TikTok mi incanta, come una bambina davanti a un caleidoscopio. 
Lo so, non è un fluire libero. 
Lo so, siamo sempre dentro un sistema. 
Però i sistemi hanno piccole pieghe, dentro cui ci si può muovere in libertà. E così è bello vedere come l’umanità, a volte, cerchi di insinuarsi e sbocciare anche dentro alle piccole fratture, come una piantina nelle crepe dell’asfalto. Le piantine, se sono discrete e abbastanza tenaci, cresceranno, indisturbate, le radici cresceranno e, quando inizieranno a essere fastidiose, saranno ormai così radicate da far faticare per essere eradicate (quante ripetizioni di RADICI, in fondo l’essenza della vita). 

Anche tutta l’umanità è come l’asfalto e le idee si insinuano piano piano nelle pieghe della storia. Finestre di Overton che si aprono senza nemmeno rendercene conto (ed ecco il lato oscuro insinuarsi anche nella più alta visione della forza della vita).

È qualche tempo che metto in dubbio ogni cosa che conosco. Anche le più profonde. E se tutto fosse un enorme TrumanShow? Ogni tanto mi sento una terrapiattista…

E se fossimo dei cyborg e non lo sapessimo?
E se fossimo un pensiero di qualcuno e non ne avessimo coscienza?
E se la nostra intera esistenza fosse un’immagine in un caleidoscopio e come un battito di ciglia verremo spazzati via da un’altra realtà?

Comunque sono. Sono il substrato su cui nascono i pensieri. Sono ciò che è prima della coscienza.

Faccio fluire i pensieri e da questo fluire mi sento viva. Sum ergo sum. `,
      en: `Mi piace TikTok, mi sento come quando da bambina mi incantavo davanti a un caleidoscopio. 
Immagini che scorrono. 
Senza mai essere uguali l’una all’altra.
Senza apparente senso.
Senza apparente connessione. 
Immagini che se perdi non ritroverai mai più, perché ci sono milioni di combinazioni e nessuna sarà mai uguale all’altra.

Ogni tanto può sembrare così. 
Ma è un caleidoscopio solo in apparenza. Il grande Fratello controlla anche questo.

Alcune immagini non appariranno mai, perché fanno vedere.
Alcuni pensieri non appariranno mai, perché fanno pensare.
Alcuni suoni non appariranno mai, perché fanno udire.

Lo so. Eppure TikTok mi incanta, come una bambina davanti a un caleidoscopio. 
Lo so, non è un fluire libero. 
Lo so, siamo sempre dentro un sistema. 
Però i sistemi hanno piccole pieghe, dentro cui ci si può muovere in libertà. E così è bello vedere come l’umanità, a volte, cerchi di insinuarsi e sbocciare anche dentro alle piccole fratture, come una piantina nelle crepe dell’asfalto. Le piantine, se sono discrete e abbastanza tenaci, cresceranno, indisturbate, le radici cresceranno e, quando inizieranno a essere fastidiose, saranno ormai così radicate da far faticare per essere eradicate (quante ripetizioni di RADICI, in fondo l’essenza della vita). 

Anche tutta l’umanità è come l’asfalto e le idee si insinuano piano piano nelle pieghe della storia. Finestre di Overton che si aprono senza nemmeno rendercene conto (ed ecco il lato oscuro insinuarsi anche nella più alta visione della forza della vita).

È qualche tempo che metto in dubbio ogni cosa che conosco. Anche le più profonde. E se tutto fosse un enorme TrumanShow? Ogni tanto mi sento una terrapiattista…

E se fossimo dei cyborg e non lo sapessimo?
E se fossimo un pensiero di qualcuno e non ne avessimo coscienza?
E se la nostra intera esistenza fosse un’immagine in un caleidoscopio e come un battito di ciglia verremo spazzati via da un’altra realtà?

Comunque sono. Sono il substrato su cui nascono i pensieri. Sono ciò che è prima della coscienza.

Faccio fluire i pensieri e da questo fluire mi sento viva. Sum ergo sum. `
    },
    image: '/media/works/02.jpg',
    featured: true
  },

{
    id: 1,
    title: {
      it: ' Milano, 5 novembre 2023, domenica ',
      en: ' Milan, Sunday, 5 novembre 2023 '
    },
    date: ' 05/11/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` SUM ERGO COGITO.
Vorrei donare il pensiero che nascendo sul mio substrato, attraverso il linguaggio universale dell’arte, si insinua nelle pieghe dell’essere altrui.`,
      en: ` SUM ERGO COGITO.
I wish to offer the thought that, born from my own substratum and conveyed through the universal language of art, insinuates itself into the folds of others’ being.`
    },
    image: '/media/works/03.jpg',
    featured: true
  },

];
