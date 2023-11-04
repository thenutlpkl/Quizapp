export type Quiz = {
  question: string;
  options: string[];
  correctOption: number;
  hint: string;
};

const QUIZ_DATA: Quiz[] = [
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Berlin",
      "Madrid",
      "Rome"
    ],
    "correctOption": 0,
    "hint": "The Eiffel Tower is a famous landmark in this city."
  },
  {
    "question": "What is the largest country in the world?",
    "options": [
      "Canada",
      "China",
      "Russia",
      "USA"
    ],
    "correctOption": 2,
    "hint": "It spans over 11 time zones and covers about 1/8 of the world's land area."
  },
  {
    "question": "What is the currency of Japan?",
    "options": [
      "Dollar",
      "Euro",
      "Yen",
      "Pound"
    ],
    "correctOption": 2,
    "hint": "It is abbreviated as JPY."
  },
  {
    "question": "What is the smallest country in the world?",
    "options": [
      "San Marino",
      "Vatican City",
      "Monaco",
      "Liechtenstein"
    ],
    "correctOption": 1,
    "hint": "It is an independent city-state located within Rome, Italy."
  },
  {
    "question": "What is the highest mountain in the world?",
    "options": [
      "Mt. Kilimanjaro",
      "Mt. Everest",
      "Mt. McKinley",
      "Mt. Fuji"
    ],
    "correctOption": 1,
    "hint": "It is located in the Himalayas and its peak is 29,029 feet (8,848 meters) above sea level."
  },
  {    "question": "What is the currency of Brazil?",    "options": [      "Real",      "Peso",      "Dollar",      "Euro"    ],
    "correctOption": 0,
    "hint": "It is abbreviated as BRL."
  },
  {
    "question": "What is the national animal of Australia?",
    "options": [
      "Kangaroo",
      "Koala",
      "Emu",
      "Tasmanian Devil"
    ],
    "correctOption": 0,
    "hint": "It is known for its powerful hind legs and jumping ability."
  },
  {
    "question": "What is the world's largest ocean?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOption": 3,
    "hint": "It covers about one-third of the Earth's surface."
  },
  {
    "question": "What is the name of the highest waterfall in the world?",
    "options": [
      "Niagara Falls",
      "Victoria Falls",
      "Angel Falls",
      "Iguazu Falls"
    ],
    "correctOption": 2,
    "hint": "It is located in Venezuela and has a total height of 3,212 feet (979 meters)."
  },
  {
    "question": "What is the name of the longest river in Africa?",
    "options": [
      "Congo River",
      "Nile River",
      "Zambezi River",
      "Orange River"
    ],
    "correctOption": 1,
    "hint": "It flows northward through northeastern Africa and has a total length of about 4,160 miles (6,695 kilometers)."
  },
  {    "question": "What is the tallest animal in the world?",    "options": [      "Giraffe",      "Elephant",      "Hippopotamus",      "Rhino"    ],
    "correctOption": 0,
    "hint": "It has a long neck and legs."
  },
  {
    "question": "Which planet in our solar system is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn"
    ],
    "correctOption": 1,
    "hint": "It is the fourth planet from the sun and is often visible in the night sky."
  },
  {
    "question": "What is the largest organ in the human body?",
    "options": [
      "Heart",
      "Liver",
      "Skin",
      "Brain"
    ],
    "correctOption": 2,
    "hint": "It covers the entire body and protects it from external damage."
  },
  {
    "question": "Which sport is known as the 'King of Sports'?",
    "options": [
      "Soccer",
      "Basketball",
      "Football",
      "Cricket"
    ],
    "correctOption": 3,
    "hint": "It is played with a bat and ball, and is very popular in countries like India, Australia, and England."
  },
  {
    "question": "Who wrote the famous novel 'To Kill a Mockingbird'?",
    "options": [
      "Ernest Hemingway",
      "Harper Lee",
      "F. Scott Fitzgerald",
      "J.D. Salinger"
    ],
    "correctOption": 1,
    "hint": "The novel was published in 1960 and deals with issues of racial inequality and injustice in the American South."
  },
  {    "question": "What type of cuisine is known for its use of spicy peppers and citrus fruits?",    "options": [      "Mexican",      "Italian",      "French",      "Chinese"    ],
    "correctOption": 0,
    "hint": "Some popular dishes include tacos, enchiladas, and guacamole."
  },
  {
    "question": "What is the national dish of Japan?",
    "options": [
      "Sushi",
      "Ramen",
      "Tempura",
      "Miso Soup"
    ],
    "correctOption": 0,
    "hint": "It typically consists of rice and raw fish, and is often served with soy sauce and wasabi."
  },
  {
    "question": "What is the most popular type of cheese in the world?",
    "options": [
      "Cheddar",
      "Brie",
      "Mozzarella",
      "Gouda"
    ],
    "correctOption": 2,
    "hint": "It is often used in Italian cuisine and is known for its stretchy texture when melted."
  },
  {
    "question": "What is the national fruit of India?",
    "options": [
      "Mango",
      "Banana",
      "Papaya",
      "Kiwi"
    ],
    "correctOption": 0,
    "hint": "It is a sweet and juicy fruit that is often used in Indian desserts and drinks."
  },
  {
    "question": "What is the main ingredient in hummus?",
    "options": [
      "Chickpeas",
      "Lentils",
      "Black beans",
      "Pinto beans"
    ],
    "correctOption": 0,
    "hint": "It is a dip or spread that is popular in Middle Eastern cuisine and is often served with pita bread."
  },
  {    "question": "What is the largest living structure on Earth?",    "options": [      "Great Barrier Reef",      "Gulf Stream",      "Amazon Rainforest",      "Mount Everest"    ],
    "correctOption": 0,
    "hint": "It is located off the coast of Australia and is composed of thousands of individual reefs and hundreds of islands."
  },
  {
    "question": "What is the deepest point in the ocean?",
    "options": [
      "Mariana Trench",
      "Puerto Rico Trench",
      "Tonga Trench",
      "Kermadec Trench"
    ],
    "correctOption": 0,
    "hint": "It is located in the western Pacific Ocean and reaches a depth of about 36,070 feet (10,994 meters)."
  },
  {
    "question": "What is the name of the warm ocean current that flows along the east coast of North America?",
    "options": [
      "Gulf Stream",
      "California Current",
      "Canary Current",
      "Kuroshio Current"
    ],
    "correctOption": 0,
    "hint": "It is a swift, warm current that originates in the Gulf of Mexico and flows northward."
  },
  {
    "question": "What is the name of the phenomenon that causes warm water in the Pacific Ocean to shift towards the coast of South America?",
    "options": [
      "El Niño",
      "La Niña",
      "Typhoon",
      "Hurricane"
    ],
    "correctOption": 0,
    "hint": "It occurs every few years and can have significant effects on weather patterns around the world."
  },
  {
    "question": "What is the name of the ocean current that flows clockwise around Antarctica?",
    "options": [
      "Antarctic Circumpolar Current",
      "Peru Current",
      "Benguela Current",
      "Agulhas Current"
    ],
    "correctOption": 0,
    "hint": "It is the largest ocean current in the world and plays an important role in regulating the Earth's climate."
  },
  {
    "question": "What is the name of the fire-breathing dragon in J.R.R. Tolkien's 'The Hobbit'?",
    "options": [
      "Smaug",
      "Fafnir",
      "Chrysophylax",
      "Glaurung"
    ],
    "correctOption": 0,
    "hint": "It is a fierce and powerful dragon that guards a hoard of treasure in the Lonely Mountain."
  },
  {
    "question": "What is the name of the giant spider that lives in Mirkwood Forest in J.R.R. Tolkien's 'The Hobbit'?",
    "options": [
      "Shelob",
      "Arachne",
      "Ungoliant",
      "Giant Spider"
    ],
    "correctOption": 3,
    "hint": "It is a giant spider that captures Bilbo and his companions in its web."
  },
  {
    "question": "What is the name of the three-headed dog that guards the entrance to the underworld in Greek mythology?",
    "options": [
      "Cerberus",
      "Orthrus",
      "Garmr",
      "Fenrir"
    ],
    "correctOption": 0,
    "hint": "It is a fierce and terrifying creature that allows the dead to enter the underworld but does not let them leave."
  },
  {
    "question": "What is the name of the giant squid-like monster in Jules Verne's '20,000 Leagues Under the Sea'?",
    "options": [
      "Kraken",
      "Leviathan",
      "Cthulhu",
      "Moby Dick"
    ],
    "correctOption": 1,
    "hint": "It is a massive sea monster that attacks the Nautilus and its crew."
  },
  {
    "question": "What is the name of the shape-shifting monster in Greek mythology that terrorizes travelers?",
    "options": [
      "Charybdis",
      "Scylla",
      "Siren",
      "Harpy"
    ],
    "correctOption": 1,
    "hint": "It has multiple heads and is often depicted as a sea monster with tentacles and sharp teeth."
  },
  {
    "question": "What is the name of the giant ape-like creature in 'King Kong'?",
    "options": [
      "Megalodon",
      "Godzilla",
      "Gamera",
      "Kong"
    ],
    "correctOption": 3,
    "hint": "It is a massive gorilla that is brought to New York City and climbs the Empire State Building."
  },
  {
    "question": "What is the name of the monstrous bird in Arabian mythology that is so large it can carry off an elephant?",
    "options": [
      "Roc",
      "Phoenix",
      "Thunderbird",
      "Hippogriff"
    ],
    "correctOption": 0,
    "hint": "It is a legendary bird of prey that appears in stories from the Middle East and is often depicted as being able to carry off entire ships."
  },
{
  "question": "What is the first thing you should do if you are lost in the wilderness?",
  "options": [
    "Stay where you are",
    "Keep moving",
    "Yell for help",
    "Find water"
  ],
  "correctOption": 0,
  "hint": "This increases the likelihood of being found by search and rescue teams."
},
{
  "question": "What is the best way to purify water in the wild?",
  "options": [
    "Boiling",
    "Adding iodine tablets",
    "Using a water filter",
    "All of the above"
  ],
  "correctOption": 3,
  "hint": "Each of these methods has its advantages and disadvantages."
},
{
  "question": "What is the main ingredient in gunpowder?",
  "options": [
    "Saltpeter",
    "Sulfur",
    "Charcoal",
    "All of the above"
  ],
  "correctOption": 3,
  "hint": "It was first used in ancient China for fireworks and later for firearms."
},
{
  "question": "What is the term for the fear of enclosed spaces?",
  "options": [
    "Acrophobia",
    "Agoraphobia",
    "Claustrophobia",
    "Xenophobia"
  ],
  "correctOption": 2,
  "hint": "This can be a debilitating phobia for some people."
},
{
  "question": "What is the most important tool to have in a survival situation?",
  "options": [
    "Knife",
    "Flint",
    "Water filter",
    "Compass"
  ],
  "correctOption": 1,
  "hint": "This can be used to start a fire, which can provide warmth, light, and a means to cook food."
},
{    "question": "What is the largest Native American reservation in the United States?",    "options": [      "Navajo Nation",      "Blackfeet Reservation",      "Crow Reservation",      "Standing Rock Indian Reservation"    ],
    "correctOption": 0,
    "hint": "It covers parts of Arizona, New Mexico, and Utah, with a total area of over 27,000 square miles."
  },
  {
    "question": "Which Native American tribe is known for building homes called hogans?",
    "options": [
      "Navajo",
      "Hopi",
      "Cherokee",
      "Sioux"
    ],
    "correctOption": 0,
    "hint": "These homes are typically made of logs, sticks, and mud, and have a unique, rounded shape."
  },
  {
    "question": "What was the Trail of Tears?",
    "options": [
      "Forced relocation of Native American tribes in the 19th century",
      "A famous Native American battle",
      "The name of a Native American reservation",
      "A traditional Native American dance"
    ],
    "correctOption": 0,
    "hint": "It refers to the forced relocation of several Native American tribes from their ancestral lands in the southeastern United States to Indian Territory in present-day Oklahoma."
  },
  {
    "question": "Which Native American tribe is known for creating intricate basketry?",
    "options": [
      "Hupa",
      "Lakota",
      "Mohawk",
      "Seminole"
    ],
    "correctOption": 0,
    "hint": "Their baskets are woven using a variety of materials, such as willow, hazel, and redbud, and often feature complex designs and patterns."
  },
  {
    "question": "Which Native American tribe is known for building totem poles?",
    "options": [
      "Tlingit",
      "Comanche",
      "Inuit",
      "Yakama"
    ],
    "correctOption": 0,
    "hint": "Their totem poles are large, carved wooden poles that are often used to depict family history, clan lineage, and spiritual beliefs."
  }



];

export default QUIZ_DATA;