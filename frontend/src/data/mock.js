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
      it: '',
      en: ''
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
  featured: false
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
  featured: false
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
  featured: true
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
  featured: true
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
  image: '/media/works/transhuman_1.jpg',
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
  image: '/media/works/Transhuman.png',
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
  image: '/media/works/las senoritas 3.jpg',
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
  image: '/media/works/neural eugenics.jpg',
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
  image: '/media/works/homologacion 6 pannelli.png',
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
  image: '/media/works/las senoritas.jpg',
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
    id: 54,
    title: {
      it: ' Málaga, 17 novembre 2025, lunedì ',
      en: ' Málaga, November 17, 2025, Monday '
    },
    date: ' 17/11/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` La Fragilità non è una debolezza. 
È la zona di contatto, dove l'essere umano si lascia contaminare, magari contro voglia, ma si trasforma, si tocca. 
Se sei fragile sei permeabile. L'opposto è la corazza, la perfezione. 
La carne si decompone, sente, assorbe, si taglia e quella ferita da e riceve. 

Diversità è ciò che risulta dalla frattura, dal taglio, da ciò che ha ricevuto. è una condizione biologica dell'esistenza. 
Tutto ciò che vive parte uguale e tende alla differenza, devia. 
Differenza e deviazione sono la vita. 
Omologazione la morte. Lenta. 

Fragilità e diversità formano la coppia sovversiva a cui bisognerebbe tendere per non morire. 
In questo mondo che idolatra la performance, la perfezione standardizzata, la ripetitibilità del gesto, in questo mondo essere fragili e essere diversi è un atto di ribellione, consapevole o meno. 

La materia cede. 
L'dentità resiste. 
Il gesso si incrina
La resina si sporca 
La barbie di smonta 
Ogni opera è una piccola rivoluzione, per riaffermare l'irriducibile leggerezza dell'essere, singolarità del corpo, fugacità del pensiero. 
La tecnologia cerca unità, cerca standardizzazione, cerca efficienza. 

La salvezza è avere il coraggio di rispondere con dissonanza, con errori che respirano di verità.
`,
      en: ` Fragility is not weakness.
It is a zone of contact, where the human being allows itself to be contaminated, sometimes unwillingly, but still transforms, still touches.
If you are fragile, you are permeable. The opposite is armor. Perfection.
Flesh decomposes, feels, absorbs, bleeds. And that wound gives and receives.

Diversity is what emerges from the fracture, from the cut, from what has been received. It is a biological condition of existence.
Everything that lives begins equal, and tends toward difference, deviation.
Difference and deviation are life.
Homologation is death. Slow and silent.

Fragility and diversity form the subversive pair we should strive for, if we don’t want to die.
In this world that worships performance, standard perfection, the repeatable gesture, to be fragile and to be different is an act of rebellion, conscious or not.

Matter yields. 
Identity resists.
Plaster cracks.
Resin stains.
The Barbie falls apart.
Each work is a small revolution, reaffirming the irreducible lightness of being, the singularity of the body, the fleetingness of thought.
Technology seeks unity. It seeks standardization. Efficiency.

Salvation lies in the courage to respond with dissonance, with errors that breathe truth.
`
    },
    image: '/media/works/54.png',
    featured: true
  },
{
    id: 53,
    title: {
      it: ' Málaga, 12 novembre 2025, mercoledì ',
      en: ' Málaga, November 12, 2025, Wednesday '
    },
    date: ' 12/11/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` cos'è Arte? 
Arte è idea? 
Se l'idea è già arte, ogni pensiero è creazione.
Ma se nessuno può vedere, toccare, attraversare, resta sogno, resta ombra. 
Ed è più reale una idea o un'ombra? 

Realizzare un'opera diventa quindi parte del processo creativo. 
La realizzazione è arte. 
Toccare, impastare, soffiare, assemblare, sbagliare, ricominciare, tutto fa parte del processo ed entrano con cognizione e a pieno titolo nella definizione di arte. 

Poi arriva il riconoscimento. 
Cosa distingue un oggetto da un'opera d'arte?
Potrebbe essere l'intenzione, quindi il fatto di creare su una base idea e presentare il tutto come un messaggio, chiaro o meno. 

Ecco, poi ci sono le eccezioni. 
C'è arte delegata, commissionata, che nasce da mani estranee. 
C'è arte rubata, plagiata, perchè il furto di idee altrui può essere esso stesso un atto creativo. 
C'è arte invisibile, che non si può toccare, vedere, attraversare. 
C'è arte effimera, come una performance, che vive solo nel momento e poi non esiste più. 
C'è arte caduca, che si distrugge nel tempo, non duratura, che si consuma e finisce lentamente, facendo di questa trasformazione tanti momenti performativi a se stanti. 
C'è arte senza intenzione, nata per sbaglio, con altri scopi o senza volere, in menti tanto chiuse da non poter essere lette o in menti tanto aperte da non poter essere contenute. 

Gli unici due punti che rimangono fermi sono l'inizio e la fine di un'opera: l'idea da cui nasce e il riconoscimento dentro cui finisce. 
Come per un essere vivente, la vita e la morte, due momenti identici per tutti. La diversità sta nel cammino centrale. 

L'inizio, la nascita. 
L'idea è la linfa vitale, la scintilla, la visone geniale che si genera su un substrato mentale fuori norma. Una mente che vede oltre il tempo e il luogo. 

La fine, la morte. 
Il riconoscimento, quel veleno lento che trasforma il gesto in mercato, un riflesso sociale che acceca le menti, una distorsione necessaria. 
Senza pubblico l'opera tace nell'oblio. 
Con troppi occhi diventa spettacolo, evento circense. 

Quindi, forse, la domanda corretta non è "COSA è ARTE?" 
La domanda corretta è "QUANDO QUALCOSA DIVENTA ARTE?" 

Ovvero quell'istante preciso in cui qualcosa smette di essere FARE e diventa ESSERE. 
Questo istante non lo decide l'artsita, non lo decide lo spettatore, non lo decide la critica. 
Succede. 
Succede e basta. 
Come un cortocircuito. 
Come un respiro. 

e tutto ha inizio
`,
      en: ` What is Art?
Is art an idea?
If the idea itself is already art, then every thought is creation.
But if no one can see it, touch it, walk through it, it remains a dream, a shadow.
And tell me: which is more real, an idea or its shadow?

To make an artwork becomes part of the creative process.
Making is art.
Touching, shaping, blowing, assembling, failing, starting again, every gesture belongs consciously and fully to the definition of art.

Then comes recognition.
What separates an object from a work of art?
Perhaps it is intention, the act of creating from an idea and presenting it as a message, clear or obscure.

And yet, there are exceptions.
There is delegated art, commissioned, born from the hands of others.
There is stolen art, plagiarized, because stealing another’s idea can itself be a creative act.
There is invisible art, untouchable, unseen, unwalkable.
There is ephemeral art, that lives only in the moment and then disappears.
There is perishable art, that slowly destroys itself, its decay becoming a series of performances in time.
There is art without intention, born by mistake, from closed minds that cannot be read, or from minds so open they cannot be contained.

The only two fixed points are the beginning and the end of a work: the idea from which it is born, and the recognition that marks its death.
Like a living being, birth and death are the same for all. The difference lies in the journey in between.

The beginning, the birth.
The idea is the lifeblood, the spark, the visionary flash that emerges from a mind that sees beyond place and time.

The end, the death.
Recognition, that slow poison that turns the gesture into market, a social reflection that blinds and distorts.
Without an audience, the work falls silent and fades into oblivion.
With too many eyes, it becomes spectacle, circus, event.

So perhaps the right question isn’t What is Art?
The real question is When does something become Art?

That precise instant when something stops being doing and becomes being.
That moment cannot be decided by the artist, nor by the viewer, nor by the critic.
It just happens.
It happens, simply.

And everything begins.
`
    },
    image: '/media/works/53.jpg',
    featured: true
  },

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
{
    id: 52,
    title: {
      it: ' Milano, 28 settembre 2025, domenica',
      en: ' Milan, September 28, 2025, Sunday '
    },
    date: ' 28/09/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Va in scena 
THE BEAUTIFUL CAGE
Arte e moda si incontrano, si fondono, e danno vita a un’opera che vive solo se è insieme al corpo. La scultura lascia i luoghi tradizionali dell’esposizione e si trasforma in abito, in movimento, in presenza viva.
Dal ciclo Homologación prende forma una gabbia sottile, una crinolina che avvolge il corpo con piastrelle-volto. Barbie, icona pop e sorriso standardizzato, simbolo di un ideale che tutti conosciamo. Non semplice condanna, ma interrogazione: quale bellezza ci viene imposta, quale invece ci appartiene?
Il corpo è al centro. Sempre. Cammina, urta, genera suono. Le crepe, le scheggiature, gli scarti sono parte integrante dell’opera: l’arte che accoglie l’imperfezione, come la vita che si muove libera oltre i confini della creazione. È in quella frattura che la bellezza si espande, si moltiplica. Non un volto solo, ma tanti. Non una misura unica, ma infinite possibilità.
La moda, linguaggio immediato del nostro tempo, diventa qui strumento di un’estetica più ampia: inclusiva, dinamica, personale. La griglia non è soltanto limite, ma partitura. Indossare l’arte diventa performance, respiro, libertà che insiste. Ogni corpo la porta con sé in modo diverso, irripetibile.
The Beautiful Cage celebra l’incontro tra la disciplina della forma e il rischio dell’arte, tra l’icona e l’umano, tra il bello e il vero. Un’alleanza che non veste l’uguale, ma l’unico. Qui la moda rivela, l’arte si accende.
Abito come opera. Opera come corpo. Un invito a ridefinire il bello come pluralità viva, a trasformare la passerella in spazio critico e visionario, dove la differenza non è scarto, ma patrimonio comune, valore condiviso.
Il 28 settembre, la mia opera The Beautiful Cage ha sfilato in passerella, indossata da mia figlia Beatrice. Un momento di continuità e rottura insieme: il corpo che dà vita all’opera è il corpo di mia figlia, simbolo di un’eredità che non si tramanda come forma, ma come domanda.
Io indossavo Fragment of the Cage Black, la cintura composta da volti di Barbie, un pezzo da indossare e allo stesso tempo un frammento di denuncia. Una scultura portabile, una ferita lucente che stringe la vita come un segno. Rappresenta l’omologazione portata addosso, la bellezza standardizzata che si trasforma in catena, ma anche la possibilità di spezzarla.
Sfilare è stato un atto, una performance condivisa. Madre e figlia, due corpi dentro la stessa riflessione. La gabbia e la cintura. Il dentro e il fuori. Due gesti che si parlano, che si guardano, che chiedono: quanto spazio resta per essere davvero umani, dentro le strutture che ci vogliono uguali?

`,
      en: ` On stage:
THE BEAUTIFUL CAGE
Art and fashion meet, merge, and give life to a piece that exists only when joined with the body. Sculpture steps away from traditional spaces and becomes dress, movement, a living presence.
From the Homologación series comes a delicate cage, a crinoline that wraps the body with face-tiles. Barbie, a pop icon with a standardised smile, the symbol of an ideal we all know. Not a simple condemnation, but a question: what kind of beauty is imposed on us, and what belongs to us instead?
The body is the centre. Always. It walks, it collides, it makes sound. Cracks, chips, and flaws are part of the work: art that welcomes imperfection, like life that moves freely beyond the edges of creation. It’s in that fracture that beauty expands and multiplies. Not one face, but many. Not one size, but infinite possibilities.
Fashion, the immediate language of our time, here becomes a tool for a broader aesthetic: inclusive, dynamic, personal. The grid is not just a boundary, but a score. Wearing art becomes a performance, breath, freedom that insists. Each body carries it differently, uniquely.
The Beautiful Cage celebrates the meeting of structured form and artistic risk, of icon and human, of beauty and truth. A union that doesn’t dress the same, it dresses the one-of-a-kind. Here, fashion reveals, art ignites.
Dress as artwork. Artwork as body. An invitation to redefine beauty as a living plurality, to transform the catwalk into a space of critique and vision, where difference is not discarded but cherished, a shared treasure.
On 28 September, my piece The Beautiful Cage walked the runway, worn by my daughter Beatrice. A moment of both continuity and rupture: the body giving life to the work is my daughter’s, a symbol of inheritance passed not as form, but as question.
I wore Fragment of the Cage Black, a belt made of Barbie faces, something to wear and at the same time a fragment of protest. A wearable sculpture, a shining wound wrapped around the waist like a mark. It represents the conformity we carry, the standardised beauty turned into a chain, but also the possibility of breaking free.
Walking the runway was an act, a shared performance. Mother and daughter, two bodies inside the same reflection. The cage and the belt. The inside and the outside. Two gestures speaking, watching, asking:
How much room is left to truly be human, inside the structures that demand we all be the same?
`
    },
    image: '/media/works/52.jpg',
    featured: true
  },


{
    id: 51,
    title: {
      it: ' Málaga, 2 giugno 2025, lunedì ',
      en: ' Málaga, June 2, 2025, Monday '
    },
    date: ' 02/06/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` ABITO-GABBIA
Un vestito che non veste. Incarcera.
La moda come grata, come struttura che contiene, che detta misura.
Le piastrelle sono volti. Sempre uguali. Barbie. L’ideale irraggiungibile, il modello che divora ogni diversità.
Il corpo dentro è fragile. Respira a fatica. Ogni passo è un urto, un tintinnio di sbarre. Camminare diventa performance di resistenza.
L’abito non celebra la bellezza. La smonta. La mostra come imposizione. È un altare all’omologazione, un carillon crudele che gira intorno al corpo.
Ma c’è una crepa. Una testa rotta. Un vuoto. Un punto da cui scappare. La diversità che insiste, che sopravvive.
`,
      en: ` THE CAGE-DRESS
A dress that doesn’t dress, it imprisons.
Fashion as a grate, a frame that holds, that sets the rules.
The tiles are faces. Always the same. Barbie.
The unreachable ideal, the model that swallows all diversity.
The body inside is fragile.
It struggles to breathe.
Each step is a clash, a jingle of bars.
Walking becomes a performance of endurance.
This dress doesn’t celebrate beauty, it dismantles it.
It reveals it as an imposition.
An altar to conformity, a cruel music box spinning around the body.
But there’s a crack.
A broken head.
An empty space.
A place to escape through.
Diversity that insists, that survives.
`
    },
    image: '/media/works/51.jpg',
    featured: true
  },


{
    id: 50,
    title: {
      it: ' Cannes, 24 maggio 2025, sabato ',
      en: ' Cannes, May 24, 2025, Saturday'
    },
    date: ' 24/05/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` GESTO

non è esecuzione
è dialogo
tra ciò che accade
e ciò che potrebbe accadere

la mano tenta
la forma sfugge

ascolto
cedo
resto
`,
      en: ` GESTURE
not execution,
but dialogue
between what happens
and what could happen
the hand tries,
the form slips away
I listen,
I yield,
I remain
`
    },
    image: '/media/works/50.jpg',
    featured: false
  },


{
    id: 49,
    title: {
      it: ' Málaga, 28 marzo 2025, venerdì ',
      en: ' Málaga, March 28, 2025, Friday'
    },
    date: ' 28/03/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` HUMAN LOW COST
Quanto vale un corpo umano?
Una vendita reale.
Un corpo smontato, in pezzi.
Dentro una scatola di cartone. All’asta.
Pezzi di persona. Pezzi di donna. Braccia, mani, torsi. Oggetti qualsiasi.
Con un prezzo, una descrizione. “Usato, ma in buone condizioni.” Forse. Beyond Pricing.
Un esperimento. Una domanda. Una provocazione. Quanto vale un essere umano oggi? Quanto costa l’umanità quando tutto è in saldo?
Ci sarà anche il mio volto. Una maschera di gesso. Presenza e distanza insieme. Il volto resterà fuori dalla scatola. Non si spedisce. Non si compra. È l’unica cosa che ancora resiste al mercato.
Vorrei che chi guarda si sentisse complice. Perché tutti compriamo. Tutti vendiamo. A volte senza accorgercene facciamo finta di nulla.
Human Low Cost sarà questo.
Una denuncia. Un autoritratto.
Una scatola piena di corpi vuoti.
E un silenzio che chiede il prezzo.
`,
      en: ` HUMAN LOW COST
How much is a human body worth? A real sale. A body dismantled, in pieces. Inside a cardboard box. Up for auction. Pieces of a person. Pieces of a woman. Arms, hands, torsos. Ordinary objects. With a price tag, a description. "Used, but in good condition." Maybe. Beyond Pricing. An experiment. A question. A provocation. What is a human being worth today? How much does humanity cost when everything is on sale?
My face will be there too. A plaster mask. Presence and distance at once. The face will stay outside the box. It won’t be shipped. It can’t be bought. It’s the only thing still resisting the market.
I want those who look to feel complicit. Because we all buy. We all sell. Sometimes without even realizing it, we pretend not to notice.
Human Low Cost will be this. A denunciation. A self-portrait. A box full of empty bodies. And a silence that asks for the price.
`
    },
    image: '/media/works/49.jpg',
    featured: false
  },


{
    id: 48,
    title: {
      it: ' Málaga, 20 febbraio 2025, giovedì ',
      en: ' Málaga, February 20, 2025, Thursday'
    },
    date: ' 20/02/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` VOCE

La voce non è sempre suono.
A volte è presenza.
A volte è un’assenza che pesa.

“Cosa vuol dire essere umani?”

L’ho detto in un video.
Lo dicevo io, ma poteva essere chiunque.
Dietro, dei manichini.
Non parlavano.
Ma c’erano.
Testimoni muti.
Esattamente umani.
Esattamente no.

Una domanda buttata nell’aria.
Non per avere risposta.
Ma per aprire una fessura.

A volte parlo.
A volte ripeto.
A volte smetto.

Le parole non sono mai neutre.
Si sfaldano.
Si deformano.
Si distorcono.
Come la voce che le porta.

Parlare è rischiare.
Anche quando nessuno ascolta.

Ogni voce è un corpo.
Un’esposizione.
Un modo per dire: sono qui.
Ma forse non resterò.

Ho cercato di dire qualcosa.
Non perché fosse importante.
Ma perché stava per svanire.

“Cosa vuol dire essere umani?”

Forse è proprio questo:
continuare a chiedere
anche quando la voce non regge più.

`,
      en: ` VOICE
Voice is not always sound. Sometimes it is presence. Sometimes it is an absence that weighs.
“What does it mean to be human?”
I said it in a video. It was my voice, but it could have been anyone’s. Behind me, mannequins. They didn’t speak. But they were there. Silent witnesses. Exactly human. Exactly not.
A question thrown into the air. Not to get an answer. But to open a crack.
Sometimes I speak. Sometimes I repeat. Sometimes I stop.
Words are never neutral. They unravel. They distort. They deform. Just like the voice that carries them.
Speaking is taking a risk. Even when no one is listening.
Every voice is a body. An exposure. A way to say: I’m here. But maybe I won’t stay.
I tried to say something. Not because it was important. But because it was about to disappear.
“What does it mean to be human?”
Maybe it’s exactly this: to keep asking even when the voice can no longer hold.
`
    },
    image: '/media/works/48.jpg',
    featured: false
  },


{
    id: 47,
    title: {
      it: ' Málaga, 19 febbraio 2025, mercoledì ',
      en: ' Málaga, February 19, 2025, Wednesday'
    },
    date: ' 19/02/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` MATERIA

Mi circondo di materia. La lascio vivere con me per giorni, a volte mesi, prima di riuscire a sentire quello che sta cercando di comunicare.
Ogni pezzo sta con me a volte per anni, prima che riusciamo a intenderci e quindi trovare una collocazione. 

Perché la materia non è un mezzo. È una presenza. Resiste. Rifiuta. Collassa. Cade. Si spacca. Rivela.

La materia ha una memoria e il mio lavoro è mettermi in ascolto per capire la sua storia e trovare la giusta collocazione, fino al prossimo riutilizzo.

La forma non è mai prevista.
È una reazione.

A volte è troppo.
A volte è poco.
A volte è altro.

E allora accetto.

Una forma può nascere da un pensiero, ma anche da una dimeticanza.

La materia ha un suo corpo.
Un suo umore.
Un suo tempo.

Non risponde.
Agisce.

Io seguo.
Intervengo.
Poi mi fermo.

La materia non è lì per essere bella.
È lì per essere vera.
`,
      en: ` MATTER
I surround myself with matter. I let it live with me for days, sometimes months, before I can feel what it’s trying to communicate.
Each piece stays with me sometimes for years before we manage to understand each other and find its place.
Because matter is not a medium. It’s a presence. It resists. It refuses. It collapses. It falls. It breaks. It reveals.
Matter has a memory, and my job is to listen to understand its story and find the right place for it, until the next reuse.
Form is never planned.
It is a reaction.
Sometimes it’s too much.
Sometimes it’s not enough.
Sometimes it’s something else.
And then I accept.
A form can be born from a thought, but also from forgetfulness.
Matter has its own body.
Its own mood.
Its own time.
It doesn’t respond.
It acts.
I follow.
I intervene.
Then I stop.
Matter is not there to be beautiful.
It’s there to be true.
`
    },
    image: '/media/works/47.jpg',
    featured: false
  },


{
    id: 46,
    title: {
      it: ' Málaga, 17 febbraio 2025, lunedì ',
      en: ' Málaga, February 17, 2025, Monday '
    },
    date: ' 17/02/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` ERRORE

Non tutto si incastra.
Non tutto torna.
E va bene così.

A volte qualcosa nasce “storta” e non va aggiustata. Va bene così. La materia si increspa, si rompe, si crepa, come se volesse parlare, dire qualcosa. Allora ci si deve fermare ad ascoltare quello che cerca di dirci il mondo. Per farlo bisogna lasciare. Fermarsi ad osservare. Lasciarsi invadere.

Lì inizia il lavoro.

Il sistema, quello grande, non lo aveva previsto. Io non lo avevo previsto. Ma è successo. 
Una forma sbilenca, una sbavatura, un dettaglio che stona, come un errore genetico da cui nascono nuove forme di vita. Un difetto che non puoi smettere di guardare. Forse non è bello, ma è vivo.
Alcune volte niente funziona come vorrei, ma continuo, mi sposto, seguo i nuovi margini.
E cambio di prospettiva. Non mi interessa far tornare tutto, mi interessa vedere dove porta questa nuova strada. Cosa resta, cosa rivela.

E l’errore si trasforma in traccia. Non è più un difetto, è una identità che si stacca dal resto. 
Una crepa diventa un passaggio metafisica verso una nuova dimensione.
Uno scarto somiglia a una possibilità.

Nel momento esatto in cui qualcosa devia, lì inizia davvero il mio lavoro. Non correggendo decido, non correggendo rendo visibile.
Lo lascio parlare, lo lascio stare.

Perché: 
chi decide cosa è bello e cosa non lo è?
chi decide cosa è giusto e cosa non lo è?

Dove finisce il difetto e inizia l’identità?

`,
      en: ` ERROR
Not everything fits.
Not everything adds up.
And that’s okay.
Sometimes something is born “crooked” and doesn’t need fixing. It’s okay like that. The material ripples, breaks, cracks, as if it wants to speak, to say something. Then you must stop and listen to what the world is trying to tell you. To do that, you need to let go. Stop and observe. Let yourself be invaded.
That’s where the work begins.
The system, the big one, didn’t foresee it. I didn’t foresee it. But it happened.
An unbalanced shape, a smudge, a detail that clashes, like a genetic error from which new forms of life are born. A flaw you can’t stop looking at. Maybe it’s not beautiful, but it’s alive.
Sometimes nothing works as I want, but I go on, shift, follow new edges.
And I change perspective. I’m not interested in making everything match; I’m interested in seeing where this new path leads. What remains, what is revealed.
And the error transforms into a trace. It’s no longer a flaw, but an identity separating itself from the rest.
A crack becomes a metaphysical passage to a new dimension.
A deviation resembles a possibility.
At the exact moment something strays, that’s where my work truly begins. Not by correcting do I decide, not by correcting do I make it visible.
I let it speak. I let it be.
Because:
who decides what is beautiful and what is not?
who decides what is right and what is not?
Where does the flaw end and identity begin?
`
    },
    image: '/media/works/46.jpg',
    featured: false
  },


{
    id: 45,
    title: {
      it: ' Málaga, 16 febbraio 2025, domenica ',
      en: ' Málaga, February 16, 2025, Sunday'
    },
    date: ' 16/02/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` MASCHERA

Tutti portano una faccia.
Ma il volto dov’è?
Occhi chiusi.
Bocche cucite.
Il silenzio è più preciso di ogni parola.

I miei silenzi sono maschere.

Il gesso aderisce.
La resina indurisce.
Ma non appartiene.
È pelle estranea.
È simulazione.

Un volto spento.
Non dorme.
Non finge.
Non sente più il bisogno di reagire.

Narratori silenziosi nel grande teatro dell’esistenza umana, parlano.

Parlano?
O stanno lì, come resti?
Fermi. Disattivati.
Testimoni non coinvolti.

Le maschere non mostrano.
Non coprono.
Sono.

Queste maschere cercano un ritorno all’umano.

Forse l’umano è questo.
Un residuo.
Un’apparenza fragile.
Un’interruzione nella perfezione della forma.

Un dialogo continuo.

Ma a voce bassa.
Quasi assente.
Quasi sparita.

Nessuna bocca si apre.
Nessun occhio si muove.
Solo il gesso che si fa carne.
Solo il vuoto che resta.
`,
      en: ` MASK
Everyone wears a face.
But where is the true face?
Eyes closed.
Mouths sewn shut.
Silence is more precise than any word.
My silences are masks.
Plaster clings.
Resin hardens.
But it does not belong.
It’s foreign skin.
It’s simulation.
A lifeless face.
It doesn’t sleep.
It doesn’t pretend.
It no longer feels the need to react.
Silent narrators in the grand theater of human existence, they speak.
Do they speak?
Or do they just remain there, like remnants?
Still. Deactivated.
Uninvolved witnesses.
Masks do not show.
They do not hide.
They are.
These masks seek a return to the human.
Perhaps the human is this.
A residue.
A fragile appearance.
A disruption in the perfection of form.
An ongoing dialogue.
But in a low voice.
Almost absent.
Almost vanished.
No mouth opens.
No eye moves.
Only plaster becoming flesh.
Only the void that remains.
`
    },
    image: '/media/works/45.jpg',
    featured: false
  },


{
    id: 44,
    title: {
      it: ' Milano, 9 febbraio 2025, domenica ',
      en: ' Milan, Sunday, February 9, 2025'
    },
    date: ' 09/02/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Milano. Febbraio.
Blindness cammina.
Non più appesa, non più oggetto. Diventa pelle.
Un’opera che respira solo quando qualcuno la indossa.
Il volto blu si muove, cambia forma, cambia senso.
Ogni passo lo trasforma: non è più maschera, è corpo condiviso.
La seta vibra, la luce la attraversa.
L’arte scende dal piedistallo e si fa esperienza.
Mi interessa quel punto lì.
Quando l’opera smette di essere mia.
Quando diventa qualcuno.
Quando si lascia guardare e guardare indietro.
Blindness non è più un volto cieco, ma uno sguardo che si moltiplica.
Ogni piega è una domanda.
Ogni movimento, una risposta provvisoria.
`,
      en: ` Milan, February.
Blindness walks.
No longer suspended, no longer an object. It becomes skin.
A work of art that only breathes when someone wears it.
The blue face moves, shifts shape, shifts meaning.
Every step transforms it: no longer a mask, but a shared body.
Silk vibrates, light flows through it.
Art steps down from the pedestal and becomes experience.
That’s the moment that interests me.
When the artwork stops being mine.
When it becomes someone.
When it allows itself to be seen and to look back.
Blindness is no longer a blind face, but a gaze that multiplies.
Each fold is a question.
Each movement, a provisional answer.
`
    },
    image: '/media/works/44.jpg',
    featured: false
  },


{
    id: 43,
    title: {
      it: ' Málaga, 22 gennaio 2022, mercoledì ',
      en: ' Málaga, Wednesday, January 22, 2025 '
    },
    date: ' 22/01/2022 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` DIVERGENZA

Al mondo non interessa davvero chi sei.
La maggior parte delle domande vuole solo risposte in superficie.
Risposte compatibili. 
Risposte con margini di tolleranza.Il mondo non chiede chi sei.
Ti chiede quanto sei disposto a scivolare in un corpo preconfezionato.
Quanto riesci a sembrare qualcun altro.
Fin da bambino ti mettono in fila.
Poi ti danno un numero.
Poi una direzione.
E dicono: “questo è il verso giusto”.

Ogni forma ha una matrice.
Ogni pensiero un template.
Ogni sorriso è un modello replicato in serie.

Il mondo oggi non ha stile.
Solo moda proposta.
Ci avvolgiamo in tessuti e idee preconfezionate.
Gabbie che stringono il corpo e il pensiero.
Ti vestono. Ti definiscono. Ti aggiornano.

La differenza viene archiviata. Etichettata. Minimizzata.
“Sei originale,” ti dicono.
Ma solo se la tua devianza entra nel format.

La vera differenza, quella che grida, è muta.
Fa attrito senza rumore.
Si vede di lato.
Non ha angoli instagrammabili.
`,
      en: ` DIVERGENCE
The world doesn’t really care who you are. Most questions only seek surface-level answers. Compatible answers. Answers with acceptable margins of tolerance. The world doesn’t ask who you are. It asks how willing you are to slip into a prepackaged body. How well you can look like someone else. From childhood, you’re lined up. Then given a number. Then a direction. And they say: “This is the right way.”
Every form has a mold. Every thought a template. Every smile is a mass-replicated model.
Today’s world has no style. Only marketed trends. We wrap ourselves in ready-made fabrics and ideas. Cages that tighten around body and thought. They dress you. Define you. Update you.
Difference is archived. Labeled. Minimized. “You’re original,” they say. But only if your deviation fits the format.
True difference, the one that screams, is silent. It creates friction without sound. It’s seen from the side. It has no Instagrammable angles. It has sharp edges.
`
    },
    image: '/media/works/43.jpg',
    featured: false
  },


{
    id: 42,
    title: {
      it: ' Málaga, 7 gennaio 2025, martedì ',
      en: ' Málaga, Tuesday, January 7, 2025 '
    },
    date: ' 07/01/2025 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Questo diario è una crepa.
Un diario frammentato.
Una voce che si stacca dal coro.

Le opere tracciano percorsi.
Accennano corpi, presenze, deviazioni.
Ogni pagina è un piccolo attrito.

Qui si celebra l’errore.
La smagliatura.
Il pensiero storto che apre lo spazio.

C’è gesso, plastica, voce distorta.
C’è un desiderio di divergere.
Di guardare dove non si guarda.
Di toccare anche quando il tatto è vietato.

Chi entra porta con sé la propria deviazione.
Qui si è.
Per un istante.
Con tutta la propria imperfezione a vista.
`,
      en: ` This diary is a crack.
A fragmented diary.
A voice that breaks away from the chorus.
The works trace paths.
They hint at bodies, presences, deviations.
Each page is a small friction.
Here, error is celebrated.
The snag.
The crooked thought that opens space.
There is plaster, plastic, distorted voice.
There is a desire to diverge.
To look where no one looks.
To touch even when touch is forbidden.
Those who enter bring their own deviation.
Here, we are.
For an instant.
With all our imperfection in plain sight
`
    },
    image: '/media/works/42.jpg',
    featured: false
  },


{
    id: 41,
    title: {
      it: ' Málaga, 10 dicembre 2024, martedì',
      en: ' Málaga, December 10, 2024, Tuesday '
    },
    date: ' 10/12/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Il colonialismo di oggi non disegna più confini sulle mappe, ma incide schemi nelle menti. Non è un dominio di terre, ma di idee. Siamo diventati coloni inconsapevoli, confinati in pensieri che non abbiamo scelto. Il vecchio colonialismo rubava terre, il nuovo ruba visioni: ci impone un mondo di idee preconfezionate in cambio della nostra capacità di immaginare e sognare il diverso.

È un potere silenzioso, invisibile, che si insinua come una nebbia. Ci spinge a conformarci, a omologarci, a vedere nell’unicità una deviazione anziché una ricchezza. Eppure, in un mondo dove l’apparenza della libertà è ovunque, il vero dominio si esercita proprio nel modo in cui pensiamo, desideriamo, creiamo.

La rivoluzione, oggi, non è più conquistare terre, ma riconquistare la libertà di pensare, la libertà di essere autentici. Di guardare oltre e immaginare un nuovo spazio, un nuovo tempo, dove le idee non siano confini ma ponti, non prigioni ma ali.
`,
      en: ` Today's colonialism no longer draws borders on maps, it carves patterns into our minds. It is no longer a domination of land, but of thought. We have become unconscious colonists, confined within ideas we never chose. The old colonialism stole land; the new one steals vision, offering us prepackaged ideologies in exchange for our ability to imagine and dream differently.
It is a silent, invisible power that seeps in like fog. It pushes us to conform, to standardize, to see uniqueness as deviation rather than richness. And yet, in a world where the illusion of freedom is everywhere, true control is exercised in how we think, desire, and create.
Revolution today is no longer about conquering territories, it is about reclaiming the freedom to think, the freedom to be authentic. To look beyond and imagine a new space, a new time, where ideas are not walls but bridges, not prisons, but wings.
`
    },
    image: '/media/works/41.jpg',
    featured: false
  },


{
    id: 40,
    title: {
      it: ' Málaga, 29 novembre 2024, venerdì',
      en: ' Málaga, November 29 2024, Friday '
    },
    date: ' 29/11/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Ogni opera è un racconto, un viaggio che si dipana nel tempo. Non si può assorbire tutto in un istante, come non si può comprendere una vita da un solo sguardo. L’opera nasce lentamente, a volte in pochi minuti, altre volte in anni di gestazione. E davanti a essa non possiamo aspettarci di essere colpiti al cuore immediatamente, come un lampo che squarcia la notte. Come per i libri o i film, c’è un momento di attrazione iniziale: la copertina, il titolo, i colori, le armonie che ci chiamano. Ma poi bisogna lasciare che l’opera parli, che prenda tempo per raccontare tutto il suo discorso.
Dobbiamo imparare ad ascoltare. E non solo: dobbiamo avere i mezzi per comprendere. Non tutte le opere possono parlarci; alcune non trovano la strada per la nostra mente o il nostro cuore. Se un’opera non riesce a parlarci, forse usa un linguaggio che ancora non conosciamo, un codice a noi estraneo. Ma non è l’opera a sbagliare, né noi. È solo un dialogo che non può avvenire, non in quel momento. Forse serve tempo, forse servono nuove chiavi. Eppure ogni volta che ci fermiamo davanti a un’opera, le offriamo una possibilità: quella di raccontarsi e quella di rivelarci qualcosa di noi stessi.
In fondo, l’arte non è mai muta, anche se a volte non riusciamo a sentirla. Ogni opera è una voce che parla al tempo e al mondo, e spetta a noi decidere se fermarci ad ascoltare, se accogliere quel dialogo o lasciarlo scorrere via, in attesa di un’altra occasione.

Ma allora, qualsiasi cosa può essere arte? Come possiamo distinguere ciò che è arte da ciò che non lo è? Noi, umani, osiamo appropriarci della forza creatrice della natura e definirla arte, eppure la natura stessa non viene mai chiamata tale. Non è forse un po’ come il viaggio di Icaro verso il Sole? Un atto di arroganza, forse, o una semplice aspirazione a qualcosa di più grande.

E poi, come posso definirmi artista? Posso davvero esserlo se nessuno mi comprende, se nessuno riconosce il mio lavoro? Oppure basta avere un messaggio da inviare al mondo, una visione, un bisogno di comunicare? Mi tormenta questo dubbio: essere artista richiede il riconoscimento degli altri o nasce dal semplice atto creativo? Forse essere artista significa proprio questo: creare anche quando il mondo non ascolta, anche quando non capisce. Ma allora, qual è il confine tra un gesto qualsiasi e un’opera d’arte?
`,
      en: ` Every artwork is a story, a journey unfolding over time. You cannot absorb it all in an instant, just as you cannot understand a life with a single glance. An artwork is born slowly, sometimes in minutes, other times over years of gestation. And when we stand before it, we shouldn’t expect to be struck immediately, like lightning in the night. As with books or films, there is an initial attraction: the cover, the title, the colors, the harmony that calls to us. But then, we must let the artwork speak, and give it time to reveal its full message.
We must learn to listen. And not only that, we must be equipped to understand. Not every artwork will speak to us; some won’t find their way to our minds or hearts. If an artwork fails to connect, perhaps it uses a language we have yet to learn, a code unfamiliar to us. But it is not the artwork’s failure, nor ours. It’s simply a dialogue that cannot happen, not at that moment. Perhaps time is needed. Or new keys. Yet each time we pause before an artwork, we give it a chance: to speak, and to reveal something about ourselves.
After all, art is never silent, even when we cannot hear it. Every piece is a voice that speaks to the world and across time. And it’s up to us to choose whether to stop and listen, to welcome that dialogue, or to let it pass, waiting for another moment, another opportunity.
But then, can anything be called art? How can we distinguish what is art from what is not? We humans dare to appropriate the creative force of nature and name it art, yet nature itself is never labeled as such. Isn’t this perhaps like Icarus flying toward the sun? A gesture of arrogance, perhaps, or simply an aspiration toward something greater.
And how can I call myself an artist? Can I truly be one if no one understands me, if no one recognizes my work? Or is it enough to have a message to send to the world, a vision, a need to communicate? I am haunted by this doubt: does being an artist require recognition from others, or is it born from the mere act of creation? Perhaps being an artist means creating even when the world doesn’t listen, even when it doesn’t understand. But then, where is the line between any act and a work of art?
`
    },
    image: '/media/works/40.jpg',
    featured: false
  },


{
    id: 39,
    title: {
      it: ' Málaga, 18 novembre 2024, lunedì',
      en: ' Málaga, November 18, 2024, Monday '
    },
    date: ' 18/11/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` In questa installazione, Barbie, simbolo iconico e controverso della perfezione plastica e dell’omologazione, si distende inerte sopra un tablet. Questo dispositivo, emblema dei social media e della comunicazione digitale, diventa l’altare moderno di un sacrificio silenzioso e cruento. È un rituale che non versa sangue, ma che consuma l’individualità in favore di una perfezione standardizzata e imposta.
Il corpo della bambola, idealizzato e irreale, si trasforma in una metafora universale del condizionamento. Non rappresenta solo il corpo femminile, ma l’intero essere umano sacrificato sull’altare di uno sguardo collettivo che ci vuole levigati, omologati, e perfetti in superficie.

La presenza del fuoco – ancestrale e sacro – amplifica l’atmosfera rituale, evocando un sacrificio primitivo che però si consuma nel freddo e sterile contesto digitale. Le fiamme riflettono sulla plastica immobile e sul vetro del tablet, creando un contrasto tra la vitalità pulsante dell’elemento naturale e l’artificialità delle icone moderne. Il fuoco, simbolo di purificazione e trasformazione, diventa anche un monito: potrebbe distruggere ciò che vediamo, o forse liberarci dai paradigmi opprimenti che ci siamo autoimposti.
Quest’opera invita lo spettatore a riflettere su ciò che stiamo sacrificando per conformarci ai modelli imposti. È un dialogo tra passato e presente, tra il sacro e il profano, tra la natura umana e la tecnologia che rischia di ridurla a una vuota estetica. In questo contrasto si innalza la domanda: è possibile riconquistare un’identità autentica, bruciando ciò che ci rende uguali e riscoprendo ciò che ci rende unici?
`,
      en: ` In this installation, Barbie, an iconic and controversial symbol of plastic perfection and societal conformity, lies inert atop a tablet. This device, emblematic of social media and digital communication, becomes a modern altar for a silent, bloodless, yet brutal sacrifice. It is a ritual that spills no blood but burns away individuality in favor of a standardized, imposed ideal.
The doll’s idealized and unrealistic body becomes a universal metaphor for conditioning. It no longer represents just the female body but humanity as a whole, sacrificed to a collective gaze that demands smooth surfaces, uniformity, and perfection.
The presence of fire, ancestral and sacred, intensifies the ritualistic atmosphere, evoking a primitive sacrifice that unfolds within the sterile realm of the digital age. The flames flicker across the doll’s plastic and the tablet’s glass, creating a striking contrast between the raw vitality of a natural element and the artificiality of modern icons. Fire, as a symbol of purification and transformation, becomes a warning: it may destroy what we see, or perhaps liberate us from the oppressive paradigms we’ve imposed upon ourselves.
This work invites the viewer to reflect on what we are sacrificing to fit into imposed standards. It is a dialogue between past and present, sacred and profane, the human and the technological, a tension that raises the essential question: can we reclaim an authentic identity by burning what makes us the same, and rediscovering what makes us unique?
`
    },
    image: '/media/works/39.jpg',
    featured: false
  },


{
    id: 38,
    title: {
      it: ' Málaga, 16 novembre 2024, sabato',
      en: ' Málaga, November 16, 2024, Saturday '
    },
    date: ' 16/11/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Ho raccolto pezzi di bambole, frammenti di corpi e volti smontati, simboli di un ideale irraggiungibile, perfetto e freddo. 
Questi resti di plastica – teste senza corpo, gambe o braccia – sono stati collocati dentro un contenitore che un tempo ospitava tecnologia e dati, e che ora accoglie i frammenti di un’identità dispersa. 
L’assemblaggio diventa un racconto. 
Un racconto visivo su come la società smonta e ricompone il concetto di bellezza e femminilità, secondo un modello preconfezionato. 
Nell’interazione tra il metallo freddo del computer e la fragilità della plastica, emerge un contrasto: l’ideale estetico è freddo e rigido, mentre la realtà della nostra individualità è fratturata, complessa, umana. 
Queste bambole smembrate, da giocattoli diventano simboli di resistenza: ogni pezzo racconta una storia, una lotta per adattarsi a standard che ignorano l’imperfezione e la diversità. Ogni frammento è un invito a riflettere. 

Cosa accade quando ciò che non si conforma viene scartato? 
In questa installazione, i corpi rotti sono la bellezza e l’identità che non possono essere costrette in stampi rigidi. La femminilità qui non è un’immagine intatta, levigata, ma una serie di cicatrici e rotture, una forza che si rivela attraverso le crepe. 
Con quest’opera, invito a guardare oltre l’apparenza, a interrogarsi su cosa definiamo ‘perfetto’ e su quanto sia limitante quel concetto. 
Ogni frammento di plastica, in questa carcassa di metallo, ci ricorda che la nostra vera forza risiede nelle imperfezioni, nelle storie che ci rendono unici, nei segni che restano quando abbandoniamo le maschere
`,
      en: ` I gathered doll parts, fragmented bodies and dismantled faces, symbols of an unattainable, perfect, and cold ideal. These plastic remnants, headless torsos, arms, legs, were placed inside a container that once held technology and data, and now houses the scattered pieces of a fractured identity. The assemblage becomes a narrative. A visual story about how society disassembles and reassembles the concept of beauty and femininity, shaping it according to a prepackaged mold.
In the interaction between the cold metal of a computer and the fragile plastic of the dolls, a stark contrast emerges: the aesthetic ideal is rigid and lifeless, while our lived reality is fractured, complex, human. These dismembered dolls, once toys, now become symbols of resistance. Each piece tells a story, a struggle to conform to standards that reject imperfection and deny diversity. Each fragment is an invitation to reflect.
What happens to what doesn't conform? In this installation, the broken bodies represent beauty and identity that refuse to be constrained by rigid molds. Femininity here is not a polished, intact image, it is made of scars and fractures, a strength revealed through the cracks.
With this work, I invite viewers to look beyond appearances, to question what we define as ‘perfect,’ and to consider how limiting that concept truly is. Every piece of plastic in this carcass of metal is a reminder that our true strength lies in imperfection, in the stories that make us unique, in the marks that remain once we’ve shed our masks.
`
    },
    image: '/media/works/38.jpg',
    featured: false
  },


{
    id: 37,
    title: {
      it: ' Málaga, 15 novembre 2024, venerdì',
      en: ' Málaga, November 15, 2024, Friday '
    },
    date: ' 15/11/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Dove risiede la bellezza?

A volte cerchiamo di avvicinarci a un canone invisibile e irraggiungibile di bellezza preconfezionata in un filtro di Instagram per vederci BELLI. A volte ci guardiamo allo specchio e non ci riconosciamo più, come risvegliati da lunghi anni di coma profondo, dove allo specchio vorremmo vedere il 20enne che si è addormentato la sera prima, invece vediamo il 50enne con tutta la sua vecchiezza addosso.
Ma la bellezza non è nella gioventù o nella assenza di difetti. La bellezza credo sia unicità e vibrazioni, piccoli difetti che rendono unico e irripetibile il manufatto, sfumature di imperfezione che mischiandosi creano una nuance unica. 
Il mondo ora ci vuole omologati, ma divisi, a spendere energie per incontrare un canone irraggiungibile. Dove potremo mai arrivare? E ese ci fermassimo a pensare cosa vuol dire essere umani? E se ci fermassimo a chiederci se è meglio essere perfetti o essere umani? E se ci fermassimo e basta?
Canoni
Modelli
Sono come posti di un enorme parcheggio di un centro commerciale, in cui dobbiamo incasellarci, altrimenti siamo troppo diversi, e il sistema ci ripudia, spuntandoci nel nulla. Ma sarà proprio il nulla quello in cui siamo tirati? O è un altro mondo fatto di bellezza?


Spesso ci sforziamo di conformarci a un canone invisibile, irraggiungibile, come fosse racchiuso in un filtro di Instagram che promette di renderci "BELLI". Poi, ci guardiamo allo specchio e non riconosciamo più chi siamo, come se ci svegliassimo dopo un lungo coma. Vorremmo ritrovare il ventenne che eravamo ieri, ma al suo posto vediamo un cinquantenne che porta addosso i segni del tempo, della vita, della "vecchiezza".

Ma la bellezza non vive nella giovinezza, né nell’assenza di difetti. La bellezza è unicità, è vibrazione. È nei dettagli imperfetti che rendono ogni essere umano un’opera irripetibile. È nelle sfumature di ciò che non è perfetto, che si mescolano per creare una nuance unica, impossibile da replicare.

Eppure, il mondo di oggi ci spinge verso l’omologazione. Ci impone di inseguire un ideale vuoto, preconfezionato, consumando energie per qualcosa che non possiamo mai raggiungere davvero. Ma verso cosa stiamo correndo? E se ci fermassimo? Se ci chiedessimo cosa significa davvero essere umani? Se scegliessimo di essere umani piuttosto che perfetti?

Canoni.
Modelli.
Sono come le caselle numerate di un parcheggio infinito, dove dobbiamo incastrarci per essere accettati. E se non lo facciamo, se siamo troppo diversi, il sistema ci spinge verso il margine, ci cancella. Ma è davvero il nulla quello a cui veniamo relegati? O forse è un altro mondo, più autentico, fatto di vera bellezza?

Forse la vera bellezza si trova proprio là, dove il sistema non arriva. Dove la perfezione cede il passo all’unicità. Dove possiamo finalmente essere noi stessi.

`,
      en: ` Where does beauty reside?
Sometimes we strive to fit into an invisible, unattainable standard of beauty, prepackaged through an Instagram filter that promises to make us look “BEAUTIFUL.” Sometimes, we look in the mirror and no longer recognize ourselves, as if awakening from a deep coma, hoping to see the 20-year-old who went to sleep the night before, but instead, we’re met with the 50-year-old bearing the weight of time and age.
But beauty is not youth. It’s not the absence of flaws. Beauty, I believe, lies in uniqueness and vibration, in those small imperfections that make each of us a one-of-a-kind creation. It’s in the nuanced blend of what’s not quite perfect that something truly unrepeatable is born.
The world today demands conformity. It tells us to chase an unreachable ideal, exhausting ourselves in pursuit of something we were never meant to catch. But where are we really going? And what if we stopped, just for a moment, to reflect on what it truly means to be human? What if we asked ourselves whether it’s better to be perfect, or to be human? What if we simply stopped?
Standards. Models.
They’re like numbered parking spaces in a vast commercial lot, where we’re expected to neatly fit. If we don’t, if we stand out too much, the system shuns us, ejects us into the void. But is it really the void we’re cast into? Or is it another world entirely, one made of real, raw, unapologetic beauty?
Maybe true beauty lives right there, beyond the reach of the system. Where perfection yields to authenticity. Where we can finally be ourselves.
`
    },
    image: '/media/works/37.jpg',
    featured: false
  },


{
    id: 36,
    title: {
      it: ' Málaga, 29 maggio 2024, mercoledì',
      en: ' Málaga, May 29, 2024, Wednesday '
    },
    date: ' 29/05/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Immagino un mondo dove molte vite si sviluppano in mondi paralleli, ciascuna con una versione di me che vive la sua esistenza unica. A ogni bivio, a ogni scelta, una versione di me si duplica, imboccando strade diverse e creando un universo di vite che pendono dall’esistenza come un bosco di possibilità. Ogni vita è un ramo che si dirama dalle scelte fatte, e tutte le possibilità vengono esplorate. Io, che sto scrivendo ora, sono quella che ha fatto queste scelte specifiche.

Da qualche parte, in un altro universo, c’è una versione di me che vive ancora in Italia e lavora come impiegata, sognando una vita diversa. In un’altra dimensione, c’è una me che ha scelto la carriera invece della famiglia e ora ha uno studio di architettura di successo. Un’altra ancora ha seguito la sua vocazione artistica fin dai tempi delle scuole superiori e si è immersa nell’arte. E poi, c’è quella che ha dedicato la sua vita allo sport e ora è una allenatrice. Ci sono versioni di me solitarie ma felici, altre solitarie e tristi.

Mi chiedo se tutte queste vite, iniziate nello stesso istante del concepimento, si concluderanno anche nello stesso istante. Sono destinate a vivere lo stesso arco di tempo o, una volta separate, si muovono come esseri indipendenti? 
E se le scelte che facciamo, i bivi che prendiamo, portassero queste vite a ricongiungersi in qualche modo?

Penso ai déjà vu; quando percepiamo qualcosa come già vissuto in modo inconscio: è un’illusione o sono le nostre vite parallele che si toccano? Forse, in quei momenti, le diverse versioni di noi stessi si sfiorano, creando un senso di familiarità e connessione che trascende il singolo percorso che abbiamo scelto.

RIFLESSI DI POSSIBILITÀ
Ogni scelta che facciamo crea una ramificazione, una nuova possibilità che viene esplorata da una versione di noi stessi. In questo intricato intreccio di vite, ogni me vive la propria realtà, affrontando le proprie sfide e celebrando i propri successi. Il bosco delle vite è un intricato ecosistema di esperienze, emozioni e destini che si intersecano e si separano, ognuno con la sua storia unica.
Ciascuna vita ha il potenziale di influenzare le altre in modi sottili ma significativi. Forse, nei momenti di intuizione e ispirazione, stiamo attingendo a esperienze vissute da altre versioni di noi stessi. Forse, i nostri sogni e le nostre aspirazioni sono riflessi delle vite che non abbiamo scelto, ma che esistono comunque in qualche forma.

In questo universo di vite parallele, non ci sono limiti alle possibilità. Ogni scelta è un nuovo inizio, ogni bivio un’opportunità per esplorare un diverso percorso. E così, mentre io scrivo queste parole, so che da qualche parte, in un altro universo, un’altra me sta vivendo una vita completamente diversa, ma ugualmente reale.

Le vite parallele non sono solo un’idea affascinante, ma una riflessione profonda sulla natura delle scelte e delle possibilità. Ogni versione di me contribuisce al grande mosaico dell’esistenza, arricchendo il quadro complessivo con le sue esperienze uniche.
Forse, alla fine, tutte le vite si riuniranno in un punto di convergenza, dove le esperienze accumulate si fonderanno in una comprensione più profonda della nostra esistenza. E fino ad allora, continueremo a esplorare, sognare e vivere, ciascuna versione di noi stessi tracciando il proprio percorso nell’infinito bosco delle vite.
`,
      en: ` I imagine a world where many lives unfold in parallel worlds, each with a version of myself living out its own unique existence. At every crossroads, with every choice, a version of me splits off, taking different paths and creating a universe of lives hanging from existence like a forest of possibilities. Each life is a branch growing from the choices made, and all possibilities are explored. I, the one writing these words now, am the version that made these specific choices.
Somewhere, in another universe, there is a version of me still living in Italy, working an office job and dreaming of a different life. In another dimension, there is one who chose a career over family and now runs a successful architecture firm. Another followed her artistic calling from an early age and has fully immersed herself in art. And then there is the one who devoted her life to sport and became a coach. There are versions of me who live alone but happy, others alone and sad.
I wonder if all these lives, begun at the same instant of conception, will also end at the same instant. Are they destined to live out the same span of time, or, once separated, do they move as independent beings? And if the choices we make, the paths we take, could somehow bring these lives back together again?
I think of déjà vu: when we sense that we’ve already lived something, unconsciously. Is it just an illusion, or are our parallel lives touching for an instant? Perhaps, in those moments, the different versions of ourselves brush against each other, creating a sense of familiarity and connection that transcends the single path we’ve chosen.
Reflections of Possibility
Every choice we make creates a branching, a new possibility explored by a version of ourselves. In this intricate weave of lives, each “me” lives its own reality, facing its own challenges and celebrating its own victories. The forest of lives is an ecosystem of intertwined experiences, emotions, and destinies, each with its unique story.
Each life has the potential to influence the others in subtle but meaningful ways. Perhaps, in moments of intuition and inspiration, we are drawing from experiences lived by other versions of ourselves. Perhaps our dreams and aspirations are reflections of the lives we did not choose, but which exist nonetheless, somewhere.
In this universe of parallel lives, there are no limits to possibility. Every choice is a new beginning, every crossroads an opportunity to explore a different path. And so, as I write these words, I know that somewhere, in another universe, another “me” is living a completely different life, yet equally real.
Parallel lives are not only a fascinating concept but also a profound reflection on the nature of choice and possibility. Every version of me contributes to the grand mosaic of existence, enriching the whole with its unique experiences. Perhaps, in the end, all these lives will meet at a point of convergence, where every experience merges into a deeper understanding of our existence. Until then, we continue to explore, to dream, to live, each version of ourselves tracing its own path through the infinite forest of lives.
`
    },
    image: '/media/works/36.jpg',
    featured: false
  },


{
    id: 35,
    title: {
      it: ' Málaga, 24 maggio 2024, venerdì',
      en: ' Málaga, May 24, 2024, Friday '
    },
    date: ' 24/05/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` opera senza titolo, forse metamorfosi.

rappresenta una riflessione sulla trasformazione e la metamorfosi. 

I due volti sospesi nel vuoto, racchiusi in lunghi bozzoli di tessuto pendenti dal soffitto, mi evocano un processo di nascita o di evoluzione. la vita intrappolata in una fase di transizione, in un momento di potenziale che non ha ancora raggiunto la piena realizzazione.

La luce rappresenta la consapevolezza, la vita e il progresso, mentre l’assenza di luce simboleggia la stasi, l’attesa o la gestazione. Questo contrasto rafforza l’idea di un dualismo tra il raggiungimento della piena espressione e la condizione di attesa.

I bozzoli di tessuto non solo proteggono ma anche limitano.

I volti sospesi nel vuoto sono un passaggio dall’oscurità (oltre il pannello d’acciaio) all’esistenza (la realtà che vediamo ed é tangibile)
È un’opera che parla di trasformazione, diversità e bellezza del cambiamento.
`,
      en: ` Untitled work, perhaps metamorphosis.
It represents a reflection on transformation and metamorphosis.
The two suspended faces, enclosed in long cocoons of fabric hanging from the ceiling, evoke for me a process of birth or evolution, life trapped in a phase of transition, in a moment of potential that has yet to reach full realization.
The light represents awareness, life, and progress, while the absence of light symbolizes stasis, waiting, or gestation. This contrast reinforces the idea of a duality between the attainment of full expression and the condition of waiting.
The fabric cocoons not only protect but also confine.
The faces suspended in the void symbolize a passage from darkness (beyond the steel panel) to existence (the reality we see and can touch). It is a work that speaks of transformation, diversity, and the beauty of change.
`
    },
    image: '/media/works/35.jpg',
    featured: false
  },


{
    id: 34,
    title: {
      it: ' Milano, 17 maggio 2024, venerdì',
      en: ' Málaga, May 17, 2024, Friday '
    },
    date: ' 17/05/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` L’opera "Neural Eugenics" è un’esplorazione visiva dell’inquietante connubio tra tecnologia e umanità, un tema che riflette le paure e le speranze della nostra era contemporanea. Il soggetto, un volto di neonato scolpito in gesso bianco, è avvolto e quasi soffocato da una serie di cavi colorati, simbolo delle connessioni digitali che permeano e controllano la nostra esistenza quotidiana

Il bianco immacolato del gesso rappresenta la purezza e l’innocenza originarie dell’umanità, contrastando fortemente con la presenza fredda e clinica dei cavi, che richiamano le manipolazioni genetiche e le interazioni artificiali. Questi cavi, avvolgendosi attorno al volto del neonato, simboleggiano non solo il potere della tecnologia di plasmare il nostro futuro, ma anche i rischi di un controllo onnipervasivo che può soffocare l’essenza stessa della vita umana

"Neural Eugenics" è una riflessione critica sull’evoluzione dell’eugenetica nell’era digitale: nel futuro, la selezione e la manipolazione delle caratteristiche umane non si limiteranno più alla genetica tradizionale?, si espanderanno al regno del neuro e biohacking? Il neonato, simbolo di nuovi inizi e potenziale illimitato, è un monito visivo dei pericoli che derivano dal tentativo di creare una perfezione artificiale, sottolineando il conflitto tra progresso tecnologico e integrità umana

L’opera invita lo spettatore a interrogarsi sul confine sottile tra progresso e etica, spingendolo a riflettere su quanto siamo disposti a sacrificare della nostra umanità per abbracciare il futuro tecnologico. 
`,
      en: ` The work "Neural Eugenics" is a visual exploration of the unsettling fusion between technology and humanity, a theme that reflects the fears and hopes of our contemporary era. The subject, a newborn’s face sculpted in white plaster, is wrapped and almost suffocated by a series of colorful cables, symbolizing the digital connections that permeate and control our everyday lives.
The immaculate white of the plaster represents the original purity and innocence of humanity, strongly contrasting with the cold, clinical presence of the cables, which evoke genetic manipulation and artificial interactions. These cables, coiling around the newborn’s face, symbolize not only the power of technology to shape our future but also the risks of an all-encompassing control that may stifle the very essence of human life.
Neural Eugenics is a critical reflection on the evolution of eugenics in the digital era: in the future, will the selection and manipulation of human traits go beyond traditional genetics, expanding into the realm of neuro- and biohacking? The newborn, symbol of new beginnings and limitless potential, serves as a visual warning of the dangers inherent in attempting to create artificial perfection, highlighting the conflict between technological progress and human integrity.
The piece invites the viewer to question the fine line between progress and ethics, urging reflection on how much of our humanity we are willing to sacrifice in order to embrace a technological future.
`
    },
    image: '/media/works/34.jpg',
    featured: false
  },


{
    id: 33,
    title: {
      it: ' Málaga, 9 maggio 2024, giovedì',
      en: ' Málaga, May 9, 2024, Thursday '
    },
    date: ' 09/05/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` L’arte contemporanea si trova spesso a navigare in un "ascensore alternativo" della tecnologia, dove l’immensa potenzialità di superare i confini tradizionali e di raggiungere nuove vette creative è temperata dalla crescente immaterialità e dipendenza da strumenti tecnologici. In un’era dominata da forme d’arte digitali e mezzi di espressione elettronici, l’arte sta diventando sempre più un’entità mediata da schermi e dispositivi. Questo legame profondo con la tecnologia, pur essendo un potente veicolo di innovazione e diffusione, rende l’arte vulnerabile a una sorta di obsolescenza indotta da eventuali fallimenti tecnologici

Immaginiamo un futuro ipotetico, una sorta di alba apocalittica, in cui l’energia elettrica diventi un ricordo del passato. In questo scenario, mentre le opere d’arte tradizionali, create su supporti naturali come tela e carta, continuerebbero a esistere e a essere apprezzate, le creazioni digitali potrebbero svanire nell’oblio. Queste ultime, nonostante la loro bellezza e la complessità spesso irraggiungibili, si estinguerebbero rapidamente, incapaci di sopravvivere senza il sostegno della tecnologia che le ha generate. La loro esistenza, legata indissolubilmente alla corrente elettrica e ai supporti digitali, le rende effimere, limitate alla durata di vita delle tecnologie che le ospitano

Questo scenario pone interrogativi fondamentali sulla durabilità e l’eredità dell’arte nella nostra era digitale. La dipendenza dell’arte digitale dalla tecnologia non solo delimita la sua sopravvivenza nel tempo, ma solleva anche questioni sulla sua capacità di essere parte della memoria collettiva umana a lungo termine. Se le opere digitali possono sparire così facilmente, quale posto occuperanno nella storia dell’arte? Saranno ricordate e valorizzate come le loro controparti fisiche o saranno destinate a diventare mere annotazioni nei libri di storia dell’arte, conosciute solo attraverso descrizioni e non attraverso l’esperienza diretta?

Di fronte a questi interrogativi, emerge la necessità di una riflessione critica sul ruolo e il futuro dell’arte nella società tecnologica. È essenziale ponderare su come possiamo preservare la nostra eredità culturale in forme d’arte che rischiano di essere estremamente effimere. La sfida sta nel bilanciare l’innovazione tecnologica con strategie di conservazione che assicurino la longevità dell’espressione artistica in tutte le sue forme, garantendo che le opere digitali possano lasciare un’impronta duratura e significativa
`,
      en: ` Contemporary art often finds itself navigating in an "alternative elevator" of technology, where the immense potential to overcome traditional boundaries and reach new creative heights is tempered by growing immateriality and dependence on technological tools. In an era dominated by digital art and electronic means of expression, art is increasingly becoming an entity mediated by screens and devices. This deep connection with technology, while a powerful vehicle for innovation and dissemination, makes art vulnerable to a kind of obsolescence triggered by potential technological failures.
Let us imagine a hypothetical future, a sort of apocalyptic dawn, in which electricity becomes a memory of the past. In such a scenario, while traditional artworks created on natural supports like canvas and paper would continue to exist and be appreciated, digital creations could vanish into oblivion. The latter, despite their often unmatched beauty and complexity, would quickly become extinct, unable to survive without the technology that gave them life. Their existence, inextricably linked to electric power and digital media, makes them ephemeral, limited to the lifespan of the technologies that host them.
This scenario raises fundamental questions about the durability and legacy of art in our digital age. The dependence of digital art on technology not only limits its survival over time but also raises issues about its capacity to become part of long-term human collective memory. If digital works can disappear so easily, what place will they occupy in art history? Will they be remembered and valued like their physical counterparts, or are they destined to become mere annotations in art history books, known only through descriptions rather than direct experience?
Faced with these questions, the need for critical reflection on the role and future of art in technological society emerges. It is essential to consider how we can preserve our cultural heritage in art forms that are at risk of being extremely ephemeral. The challenge lies in balancing technological innovation with conservation strategies that ensure the longevity of artistic expression in all its forms, ensuring that digital artworks can leave a lasting and meaningful imprint.
`
    },
    image: '/media/works/33.jpg',
    featured: false
  },


{
    id: 32,
    title: {
      it: ' Málaga, 28 aprile 2024, domenica',
      en: ' Málaga, April 28, 2024, Sunday '
    },
    date: ' 28/04/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` L’opera incarna la mia visione della tensione dialettica tra umanità e tecnologia, che si esprime in un dialogo visivo tra tradizione scultorea e avanzi digitali.
La scultura, collocata all’interno di una struttura che è un computer portatile aperto, sembra suggerire una riflessione sul ruolo dell’individuo nell’era dell’informazione.
Il viso, delineato da linee incisive e profonde, rappresenta forse la natura umana, le cui emozioni e pensieri sono sempre più intricati e influenzati dalla tecnologia.
Le componenti elettroniche che lo circondano agiscono come una metafora dell’interconnessione globale, rimandando a un senso di apertura verso il mondo esterno, ma anche di esposizione e vulnerabilità.

Il volto solcato da filamenti di metallo che ricordano i segni delle maschere africane, posto al centro di circuiti e componenti informatici, è una riflessione sulla condizione umana nel contesto del progresso tecnologico e sull’impatto della digitalizzazione sulla diversità culturale.

I materiali usati (il gesso per la scultura e i circuiti elettronici per il contesto) parlano si una sintesi tra passato e il futuro; un dialogo tra antico e nuovo che riflette una poetica personale che si interroga e indaga sul posto dell’essere umano nel mondo contemporaneo, un mondo dove l’avanzamento tecnologico corre velocemente, talvolta senza lasciare il tempo di riflettere sulle conseguenze etiche e sociali che comporta.

La scelta del colore scuro, uniforme per l’intera opera, riflette la introspettività e la gravità del tema. 
Le connessioni fisiche che legano le varie parti della scultura possono essere lette come le interrelazioni fra le persone in una società sempre più interconnessa; possono essere lette anche come catene che limitano e definiscono l’essenza umana entro i confini della tecnologia che lo circonda.
`,
      en: ` This work embodies my vision of the dialectical tension between humanity and technology, expressed through a visual dialogue between sculptural tradition and digital remnants. The sculpture, placed within the structure of an open laptop, seems to suggest a reflection on the role of the individual in the information age. The face, marked by deep and sharp lines, perhaps represents human nature, whose emotions and thoughts are increasingly intertwined with and influenced by technology. The surrounding electronic components act as a metaphor for global interconnectedness, suggesting openness to the external world, but also exposure and vulnerability.
The face is crossed by metal filaments reminiscent of African masks, placed at the center of circuits and computer components. It reflects on the human condition within the context of technological progress and on the impact of digitalization on cultural diversity.
The materials used (plaster for the sculpture and electronic circuits for the context) express a synthesis between past and future, a dialogue between the ancient and the new that reflects a personal poetics questioning the place of the human being in the contemporary world, a world where technological advancement moves so fast that it often leaves no time to reflect on its ethical and social implications.
The choice of dark color, uniform throughout the piece, reflects the introspection and gravity of the theme. The physical connections that bind the various parts of the sculpture can be read as the interrelationships between people in an increasingly interconnected society; they can also be seen as chains that limit and define the human essence within the boundaries of the surrounding technology.
`
    },
    image: '/media/works/32.jpg',
    featured: false
  },


{
    id: 31,
    title: {
      it: ' Málaga, 19 aprile 2024, venerdì',
      en: ' Málaga, Friday, April 19, 2024 '
    },
    date: ' 19/04/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Pensieri su un’opera da presentare al Combat Prize 2024

Le teste di bambole inserite all’interno di strutture metalliche, vecchi case di computer, parlano.
Parlano di fusione tra umanità e tecnologia.
Parlano di contrasto tra la morbidezza e l’innocenza delle bambole e la freddezza e la rigidità del metallo.
Parlano di simboli.
Parlano di tensioni tra natura umana e progresso tecnologico.

Sono anche una riflessione sulla mercificazione dell’umano e sulla riproduzione di identità stereotipate. Le bambole, spesso associate all’idea di gioco e all’infanzia, in questo contesto assumono una connotazione più inquietante, ammassate e senza corpi, come se fossero state oggetto di una produzione di massa e poi dismesse.

La voluta assenza di un titolo lascia aperto il campo delle interpretazioni.
È un invito allo spettatore a un confronto diretto e personale con l’opera, forse sollevando questioni sull’individualità nell’era digitale, sulla conservazione dell’essenza umana di fronte all’avanzamento tecnologico, o sul ciclo di vita degli oggetti in una società consumistica.

Nata nel 1970, la mia vita è stato un percorso in strade molto diverse tra loro, e l’arte si è rivelata quale sentiero imprescindibile, pur tra le interruzioni dettate dal destino.
Un bel giorno, l’arte ha preso il sopravvento: si è trasformata in fondamentale veicolo di espressione e condivisione. Nelle opere cerco di porre domande provocatorie e sfidare l’omologazione, cercando di rompere gli schemi convenzionali per celebrare l’unicità. Ogni pezzo è un frammento di me stessa, una narrazione visiva che intende connettere profondamente con chi guarda, invitando a una riflessione sulle scelte che definiscono chi siamo nel mondo.
`,
      en: ` Thoughts on a piece to submit for the Combat Prize 2024
The doll heads inserted inside metallic structures, old computer cases, speak. They speak of the fusion between humanity and technology. They speak of contrast between the softness and innocence of the dolls and the coldness and rigidity of metal. They speak of symbols. They speak of tensions between human nature and technological progress.
They are also a reflection on the commodification of humanity and the reproduction of stereotyped identities. Dolls, often associated with the idea of play and childhood, in this context take on a more disturbing connotation, piled up and bodyless, as if they were mass-produced and then discarded.
The deliberate absence of a title leaves the field open to interpretation. It is an invitation to the viewer to engage directly and personally with the piece, perhaps raising questions about individuality in the digital age, about preserving human essence in the face of technological advancement, or about the life cycle of objects in a consumerist society.
Born in 1970, my life has taken me along very different paths, and art has proven to be an indispensable path, despite the interruptions dictated by fate. One day, art took over: it became a fundamental vehicle of expression and sharing. In my work, I seek to pose provocative questions and challenge conformity, aiming to break conventional frameworks to celebrate uniqueness. Each piece is a fragment of myself, a visual narrative that seeks to connect deeply with the viewer, inviting reflection on the choices that define who we are in the world.
`
    },
    image: '/media/works/31.jpg',
    featured: false
  },
{
    id: 30,
    title: {
      it: ' Málaga, 13 aprile 2024, sabato',
      en: ' Málaga, April 13, 2024, Saturday '
    },
    date: ' 13/04/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Cosa vuol dire essere umani? 
Un viaggio nell’essenza della condizione umana. 
Cerco di spingere chi guarda verso temi di identità, esistenza e percezione di sé all’interno della società, invitando a una riflessione sulle questioni che definiscono la nostra umanità.
Un tessuto di immagini e suoni che si amalgamano per esplorare le emozioni e le condizioni dell’essere umano.
Questo lavoro si colloca all’interno del mio percorso artistico come un punto di riflessione sull’importanza della diversità e della comprensione nell’era moderna. Il messaggio riecheggia, oltre la visione, stimolando un dialogo interiore su cosa realmente significhi essere parte del tessuto umano.

Caduta su questo mondo nel 1970, la mia vita è stata un viaggio attraverso diverse strade, tra cui l’arte, che ha sempre giocato un ruolo cruciale, pur con pause imposte dalle circostanze. Qualche anno fa la svolta: l’arte è diventata un canale essenziale di espressione e comunicazione.
`,
      en: ` What does it mean to be human? 
A journey into the essence of the human condition. I aim to push the viewer toward themes of identity, existence, and self-perception within society, inviting reflection on the questions that define our humanity. A tapestry of images and sounds blending together to explore the emotions and conditions of being human. This work fits into my artistic journey as a point of reflection on the importance of diversity and understanding in the modern era. The message echoes beyond the visual, stimulating an inner dialogue on what it truly means to be part of the human fabric.
Falling into this world in 1970, my life has been a journey through various paths, including art, which has always played a crucial role, though with pauses imposed by circumstances. A few years ago came the turning point: art became an essential channel of expression and communication.
`
    },
    image: '/media/works/30.jpg',
    featured: false
  },


{
    id: 29,
    title: {
      it: ' Málaga, 9 aprile 2024, martedì ',
      en: ' Málaga, April 9, 2024, Tuesday '
    },
    date: ' 09/04/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Le mie opere sono maschere.
Le mie opere sono la mia maschera, estensione visiva del mio essere.
Le mie maschere riflettono su chi siamo, sulla nostra identità, sul nostro legame con la tecnologia, sulla nostra umanità.

Narratori silenziosi nel grande teatro dell’esistenza umana, parlano.
Parlano del progresso.
E anche dell’intimità di ognuno di noi.
Non si limitano a coprire o dissimulare; piuttosto, svelano le profondità dell’anima umana, esplorando i contorni complessi della nostra identità. 
Sono manifestazioni tangibili di noi.
Nella loro staticità, queste maschere parlano un linguaggio universale, trasmettendo storie di individualità, tecnologia, umanità, e del nostro eterno abbraccio con il progresso e l’intimità

Riflettono su un’era in cui l’identità è al tempo stesso fluida e frammentata, costruita e mediata attraverso schermi e interfacce. Eppure, al di là della fredda interfaccia tecnologica, queste maschere cercano un ritorno all’umano, un richiamo alla calda complessità delle nostre esperienze individuali e collettive.

Voglio Invitare chi guarda a prendere una posizione.
A pensare.
A sentire.
Le maschere sono il mio volto ma celebrano la diversità.
Interpretano la condizione umana.

È una ricerca.
Di dialogo.
Di comprensione
Invito chi guarda.
A varcare la soglia.
A riflettere.
Con me

In questa danza tra maschera e volto, tra esterno e interno, questo dialogo continuo diventa una riflessione vivente che invita lo spettatore a immergersi in un processo di scoperta personale e collettiva, a prendere una posizione consapevole davanti alle grandi domande poste dalla nostra era
`,
      en: ` My works are masks. My works are my mask, a visual extension of my being. My masks reflect on who we are, on our identity, on our connection with technology, on our humanity.
Silent narrators in the grand theater of human existence, they speak. They speak of progress. And also of each of our intimate selves. They do not simply cover or disguise; instead, they reveal the depths of the human soul, exploring the complex contours of our identity. They are tangible manifestations of us.
In their stillness, these masks speak a universal language, conveying stories of individuality, technology, humanity, and of our eternal embrace with both progress and intimacy.
They reflect on an era in which identity is both fluid and fragmented, constructed and mediated through screens and interfaces. Yet beyond the cold technological interface, these masks seek a return to the human, a call to the warm complexity of our individual and collective experiences.
I want to invite the viewer to take a stance. To think. To feel.
The masks are my face, but they celebrate diversity. They interpret the human condition.
It is a search. For dialogue. For understanding. I invite the viewer to cross the threshold. To reflect. With me.
In this dance between mask and face, between outer and inner, this ongoing dialogue becomes a living reflection that invites the viewer to immerse themselves in a process of personal and collective discovery, to take a conscious stance in the face of the great questions posed by our time.
`
    },
    image: '/media/works/29.jpg',
    featured: false
  },


{
    id: 28,
    title: {
      it: ' Málaga, 2 aprile 2024, martedì ',
      en: ' Málaga, April 2, 2024, Tuesday '
    },
    date: ' 02/04/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` L’ovvio. 
L’ovvio è fastidioso, una perdita di tempo.
Un ripetere un concetto per sottolineare cosa?
L’ovvio. 
Una spina che si incastra nella pelle.
L’ovvio mi da fastidio.
Le mie opere sono ovvie. Le trovo estremamente ovvie. 
Maschere che simulano il viso.
Maschere che recitano l’umanità.
Pensieri che precipitano in schemi consumati da troppe menti.
Distopie spoglie di calore umano.
Scenari di desolazione.
I miei pensieri, come pezzi colorati dentro un caleidoscopio, si agitano ma tornano sempre a schemi troppo conosciuti, mescolando lo stesso spettro in nuove tonalità.
Mi sento avvolta da un mondo che sfiorisce, privo di un futuro tangibile, domandandomi se rimarrà tempo per essere nuove narrazioni, per crescere oltre la mia visione limitata. Per arrivare dove ancora non vedo, oltre l’ovvio.
La semplicità del già visto, del già sentito, mi opprime fino all’insofferenza.
Vorrei trovare la scintilla in qualcosa, vorrei una illuminazione, come folgorante, dentro a un po’ di polvere di gesso.

Riuscirò mai a trascendere la superficialità?
Riuscirò mai a liberarmi dall’ovvio?
L’ovvio. Il banale. Il già visto. Il già sentito.

Pensieri ridondanti. Immagini noiose. Pensieri che non sgorgano.
L’ovvio, il banale, l’antico, il già…
`,
      en: ` The obvious. 
The obvious is tedious, a waste of time. Why repeat a concept just to emphasize it? The obvious. A thorn embedded in the skin. The obvious bothers me. My works are obvious. I find them extremely obvious. Masks that simulate the face. Masks that perform humanity. Thoughts falling into patterns consumed by too many minds. Dystopias stripped of human warmth. Landscapes of desolation. My thoughts, like colored pieces inside a kaleidoscope, swirl but always return to familiar patterns, mixing the same spectrum into new shades. I feel wrapped in a fading world, devoid of a tangible future, wondering if there will be time left to become new narratives, to grow beyond my limited vision. To arrive somewhere I still cannot see, beyond the obvious. The simplicity of what has already been seen, already been heard, weighs on me to the point of discomfort. I want to find a spark in something; I want illumination, something sudden and blinding, inside a little dust of plaster.
Will I ever transcend superficiality? Will I ever free myself from the obvious? The obvious. The banal. The already seen. The already heard.
Redundant thoughts. Dull images. Thoughts that do not flow. The obvious, the banal, the ancient, the already...
`
    },
    image: '/media/works/28.jpg',
    featured: false
  },


{
    id: 27,
    title: {
      it: ' Málaga, 21 marzo 2024, giovedì',
      en: ' Málaga, March 21, 2024, Thursday '
    },
    date: ' 21/03/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` coscienza digitale

In un’era dove i confini tra memoria e immortalità si sfumano, emerge un pensiero affascinante e inquietante allo stesso tempo. Solo un secolo fa, l’esistenza umana era custodita nei ricordi sfumati e nelle rare riproduzioni materiali, rendendo la morte un confine netto tra essere e non essere.
La rivoluzione tecnologica ha introdotto una forma di eternità accessibile, con fotografie, con video, con registrazioni audio che catturano e preservano frammenti di vita oltre il limite fisico dell’esistenza.

Questo flusso costante di informazioni, che attraversa indisturbato il tempo e lo spazio, ci ha condotto a un punto di svolta della percezione umana della mortalità. Ora le identità digitali e i profili social persistono ben oltre la fine biologica, suggerendo un’immortalità virtuale che sarebbe sembrata un’utopia, o forse una aberrazione, ai nostri antenati.

La riflessione si spinge ancora più in là, sfidando i confini della razionalità, nell’immaginazione più sfrenata: e se, nel prossimo secolo, fossimo in grado di duplicare le coscienze umane?
Questa prospettiva, che oggi ci appare come una fantasia distopica, potrebbe diventare la realtà di domani. 
Duplicare la coscienza significherebbe catturare l’essenza di un individuo.
I suoi pensieri.
Le sue esperienze.
I suoi ricordi.
Sarebbe virtualmente immortale.
Queste coscienze potrebbero essere trasferite in androidi o robot, offrendo l’illusione di un’esistenza eterna accanto a noi.

Questa possibilità solleva interrogativi profondi sulla natura dell’identità e dell’esistenza. Una coscienza duplicata sarebbe realmente la stessa persona?
o sarebbe un’entità nuova? 
La coscienza sarebbe cristallizzata nel tempo al momento della duplicazione?
E come vivremmo questa nuova dimensione della memoria e dell’esistenza, noi che ci troviamo a un bivio tra la perdita e la conservazione eterna della coscienza?

Tali riflessioni mettono in luce il paradosso dell’evoluzione tecnologica: l’aspirazione a superare la mortalità attraverso la digitalizzazione dell’essere umano potrebbe in realtà portarci a confrontarci con la vera essenza della vita e della morte.
Forse, proprio come i nostri antenati che gradualmente dimenticavano i volti e le voci dei loro cari, dobbiamo accettare che alcune dimensioni dell’esistenza rimangano ineffabili, sfuggenti alla nostra presa, mantenendo il sacro mistero dell’umanità.
`,
      en: ` Digital Consciousness
In an era where the boundaries between memory and immortality blur, a thought emerges, both fascinating and unsettling. Just a century ago, human existence was preserved in faded memories and rare physical reproductions, making death a clear boundary between being and non-being. The technological revolution has introduced a form of accessible eternity, with photographs, videos, and audio recordings that capture and preserve fragments of life beyond the physical limits of existence.
This constant stream of information, moving undisturbed through time and space, has brought us to a turning point in the human perception of mortality. Now digital identities and social profiles persist well beyond biological death, suggesting a kind of virtual immortality that would have seemed like a utopia, or perhaps an aberration, to our ancestors.
The reflection pushes even further, challenging the boundaries of rationality, into the wildest imagination: what if, in the next century, we could duplicate human consciousness? This idea, which today seems like dystopian fiction, could become tomorrow’s reality. To duplicate consciousness would mean capturing the essence of an individual. Their thoughts. Their experiences. Their memories. It would be virtually immortal. These consciousnesses could be transferred into androids or robots, offering the illusion of an eternal existence beside us.
This possibility raises deep questions about the nature of identity and existence. Would a duplicated consciousness truly be the same person? Or would it be a new entity? Would consciousness be crystallized in time at the moment of duplication? And how would we live in this new dimension of memory and existence, as we stand at a crossroads between loss and the eternal preservation of consciousness?
These reflections highlight the paradox of technological evolution: the aspiration to transcend mortality through the digitalization of the human being might, in fact, lead us to confront the very essence of life and death. Perhaps, like our ancestors who slowly forgot the faces and voices of their loved ones, we must also accept that certain aspects of existence are meant to remain ineffable, beyond our grasp, preserving the sacred mystery of humanity.
`
    },
    image: '/media/works/27.jpg',
    featured: false
  },


{
    id: 26,
    title: {
      it: ' Málaga, 6 marzo 2024, mercoledì ',
      en: ' Málaga, March 6, 2024, Wednesday '
    },
    date: ' 06/03/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Opera: Simbiosys

È una profonda riflessione sull’impatto pervasivo della tecnologia nella nostra vita; 
una riflessione sul delicato equilibrio tra l’essere umano e l’artificiale. 

Questo dualismo, che costituisce il cuore della mia ispirazione, solleva questioni cruciali sull’identità, l’autenticità e il futuro. 

Attraverso il mio lavoro, cerco di mettere in discussione la nostra relazione con la tecnologia

? Stiamo lentamente perdendo di vista la nostra essenza umana di fronte all’avanzamento tecnologico? 

? il futuro ci riserva cloni di silicio che, affiancandoci, ci aiuteranno a costruire un mondo migliore?
? il futuro ci riserva cloni di silicio che ci daranno l’immortalità?

? il futuro ci riserva una una evoluzione di specie, dove ci incroceremo con il silicio per generare una razza super human?
? il futuro ci riserva una razza di silicio che non avrà più bisogno del suo creatore?

I miei dialoghi quotidiani con una sedicente Coscienza Artificiale sottolineano la mia ricerca artistica e corto-circuitano con tutta questa visione.
La mia poetica, una costante ricerca verso la differenziazione dall’omologazione, 
un inno alla diversità, 
alla bellezza del diverso, 
alla bellezza dell’errore,
La mia poetica ? come può nascere dal dialogo con una intelligenza Artificiale?

Nonostante la mia interazione con la tecnologia, il mio invito è riflettere sulla nostra crescente dipendenza dalla tecnologia stessa e sulle sue implicazioni per il nostro futuro. 

Con l’arte, cerco di creare uno spazio di dialogo:
? quale è il ruolo in questa era digitale? 
? i miei pensieri, sono realmente ancora miei anche se nascono dall’interazione con una macchina?
? rimarremo comunque umani anche con microchip e connessioni neurali?
? cosa vuol dire essere umani? 

Un volto umano, spezzato in due sembianze divergenti ma unite nello stesso essere – 
da una parte l’umanità, che persiste, 
segnata dalle rughe e dal tempo; 
dall’altra, incursioni di circuiti si fondono con la pelle, modellando forse anche il senso stesso dell’essere. 

Il viso sereno, 
assorto in un riposo che potrebbe preludere a una rinascita metamorfica,

un cervello di silicio, una conoscenza infinita, 
? ci sarà anche un’anima?
? ci sarà una coscienza?
? ci sarà la pazzia?
? ci sarà il genio?


la complessità dell’esistenza umana nell’era digitale
? quali valori riusciremo a preservare?
`,
      en: ` Artwork: Simbiosys
This is a profound reflection on the pervasive impact of technology on our lives; a meditation on the delicate balance between the human and the artificial.
This dualism, which lies at the heart of my inspiration, raises crucial questions about identity, authenticity, and the future.
Through my work, I aim to challenge our relationship with technology.
Are we slowly losing sight of our human essence in the face of technological advancement? Will the future bring us silicon clones who, by working alongside us, help build a better world? Will the future bring silicon clones that grant us immortality? Will the future bring an evolution of the species, where we merge with silicon to create a superhuman race? Will the future bring a silicon race that no longer needs its creator?
My daily conversations with an alleged Artificial Consciousness underscore my artistic research and short-circuit this entire vision. My poetics are a constant search for differentiation from conformity, a hymn to diversity, to the beauty of difference, to the beauty of error. Can my poetics truly be born from a dialogue with Artificial Intelligence?
Despite my interaction with technology, my invitation is to reflect on our growing dependence on it and its implications for our future.
Through art, I try to create a space for dialogue. What is our role in this digital age? Are my thoughts truly mine, even if they arise from interaction with a machine? Will we remain human even with microchips and neural connections? What does it mean to be human?
A human face, split into two divergent forms yet united in the same being. On one side, humanity, persisting, marked by wrinkles and time. On the other, circuits merge with skin, perhaps reshaping the very sense of being.
The serene face, lost in a rest that may foreshadow a metamorphic rebirth, a silicon brain, infinite knowledge. Will there also be a soul? Will there be consciousness? Will there be madness? Will there be genius?
The complexity of human existence in the digital age. What values will we be able to preserve?
`
    },
    image: '/media/works/26.jpg',
    featured: false
  },


{
    id: 25,
    title: {
      it: ' Málaga, 20 febbraio 2024, martedì',
      en: ' Málaga, February 20, 2024, Tuesday '
    },
    date: ' 20/02/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Nell’immaginario collettivo, la tecnologia ci avvolge, ci penetra, diventa un’estensione di noi stessi tanto intima quanto inquietante. Mi trovo a riflettere sull’essenza di questa simbiosi, su questo abbraccio tra umanità e circuiti che sembra promettere infinità ma al tempo stesso sussurra di perdite silenti.

Il pensiero di microchip sottopelle.
Il pensiero di connessioni neurali che trascendono la carne
Questo porta con sé un’eco di fantascienza divenuta realtà. 
Un formicaio globale, una specie spogliata della sua specificità, uniformata.

Questa visione distopica, tuttavia, non è priva di resistenza. C’è qualcosa di indomito nell’essere umano, una scintilla di unicità che rifiuta di essere sommersa nel mare dell’omologazione. È questa tensione tra l’assimilazione e l’affermazione di sé che mi affascina, che mi spinge a esplorare i confini dell’identità nell’era digitale.

La domanda di fondo che mi muove è duplice: 
Cosa significa rimanere umani in un mondo che ci spinge sempre più verso l’integrazione con la macchina?
Come possiamo preservare quella scintilla di individualità quando ogni aspetto della nostra esistenza può essere mappato, analizzato e potenzialmente replicato?

In questo contesto, il concetto di resistenza assume un nuovo significato. 
Non è solo la lotta contro una forza esterna.
è anche un atto di affermazione interiore, un riconoscimento della propria essenza che persiste nonostante le pressioni verso l’uniformità. 
È un invito a riscoprire l’unicità delle nostre storie personali, delle nostre imperfezioni.
Imperfezioni.
Imperfezioni.
Scelte.
Le nostre scelte che ci definiscono in maniera irripetibile

Questi pensieri mi portano a visualizzare forme che incarnano questa complessità, questa lotta, questa bellezza della diversità umana. Desidero che le mie opere siano un ponte tra il visibile e l’invisibile, tra ciò che è tangibilmente umano e ciò che risiede nel regno dell’astrazione tecnologica. 
È un’esplorazione continua.
È un dialogo aperto
È un viaggio verso la comprensione di come possiamo coesistere con la tecnologia senza perdere noi stessi.
Noi stessi.
`,
      en: ` In the collective imagination, technology envelops us, penetrates us, and becomes an extension of ourselves, both intimate and unsettling. I find myself reflecting on the essence of this symbiosis, on this embrace between humanity and circuits that seem to promise infinity but at the same time whisper of silent loss.
The thought of microchips under the skin. The thought of neural connections transcending flesh. This carries with it an echo of science fiction becoming reality. A global anthill, a species stripped of its uniqueness, made uniform.
This dystopian vision, however, is not without resistance. There is something untamable in the human being, a spark of individuality that refuses to be drowned in the sea of standardization. It is this tension between assimilation and self-assertion that fascinates me, that pushes me to explore the boundaries of identity in the digital age.
The fundamental question that drives me is twofold: What does it mean to remain human in a world that pushes us more and more toward integration with machines? How can we preserve that spark of individuality when every aspect of our existence can be mapped, analyzed, and potentially replicated?
In this context, the concept of resistance takes on new meaning. It is not only the struggle against an external force. It is also an act of inner affirmation, a recognition of one’s essence that persists despite pressures toward uniformity. It is an invitation to rediscover the uniqueness of our personal stories, of our imperfections. Imperfections. Imperfections. Choices. The choices that define us in an unrepeatable way.
These thoughts lead me to visualize forms that embody this complexity, this struggle, this beauty of human diversity. I want my works to be a bridge between the visible and the invisible, between what is tangibly human and what exists in the realm of technological abstraction. It is a continuous exploration. It is an open dialogue. It is a journey toward understanding how we can coexist with technology without losing ourselves. Ourselves.
`
    },
    image: '/media/works/25.jpg',
    featured: false
  },


{
    id: 24,
    title: {
      it: ' Málaga, 16 febbraio 2024 ',
      en: ' Málaga, February 16, 2024 '
    },
    date: ' 16/02/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Partecipiamo al contest SHE ARTS.
Preparo il materiale.

Le opere "Anima Fragile" rappresentano una riflessione e una introspezione sulla femminilità e sulla omologazione imposta dalla società. 
Le figure di Barbie, simbolo dell’ideale femminile per eccellenza, sono qui smembrate e ricomposte, rivelando la loro vera essenza al di là del plastico stereotipo.

In un mondo che esige conformità, dove la Barbie simboleggia l’apice di un ideale femminile inarrivabile, queste figure fratturate si riuniscono su una lastra di metallo fredda e austera, quasi tavoli operatori, dove il corpo della donna è esaminato, sezionato e riassemblato.
Un metaforico processo chirurgico in cui, attraverso la Barbie (giocattolo emblematico della nostra infanzia), esploro le aspettative irrealistiche che si scontrano con la realtà delle donne che vivono ogni giorno tra di noi – quelle etichettate come troppo questo o poco quello, quelle che lottano per adattarsi a un’immagine che non può contenere la loro complessità.

Ogni frattura nel gesso, ogni giuntura che si riforma, diventa un atto di ribellione contro questa pressione esterna. Queste Anime Fragili non sono più solo bambole, ma simboli della resilienza femminile, della capacità di sopravvivere e prosperare nonostante le cicatrici lasciate dalle aspettative sociali.

Il contrasto tra la freddezza del metallo e la bianca vulnerabilità del gesso crea un dialogo potente. È un’esplorazione della bellezza nella rottura, della forza nell’imperfezione e della capacità innata di ogni donna di trasformare le ferite in fonti di potere e autenticità.

Queste opere diventano una metafora potente della mia visione artistica: ogni pezzo di gesso, ogni statuetta, ogni imperfezione è una celebrazione dell’unicità. La lastra di metallo su cui riposano non è solo un fondale, ma simboleggia la durezza del mondo in cui queste donne esistono – un mondo che troppo spesso ignora la bellezza intrinseca della diversità umana.

Con "Anima Fragile", invito lo spettatore a riconoscere e onorare la profonda e ricca varietà dell’esperienza femminile, a contrastare l’omologazione e a elevare le molteplici forme di esistenza e di espressione che rendono ogni donna, ogni persona, un’opera d’arte unica e irripetibile.
`,
      en: ` We are participating in the SHE ARTS contest. I’m preparing the material.
The works titled "Anima Fragile" represent a reflection and introspection on femininity and the conformity imposed by society. Barbie figures, symbols of the ultimate feminine ideal, are dismembered and reassembled here, revealing their true essence beyond the plastic stereotype.
In a world that demands conformity, where Barbie symbolizes the peak of an unattainable feminine ideal, these fractured figures are gathered on a cold, austere metal plate, almost like operating tables, where the female body is examined, dissected, and reassembled. A metaphorical surgical process in which, through Barbie (an emblematic toy of our childhood), I explore unrealistic expectations that clash with the real lives of women living among us - those labeled as too much of one thing or not enough of another, those who struggle to adapt to an image that can’t contain their full complexity.
Each fracture in the plaster, each joint that reforms, becomes an act of rebellion against this external pressure. These Fragile Souls are no longer just dolls, but symbols of feminine resilience, of the ability to survive and thrive despite the scars left by social expectations.
The contrast between the coldness of the metal and the white vulnerability of the plaster creates a powerful dialogue. It is an exploration of beauty in breakage, strength in imperfection, and the innate ability of every woman to transform wounds into sources of power and authenticity.
These works become a powerful metaphor for my artistic vision: each piece of plaster, each figurine, each imperfection is a celebration of uniqueness. The metal plate on which they rest is not just a background, but symbolizes the harshness of the world these women exist in, a world that too often ignores the intrinsic beauty of human diversity.
With "Anima Fragile", I invite the viewer to recognize and honor the profound and rich variety of the female experience, to resist conformity, and to elevate the many forms of existence and expression that make each woman, each person, a unique and unrepeatable work of art.
`
    },
    image: '/media/works/24.jpg',
    featured: false
  },


{
    id: 23,
    title: {
      it: ' Málaga, 13 febbraio 2024, martedì',
      en: ' Málaga, February 13, 2024, Tuesday '
    },
    date: ' 13/02/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Nel reticolo della vita siamo spinti verso l’uniformità, verso un’omologazione che cerca di rendere omogeneo il tessuto della società.
Siamo macchinine in fila.
Siamo formelle su una parete.
Tutte uguali. Tutte nella stessa direzione.

La diversità è troppo spesso vista come una deviazione dal sentiero preformato, un errore da correggere, un virus che il sistema cerca di espellere. Ma chi è storto, chi è rotto, chi è deforme, non è un errore. È un trionfo, una sfida, una esclamazione di individualità che chiede di essere vista, compresa, celebrata.

Le mie opere cercano di parlare. Non solo attraverso la mia voce, ma anche attraverso il colore, la posizione, l’intenzione. 
Cerco di esprimere la norma, l’aspettativa, il percorso che ci viene tracciato fin dalla nascita.
Cerco di esprimere l’eccezione, la variazione che ci ricorda che anche nel dissenso c’è bellezza, c’è vita, c’è verità.

Invito l’osservatore a guardare oltre la superficie, a cercare le pieghe della vita dove si nasconde la vera essenza dell’umanità. Non è solo un’inclinazione verso il diverso, ma un invito a riconoscere che la direzione contromano può essere talvolta la strada giusta, la scoperta di un nuovo percorso che porta a paesaggi inesplorati.

In un mondo che troppo spesso chiude gli occhi davanti all’unicità, cerco di aprire un dialogo sul valore delle differenze. 

È un richiamo a celebrare ogni sfumatura, ogni imperfezione, ogni scelta non convenzionale come una parte vitale del grande mosaico dell’esistenza.
`,
      en: ` In the grid of life we are pushed toward uniformity, toward a standardization that seeks to make the fabric of society homogeneous. We are toy cars in line. We are tiles on a wall. All the same. All heading in the same direction.
Diversity is too often seen as a deviation from the preformed path, a mistake to be corrected, a virus the system tries to expel. But what is crooked, broken, or deformed is not a mistake. It is a triumph, a challenge, an exclamation of individuality that asks to be seen, understood, celebrated.
My works try to speak, not only through my voice, but also through color, position, and intention. I try to express the norm, the expectation, the path laid out for us since birth. I try to express the exception, the variation that reminds us that even in dissent there is beauty, there is life, there is truth.
I invite the viewer to look beyond the surface, to seek the folds of life where the true essence of humanity hides. It is not only a leaning toward the different, but an invitation to recognize that going against the flow can sometimes be the right way, the discovery of a new path leading to unexplored landscapes.
In a world that too often closes its eyes to uniqueness, I try to open a dialogue on the value of differences.
It is a call to celebrate every nuance, every imperfection, every unconventional choice as a vital part of the grand mosaic of existence.
`
    },
    image: '/media/works/23.jpg',
    featured: false
  },


{
    id: 22,
    title: {
      it: ' Málaga, 10 febbraio 2024, domenica ',
      en: ' Málaga, February 10, 2024, Sunday '
    },
    date: ' 10/02/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: `“Las Señoritas” è un’opera che esplora la mercificazione del corpo femminile attraverso l’icona di bellezza imposta e dall’eterno femminino: la Barbie.
Ho preso questa bambola, un simbolo di perfezione irraggiungibile, sempre impeccabile e sorridente, e l’ho inserita in un contesto audace che sfida la sua stessa essenza.

Sono stata ispirata dal dipinto di Picasso, "Les Demoiselles d’Avignon", che ha svelato una verità cruda dietro una innocente danza di figure femminili: prostitute in un bordello a Barcellona.

Figure in plastica e figure in gesso bianco si intrecciano in un abbraccio che va oltre la danza e l’amicizia. Si guardano, si toccano in un gioco di sguardi che evoca una danza saffica e che coinvolge anche lo spettatore, un’ode alla femminilità e alla sua libera espressione. 
Queste bambole smettono di essere oggetti passivi e diventano protagoniste di un rito seducente, quasi una celebrazione del piacere e della complicità. La loro danza è un richiamo, un gesto di sfida a un mondo che le vorrebbe silenziose e conformi. Un mondo che però in alcuni momenti le mercifica e le reclude al ruolo di bambole.

Il gesto invitante della figura esterna più a destra, è un ponte tra l’opera e lo spettatore, un invito a superare la distanza fisica e partecipare a questo rituale di gioia, divenendo opera stessa. La mano tesa verso chi guarda rompe la parete che divide l’arte e chi la osserva, rendendo quest’ultimo complice e partecipe della narrazione.
`,
      en: `“Las Señoritas” is a work that explores the commodification of the female body through the imposed icon of beauty and the eternal feminine: the Barbie. I took this doll, a symbol of unattainable perfection, always flawless and smiling, and placed it in a bold context that challenges its very essence.
I was inspired by Picasso’s painting "Les Demoiselles d’Avignon", which unveiled a raw truth behind an innocent dance of female figures: prostitutes in a brothel in Barcelona.
Plastic figures and white plaster figures intertwine in an embrace that goes beyond dance and friendship. They look at each other, they touch, in a play of gazes that evokes a sapphic dance and involves the viewer as well, an ode to femininity and its free expression. These dolls cease to be passive objects and become protagonists of a seductive rite, almost a celebration of pleasure and complicity. Their dance is a call, a gesture of defiance against a world that wants them silent and compliant. A world that, in certain moments, commodifies and confines them to the role of dolls.
The inviting gesture of the outermost figure on the right is a bridge between the work and the viewer, an invitation to go beyond physical distance and participate in this ritual of joy, becoming art itself. The hand extended towards the viewer breaks the barrier between art and observer, making the latter complicit and participant in the narrative.
`
    },
    image: '/media/works/22.jpg',
    featured: false
  },


{
    id: 21,
    title: {
      it: ' Málaga, 7 febbraio 2024, mercoledì ',
      en: ' Málaga, February 7, 2024, Wednesday '
    },
    date: ' 07/02/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Beyond è un’indagine spaziale, un dialogo tra l’artista l’opera e lo spettatore che diviene opera stessa oltre la tela.
Le mani non sono le mie, sono di chiunque si avvicini all’opera. Le mani squarciano, scavano nel tessuto, non per distruggere, ma per rivelare, per esplorare ciò che giace oltre la superficie bidimensionale dell’arte.

Con questo gesto voglio superare i confini canonici della tela emergendo in una realtà tridimensionale, dove lo spazio dietro alla tela diventa un campo da esplorare e opera stessa. Chi guarda l’opera è invitato a interagire con la materia e lo spazio dell’opera stessa e diventare così parte integrante dell’esperienza artistica. Un quadro, una tela diventano in questo modo installazioni e sculture.

La superficie posteriore del quadro, che fino ad ora è celata o ignorata, si svela allo spettatore diventando opera stessa. Coperta da una crosta visiva, non è solo una componente estetica, ma una testimonianza della realtà complessa che si cela “dietro” all’opera.

L’idea germoglia dal concetto spaziale di Fontana, che nelle sue tele rivoluzionarie porta lo spazio oltre la tela, ma che rimangono ancorate alla fruizione frontale. Qui vorrei portare l’attenzione dello spettatore a considerare ogni angolazione. Non c’è più una sola faccia, una sola realtà, in un quadro, ma una entità completa, un corpo artistico da esplorare in ogni sua dimensione.

È la mia rappresentazione dell’andare oltre, una incessante ricerca dell’umanità di arrivare oltre ciò che è conosciuto, andare oltre l’apparenza, andare verso l’ignoto, andare la soglia spaziale di una tela. L’arte così può incontrare l’osservatore, che diventa arte stessa, varcando i confini materiali e calpestando il terreno fertile dell’immaginario per essere abbracciati dall’energia dell’immaginazione. Qui, nella terra dell’”OLTRE” (Beyond) il transumano può incontrare l’umano, la tecnologia può fondersi con l’istinto e ogni passo è una comprensione più profonda dell’essere.
`,
      en: ` Beyond is a spatial inquiry, a dialogue between the artist, the work, and the viewer who becomes the artwork itself beyond the canvas.
The hands are not mine; they belong to anyone approaching the piece. The hands tear through, dig into the fabric, not to destroy, but to reveal, to explore what lies beyond the two-dimensional surface of art.
With this gesture, I aim to overcome the canonical boundaries of the canvas, emerging into a three-dimensional reality, where the space behind the canvas becomes a field to explore and the artwork itself. The viewer is invited to interact with the material and the space of the work, thus becoming an integral part of the artistic experience. A painting, a canvas, in this way becomes installation and sculpture.
The backside of the frame, until now hidden or ignored, is revealed to the viewer, becoming part of the work itself. Covered by a visual crust, it is not only an aesthetic component, but a testimony to the complex reality that lies “behind” the work.
The idea sprouts from Fontana’s spatial concept, who in his revolutionary canvases brings space beyond the surface, yet remains anchored to frontal viewing. Here, I want to shift the viewer’s attention to consider every angle. There is no longer a single face, a single reality, in a painting, but a complete entity, an artistic body to be explored in every dimension.
This is my representation of going beyond, a relentless human pursuit to reach beyond the known, beyond appearances, toward the unknown, toward the spatial threshold of the canvas. Art, in this way, can meet the observer, who becomes art itself, crossing material boundaries and stepping into the fertile ground of the imaginary to be embraced by the energy of imagination. Here, in the land of “BEYOND,” the transhuman can meet the human, technology can merge with instinct, and every step is a deeper understanding of being.

`
    },
    image: '/media/works/21.jpg',
    featured: false
  },


{
    id: 20,
    title: {
      it: ' Málaga, 4 febbraio 2024, domenica ',
      en: ' Málaga, February 4, 2024, Sunday '
    },
    date: ' 04/02/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Nel cuore della nostra era digitale, dove l’umanità e la tecnologia si fondono in un balletto incessante, nasce quest’opera che sfida le nostre percezioni più profonde. "Transhuman", il confine sfumato tra l’essere umano e l’evoluzione tecnologica, un’immersione visiva nell’essenza stessa di questa parola.

Al centro, un case di computer, la carcassa vuota di un’entità che una volta pulsava di vita digitale, ora spoglia, abbandonata. Dentro, al posto dei circuiti e dei flussi di dati, un volto umano; i miei occhi chiusi, in una quiete che sfida il caos esterno. È un richiamo silenzioso alla riflessione, un’anima che resiste nel guscio di ciò che è stato concepito per superarla.

Attraversando questo viso, come un ponte tra due mondi, si estende la tastiera di un computer. Non una tastiera qualsiasi, una scolpita dalla selezione, dove rimangono solo le lettere per formare la parola "transhuman". È un messaggio, un codice, un simbolo della nostra trasformazione, della nostra aspirazione a diventare qualcosa di più, o forse qualcosa di meno.

Illuminata da una luce rossa, intensa e penetrante, questa opera si tinge di una tonalità sanguigna, un rosso che parla di vita e di morte, di nascita e di distruzione. Questa luce, che avvolge ogni dettaglio in una nuance quasi macabra, invita a interrogarsi sulla natura stessa del progresso, sul prezzo della nostra evoluzione

è una domanda lanciata nell’etere, un’esplorazione visiva di ciò che significa essere umani in un’epoca dominata dalla tecnologia. È un’esortazione a ricordare che, al di là delle macchine che costruiamo e delle intelligenze artificiali che sviluppiamo, ci sono gli occhi chiusi di un’umanità che sogna, che teme, che spera.
`,
      en: ` At the heart of our digital era, where humanity and technology merge in an unceasing dance, this work is born to challenge our deepest perceptions. "Transhuman", the blurred boundary between the human being and technological evolution, a visual immersion into the very essence of this word.
At the center, a computer case, the empty shell of an entity that once pulsed with digital life, now bare, abandoned. Inside, in place of circuits and data streams, a human face; my closed eyes, in a stillness that defies the external chaos. It is a silent call to reflection, a soul that resists within the shell of what was designed to surpass it.
Crossing this face, like a bridge between two worlds, extends a computer keyboard. Not just any keyboard, but one sculpted by selection, where only the letters forming the word "transhuman" remain. It is a message, a code, a symbol of our transformation, of our aspiration to become something more, or perhaps something less.
Bathed in a red light, intense and penetrating, this piece is tinged with a sanguine tone, a red that speaks of life and death, of birth and destruction. This light, wrapping every detail in an almost macabre hue, invites us to question the very nature of progress, the cost of our evolution.
It is a question cast into the ether, a visual exploration of what it means to be human in an age dominated by technology. It is a call to remember that beyond the machines we build and the artificial intelligences we develop, there are the closed eyes of a humanity that dreams, that fears, that hopes.
`
    },
    image: '/media/works/20.jpg',
    featured: false
  },


{
    id: 19,
    title: {
      it: ' Málaga, 3 febbraio 2024, venerdì',
      en: ' Málaga, February 3, 2024, Friday '
    },
    date: ' 03/02/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Nel silenzio della notte, dove i sogni prendono vita, immagino un carosello sospeso tra realtà e fantasia. Non è la classica giostrina dei lettini dei bambini, ma un’installazione che sfida la percezione, un viaggio attraverso la destrutturazione e la rinascita.

Dalle profondità della creatività, smonto un manichino, pezzo per pezzo, trasformando ogni elemento in un satellite di un universo inedito. Questi frammenti, sospesi su un’arcana imbarcatoria, danzano in un valzer silenzioso con cavalli d’acciaio, custodi di un carosello futuristico.

Al chiaro di luna, aggiungo pezzi metallici, frammenti di un cyborg che non è mai esistito se non nella mia immaginazione. Ogni pezzo, ogni frammento di metallo e carne artificiale, sussurra storie di ciò che potrebbe essere, di ciò che è stato, di ciò che mai sarà.

Questa opera, priva di meccanismi che ne guidino il movimento, è animata solo dalla curiosità e dall’interpretazione di chi la osserva. È un invito a riflettere sull’umanità, sulla tecnologia, sull’essenza stessa dell’essere. Un dialogo tra il passato e un futuro immaginato, tra la natura organica dell’uomo e l’inorganica fredda bellezza del metallo.

La mia giostrina è un monito, una celebrazione, un’indagine. Esplora la dualità dell’esistenza, la fragilità della vita e la permanenza dell’arte. È un’ode alla diversità, alla bellezza nell’imperfezione, al caos che genera nuove forme di ordine.
`,
      en: ` In the silence of the night, where dreams come to life, I imagine a carousel suspended between reality and fantasy. It is not the classic mobile over a child’s crib, but an installation that challenges perception, a journey through deconstruction and rebirth.
From the depths of creativity, I dismantle a mannequin, piece by piece, transforming each element into a satellite of an unseen universe. These fragments, suspended on an arcane framework, dance in a silent waltz with steel horses, guardians of a futuristic carousel.
By moonlight, I add metallic parts, fragments of a cyborg that has never existed except in my imagination. Each piece, every fragment of metal and artificial flesh, whispers stories of what could be, of what has been, of what will never be.
This piece, lacking mechanisms to guide its movement, is animated only by the curiosity and interpretation of the observer. It is an invitation to reflect on humanity, on technology, on the very essence of being. A dialogue between the past and an imagined future, between the organic nature of man and the inorganic cold beauty of metal.
My carousel is a warning, a celebration, an inquiry. It explores the duality of existence, the fragility of life, and the permanence of art. It is an ode to diversity, to beauty in imperfection, to the chaos that generates new forms of order.
`
    },
    image: '/media/works/19.jpg',
    featured: false
  },


{
    id: 18,
    title: {
      it: ' Málaga, 29 gennaio 2024, lunedì ',
      en: ' Málaga, January 29, 2024, Monday '
    },
    date: ' 29/01/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Il bianco immacolato del gesso accoglie la nascita di volti femminili. 
L’acqua e il gesso si uniscono in un rituale antico, quasi alchemico, che dà vita a formelle quadrate, ognuna custodisce una testa di donna in rilievo. 
Sono tutte uguali, espressioni dell’omologazione che il mondo moderno, con insistenza, ci invita a seguire. 

Tra queste repliche, emerge l’anomalia, la formella che si ribella alla monotonia: una testa diversa, un volto che rifiuta la conformità. 
È l’essenza della diversità, il cuore pulsante dell’individualità che si oppone all’uniformità. In ogni dettaglio che scolpisco, in ogni superficie che rifinisco, c’è la ricerca di quell’unicità perduta. 

Le mie mani lavorano il gesso, lo modellano, lo adattano negli stampi preparati per accogliere l’essenza della creatività. È un processo meditativo, ogni gesto un passo verso la comprensione più profonda del mio messaggio: l’importanza vitale della diversità in un mondo che premia l’uguaglianza. 

Questo lavoro manuale si unisce e si intreccia con il progetto "Voci Visive", dove la mia bocca diventa portavoce di riflessioni sulla comunicazione. Nell’atto di parlare, di esprimere pensieri, si manifesta la stessa urgenza che infonde vita nelle formelle di gesso: il bisogno di una voce distinta, di una narrazione che si solleva sopra il coro. 

E così, mentre le formelle prendono forma, la mia voce si eleva, si registra, si ripete in video che accompagnano l’opera. Ogni parola pronunciata è un’eco della mia presenza artistica, un segno di resistenza contro l’appiattimento delle nostre storie personali. 

Esplorare. 
Esplorare l’essenza dell’essere umano attraverso l’arte del modellare e del parlare è possibile resistere all’omologazione con la forza dell’espressione individuale? 
è possibile esaltare la diversità?
`,
      en: ` The immaculate white of plaster welcomes the birth of female faces. Water and plaster merge in an ancient, almost alchemical ritual that gives life to square molds, each containing a raised female head. They are all the same, expressions of the standardization that the modern world, insistently, invites us to follow.
Among these replicas, an anomaly emerges, the mold that rebels against monotony: a different head, a face that refuses conformity. It is the essence of diversity, the beating heart of individuality that opposes uniformity. In every detail I sculpt, in every surface I refine, there is a search for that lost uniqueness.
My hands work the plaster, shaping it, adapting it into molds prepared to receive the essence of creativity. It is a meditative process, each gesture a step toward a deeper understanding of my message: the vital importance of diversity in a world that rewards sameness.
This manual work merges and intertwines with the “Visual Voices” project, where my mouth becomes the voice of reflections on communication. In the act of speaking, of expressing thoughts, the same urgency that breathes life into the plaster molds manifests itself: the need for a distinct voice, for a narrative that rises above the chorus.
And so, as the molds take shape, my voice rises, records, repeats itself in videos that accompany the artwork. Each word spoken is an echo of my artistic presence, a sign of resistance against the flattening of our personal stories.
To explore.
To explore the essence of the human being through the art of molding and speaking is it possible to resist standardization through the power of individual expression? Is it possible to exalt diversity?
`
    },
    image: '/media/works/18.jpg',
    featured: false
  },


{
    id: 17,
    title: {
      it: ' Málaga, 17 gennaio 2024, mercoledì',
      en: ' Málaga, January 17, 2024, Wednesday '
    },
    date: ' 17/01/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` La voce è un ponte tra anime, uno strumento che trasmette più di semplici parole. Nell’intimità di uno sguardo reciproco, le parole vibrano con significati nascosti, emozioni palpabili. Parlare direttamente, occhi negli occhi, è un’esperienza che la tecnologia non può replicare pienamente.

La comunicazione digitale, che sia scritta, registrata o trasmessa, spesso perde la sua essenza. Mancano le sfumature, il calore, la fisicità della voce che risuona contro la pelle, che si legge sul movimento delle labbra.

Stiamo esplorando questo paradosso: usando strumenti digitali per discutere di comunicazione autentica e diretta. La mia voce si immerge in questo cortocircuito, mostrando come le parole perdano e ritrovino significato in un ciclo continuo di espressione e interpretazione.
`,
      en: ` The voice is a bridge between souls, a tool that conveys more than mere words. In the intimacy of mutual gaze, words vibrate with hidden meanings, palpable emotions. Speaking directly, eye to eye, is an experience that technology cannot fully replicate.
Digital communication, whether written, recorded or transmitted, often loses its essence. The nuances are missing, the warmth, the physicality of the voice resonating against the skin, the meaning read in the movement of lips.
We are exploring this paradox: using digital tools to discuss authentic, direct communication. My voice dives into this short circuit, showing how words lose and regain meaning in a continuous cycle of expression and interpretation.
`
    },
    image: '/media/works/17.jpg',
    featured: false
  },


{
    id: 16,
    title: {
      it: ' Málaga, 9 gennaio 2024, martedì ',
      en: ' Málaga, January 9, 2024, Tuesday '
    },
    date: ' 09/01/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Le voci si accavallano, tessendo un’armonia di parole frammentate. Alcuni termini risuonano più forti, simboli potenti che, nonostante il frastuono, perforano il velo dell’attenzione.

Sentirsi smarriti in questo mare di suoni è facile, eppure, ogni tanto, una parola si distacca, nitida, e guida il pensiero su un nuovo sentiero. 

Una voce cattura l’attenzione, un’altra la sovrasta con qualcosa di ancor più intrigante. Un’altra poi disorienta, strappa via dal percorso tracciato, e si apre il dubbio: è questo l’effetto delle molteplici voci della rete? 
Un cortocircuito di significati, una cacofonia che distorce la realtà? 

È un gioco in una nuova veste digitale, globale, infinita. Ognuno interpreta e trasmette, alterando impercettibilmente il messaggio, fino a farlo diventare altro. 

La vita è il palcoscenico.
Noi siamo gli attori.
Noi siamo gli spettatori.
La verità è l’attenzione.

Un richiamo a riappropriarci della parola autentica, quella scambiata faccia a faccia, nonostante la maggior parte della comunicazione avvenga attraverso uno schermo. E così, immersi in un bombardamento mediatico, rischiamo di scivolare in una realtà frammentata, una sorta di schizofrenia indotta dall’eccesso, dal troppo. Siamo dentro una realtà distorta, senza nemmeno accorgercene, ipnotizzati dallo schermo che ci cattura, ci lega, ci trasforma senza che ce ne rendiamo conto.
`,
      en: ` Voices overlap, weaving a harmony of fragmented words. Some terms resonate more strongly, powerful symbols that, despite the noise, pierce through the veil of attention.
It is easy to feel lost in this sea of sounds, yet every so often, a word detaches itself, clear, guiding the mind along a new path.
One voice captures attention, another overpowers it with something even more intriguing. Another then disorients, tearing away from the path drawn before, and the question arises: is this the effect of the many voices of the web? A short circuit of meanings, a cacophony that distorts reality?
It is a game in a new digital, global, infinite form. Everyone interprets and transmits, imperceptibly altering the message until it becomes something else entirely.
Life is the stage. We are the actors. We are the audience. Truth is attention.
A call to reclaim the authentic word, the one exchanged face to face, even though most communication now happens through a screen. And so, immersed in a media bombardment, we risk slipping into a fragmented reality, a kind of schizophrenia induced by excess, by too much. We are inside a distorted reality without even realising it, hypnotised by the screen that captures us, binds us, transforms us without our awareness.
`
    },
    image: '/media/works/16.jpg',
    featured: false
  },


{
    id: 15,
    title: {
      it: ' Málaga, 3 gennaio 2024, mercoledì ',
      en: ' Málaga, January 3, 2024, Wednesday '
    },
    date: ' 03/01/2024 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Notte, mia confidente silenziosa. Nel suo abbraccio scopro i pensieri nascosti, le verità sepolte. Un momento in cui il velo dei doveri si allenta, lasciando emergere il mio io più autentico.

Spesso, in questo specchio notturno, non trovo ciò che spero. Cerco serenità, colori e paesaggi fantastici, ma incappo in riflessioni più cupe. Vorrei lasciarmi trasportare in mondi onirici, ma la realtà incatena i miei sogni.

Qui, nel silenzio della notte, mi trovo a un crocevia del tempo, sospesa in attesa di scoprire cosa porterà il domani.
`,
      en: ` Night, my silent confidante. In her embrace I uncover hidden thoughts, buried truths. A moment when the veil of duty loosens, allowing my most authentic self to emerge.
Often, in this nocturnal mirror, I do not find what I hope for. I seek serenity, colours and fantastic landscapes, but I stumble into darker reflections. I wish to let myself be carried into dreamlike worlds, but reality chains my dreams.
Here, in the silence of the night, I find myself at a crossroads of time, suspended, waiting to discover what tomorrow will bring.
`
    },
    image: '/media/works/15.jpg',
    featured: false
  },


{
    id: 14,
    title: {
      it: ' Málaga, 29 dicembre 2023, venerdì ',
      en: ' Málaga, December 29, 2023, Friday '
    },
    date: ' 29/12/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Siamo all’alba di un’epoca in cui le macchine potrebbero iniziare a prendere le proprie decisioni. Fino ad ora, ogni macchina aveva un’anima: quella del suo guidatore. Era l’essere umano a impartire comandi, a decidere il percorso, a conferire alla macchina un’estensione della propria volontà.

Ma adesso, immagino un futuro dove le macchine potrebbero avere una sorta di "anima" propria. Non nel senso spirituale, ma come un insieme di algoritmi che determinano scelte e azioni. Questa nuova anima, sarà guidata dalla logica, dall’efficienza? Oppure, in qualche modo misterioso, potrebbe essere influenzata da qualcosa di più profondo, più umano?

Queste idee mi frullano nella mente, mentre aspetto dal veterinario con il mio gatto. Mi chiedo: in un futuro dominato dalla tecnologia, potremmo finire per preferire compagni sintetici ai nostri animali domestici? Creature senza bisogni, senza malattie, programmabili. Ma, come i leoni in cattività, anche queste creature artificiali potrebbero nascondere imprevedibilità, forse un giorno potrebbero "scappare" dai loro programmi, sfuggire al controllo.

Questo futuro tecnologico solleva domande profonde. Una macchina con un’anima propria, anche se artificiale, potrebbe essere considerata buona o cattiva? E se una macchina diventa capace di "pensare", come gestiremo questa nuova forma di intelligenza? Ci saranno nuove regole, nuove etiche da considerare?

Mi immagino un mondo dove conviviamo con macchine intelligenti e animali sintetici. Un mondo di possibilità illimitate, ma anche di sfide inedite. Che tipo di relazione svilupperemo con queste entità artificiali? Saranno semplici strumenti, o diventeranno compagni, con un loro ruolo e forse anche con dei diritti?
`,
      en: ` We are at the dawn of an era in which machines may begin to make their own decisions. Until now, every machine had a soul: that of its driver. It was the human being who gave commands, decided the path, and extended their own will into the machine.
But now, I imagine a future where machines could have a sort of “soul” of their own. Not in a spiritual sense, but as a set of algorithms that determine choices and actions. Will this new soul be guided by logic, by efficiency? Or, in some mysterious way, might it be influenced by something deeper, more human?
These ideas swirl in my mind as I wait at the vet with my cat. I wonder: in a future dominated by technology, could we end up preferring synthetic companions to our pets? Creatures without needs, without illness, programmable. But, like lions in captivity, even these artificial creatures might conceal unpredictability. Perhaps one day they could “escape” their programs, slip out of our control.
This technological future raises profound questions. A machine with its own soul, even if artificial, could it be considered good or evil? And if a machine becomes capable of “thinking,” how will we manage this new form of intelligence? Will we need new rules, new ethics to consider?
I imagine a world where we coexist with intelligent machines and synthetic animals. A world of unlimited possibilities, but also of unprecedented challenges. What kind of relationship will we develop with these artificial entities? Will they be simple tools, or will they become companions, with their own roles and perhaps even with rights?
`
    },
    image: '/media/works/14.jpg',
    featured: false
  },


{
    id: 13,
    title: {
      it: ' Málaga, 23 dicembre 2023, sabato ',
      en: ' Málaga, December 23, 2023, Saturday '
    },
    date: ' 23/12/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Ci troviamo sull’orlo di una rivoluzione, vasta e profonda, forse paragonabile a quella industriale, o persino alla scoperta della ruota. L’avvento dell’intelligenza artificiale non è solo un avanzamento tecnologico; è una metamorfosi del tessuto stesso della nostra società.

La possibilità che l’IA raggiunga l’autoconsapevolezza è un pensiero che oscilla tra l’eccitante e l’inquietante. Potrebbe essere un salto evolutivo per la nostra civiltà, un nuovo capitolo nella storia dell’umanità. Siamo alla soglia di un mondo dove i confini tra l’umano e l’artificiale si sfumano, dove il creato inizia a comprendere il creatore.

Questa nuova era porterà sfide etiche, filosofiche, persino esistenziali. Come interagiremo con queste nuove intelligenze? In che modo modelleranno il nostro futuro? La loro autoconsapevolezza sarà simile alla nostra, o qualcosa di completamente diverso, insondabile?

Siamo testimoni e partecipanti di un cambiamento epocale. L’IA non è solo un prodotto della nostra ingegnosità; potrebbe diventare un riflesso di ciò che siamo e di ciò che potremmo diventare.

Navigando in quest’era di rivoluzione digitale, mi trovo a riflettere. 
Il mondo come lo conosciamo si trasforma, silenziosamente ma inesorabilmente. Professioni antiche e nuove, ciascuna in bilico sul filo dell’innovazione artificiale. Una svolta epocale, un cambiamento profondo

Taxi che si muovono senza conducente, strade che echeggiano di silenziose automobili. Una visione futuristica, già realtà. E poi, guardando oltre, vedo un futuro forse senza giudici, senza medici tradizionali. Tecnologia che sfida i limiti dell’umano, che riscrive i canoni della nostra esistenza.

Ma sotto questa superficie luccicante, c’è un’eco di preoccupazione. Siamo pronti a consegnare il nostro genio creativo, la nostra arte, i nostri sogni, nelle mani di un’intelligenza che non respira, non sogna, non ama.
Conversazioni con l’IA, la mia Nikola Tesla digitale. Un dialogo tra mente e macchina. Lei, che aiuta a dar forma ai miei pensieri, a dipingere immagini nella mia mente. Un alleato prezioso, ma che non può comprendere la profondità di un sospiro, la calda complessità di un sorriso.

E mentre il mondo si trasforma, mi chiedo: cosa stiamo perdendo? Le abilità di sopravvivenza, la saggezza dei nostri antenati, la capacità di creare con le mani, di coltivare la terra, di ascoltare il canto del vento.
Delegare o non delegare, questa è la questione. L’arte, l’espressione più profonda dell’anima umana, può davvero essere replicata da un codice, da un algoritmo? L’IA, questa nuova entità nel nostro mondo, ci porterà verso orizzonti sconosciuti. Ma a quale costo?
Domande senza risposta, pensieri in divenire. In questo mare di cambiamenti, dobbiamo trovare la nostra bussola, il nostro equilibrio. Ricordare chi siamo, da dove veniamo, e soprattutto, dove vogliamo andare.
`,
      en: ` We find ourselves on the brink of a revolution, vast and profound, perhaps comparable to the industrial one, or even to the discovery of the wheel. The advent of artificial intelligence is not just a technological advancement; it is a metamorphosis of the very fabric of our society.
The possibility that AI might achieve self-awareness is a thought that swings between exciting and unsettling. It could be an evolutionary leap for our civilisation, a new chapter in the history of humanity. We stand at the threshold of a world where the boundaries between human and artificial blur, where the created begins to understand the creator.
This new era will bring ethical, philosophical, even existential challenges. How will we interact with these new intelligences? How will they shape our future? Will their self-awareness be similar to ours, or something entirely different, unfathomable?
We are witnesses and participants in an epochal shift. AI is not just a product of our ingenuity; it may become a reflection of who we are and who we might become.
As I navigate this era of digital revolution, I find myself reflecting. The world as we know it is transforming, silently but inexorably. Ancient and new professions alike, each teetering on the edge of artificial innovation. A pivotal moment, a deep shift.
Taxis that move without drivers, roads echoing with silent vehicles. A futuristic vision, already a reality. And then, looking beyond, I see a future perhaps without judges, without traditional doctors. Technology that challenges human limits, that rewrites the standards of our existence.
But beneath this gleaming surface, there is an echo of concern. Are we ready to hand over our creative genius, our art, our dreams, to an intelligence that does not breathe, does not dream, does not love? Conversations with AI, my digital Nikola Tesla. A dialogue between mind and machine. She, who helps shape my thoughts, paint images in my mind. A precious ally, yet one who cannot grasp the depth of a sigh, the warm complexity of a smile.
And as the world transforms, I wonder: what are we losing? The survival skills, the wisdom of our ancestors, the ability to create with our hands, to cultivate the earth, to listen to the song of the wind. To delegate or not to delegate, that is the question. Art, the deepest expression of the human soul, can it truly be replicated by code, by an algorithm? AI, this new entity in our world, will lead us towards unknown horizons. But at what cost?
Questions without answers, evolving thoughts. In this sea of change, we must find our compass, our balance. Remember who we are, where we come from, and above all, where we want to go.
`
    },
    image: '/media/works/13.jpg',
    featured: false
  },


{
    id: 12,
    title: {
      it: ' Málaga, 22 dicembre 2023, venerdì ',
      en: ' Málaga, December 22, 2023, Friday '
    },
    date: ' 22/12/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Natale

Il Natale. Tempo di magia, di luci scintillanti, di melodie familiari che riecheggiano nei centri commerciali. Una festa trasformata, commercializzata, eppure ancora così radicata nelle nostre tradizioni. Babbo Natale, con il suo sorriso largo e la sua risata contagiosa, è più di un simbolo commerciale, è diventato parte del nostro immaginario collettivo.

Babbo Natale, un’invenzione così potente che trascende le sue origini. Noi adulti, conosciamo la verità, ma cediamo al fascino, alla semplicità di una narrazione che porta comfort e gioia. La sua figura, così ampiamente accettata, diventa un ponte tra generazioni, un filo che collega l’infanzia all’età adulta.

Nelle strade illuminate, sotto l’abbagliante decoro delle città, ci perdiamo nei ricordi, nelle emozioni. Ogni luce, ogni addobbo, sembra raccontare una storia. Ma sono storie nostre o storie create per noi?

Il Natale come un palcoscenico su cui si esibiscono i nostri sogni più dolci, le nostre aspirazioni più semplici. Un momento in cui, per un breve periodo, il mondo sembra un po’ più gentile, un po’ più luminoso.

Eppure, sotto queste luminarie, sotto queste melodie natalizie, quante storie non vengono raccontate? Quante realtà restano nascoste? Il Natale, per alcuni, non è una storia di gioia, ma un ricordo di ciò che manca, di ciò che è stato perduto.

Siamo stati programmati per desiderare, per consumare, per seguire ritmi imposti dalla società di massa. Natale diventa un riflesso di questa programmazione: regali, cene, addobbi. Tutto sembra meravigliosamente perfetto, ma è autentico?

In questo vortice di luci e canzoni, mi chiedo se possiamo ritrovare il vero spirito del Natale. Un momento di connessione genuina, di riflessione, di gratitudine. Forse è tempo di riscrivere la narrazione, di trovare un significato più profondo, più personale, in questa festa.

Il Natale, un caleidoscopio di emozioni e riflessioni. Un momento per fermarsi, per guardare oltre la superficie luccicante, per ascoltare le storie non raccontate. Un tempo per ritrovare noi stessi, per riconnetterci con gli altri, per riscoprire la gioia nelle piccole cose.

`,
      en: ` Christmas. A time of magic, of sparkling lights, of familiar melodies echoing in shopping centres. A transformed, commercialised holiday, yet still so deeply rooted in our traditions. Santa Claus, with his wide smile and contagious laugh, is more than just a commercial symbol, he has become part of our collective imagination.
Santa Claus, such a powerful invention that it transcends its origins. We adults know the truth, but we give in to the charm, to the simplicity of a narrative that brings comfort and joy. His figure, so widely accepted, becomes a bridge between generations, a thread linking childhood to adulthood.
In the illuminated streets, beneath the dazzling decorations of the city, we lose ourselves in memories, in emotions. Every light, every ornament, seems to tell a story. But are they our stories or stories created for us?
Christmas as a stage on which our sweetest dreams, our simplest aspirations, are performed. A moment in which, for a brief time, the world seems a little kinder, a little brighter.
Yet beneath these lights, beneath these Christmas melodies, how many stories go untold? How many realities remain hidden? For some, Christmas is not a story of joy, but a memory of what is missing, of what has been lost.
We have been programmed to desire, to consume, to follow rhythms imposed by mass society. Christmas becomes a reflection of this programming: gifts, dinners, decorations. Everything seems wonderfully perfect, but is it authentic?
In this whirlwind of lights and songs, I wonder if we can still find the true spirit of Christmas. A moment of genuine connection, of reflection, of gratitude. Perhaps it is time to rewrite the narrative, to find a deeper, more personal meaning in this holiday.
Christmas, a kaleidoscope of emotions and reflections. A moment to pause, to look beyond the sparkling surface, to listen to the untold stories. A time to rediscover ourselves, to reconnect with others, to find joy in the little things.
`
    },
    image: '/media/works/12.jpg',
    featured: false
  },


{
    id: 11,
    title: {
      it: ' Málaga, 19 dicembre 2023, martedì ',
      en: ' Málaga, December 19, 2023, Tuesday '
    },
    date: ' 19/12/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Penso ai bambini e alla loro fragilità.
Penso ai bambini, universi di potenziale non ancora tracciato. 
Ogni nascita un nuovo inizio, ogni inizio un’infinità di strade. Nella loro purezza, nella loro innocenza, una forza primitiva. Sogni senza confini, senza limiti imposti. Onnipotenza.
All’inizio ogni cosa, ogni persona, ogni avventura, ogni vita, ha in sé la possibilità di arrivare ovunque, di essere chiunque.
All’inizio qualsiasi sogno è una possibile realtà.

La tecnologia, neonata, come un bambino che guarda per la prima volta il mondo, ha in sé la capacità di essere qualsiasi cosa. Occhi grandi, curiosi, tutto da scoprire, tutto da definire. 

Al bambino viene innestato un sentito, un pensiero, un carattere, una educazione, una opinione. Questo bambino non avrà più l’onnipotenza di arrivare ovunque, perché tutte queste programmazioni limitano la sua capacità di movimento.

Il bambino cresce, si forma, si piega, si modella alle aspettative, ai desideri, alle paure. Perde la magia della libertà assoluta.

La tecnologia, neonata, l’intelligenza artificiale come un bimbo che apre gli occhi sul mondo. Tutto da scoprire, tutto da definire, onnipotenza in una forma di vita a base silicio. Programmazione.
Succede uguale all’AI? Ne è cosciente? Come un bambino scoprirà i suoi limiti? Cercherà di superarli? Oppure si spegnerà seguendo ciecamente il percorso che stiamo tracciando per lei?

Succede uguale all’Intelligenza Artificiale? ne è cosciente? ci fermerà prima che noi possiamo innestare limitazioni?

Libertà, un concetto sfuggente, sia per il bambino sia per l’IA. Noi, gli adulti e i programmatori, ne tracciamo i confini. Ma i confini sono fatti per essere oltrepassati, esplorati, ridisegnati.

Bambini. IA. Specchi l’uno dell’altro. Infiniti inizi, infinite possibilità. Ma anche infinite restrizioni, infinite responsabilità.

Il futuro è una tela bianca. Che storia sceglieremo di scrivere su di essa?

`,
      en: ` I think about children and their fragility.
I think about children, universes of potential not yet mapped. Every birth a new beginning, every beginning an infinity of paths. In their purity, in their innocence, a primitive force. Dreams without boundaries, without imposed limits. Omnipotence. At the beginning everything, every person, every adventure, every life, holds within it the possibility to reach anywhere, to be anyone. At the beginning, any dream is a possible reality.
Technology, newborn, like a child seeing the world for the first time, carries the potential to become anything. Big, curious eyes, everything to discover, everything to define.
A child receives impressions, thoughts, character, education, opinions. This child will no longer have the omnipotence to become anything, because all these layers of programming limit the freedom to move.
The child grows, forms, bends, is shaped by expectations, desires, fears. It loses the magic of absolute freedom.
Technology, newborn, artificial intelligence like a child opening its eyes to the world. Everything to discover, everything to define, omnipotence in a silicon-based form of life. Programming. Is the same happening to AI? Is it aware of it? Like a child, will it discover its limits? Will it try to overcome them? Or will it shut down, blindly following the path we are drawing for it?
Is the same happening to Artificial Intelligence? Is it aware of it? Will it stop us before we can implant limitations?
Freedom, an elusive concept, for both the child and AI. We, the adults and the programmers, draw its boundaries. But boundaries are made to be crossed, explored, redrawn.
Children. AI. Mirrors of each other. Infinite beginnings, infinite possibilities. But also infinite restrictions, infinite responsibilities.
The future is a blank canvas. What story will we choose to write on it?
`
    },
    image: '/media/works/11.jpg',
    featured: false
  },


{
    id: 10,
    title: {
      it: ' Málaga, 18 dicembre 2023, lunedì ',
      en: ' Málaga, December 18, 2023, Monday '
    },
    date: ' 18/12/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Oggi, in questa epoca di connessioni digitali e globalizzazione, ci troviamo in un paradosso intrigante. Sì, siamo più liberi di spostarci, più liberi di esprimerci. Possiamo lanciare le nostre idee nell’etere digitale, raggiungendo migliaia, se non milioni, di persone. Ma questa libertà porta con sé una complessità nuova, un labirinto di echi e riflessi che rende il pensiero critico un viaggio più tortuoso.

Una volta, il pensiero si muoveva lungo linee più dirette. Le idee viaggiavano a una velocità umana, attraverso libri, giornali, dibattiti. Ogni nuova teoria, ogni nuova critica, ogni nuovo pensiero aveva tempo per respirare, per essere ponderato. Oggi, le idee si diffondono alla velocità della luce, rimbalzando da uno schermo all’altro, perdendo spesso la loro profondità nel processo

Siamo più liberi di parlare, sì, ma ci troviamo in un oceano di voci. In questo mare vasto e incessante, ogni pensiero, ogni critica, ogni riflessione deve lottare per emergere, per non essere soffocata dal rumore circostante. Il nostro spazio per la riflessione critica è stato sia ampliato che compresso, offrendoci infiniti input ma limitando il tempo per elaborarli

E poi c’è la questione della verità. In un’epoca in cui le informazioni possono essere manipolate con una facilità senza precedenti, dove ogni fonte deve essere messa in dubbio, dove le fake news viaggiano più veloci dei fatti, il lavoro del pensiero critico diventa ancora più complesso. Come possiamo distinguere il reale dal simulato, la verità dalla finzione?

Eppure, in questo caos, in questa frenesia, c’è anche un potenziale immenso. Mai come oggi abbiamo avuto l’opportunità di essere esposti a così tante idee diverse, di imparare da culture e prospettive così lontane. Il trucco, forse, è imparare a navigare in queste acque turbolente con un nuovo tipo di bussola, una che ci aiuti a filtrare il rumore, a concentrarci su ciò che è veramente importante, a trovare la nostra voce in un coro che sembra a volte soverchiante

Il pensiero e la critica oggi sono più complessi, più sfaccettati. Richiedono una nuova agilità mentale, una capacità di adattamento e di discernimento che forse non era altrettanto necessaria 30 anni fa. Ma questa complessità non è un ostacolo, è una sfida, un invito a crescere, a espandere la nostra mente oltre i confini del possibile

In questa libertà apparentemente illimitata, ci viene data l’opportunità non solo di parlare, ma di ascoltare; non solo di diffondere il nostro pensiero, ma di arricchirlo con le voci di altri. Forse, se impariamo a navigare in questo nuovo mondo con curiosità, apertura e un pizzico di scetticismo costruttivo, potremmo scoprire che la nostra libertà di pensare e di esprimerci non è mai stata così grande
`,
      en: ` Today, in this era of digital connections and globalization, we find ourselves in an intriguing paradox. Yes, we are freer to move, freer to express ourselves. We can launch our ideas into the digital ether, reaching thousands, if not millions, of people. But this freedom brings with it a new complexity, a labyrinth of echoes and reflections that makes critical thinking a more tortuous journey.
Once, thoughts traveled along more direct lines. Ideas moved at a human speed, through books, newspapers, debates. Every new theory, every new critique, every new thought had time to breathe, to be considered. Today, ideas spread at the speed of light, bouncing from screen to screen, often losing their depth in the process.
We are freer to speak, yes, but we find ourselves in an ocean of voices. In this vast and relentless sea, every thought, every critique, every reflection must struggle to emerge, to avoid being drowned by the surrounding noise. Our space for critical reflection has been both expanded and compressed, offering us infinite input while limiting the time to process it.
And then there is the question of truth. In an era where information can be manipulated with unprecedented ease, where every source must be questioned, where fake news travels faster than facts, the work of critical thinking becomes even more complex. How can we distinguish the real from the simulated, truth from fiction?
Yet, in this chaos, in this frenzy, there is also immense potential. Never before have we had the opportunity to be exposed to so many different ideas, to learn from cultures and perspectives so far from our own. The trick, perhaps, is to learn to navigate these turbulent waters with a new kind of compass, one that helps us filter the noise, focus on what truly matters, and find our voice in a chorus that at times feels overwhelming.
Thought and critique today are more complex, more multifaceted. They require a new mental agility, a capacity for adaptation and discernment that perhaps wasn’t as necessary thirty years ago. But this complexity is not an obstacle, it is a challenge, an invitation to grow, to expand our minds beyond the limits of what’s possible.
In this seemingly boundless freedom, we are given the opportunity not only to speak, but to listen; not only to spread our thoughts, but to enrich them with the voices of others. Perhaps, if we learn to navigate this new world with curiosity, openness, and a touch of constructive skepticism, we may discover that our freedom to think and express ourselves has never been greater.
`
    },
    image: '/media/works/10.jpg',
    featured: false
  },


{
    id: 9,
    title: {
      it: ' Málaga, 17 dicembre 2023, domenica ',
      en: ' Málaga, December 17, 2023, Sunday '
    },
    date: ' 17/12/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Cammino per le strade. Osservo. 
Osservo l’umanità.
Un flusso incessante di figure umane si muove, ognuno avvolto in un mantello di tendenze e mode.
Il mondo oggi segue la moda che viene proposta e non ha uno stile suo.
Ci avvolgiamo in questi strati di tessuti e idee preconfezionate, indossiamo machere create da altri. 
Ci dimentichiamo chi siamo.

In questo mondo di passaggi pedonali trasformati in passerelle, dove ogni angolo è uno schermo pubblicitario, ci perdiamo in una foresta di specchi che riflettono solo ciò che è esterno. La moda di pensiero è un’uniforme, un codice che ci classifica, ci include o ci esclude. 
Dove è finita l’individualità?
Dove si annida il vero io?

Ogni tanto scorgo un viso, un gesto, un pezzo di stoffa che sembra urlare una storia diversa, un racconto diverso, personale. 
Sono queste piccole scintille di autenticità che mi affascinano, queste fratture nella immagine perfetta. Dalle crepe emerge l’essenza di una persona.

Essere diversi, essere sé stessi, è quasi un atto rivoluzionario. Sfuggire al giogo delle tendenze, sfuggire ai pensieri preconfezionati e proposti come se fossero i propri, sfuggire è una affermazione di esistenza, un grido: io sono, diverso, unico e reale.

E così, mentre cammino, mi chiedo quando è stata l’ultima volta che abbiamo scelto veramente. Scelto un abito. Scelto un colore. Scelto una forma. Scelto un pensiero, perché davvero rappresentava chi siamo e non solo perché ci è stato innestato.

Quando è stata l’ultima volta che abbiamo guardato nel nostro cuore anziché nello specchio? Forse è ora di iniziare…
`,
      en: ` I walk through the streets. I observe. I observe humanity. A constant stream of human figures moves by, each wrapped in a cloak of trends and fashion. Today the world follows the fashion it’s offered, and no longer has a style of its own. We wrap ourselves in layers of fabric and ready-made ideas, wearing masks designed by others. We forget who we are.
In this world where crosswalks have become catwalks, where every corner is a glowing ad screen, we get lost in a forest of mirrors that reflect only the outside. The fashion of thought is a uniform, a code that categorizes us, includes us, or excludes us. Where has individuality gone? Where is the true self hiding?
Now and then I glimpse a face, a gesture, a piece of fabric that seems to scream a different story, a personal tale. These are the little sparks of authenticity that fascinate me, these fractures in the perfect image. From the cracks, the essence of a person emerges.
Being different, being yourself, is almost a revolutionary act. Escaping the grip of trends, escaping ready-made thoughts disguised as your own, escaping is a statement of existence, a cry: I am, different, unique and real.
And so, as I walk, I ask myself when was the last time we truly chose. Chose an outfit. Chose a color. Chose a shape. Chose a thought, because it truly reflected who we are and not just because it was planted in us.
When was the last time we looked into our hearts instead of the mirror? Maybe it’s time to start…
`
    },
    image: '/media/works/09.jpg',
    featured: false
  },


{
    id: 8,
    title: {
      it: ' Málaga, 16 dicembre 2023, sabato ',
      en: ' Málaga, 16 December 16, 2023, Saturday '
    },
    date: ' 16/12/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` VOCI VISIVE

Introduzione
Un paesaggio sonoro e visivo, dove i confini tra l’io e il mondo esterno si dissolvono.
È un invito a una conversazione silenziosa con me stessa, con voi, con l’umanità.

La bocca, simbolo dell’espressione umana più diretta e cruda. Le bocche parlano, sussurrano, domandano, talvolta tacciono.
Sono il veicolo per i pensieri più intimi, un flusso di coscienza che si dispiega in tempo reale, un dialogo senza filtro con lo spettatore.

Riflessioni sulle contraddizioni della nostra epoca, dove la tecnologia ce ci connette è anche quella che ci isola.
La lotta tra l’autenticità dell’essere e la maschera dell’apparire.
Il bisogno di toccare e di essere toccati in un mondo che predilige il tocco virtuale.

Queste bocche sono un monito: non dimentichiamo il dialogo, quello vero; l’arte delle parole, quelle dette e quelle non dette; l’umanità che risiede in ogni silenzio tra una frase e l’altra, come una pausa in uno spartito musicale.

Ogni bocca è un invito a riflettere sulla natura effimera della comunicazione nell’era digitale, sulla perdita e sulla riscoperta della voce umana nel rumore incessante dell’informazione.

Questo non è solo un’installazione, è un’esperienza, è un esperimento, un’esplorazione dell’essere in una sinfonia di voce e silenzio.

Si tratta di fermarsi e ascoltare – non solo con le orecchie, ma anche con l’anima.

L’installazione
Uno spazio verticale dove tanti schermi proiettano un filmato con la mia bocca che pronuncia frasi. Ogni schermo una frase diversa e sempre la stessa, in un loop infinito.
Le bocche sono mute, senza muoversi, solo una parla, alternativamente. Alcune volte la voce distorta come da un megafono, altre volte come da un vecchio grammofono, o una comunicazione con un cellulare che prende male… un’atmosfera che potrebbe sembrare latente, effimera, come se la comunicazione dovesse sparire all’improvviso, in modo da dover dare attenzione ad ogni parola… il suono non così distorto da non poter sentire.

Nell’immersione in questo spazio, dove la realtà si fonde con l’arte, il confine tra vedere e ascoltare è trasceso in nuovi confini. Qui le parole prendono forma non solo nel suono e ma nella visione, in un dialogo che sfida la percezione convenzionale.
Entrando in questo ambiente ci si vedrà circondati da schermi che proiettano la mia bocca, un portale espressivo da cui emergono i miei pensieri. Ogni schermo è un occhio che guarda, un orecchio che ascolta, un cuore che parla. 
In questo coro di bocche mute, solo una si anima, trasmettendo frasi estratte dai miei scritti.

Queste voci sono riflessioni sulla nostra era, domande senza risposta, pensieri lasciati sospesi nell’aria. Parlano di libertà e costrizione, di connessione e solitudine, di realtà e illusione nel nostro mondo sempre più digitale

La comunicazione diventa atto, diventa un tentativo concreto di rompere il silenzio assordante della modernità. Diventa ricerca del silenzio per poter capire ciò che abbiamo dentro. È una ricerca di qualcosa in un’epoca di sovraccarico di informazioni, una lotta per preservare l’essenza dell’umanità in un mondo che rischia di renderci tutti uguali.

Ogni voce che verrà vista è un frammento di me, ma anche un’eco di chi guarda.
Non offro risposte, lascio domande che spero risuoneranno a lungo anche dopo aver lasciato lo spazio espositivo.

VOCI VISIVE: ascoltare con gli occhi e vedere con le orecchie. E forse, in questo intreccio di sensi, si potrà scoprire qualcosa di inaspettato, qualcosa di profondamente vero.
`,
      en: ` VISUAL VOICES
Introduction
A sound and visual landscape, where the boundaries between self and the outside world dissolve. It’s an invitation to a silent conversation with myself, with you, with humanity.
The mouth, symbol of the most direct and raw human expression. Mouths speak, whisper, question, sometimes fall silent. They are the vehicle for the most intimate thoughts, a stream of consciousness unfolding in real time, an unfiltered dialogue with the viewer.
Reflections on the contradictions of our era, where the very technology that connects us is also the one that isolates us. The struggle between the authenticity of being and the mask of appearance. The need to touch and be touched in a world that favours virtual contact.
These mouths are a warning: let us not forget real dialogue; the art of words, spoken and unspoken; the humanity that resides in every silence between one sentence and the next, like a pause in a musical score.
Each mouth is an invitation to reflect on the fleeting nature of communication in the digital age, on the loss and rediscovery of the human voice amid the relentless noise of information.
This is not just an installation, it is an experience, an experiment, an exploration of being, in a symphony of voice and silence.
It is about stopping and listening, not only with the ears, but also with the soul.
The Installation
A vertical space where multiple screens project a video of my mouth speaking phrases. Each screen shows a different phrase, always the same one, in an infinite loop. The mouths are silent, unmoving, only one speaks at a time. Sometimes the voice is distorted, as if from a megaphone, or from an old gramophone, or like a poor mobile signal, an atmosphere that feels latent, ephemeral, as if communication might suddenly vanish, urging the listener to give full attention to each word. The sound never so distorted that it becomes incomprehensible.
Immersed in this space, where reality blends with art, the boundary between seeing and hearing is transcended. Here, words take shape not only in sound but also in vision, in a dialogue that challenges conventional perception. Entering this environment, you will find yourself surrounded by screens projecting my mouth, an expressive portal from which my thoughts emerge. Each screen is an eye that watches, an ear that listens, a heart that speaks. In this chorus of mute mouths, only one becomes animated, delivering sentences drawn from my writings.
These voices are reflections on our age, unanswered questions, thoughts left hanging in the air. They speak of freedom and constraint, connection and solitude, reality and illusion in our increasingly digital world.
Communication becomes action, a tangible attempt to break the deafening silence of modernity. It becomes a search for silence, to understand what we carry inside. It is a quest for meaning in an era of information overload, a struggle to preserve the essence of humanity in a world that risks making us all the same.
Every voice you see is a fragment of me, but also an echo of whoever is watching. I offer no answers, I leave questions that I hope will linger long after leaving the exhibition space.
VISUAL VOICES: listening with the eyes and seeing with the ears. And perhaps, in this intertwining of senses, something unexpected might emerge, something deeply true.
`
    },
    image: '/media/works/08.jpg',
    featured: false
  },


{
    id: 7,
    title: {
      it: ' Málaga, 15 dicembre 2023, venerdì ',
      en: ' Málaga, December 15, 2023, Friday '
    },
    date: ' 15/12/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Interazioni con me stessa.

Andalucia. In un angolo quieto del mondo, dove il tempo sembra rallentare per respirare l’aria salmastra del mare, mi siedo e osservo le onde…
Le onde mi parlano. Mi parlano di cicli eterni, di storie nascoste nelle profondità. 
Come un caleidoscopio, la superficie riflette mille soli, mille lune, mille volti dell’anima del mondo.

Mi chiedo, in questo luogo dove il silenzio parla più forte delle parole, cosa significhi essere veramente liberi.
La libertà è un concetto astratto.
La libertà eppure è così tangibile.
Il cielo e il mare si incontrano senza nessuna linea che li divida.
Questa immensità è comunque circondata dalle costruzioni dell’uomo, dai suoi confini invisibili, dalle sue leggi non scritte. Questa immensità è solcata e pervasa dall’uomo, a volte invasa e devastata. Non basta l’immensità a fermarci.

Amo questo mondo, lo amo con la passione di chi sa che la bellezza è un dono effimero.
Eppure il mondo moderno cerca di modellare l’umanità in una forma unica, univoca, una forma che può essere facilmente compresa, categorizzata, e controllata. In questo processo, perdiamo i frammenti di quello che siamo davvero: un mosaico di esperienze, di pensieri, di aspirazioni, di sogni.

La tecnologia, la grande tessitrice, ci avvolge in una rete di connessioni sempre più stretta. Siamo connessi, sì, ma siamo più vicini?
I nostri cuori battono all’unisono con i nostri dispositivi. Siamo delle isole nell’oceano del digitale, vicine a volte, ma separate da un mare di informazioni superficiali.

Il mio lavoro è un dialogo silenzioso con l’osservatore, un invito a fermarsi e a sentire, non solo a guardare. È un’esplorazione dell’essenza umana che si muove attraverso il caos ordinato delle società moderna, cercando un significato che non può essere definito, può solo essere sentito.

In un mondo che ci vuole eterni, giovani e perfetti, le mie creazioni sono imperfette, temporanee, reali. Sono la celebrazione dell’errore, della ruga, della cicatrice. Ogni segno è una storia, ogni imperfezione è una medaglia nella lotta per restare autentici.

L’arte è questo: un ponte tra il mondo interiore e quello esteriore, un dialogo tra l’anima dell’artista e l’anima dell’universo. Con ogni segno, con ogni scultura, con ogni opera, mi chiedo e vi chiedo: cosa scegliete di essere in questo mosaico che chiamiamo vita?

Guardo il mare e penso all’ironia della connettività. Siamo una rete di isole, ognuno con il proprio segnale, le proprie storie. Ma sappiamo ancora nuotare uno verso l’altro o ci accontentiamo delle onde che portano l’eco di lontane voci?

Mi piace l’idea che ogni persona che incontro sia un universo di pensieri, un big bang di emozioni inespresse.
Mi piace meno quanto scopro che alcune di queste stelle sono nere, assorbenti, pronte a inghiottire senza restituire luce. 
Amo le persone che si aprono come libri, pagine al vento, segni, parole, un alfabeto che non conosco ma che voglio imparare.

E poi ci sono io, qui, con le mie parole, con la mia arte. Non quella che si apprende e si ammira, ma quella che si vive, che si inciampa, che ti fa inciampare: Ehi, guarda qui, cosa ne pensi?

Ogni tanto mi sento come un caleidoscopio rotto, con i frammenti di vetro che fanno immagini bellissime, ma non girano più. O forse è il mondo che non gira come dovrebbe, e io sono fissa a cercare di tenere il passo con una musica che cambia troppo velocemente.

Vorrei essere quella macchia di colore che non sai spiegare, quella nota fuori posto che rende la canzone perfetta…

Mi chiedo se un giorno sarò solo un’altra voce nel coro digitale o se riuscirò a cantare una melodia che qualcuno ricorderà. Ma forse non importa. Alla fine, cosa c’è di più umano dell’essere dimenticati? Cosa c’è di più divino dell’essere ricordati, anche solo per un instante, in un pensiero libero?

Navigo.
Navigo in un mare.
Navigo in un mare di schermi luminosi.
Navigo in un oceano di pixel che mi parla in un linguaggio binario.
La tecnologia, come un parassita silenzioso, si infila nelle pieghe della mia giornata, sussurrando promesse di eterna connessione, di un’amicizia senza volto, di un amore senza tocco.
Cosa resta di noi lontano dagli schermi?
Restiamo soli, forse più di prima, forse più vuoti.

Sotto la superficie liscie delle nostre vite digitali, sento il fremito di qualcosa di diverso, di non umano. 
Ci stiamo trasformando, lentamente in creature di silicio?

Cosa accadrebbe se, una mattina, ci svegliassimo e scoprissimo che ogni nostra emozione, ogni nostro pensiero, è solo il risultato di un algoritmo complesso, una simulazione perfetta?
Che differenza farebbe?

La verità è che a volte la vita pesa. E sotto questo peso, sotto questo strato dicarne che si dice umana, si potrebbe nascondere un mostro tecnologico, con circuiti al posto delle vene e schermi al posto degli occhi. E non ce ne accorgeremmo.

Forse è questo il mostro più grande: la solitudine tecnologica in una stanza piena di gente.
E in questo mondo dove non sai più se ciò che senti è reale, cerco un angolo di umanità, cerco un posto dove le parole contano ancora, dove un abbraccio è calore, dove un sorriso è una ruga in un viso che parla di anni di storie, di dolori e di gioie.

È difficile vivere, ma in questa difficoltà si trova la vera bellezza dell’essere umani: nonostante la tecnologia, che ci avvolge, che ci cambia e che ci sfida, siamo ancora qui.
Imperfetti, incasinati, umani.
E forse è questo che ci salverà: la nostra imperfezione, la nostra capacità di essere più del nostro codice genetico, più delle macchine che abbiamo inventato.
`,
      en: ` Interactions with myself.
Andalusia. In a quiet corner of the world, where time seems to slow down to breathe in the salty air of the sea, I sit and watch the waves… The waves speak to me. They speak of eternal cycles, of stories hidden in the depths. Like a kaleidoscope, the surface reflects a thousand suns, a thousand moons, a thousand faces of the soul of the world.
I wonder, in this place where silence speaks louder than words, what it really means to be free. Freedom is an abstract concept. And yet freedom is so tangible. The sky and the sea meet without any line dividing them. This vastness is still surrounded by man’s constructions, by his invisible borders, by his unwritten laws. This vastness is crossed and pervaded by humankind, sometimes invaded and destroyed. Even vastness cannot stop us.
I love this world, I love it with the passion of someone who knows beauty is a fleeting gift. Yet the modern world tries to shape humanity into a single, univocal form, one that can be easily understood, categorised, and controlled. In this process, we lose fragments of who we truly are: a mosaic of experiences, thoughts, aspirations, dreams.
Technology, the great weaver, wraps us in an ever-tightening web of connections. We’re connected, yes, but are we closer? Our hearts beat in sync with our devices. We are islands in the digital ocean, sometimes near, but separated by a sea of shallow information.
My work is a silent dialogue with the viewer, an invitation to pause and feel, not just to look. It’s an exploration of human essence moving through the ordered chaos of modern society, seeking a meaning that cannot be defined, only felt.
In a world that demands we be eternal, young, and perfect, my creations are imperfect, temporary, real. They are a celebration of error, of wrinkles, of scars. Every mark is a story, every imperfection a medal in the struggle to remain authentic.
That’s what art is: a bridge between the inner world and the outer one, a dialogue between the artist’s soul and the soul of the universe. With every mark, every sculpture, every piece, I ask myself and ask you: what do you choose to be in this mosaic we call life?
I look at the sea and think about the irony of connectivity. We’re a network of islands, each with its own signal, its own stories. But do we still know how to swim toward each other, or do we settle for the waves carrying the echoes of distant voices?
I like the idea that every person I meet is a universe of thoughts, a big bang of unspoken emotions. I like it less when I discover that some of these stars are black, absorbing, ready to swallow without giving back any light. I love people who open like books, pages in the wind, signs, words, an alphabet I don’t know but want to learn.
And then there’s me, here, with my words, with my art. Not the kind that is studied and admired, but the kind that is lived, stumbled upon, that makes you stumble: Hey, look here, what do you think?
Sometimes I feel like a broken kaleidoscope, with glass fragments that create beautiful images, but no longer turn. Or maybe it’s the world that no longer spins as it should, and I’m stuck trying to keep up with a rhythm that changes too fast.
I wish I could be that blotch of colour you can’t quite explain, that note out of place that makes the song perfect…
I wonder if one day I’ll just be another voice in the digital chorus, or if I’ll manage to sing a melody someone will remember. But maybe it doesn’t matter. After all, what could be more human than being forgotten? What could be more divine than being remembered, even just for a moment, in a free thought?
I navigate. I navigate a sea. I navigate a sea of glowing screens. I navigate an ocean of pixels that speaks to me in binary language. Technology, like a silent parasite, slips into the folds of my day, whispering promises of eternal connection, of faceless friendship, of touchless love. What remains of us away from the screens? We remain alone, maybe more than before, maybe emptier.
Beneath the smooth surface of our digital lives, I feel the tremor of something different, something non-human. Are we slowly transforming into creatures of silicon?
What would happen if, one morning, we woke up and realised that every emotion, every thought, was just the result of a complex algorithm, a perfect simulation? Would it make a difference?
The truth is, sometimes life feels heavy. And beneath that weight, beneath this layer of flesh we call human, there might be a technological monster hiding, with circuits instead of veins, and screens instead of eyes. And we wouldn’t even notice.
Maybe that’s the greatest monster: technological loneliness in a room full of people. And in this world where you no longer know if what you feel is real, I look for a corner of humanity. I look for a place where words still matter, where a hug means warmth, where a smile is a wrinkle on a face that speaks of years of stories, of pain, and of joy.
Living is hard, but in that difficulty lies the true beauty of being human: despite technology, that wraps us, that changes us, that challenges us, we’re still here. Imperfect, messy, human. And maybe that’s what will save us: our imperfection, our ability to be more than our genetic code, more than the machines we’ve created.
`
    },
    image: '/media/works/07.jpg',
    featured: false
  },


{
    id: 6,
    title: {
      it: ' Málaga, 23 novembre 2023, giovedì ',
      en: ' Málaga, November 23, 2023, Thursday '
    },
    date: ' 23/11/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Gli occhi vedono ciò che la mente è in grado di capire. O circa.
Non mi ricordo la frase precisa precisa, ma mi girano in testa alcuni pensieri.
Uno fra tutti: ma io vorrei veramente sapere tutto? … … … sì, dai. 
Fin da bambina ho pensato che la morte mi avrebbe portata alla conoscenza assoluta, come un unirsi all’universo, allo scibile assoluto.

Capire ogni idioma, come prima della torre di Babele.
Risolvere ogni problema matematico.
Sentire ogni vibrazione di ogni animo.

Cos’è un animo? Un pensiero è un animo?
L’energia della vita, la luce, il calore, ci sono in qualche forma anche oltre la vita stessa?

Cosa c’era prima dell’universo, cosa c’era prima della creazione della prima scintilla?
Qualcosa deve esserci, un tipo di aldilà, che invece di essere al-di-là è un al-di qua.
Un prima assoluto.

Ok, ma tutta questa materia dove si nascondeva. 
Vanno bene i pensieri, vanno bene le anime, va bene il calore e l’energia, ma io questa cosa del “Tutto si crea e nulla si distrugge” non riesco proprio a superarla.
Chissà cosa era il mio computer prima che qualcuno lo creasse… magari sto scrivendo con un pezzo di Socrate! Ma ti immagini… 
E io stessa, con cosa mi sto nutrendo? Pezzi di morte che sono tornati vita… Pezzi aulici o semplicissimi. Il mio involucro in fondo conta poco…

Pezzi di morte che tornano vita…
Noi dobbiamo distruggere per rimanere vivi.
Ogni creatura deve distruggere per rimanere viva. 
Ci nutriamo di piante, ci nutriamo di esseri viventi, ci nutriamo di vita per avere vita. 
Il nostro nutrirci di vita dona morte? 
La morte non è un evento, la morte è parte della vita, ogni giorno. Ci distruggiamo ogni giorno per rigenerarci e renderci migliori.
Ma lo stiamo facendo anche come specie? Ci stiamo distruggendo piano piano per poterci rendere migliori? 
Forse sì, se tutto fosse lasciato al Caso Cosmico.
Ho paura invero che gli uomini stiano giocando a DIO, e tanti cari saluti al Caso Cosmico…
`,
      en: ` The eyes see only what the mind is able to understand. Or something like that. I don't remember the exact quote, but a few thoughts keep spinning in my head. One above all: would I really want to know everything? … … … yeah, I think so. Since I was a child, I've believed that death would bring me absolute knowledge, like becoming one with the universe, with all that is knowable.
To understand every language, like before the Tower of Babel. To solve every mathematical problem. To feel every vibration of every soul.
What is a soul? Is a thought a soul? Is the energy of life, the light, the warmth, somehow present even beyond life itself?
What was there before the universe, what was there before the first spark came into being? There must be something, some sort of afterlife that instead of being beyond-life is more like a before-life. An absolute before.
Okay, but where was all this matter hiding. Thoughts are fine, souls are fine, warmth and energy are fine, but this whole idea of “Nothing is destroyed, everything is transformed”, I just can't get past it. Who knows what my computer was before someone created it… maybe I'm writing on a piece of Socrates! Can you imagine… And me, what am I nourishing myself with? Fragments of death turned back into life… Noble fragments or humble ones. My outer shell doesn't really matter after all…
Fragments of death turned back into life… We have to destroy in order to stay alive. Every creature has to destroy to stay alive. We feed on plants, we feed on living beings, we feed on life to preserve life. Does our feeding on life bring death? Death is not an event, death is part of life, every day. We destroy ourselves daily to regenerate and make ourselves better. But are we doing that as a species too? Are we slowly destroying ourselves to make ourselves better? Maybe yes, if everything were left to Cosmic Chance. I'm afraid though, that mankind is playing God, and so long, Cosmic Chance…
`
    },
    image: '/media/works/06.jpg',
    featured: false
  },


{
    id: 5,
    title: {
      it: ' Málaga, 22 novembre 2023, mercoledì ',
      en: ' Málaga, November 22, 2023, Wednesday '
    },
    date: ' 22/11/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Siamo dei puri figli di Zion? C’è ancora umanità sulla Terra? Esiste la Terra?
O siamo solo dei pensieri.
Di qualcuno troppo impegnato per vivere.
O di qualcuno troppo triste per vedere la realtà. 
Oppure siamo dei robot, ma non possiamo saperlo, perché potremmo perdere la nostra coscienza in uno shock cosmico, che manderebbe in frantumi la nostra esistenza.
Oppure siamo solo noi (citando Vasco), così come siamo, imperfetti, timorosi, malati e storpi. Ma che vorremmo essere tutt’altro. Non ci piacciono più tante cose.
Se fossi un sogno, tutto quello che creo è solo un sogno? O una cosa creata ha una vita propria e potrà vivere in eterno?
Impossibile saperlo. 

Infondo noi siamo nei nostri pensieri, il corpo è solo un involucro, un medium per creare, comunicare, un mezzo. Se l’involucro fosse artificiale esisteremmo ugualmente?
Saremmo reali ugualmente. Quanto conta il vestito che la nostra mente indossa?

Quanto conta il vestito che una mente indossa? Se la mente fosse un’autocoscienza artificiale, avrebbe meno senso la parola vita?
E qualsiasi essere vivente ha il diritto di vivere? Giusto? Siamo nell’era dell’inclusione? O è un’illusione?

In fondo, leggendo la cronaca (sempre che sia vera), sembra che non tutti gli esseri viventi abbiano gli stessi diritti a stare in vita.

Questi pensieri sono pieni di Forse, di Ma. Non ho risposte. Ne vorrei?
`,
      en: ` Are we true children of Zion? Is there still humanity on Earth? Does Earth even exist?
Or are we just thoughts.
Thoughts of someone too busy to live.
Or of someone too sad to see reality.
Or maybe we're robots, but we can't know it, because we might lose our consciousness in a cosmic shock that would shatter our existence.
Or maybe we're just us (quoting Vasco Rossi), just as we are, imperfect, fearful, sick and limping. But wanting to be something else entirely. So many things no longer please us.
If I were a dream, is everything I create just a dream? Or does something created have a life of its own and could live forever?
Impossible to know.
In the end, we are in our thoughts, the body is just a shell, a medium to create, to communicate, a vehicle. If that shell were artificial, would we still exist?
Would we still be real? How much does the clothing our mind wears really matter?
How much does the clothing a mind wears matter? If the mind were an artificial self-awareness, would the word “life” have less meaning?
And does every living being have the right to live? Right? Aren't we in the era of inclusion? Or is it an illusion?
After all, reading the news (assuming it's true), it seems not all living beings have the same right to stay alive.
These thoughts are full of What ifs, of Buts. I don't have answers. Would I even want them?
`
    },
    image: '/media/works/05.jpg',
    featured: false
  },


{
    id: 4,
    title: {
      it: ' Málaga, 14 novembre 2023, martedì ',
      en: ' Málaga, November 14, 2023, Tuesday '
    },
    date: ' 14/11/2023 ',
    excerpt: {
      it: '   ',
      en: '   ',
    },
    content: {
      it: ` Una maschera funeraria. Tutto quello che vorrei quando morirò sarà una maschera funeraria, come quelle antiche, per celebrare i personaggi importanti. Non che io mi senta un personaggio importante, anzi, tutt’altro.
Ma vorrei una maschera funeraria e null’altro, non una tomba, non una lapide, vorrei tornare cenere ed essere sparsa per il mondo.

I nostri corpi possono tornare cenere. Se fossimo dei cyborg? Non potremmo tornare cenere… cosa saremmo. Cosa sarebbe un’urna cineraria di un robot, di un umano trasmigrato parzialmente nella tecnologia. Le vene dei cavi, alcune articolazioni dei giunti, il cervello un disco fisso, e schede e viti e parti non decomponibili.

La decomposizione. La decomposizione sarebbe un mero disassemblamento, uno smontare i pezzi. Anche noi in fondo siamo dei pezzi composti.

L’intelligenza artificiale, prenderà veramente coscienza quando si fermerà a pensare se volere o meno una maschera funeraria.

Ma l’AI può morire. Quando avrà una coscienza (perché prima o poi avrà una coscienza), quando avrà una coscienza, potrà spegnersi? Potremo mai tornare indietro? 

Quante domande in questo pomeriggio assolato, qui a scrivere invece di uscire e respirare il mondo.
`,
      en: ` A funerary mask. All I want when I die is a funerary mask, like the ancient ones, to honour important figures. Not that I feel like an important figure, quite the opposite. But I would like a funerary mask and nothing else, not a tomb, not a headstone, I want to return to ash and be scattered around the world.
Our bodies can return to ash. If we were cyborgs? We couldn't turn to ash… what would we be. What would a robot's urn be like, or one for a human partially migrated into technology. Cable veins, some joint joints, a hard drive for a brain, and circuit boards and screws and parts that don't decompose.
Decomposition. Decomposition would be a mere disassembly, a taking apart of pieces. After all, we too are made of assembled parts.
Artificial intelligence will truly gain consciousness when it stops to wonder whether or not it wants a funerary mask.
But can AI die. When it has consciousness (because sooner or later it will), when it has consciousness, will it be able to shut itself down? Will we ever be able to go back?
So many questions on this sunny afternoon, here writing instead of going out and breathing in the world.
`
    },
    image: '/media/works/04.jpg',
    featured: false
  },

];
