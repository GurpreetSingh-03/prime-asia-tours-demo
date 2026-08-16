export interface VisaDetails {
  overview: string;
  processingTime: string;
  essentials: string[];
  contactNote: string;
}

export interface Destination {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  capital: string;
  language: string;
  currency: string;
  bestTime: string;
  description: string;
  highlights: { title: string; desc: string }[];
  visaInfo: VisaDetails;
  keywords: string[];
  gallery: string[];
}

export const destinationsData: Record<string, Destination> = {
  switzerland: {
    slug: "switzerland",
    title: "Switzerland",
    subtitle: "Experience the Majestic Alps and Alpine Meadows",
    image: "/images/destinations/switzerland/banner.jpg",
    capital: "Bern",
    language: "German, French, Italian, Romansh",
    currency: "Swiss Franc (CHF)",
    bestTime: "June to August (Summer) & December to March (Ski Season)",
    description: "Switzerland is a landlocked country in Central Europe defined by its dramatic alpine peaks, crystalline lakes, and historic cities. Known for its world-class hiking trails, skiing resorts, and scenic railway journeys, it offers pristine natural landscapes alongside highly organized travel infrastructure.",
    highlights: [
      { title: "The Swiss Alps & Matterhorn", desc: "Explore iconic peaks, alpine villages, and Zermatt's car-free streets." },
      { title: "Scenic Rail Journeys", desc: "Ride the Glacier Express or Bernina Express through breathtaking mountain passes." },
      { title: "Pristine Alpine Lakes", desc: "Visit Lake Geneva, Lake Lucerne, and Lake Zurich for scenic boat cruises." }
    ],
    visaInfo: {
      overview: "Switzerland welcomes travelers with smooth entry procedures for global visitors. Entry guidelines vary by passport country, and Prime Asia Tours assists with application guidance for a seamless holiday.",
      processingTime: "Quick assistance & streamlined application guidance available.",
      essentials: [
        "Passport with at least 6 months validity",
        "European Type J/C power adapter",
        "Comfortable footwear for alpine walks & town exploration",
        "Multi-layer clothing for mountain weather changes",
        "Credit or Debit card for cashless payments"
      ],
      contactNote: "Specific visa guidelines, expedited options, and custom documentation requirements vary based on your nationality. Contact our travel specialists directly for complete details tailored to your trip!"
    },
    keywords: ["alps", "matterhorn", "glacier express", "geneva", "lucerne", "zurich", "swiss", "bern", "mountains"],
    gallery: [
      "/images/destinations/switzerland/gallery-1.jpg",
      "/images/destinations/switzerland/gallery-2.jpg",
      "/images/destinations/switzerland/gallery-3.jpg"
    ]
  },
  paris: {
    slug: "paris",
    title: "Beauty of Paris",
    subtitle: "Immerse Yourself in Art, Fashion, and Gastronomy",
    image: "/images/destinations/paris/banner.jpg",
    capital: "Paris (France)",
    language: "French",
    currency: "Euro (EUR)",
    bestTime: "April to June (Spring) & September to October (Autumn)",
    description: "Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond landmarks like the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques.",
    highlights: [
      { title: "The Eiffel Tower & Seine River", desc: "Enjoy panoramic views from the tower and scenic river cruises." },
      { title: "Art and History Museums", desc: "Discover world-famous art collections inside the Louvre and Musée d'Orsay." },
      { title: "Charming Districts", desc: "Stroll through the artistic streets of Montmartre and the historic Marais." }
    ],
    visaInfo: {
      overview: "Planning your dream trip to Paris is easy! Entry procedures depend on your passport origin, and Prime Asia Tours assists you with document preparation and guided visa support.",
      processingTime: "Fast-track processing & document verification provided.",
      essentials: [
        "Passport valid for at least 6 months",
        "European Type C/E plug adapter",
        "Light jacket or umbrella for pleasant Parisian weather",
        "Euros or contactless card payment",
        "Smart casual outfits for dining and museum visits"
      ],
      contactNote: "Entry rules and appointment availability differ depending on your passport country. Reach out to our team directly for customized visa advice and trip support!"
    },
    keywords: ["eiffel tower", "louvre", "seine", "montmartre", "marais", "france", "beauty of paris", "french", "notre-dame"],
    gallery: [
      "/images/destinations/paris/gallery-1.jpg",
      "/images/destinations/paris/gallery-2.jpg",
      "/images/destinations/paris/gallery-3.jpg"
    ]
  },
  "united-states": {
    slug: "united-states",
    title: "United States",
    subtitle: "Explore Vast Landscapes, National Parks, and Iconic Cities",
    image: "/images/destinations/united-states/banner.jpg",
    capital: "Washington, D.C.",
    language: "English (De facto)",
    currency: "US Dollar (USD)",
    bestTime: "Spring (March to May) & Autumn (September to November)",
    description: "The United States of America is a country of 50 states covering a vast swath of North America. It features globally recognized metropolitan hubs alongside iconic natural wonders. From the dynamic streets of New York to the dramatic vistas of the Grand Canyon and Yellowstone National Parks, it offers travelers immense regional diversity.",
    highlights: [
      { title: "The Grand Canyon", desc: "Witness one of the world's most spectacular geological formations in Arizona." },
      { title: "New York City", desc: "Experience Broadway, Central Park, and the iconic Manhattan skyline." },
      { title: "National Park System", desc: "Discover active geysers at Yellowstone or giant sequoias in Yosemite." }
    ],
    visaInfo: {
      overview: "Visiting the USA for holiday is a popular choice for global travelers. Whether you need an ESTA waiver or a tourist visa, our travel team provides step-by-step guidance.",
      processingTime: "Full guidance & application submission assistance.",
      essentials: [
        "Passport valid for at least 6 months beyond travel dates",
        "US Type A/B 2-pin flat power adapter",
        "Digital copies of flight and hotel details",
        "Major credit or debit cards (widely used across the US)",
        "Seasonal apparel tailored to your destination city"
      ],
      contactNote: "Visa appointment slots and ESTA eligibility parameters vary depending on your citizenship. Contact our travel desk to get full assistance for your US trip!"
    },
    keywords: ["new york", "manhattan", "grand canyon", "yellowstone", "yosemite", "usa", "america", "united states", "washington"],
    gallery: [
      "/images/destinations/united-states/gallery-1.jpg",
      "/images/destinations/united-states/gallery-2.jpg",
      "/images/destinations/united-states/gallery-3.jpg"
    ]
  },
  wiesbaden: {
    slug: "wiesbaden",
    title: "Wiesbaden",
    subtitle: "Discover Historic Thermal Springs and the Rhine Valley",
    image: "/images/destinations/wiesbaden/banner.jpg",
    capital: "Wiesbaden (Capital of Hesse, Germany)",
    language: "German",
    currency: "Euro (EUR)",
    bestTime: "May to September (Mild weather and wine festivals)",
    description: "Wiesbaden is one of the oldest spa towns in Europe, famous for its 26 hot springs and architectural heritage. Located on the banks of the Rhine River in Hesse, Germany, it serves as a gateway to the UNESCO-listed Rhine Gorge. The city is renowned for its neoclassical architecture, the historic Kurhaus, and lush parks.",
    highlights: [
      { title: "Historic Kurhaus & Spa Parks", desc: "Stroll through grand architecture and landscaped gardens." },
      { title: "Neroberg Funicular & Opelbad", desc: "Ride the water-ballast railway and swim in the hill-top Opelbad thermal pool." },
      { title: "Rhine River Cruise gateway", desc: "Explore nearby vineyards, historic castles, and scenic riverbanks." }
    ],
    visaInfo: {
      overview: "Wiesbaden is a charming historic spa destination in Germany. Entry procedures are simple, and Prime Asia Tours ensures your travel documents are fully aligned for a relaxing getaway.",
      processingTime: "Guided application support & document review.",
      essentials: [
        "Passport with at least 6 months validity",
        "European Type C/F plug adapter",
        "Comfortable shoes for exploring thermal baths and historic streets",
        "Euros for local cafes and shopping",
        "Light outerwear for Rhine river tours"
      ],
      contactNote: "Specific entry details and customized travel guidelines vary by country of residence. Contact our specialists today to receive full details and assistance!"
    },
    keywords: ["rhine", "kurhaus", "opelbad", "neroberg", "hesse", "germany", "spa town", "hot springs", "castles"],
    gallery: [
      "/images/destinations/wiesbaden/gallery-1.jpg",
      "/images/destinations/wiesbaden/gallery-2.jpg",
      "/images/destinations/wiesbaden/gallery-3.jpg"
    ]
  },
  dubai: {
    slug: "dubai",
    title: "Dubai",
    subtitle: "Where Modern Marvels Meet Arabian Desert Heritage",
    image: "/images/destinations/dubai/banner.jpg",
    capital: "Dubai (United Arab Emirates)",
    language: "Arabic (Official), English widely spoken",
    currency: "UAE Dirham (AED)",
    bestTime: "November to March (Cool winter months)",
    description: "Dubai is a global city and business hub of the Persian Gulf region. Famous for its ultra-modern skyscrapers, luxury shopping malls, and upscale tourist attractions, it seamlessly blends traditional culture with futuristic achievements. Its geographic position makes it a major global travel crossroads.",
    highlights: [
      { title: "Burj Khalifa & Downtown Dubai", desc: "Visit the observation deck of the world's tallest building." },
      { title: "Palm Jumeirah", desc: "Explore the artificial archipelago known for luxury hotels and beach clubs." },
      { title: "Desert Safari Excursions", desc: "Experience dune bashing, camel rides, and traditional bedouin camp dining." }
    ],
    visaInfo: {
      overview: "Dubai offers hassle-free entry for international travelers, with many nationalities receiving free visa-on-arrival or fast online tourist visas processed directly by Prime Asia Tours.",
      processingTime: "Express 24-72 hour visa issuance available.",
      essentials: [
        "Passport valid for at least 6 months from arrival date",
        "UK/UAE Type G 3-pin square power adapter",
        "Lightweight summer clothing and sunglasses",
        "UAE Dirhams (AED) or credit/debit cards",
        "Sunscreen and swim gear for beach resorts & desert safaris"
      ],
      contactNote: "Visa-on-arrival eligibility and 30-day or 60-day tourist visa options depend on your passport. Contact our Dubai team for instant visa processing!"
    },
    keywords: [
      "burj khalifa", "palm jumeirah", "burj al arab", "dubai marina", "dubai mall", "fountain", 
      "aquafun", "deira creekside", "kite beach", "dubai desert", "al mamzar beach park", 
      "sheikh zayed grand mosque", "abu dhabi", "uae", "emirates", "skyscrapers"
    ],
    gallery: [
      "/images/destinations/dubai/gallery-1.jpg",
      "/images/destinations/dubai/gallery-2.jpg",
      "/images/destinations/dubai/gallery-3.jpg"
    ]
  },
  georgia: {
    slug: "georgia",
    title: "Georgia",
    subtitle: "Journey Through High Caucasus Peaks and Ancient Towns",
    image: "/images/destinations/georgia/banner.jpg",
    capital: "Tbilisi",
    language: "Georgian",
    currency: "Georgian Lari (GEL)",
    bestTime: "May to June & September to October (Mild and pleasant)",
    description: "Georgia lies at the intersection of Eastern Europe and Western Asia, situated in the Caucasus region. It features a diverse topography including high alpine mountain ranges, historic churches, and rolling vineyards. Tbilisi, its capital, features a picturesque Old Town with sulfur bath houses and cobblestone streets.",
    highlights: [
      { title: "Tbilisi Old Town", desc: "Stroll through historic winding streets, sulfur baths, and Narikala Fortress." },
      { title: "Gergeti Trinity Church", desc: "Visit the iconic 14th-century church nestled beneath Mount Kazbek." },
      { title: "Signagi & Kakheti Wine Region", desc: "Discover ancient clay jar (Qvevri) wine-making traditions." }
    ],
    visaInfo: {
      overview: "Georgia is famous for its warm hospitality and easy entry policies for travelers worldwide. Prime Asia Tours helps you prepare everything needed for an unforgettable Caucasus holiday.",
      processingTime: "Quick assistance & entry verification.",
      essentials: [
        "Passport valid for at least 6 months",
        "European Type C/F 2-pin power adapter",
        "Warm layers for Caucasus mountain excursions",
        "Georgian Lari (GEL) or international cards",
        "Camera for historic mountain monasteries"
      ],
      contactNote: "Visa exemption rules (including valid GCC or Schengen visa exemptions) depend on your passport. Contact our team to check your specific entry status!"
    },
    keywords: ["tbilisi", "gergeti", "kazbek", "kakheti", "signagi", "caucasus", "monasteries", "old town"],
    gallery: [
      "/images/destinations/georgia/gallery-1.jpg",
      "/images/destinations/georgia/gallery-2.jpg",
      "/images/destinations/georgia/gallery-3.jpg"
    ]
  },
  morocco: {
    slug: "morocco",
    title: "Morocco",
    subtitle: "Discover Vibrant Medinas, Spices, and Sahara Dunes",
    image: "/images/destinations/morocco/banner.jpg",
    capital: "Rabat",
    language: "Arabic, Berber (Official), French widely used",
    currency: "Moroccan Dirham (MAD)",
    bestTime: "March to May (Spring) & September to November (Autumn)",
    description: "Morocco is a North African country bordering the Atlantic Ocean and Mediterranean Sea. It is distinguished by its Arabian, Berber, and European cultural influences. Vibrant medieval medinas like Marrakesh and Fes, grand palaces, scenic Atlas Mountains, and the sweeping Sahara desert make it a sensory-rich travel destination.",
    highlights: [
      { title: "Marrakesh Medina & Jemaa el-Fnaa", desc: "Navigate bustling souks, street performers, and aromatic spice stalls." },
      { title: "Sahara Desert Dunes (Merzouga)", desc: "Ride camels and sleep under the stars in a traditional desert camp." },
      { title: "Chefchaouen (The Blue City)", desc: "Wander through the striking blue-washed streets of the Rif mountains." }
    ],
    visaInfo: {
      overview: "Experience the magic of Morocco with smooth travel planning. Prime Asia Tours guides you through easy entry guidelines for a stress-free North African vacation.",
      processingTime: "Personalized travel advice & visa support.",
      essentials: [
        "Passport valid for at least 6 months",
        "European Type C/E plug adapter",
        "Breathable cotton clothing for desert & medina tours",
        "Moroccan Dirham (MAD) for local market shopping",
        "Hat, sunglasses, and scarf for desert excursions"
      ],
      contactNote: "Entry guidelines, e-Visa eligibility, and application parameters depend on your country of citizenship. Contact our specialists for full personalized guidance!"
    },
    keywords: ["marrakesh", "sahara", "chefchaouen", "fes", "atlas", "rabat", "medina", "spices", "desert"],
    gallery: [
      "/images/destinations/morocco/gallery-1.jpg",
      "/images/destinations/morocco/gallery-2.jpg",
      "/images/destinations/morocco/gallery-3.jpg"
    ]
  }
};
