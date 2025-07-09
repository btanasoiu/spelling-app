// Word databases for different languages
const wordDatabases = {
    english: [
        {
            word: "apple",
            options: [
                { emoji: "🍎", label: "Apple" },
                { emoji: "🍌", label: "Banana" },
                { emoji: "🍊", label: "Orange" },
                { emoji: "🍇", label: "Grapes" }
            ],
            correct: 0
        },
        {
            word: "cat",
            options: [
                { emoji: "🐶", label: "Dog" },
                { emoji: "🐱", label: "Cat" },
                { emoji: "🐰", label: "Rabbit" },
                { emoji: "🐭", label: "Mouse" }
            ],
            correct: 1
        },
        {
            word: "sun",
            options: [
                { emoji: "🌙", label: "Moon" },
                { emoji: "⭐", label: "Star" },
                { emoji: "☀️", label: "Sun" },
                { emoji: "☁️", label: "Cloud" }
            ],
            correct: 2
        },
        {
            word: "car",
            options: [
                { emoji: "🚗", label: "Car" },
                { emoji: "🚲", label: "Bike" },
                { emoji: "✈️", label: "Plane" },
                { emoji: "🚂", label: "Train" }
            ],
            correct: 0
        },
        {
            word: "tree",
            options: [
                { emoji: "🌸", label: "Flower" },
                { emoji: "🌱", label: "Plant" },
                { emoji: "🌳", label: "Tree" },
                { emoji: "🌿", label: "Leaf" }
            ],
            correct: 2
        },
        {
            word: "fish",
            options: [
                { emoji: "🐠", label: "Fish" },
                { emoji: "🦋", label: "Butterfly" },
                { emoji: "🐛", label: "Bug" },
                { emoji: "🐸", label: "Frog" }
            ],
            correct: 0
        },
        {
            word: "ball",
            options: [
                { emoji: "📚", label: "Book" },
                { emoji: "⚽", label: "Ball" },
                { emoji: "🎈", label: "Balloon" },
                { emoji: "🎁", label: "Gift" }
            ],
            correct: 1
        },
        {
            word: "house",
            options: [
                { emoji: "🏠", label: "House" },
                { emoji: "🏫", label: "School" },
                { emoji: "🏪", label: "Store" },
                { emoji: "🏥", label: "Hospital" }
            ],
            correct: 0
        },
        {
            word: "dog",
            options: [
                { emoji: "🐶", label: "Dog" },
                { emoji: "🐱", label: "Cat" },
                { emoji: "🐰", label: "Rabbit" },
                { emoji: "🐭", label: "Mouse" }
            ],
            correct: 0
        },
        {
            word: "book",
            options: [
                { emoji: "📚", label: "Book" },
                { emoji: "📝", label: "Paper" },
                { emoji: "✏️", label: "Pencil" },
                { emoji: "📏", label: "Ruler" }
            ],
            correct: 0
        },
        {
            word: "cake",
            options: [
                { emoji: "🍰", label: "Cake" },
                { emoji: "🍪", label: "Cookie" },
                { emoji: "🍩", label: "Donut" },
                { emoji: "🧁", label: "Cupcake" }
            ],
            correct: 0
        },
        {
            word: "bird",
            options: [
                { emoji: "🐦", label: "Bird" },
                { emoji: "🦋", label: "Butterfly" },
                { emoji: "🐛", label: "Bug" },
                { emoji: "🐸", label: "Frog" }
            ],
            correct: 0
        },
        {
            word: "flower",
            options: [
                { emoji: "🌸", label: "Flower" },
                { emoji: "🌱", label: "Plant" },
                { emoji: "🌳", label: "Tree" },
                { emoji: "🌿", label: "Leaf" }
            ],
            correct: 0
        },
        {
            word: "moon",
            options: [
                { emoji: "🌙", label: "Moon" },
                { emoji: "⭐", label: "Star" },
                { emoji: "☀️", label: "Sun" },
                { emoji: "☁️", label: "Cloud" }
            ],
            correct: 0
        },
        {
            word: "heart",
            options: [
                { emoji: "❤️", label: "Heart" },
                { emoji: "⭐", label: "Star" },
                { emoji: "💎", label: "Diamond" },
                { emoji: "🌟", label: "Sparkle" }
            ],
            correct: 0
        }
    ],
    romanian: [
        {
            word: "măr",
            options: [
                { emoji: "🍎", label: "Măr" },
                { emoji: "🍌", label: "Banană" },
                { emoji: "🍊", label: "Portocală" },
                { emoji: "🍇", label: "Struguri" }
            ],
            correct: 0
        },
        {
            word: "pisică",
            options: [
                { emoji: "🐶", label: "Câine" },
                { emoji: "🐱", label: "Pisică" },
                { emoji: "🐰", label: "Iepure" },
                { emoji: "🐭", label: "Șoarece" }
            ],
            correct: 1
        },
        {
            word: "soare",
            options: [
                { emoji: "🌙", label: "Lună" },
                { emoji: "⭐", label: "Stea" },
                { emoji: "☀️", label: "Soare" },
                { emoji: "☁️", label: "Nor" }
            ],
            correct: 2
        },
        {
            word: "mașină",
            options: [
                { emoji: "🚗", label: "Mașină" },
                { emoji: "🚲", label: "Bicicletă" },
                { emoji: "✈️", label: "Avion" },
                { emoji: "🚂", label: "Tren" }
            ],
            correct: 0
        },
        {
            word: "copac",
            options: [
                { emoji: "🌸", label: "Floare" },
                { emoji: "🌱", label: "Plantă" },
                { emoji: "🌳", label: "Copac" },
                { emoji: "🌿", label: "Frunză" }
            ],
            correct: 2
        },
        {
            word: "pește",
            options: [
                { emoji: "🐠", label: "Pește" },
                { emoji: "🦋", label: "Fluture" },
                { emoji: "🐛", label: "Insectă" },
                { emoji: "🐸", label: "Broască" }
            ],
            correct: 0
        },
        {
            word: "minge",
            options: [
                { emoji: "📚", label: "Carte" },
                { emoji: "⚽", label: "Minge" },
                { emoji: "🎈", label: "Balon" },
                { emoji: "🎁", label: "Cadou" }
            ],
            correct: 1
        },
        {
            word: "casă",
            options: [
                { emoji: "🏠", label: "Casă" },
                { emoji: "🏫", label: "Școală" },
                { emoji: "🏪", label: "Magazin" },
                { emoji: "🏥", label: "Spital" }
            ],
            correct: 0
        },
        {
            word: "câine",
            options: [
                { emoji: "🐶", label: "Câine" },
                { emoji: "🐱", label: "Pisică" },
                { emoji: "🐰", label: "Iepure" },
                { emoji: "🐭", label: "Șoarece" }
            ],
            correct: 0
        },
        {
            word: "carte",
            options: [
                { emoji: "📚", label: "Carte" },
                { emoji: "📝", label: "Hârtie" },
                { emoji: "✏️", label: "Creion" },
                { emoji: "📏", label: "Riglă" }
            ],
            correct: 0
        },
        {
            word: "tort",
            options: [
                { emoji: "🍰", label: "Tort" },
                { emoji: "🍪", label: "Biscuit" },
                { emoji: "🍩", label: "Gogoașă" },
                { emoji: "🧁", label: "Brioșă" }
            ],
            correct: 0
        },
        {
            word: "pasăre",
            options: [
                { emoji: "🐦", label: "Pasăre" },
                { emoji: "🦋", label: "Fluture" },
                { emoji: "🐛", label: "Insectă" },
                { emoji: "🐸", label: "Broască" }
            ],
            correct: 0
        },
        {
            word: "floare",
            options: [
                { emoji: "🌸", label: "Floare" },
                { emoji: "🌱", label: "Plantă" },
                { emoji: "🌳", label: "Copac" },
                { emoji: "🌿", label: "Frunză" }
            ],
            correct: 0
        },
        {
            word: "lună",
            options: [
                { emoji: "🌙", label: "Lună" },
                { emoji: "⭐", label: "Stea" },
                { emoji: "☀️", label: "Soare" },
                { emoji: "☁️", label: "Nor" }
            ],
            correct: 0
        },
        {
            word: "inimă",
            options: [
                { emoji: "❤️", label: "Inimă" },
                { emoji: "⭐", label: "Stea" },
                { emoji: "💎", label: "Diamant" },
                { emoji: "🌟", label: "Sclipire" }
            ],
            correct: 0
        }
    ],
    german: [
        {
            word: "apfel",
            options: [
                { emoji: "🍎", label: "Apfel" },
                { emoji: "🍌", label: "Banane" },
                { emoji: "🍊", label: "Orange" },
                { emoji: "🍇", label: "Trauben" }
            ],
            correct: 0
        },
        {
            word: "katze",
            options: [
                { emoji: "🐶", label: "Hund" },
                { emoji: "🐱", label: "Katze" },
                { emoji: "🐰", label: "Hase" },
                { emoji: "🐭", label: "Maus" }
            ],
            correct: 1
        },
        {
            word: "sonne",
            options: [
                { emoji: "🌙", label: "Mond" },
                { emoji: "⭐", label: "Stern" },
                { emoji: "☀️", label: "Sonne" },
                { emoji: "☁️", label: "Wolke" }
            ],
            correct: 2
        },
        {
            word: "auto",
            options: [
                { emoji: "🚗", label: "Auto" },
                { emoji: "🚲", label: "Fahrrad" },
                { emoji: "✈️", label: "Flugzeug" },
                { emoji: "🚂", label: "Zug" }
            ],
            correct: 0
        },
        {
            word: "baum",
            options: [
                { emoji: "🌸", label: "Blume" },
                { emoji: "🌱", label: "Pflanze" },
                { emoji: "🌳", label: "Baum" },
                { emoji: "🌿", label: "Blatt" }
            ],
            correct: 2
        },
        {
            word: "fisch",
            options: [
                { emoji: "🐠", label: "Fisch" },
                { emoji: "🦋", label: "Schmetterling" },
                { emoji: "🐛", label: "Käfer" },
                { emoji: "🐸", label: "Frosch" }
            ],
            correct: 0
        },
        {
            word: "ball",
            options: [
                { emoji: "📚", label: "Buch" },
                { emoji: "⚽", label: "Ball" },
                { emoji: "🎈", label: "Ballon" },
                { emoji: "🎁", label: "Geschenk" }
            ],
            correct: 1
        },
        {
            word: "haus",
            options: [
                { emoji: "🏠", label: "Haus" },
                { emoji: "🏫", label: "Schule" },
                { emoji: "🏪", label: "Geschäft" },
                { emoji: "🏥", label: "Krankenhaus" }
            ],
            correct: 0
        },
        {
            word: "hund",
            options: [
                { emoji: "🐶", label: "Hund" },
                { emoji: "🐱", label: "Katze" },
                { emoji: "🐰", label: "Hase" },
                { emoji: "🐭", label: "Maus" }
            ],
            correct: 0
        },
        {
            word: "buch",
            options: [
                { emoji: "📚", label: "Buch" },
                { emoji: "📝", label: "Papier" },
                { emoji: "✏️", label: "Bleistift" },
                { emoji: "📏", label: "Lineal" }
            ],
            correct: 0
        },
        {
            word: "kuchen",
            options: [
                { emoji: "🍰", label: "Kuchen" },
                { emoji: "🍪", label: "Keks" },
                { emoji: "🍩", label: "Donut" },
                { emoji: "🧁", label: "Törtchen" }
            ],
            correct: 0
        },
        {
            word: "vogel",
            options: [
                { emoji: "🐦", label: "Vogel" },
                { emoji: "🦋", label: "Schmetterling" },
                { emoji: "🐛", label: "Käfer" },
                { emoji: "🐸", label: "Frosch" }
            ],
            correct: 0
        },
        {
            word: "blume",
            options: [
                { emoji: "🌸", label: "Blume" },
                { emoji: "🌱", label: "Pflanze" },
                { emoji: "🌳", label: "Baum" },
                { emoji: "🌿", label: "Blatt" }
            ],
            correct: 0
        },
        {
            word: "mond",
            options: [
                { emoji: "🌙", label: "Mond" },
                { emoji: "⭐", label: "Stern" },
                { emoji: "☀️", label: "Sonne" },
                { emoji: "☁️", label: "Wolke" }
            ],
            correct: 0
        },
        {
            word: "herz",
            options: [
                { emoji: "❤️", label: "Herz" },
                { emoji: "⭐", label: "Stern" },
                { emoji: "💎", label: "Diamant" },
                { emoji: "🌟", label: "Funkeln" }
            ],
            correct: 0
        }
    ]
};