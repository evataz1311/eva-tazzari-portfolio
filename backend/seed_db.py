import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from pathlib import Path
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


async def seed_database():
    """Seed database with initial mock data"""
    
    # Clear existing data
    await db.artworks.delete_many({})
    await db.articles.delete_many({})
    await db.bio.delete_many({})
    await db.contact_messages.delete_many({})
    
    print("✓ Cleared existing data")
    
    # Seed Artworks
    artworks = [
        {
            "id": "1",
            "title_it": "Frammenti Digitali",
            "title_en": "Digital Fragments",
            "year": 2024,
            "category": "sculpture",
            "technique_it": "Bronzo e resina",
            "technique_en": "Bronze and resin",
            "dimensions": "45 x 30 x 25 cm",
            "description_it": "Un'esplorazione della frammentazione della memoria nell'era digitale, dove i ricordi si dissolvono e si ricompongono in nuove forme.",
            "description_en": "An exploration of memory fragmentation in the digital age, where memories dissolve and recompose into new forms.",
            "series_it": "Fratture",
            "series_en": "Fractures",
            "exhibition": "Biennale di Venezia 2024",
            "available": True,
            "image": "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800&q=80",
            "featured": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "2",
            "title_it": "Corpo Connesso",
            "title_en": "Connected Body",
            "year": 2023,
            "category": "wearable",
            "technique_it": "Argento, fibra ottica",
            "technique_en": "Silver, fiber optic",
            "dimensions": "15 x 12 x 8 cm",
            "description_it": "Una scultura indossabile che riflette sulla connessione costante tra corpo e tecnologia nel mondo contemporaneo.",
            "description_en": "A wearable sculpture reflecting on the constant connection between body and technology in the contemporary world.",
            "series_it": "Wearable Tech",
            "series_en": "Wearable Tech",
            "exhibition": "Milano Design Week 2023",
            "available": False,
            "image": "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
            "featured": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "3",
            "title_it": "Rete Organica",
            "title_en": "Organic Network",
            "year": 2024,
            "category": "installation",
            "technique_it": "Installazione multimediale",
            "technique_en": "Multimedia installation",
            "dimensions": "400 x 300 x 250 cm",
            "description_it": "Un'installazione immersiva che esplora le reti invisibili che ci connettono, sia digitali che biologiche.",
            "description_en": "An immersive installation exploring the invisible networks that connect us, both digital and biological.",
            "series_it": "Reti",
            "series_en": "Networks",
            "exhibition": "Triennale Milano 2024",
            "available": False,
            "image": "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
            "featured": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "4",
            "title_it": "Metamorfosi",
            "title_en": "Metamorphosis",
            "year": 2023,
            "category": "sculpture",
            "technique_it": "Marmo e acciaio",
            "technique_en": "Marble and steel",
            "dimensions": "80 x 40 x 35 cm",
            "description_it": "Una riflessione sulla trasformazione continua dell'identità umana nell'epoca della tecnologia.",
            "description_en": "A reflection on the continuous transformation of human identity in the age of technology.",
            "series_it": "Fratture",
            "series_en": "Fractures",
            "exhibition": "Galleria d'Arte Moderna, Roma",
            "available": True,
            "image": "https://images.unsplash.com/photo-1574631175154-2f8e3e6d6f4f?w=800&q=80",
            "featured": False,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "5",
            "title_it": "Pelle Digitale",
            "title_en": "Digital Skin",
            "year": 2022,
            "category": "wearable",
            "technique_it": "Polimeri bio-compatibili",
            "technique_en": "Bio-compatible polymers",
            "dimensions": "20 x 15 x 10 cm",
            "description_it": "Un gioiello scultoreo che interroga i confini tra naturale e artificiale.",
            "description_en": "A sculptural jewel questioning the boundaries between natural and artificial.",
            "series_it": "Wearable Tech",
            "series_en": "Wearable Tech",
            "exhibition": "Museo del Novecento, Milano",
            "available": True,
            "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
            "featured": False,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "6",
            "title_it": "Spazio Liquido",
            "title_en": "Liquid Space",
            "year": 2023,
            "category": "installation",
            "technique_it": "Video proiezione, suono",
            "technique_en": "Video projection, sound",
            "dimensions": "600 x 400 x 300 cm",
            "description_it": "Un ambiente immersivo che esplora la fluidità dello spazio nell'era digitale.",
            "description_en": "An immersive environment exploring the fluidity of space in the digital age.",
            "series_it": "Reti",
            "series_en": "Networks",
            "exhibition": "Maxxi Roma 2023",
            "available": False,
            "image": "https://images.unsplash.com/photo-1551354485-98828bca2f28?w=800&q=80",
            "featured": False,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    await db.artworks.insert_many(artworks)
    print(f"✓ Inserted {len(artworks)} artworks")
    
    # Seed Articles
    articles = [
        {
            "id": "1",
            "title_it": "La Bellezza nelle Fratture: Arte e Tecnologia",
            "title_en": "Beauty in Fractures: Art and Technology",
            "date": "2024-01-15",
            "excerpt_it": "Una riflessione sul rapporto tra arte contemporanea e innovazione tecnologica, e come le fratture digitali possano diventare spazi di bellezza.",
            "excerpt_en": "A reflection on the relationship between contemporary art and technological innovation, and how digital fractures can become spaces of beauty.",
            "content_it": "Nel mondo contemporaneo, la tecnologia ha trasformato radicalmente il nostro modo di percepire e creare arte. Le fratture che emergono dall'impatto tecnologico sulla nostra vita quotidiana non sono solo cicatrici, ma aperture verso nuove possibilità espressive. Come artista, cerco di esplorare questi spazi intermedi, dove il corpo incontra la macchina, dove il naturale si fonde con l'artificiale. Le mie sculture indossabili nascono da questa ricerca: non sono solo oggetti estetici, ma dispositivi concettuali che interrogano la nostra identità nell'era digitale.",
            "content_en": "In the contemporary world, technology has radically transformed our way of perceiving and creating art. The fractures that emerge from technological impact on our daily lives are not just scars, but openings toward new expressive possibilities. As an artist, I seek to explore these intermediate spaces, where body meets machine, where natural merges with artificial. My wearable sculptures are born from this research: they are not just aesthetic objects, but conceptual devices questioning our identity in the digital age.",
            "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
            "featured": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "2",
            "title_it": "Materiali del Futuro: Tradizione e Innovazione",
            "title_en": "Materials of the Future: Tradition and Innovation",
            "date": "2023-11-22",
            "excerpt_it": "Come il dialogo tra materiali tradizionali e contemporanei apre nuove possibilità espressive nella scultura.",
            "excerpt_en": "How dialogue between traditional and contemporary materials opens new expressive possibilities in sculpture.",
            "content_it": "La scelta dei materiali in scultura non è mai neutrale. Quando lavoro il bronzo accanto alle fibre ottiche, quando accosto il marmo ai polimeri bio-compatibili, sto creando un dialogo tra epoche e visioni del mondo diverse. Questa ibridazione materica riflette la condizione contemporanea: siamo esseri biologici che vivono in un mondo sempre più tecnologico, corpi antichi in ambienti digitali.",
            "content_en": "The choice of materials in sculpture is never neutral. When I work bronze alongside fiber optics, when I juxtapose marble with bio-compatible polymers, I am creating a dialogue between different eras and worldviews. This material hybridization reflects the contemporary condition: we are biological beings living in an increasingly technological world, ancient bodies in digital environments.",
            "image": "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
            "featured": False,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "3",
            "title_it": "Il Corpo come Interfaccia",
            "title_en": "The Body as Interface",
            "date": "2023-09-10",
            "excerpt_it": "Riflessioni sulle sculture indossabili e il corpo come punto di contatto tra umano e tecnologico.",
            "excerpt_en": "Reflections on wearable sculptures and the body as a point of contact between human and technological.",
            "content_it": "Le mie sculture indossabili trasformano il corpo in un'interfaccia viva tra dimensione biologica e digitale. Non sono semplici gioielli o accessori, ma dispositivi concettuali che interrogano il nostro rapporto con la tecnologia. Quando indossi una mia opera, diventi parte di un dialogo più ampio sulla natura dell'identità contemporanea.",
            "content_en": "My wearable sculptures transform the body into a living interface between biological and digital dimensions. They are not simple jewelry or accessories, but conceptual devices questioning our relationship with technology. When you wear one of my works, you become part of a broader dialogue on the nature of contemporary identity.",
            "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
            "featured": False,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    await db.articles.insert_many(articles)
    print(f"✓ Inserted {len(articles)} articles")
    
    # Seed Bio
    bio = {
        "id": "bio_main",
        "short_it": "Eva Tazzari è un'artista e scultrice contemporanea italiana nata a Bologna. Il suo lavoro esplora l'intersezione tra corpo, tecnologia e natura attraverso sculture, gioielli indossabili e installazioni multimediali.",
        "short_en": "Eva Tazzari is an Italian contemporary artist and sculptor born in Bologna. Her work explores the intersection between body, technology, and nature through sculptures, wearable jewelry, and multimedia installations.",
        "extended_it": "Eva Tazzari è un'artista e scultrice contemporanea italiana che vive e lavora tra Bologna e Milano. La sua ricerca artistica si concentra sull'esplorazione dell'impatto della tecnologia sulla vita quotidiana e sull'identità umana. Attraverso l'uso di materiali tradizionali come bronzo e marmo, insieme a tecnologie contemporanee come fibre ottiche e polimeri bio-compatibili, Tazzari crea opere che interrogano i confini tra naturale e artificiale, tra corpo e macchina. Le sue sculture indossabili e le installazioni multimediali invitano lo spettatore a riflettere sulla direzione del mondo contemporaneo, cercando bellezza e poesia nelle fratture della nostra epoca.",
        "extended_en": "Eva Tazzari is an Italian contemporary artist and sculptor who lives and works between Bologna and Milan. Her artistic research focuses on exploring the impact of technology on daily life and human identity. Through the use of traditional materials such as bronze and marble, alongside contemporary technologies like fiber optics and bio-compatible polymers, Tazzari creates works that question the boundaries between natural and artificial, between body and machine. Her wearable sculptures and multimedia installations invite viewers to reflect on the direction of the contemporary world, seeking beauty and poetry in the fractures of our time.",
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
        "exhibitions": [
            {"year": 2024, "event_it": "Biennale di Venezia", "event_en": "Venice Biennale"},
            {"year": 2024, "event_it": "Triennale Milano", "event_en": "Milan Triennale"},
            {"year": 2023, "event_it": "Milano Design Week", "event_en": "Milan Design Week"},
            {"year": 2023, "event_it": "Maxxi Roma - \"Corpi Digitali\"", "event_en": "Maxxi Rome - \"Digital Bodies\""},
            {"year": 2022, "event_it": "Museo del Novecento, Milano", "event_en": "Museum of the Twentieth Century, Milan"},
            {"year": 2022, "event_it": "Galleria d'Arte Moderna, Roma", "event_en": "Gallery of Modern Art, Rome"}
        ],
        "updated_at": datetime.utcnow()
    }
    
    await db.bio.insert_one(bio)
    print("✓ Inserted bio data")
    
    print("\n✅ Database seeding completed successfully!")


if __name__ == "__main__":
    asyncio.run(seed_database())
