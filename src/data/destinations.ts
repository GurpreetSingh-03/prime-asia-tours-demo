export interface VisaDetails {
  requirements: string;
  processingTime: string;
  requiredDocuments: string[];
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
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1920&q=90",
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
      requirements: "Nationals from non-Schengen countries generally require a Schengen Visa (Type C) for short stays up to 90 days. Exemptions apply for various nationalities.",
      processingTime: "Typically 15 calendar days from the date of application submission.",
      requiredDocuments: [
        "Completed Schengen Visa application form",
        "Valid passport (minimum 3 months validity beyond planned stay)",
        "Two recent passport-sized photographs",
        "Round-trip flight itineraries and proof of accommodation",
        "Travel medical insurance covering at least EUR 30,000",
        "Recent bank statements showing sufficient funds"
      ]
    },
    keywords: ["alps", "matterhorn", "glacier express", "geneva", "lucerne", "zurich", "swiss", "bern", "mountains"],
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1920&q=90"
    ]
  },
  paris: {
    slug: "paris",
    title: "Beauty of Paris",
    subtitle: "Immerse Yourself in Art, Fashion, and Gastronomy",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=90",
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
      requirements: "France is part of the Schengen Zone. Non-exempt passport holders must secure a French Schengen Visa. Visa requirements depend on the traveler's passport country.",
      processingTime: "Usually processed within 10 to 15 working days, depending on seasonal volume.",
      requiredDocuments: [
        "Schengen Visa application form",
        "Passport with at least two blank pages",
        "Travel itinerary (flight and hotel bookings)",
        "Schengen-compliant travel health insurance",
        "Proof of financial subsistence (bank statements)",
        "Employment letter or proof of business ownership"
      ]
    },
    keywords: ["eiffel tower", "louvre", "seine", "montmartre", "marais", "france", "beauty of paris", "french", "notre-dame"],
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1920&q=90"
    ]
  },
  "united-states": {
    slug: "united-states",
    title: "United States",
    subtitle: "Explore Vast Landscapes, National Parks, and Iconic Cities",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=1920&q=90",
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
      requirements: "Non-US citizens require a valid visa (B1/B2 tourist visa) unless qualifying for the Visa Waiver Program (VWP) via the Electronic System for Travel Authorization (ESTA).",
      processingTime: "Varies significantly by consulate location (ESTA takes up to 72 hours; tourist visa interviews can take weeks to schedule).",
      requiredDocuments: [
        "Form DS-160 confirmation page (for non-waiver applicants)",
        "Valid passport and visa application fee payment receipt",
        "Proof of ties to home country (employment, property)",
        "Travel itinerary details",
        "Financial statements demonstrating trip funding"
      ]
    },
    keywords: ["new york", "manhattan", "grand canyon", "yellowstone", "yosemite", "usa", "america", "united states", "washington"],
    gallery: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=90"
    ]
  },
  wiesbaden: {
    slug: "wiesbaden",
    title: "Wiesbaden",
    subtitle: "Discover Historic Thermal Springs and the Rhine Valley",
    image: "https://images.unsplash.com/photo-1595844730298-b959547909fe?auto=format&fit=crop&w=1920&q=90",
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
      requirements: "Germany is a Schengen Area member state. Non-exempt international travelers must obtain a Schengen Visa. Requirements are subject to the applicant's nationality.",
      processingTime: "Typically takes 10 to 15 business days following application submission.",
      requiredDocuments: [
        "Schengen visa application form",
        "Valid passport",
        "Travel health insurance coverage of at least €30,000",
        "Flight ticket and accommodation bookings",
        "Proof of financial solvency (3 months bank statements)",
        "Proof of employment or study status"
      ]
    },
    keywords: ["rhine", "kurhaus", "opelbad", "neroberg", "hesse", "germany", "spa town", "hot springs", "castles"],
    gallery: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=90"
    ]
  },
  dubai: {
    slug: "dubai",
    title: "Dubai",
    subtitle: "Where Modern Marvels Meet Arabian Desert Heritage",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=90",
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
      requirements: "Over 70 nationalities qualify for a free visa-on-arrival or visa-free entry. Other nationalities must secure a pre-arranged tourist visa sponsored by agencies.",
      processingTime: "Pre-arranged tourist visas take approximately 3 to 5 working days.",
      requiredDocuments: [
        "Color copy of passport biodata page (valid for minimum 6 months)",
        "Passport-sized photograph with white background",
        "Confirmed return flight tickets",
        "Proof of hotel booking or host accommodation"
      ]
    },
    keywords: [
      "burj khalifa", "palm jumeirah", "burj al arab", "dubai marina", "dubai mall", "fountain", 
      "aquafun", "deira creekside", "kite beach", "dubai desert", "al mamzar beach park", 
      "sheikh zayed grand mosque", "abu dhabi", "uae", "emirates", "skyscrapers"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=1920&q=90"
    ]
  },
  georgia: {
    slug: "georgia",
    title: "Georgia",
    subtitle: "Journey Through High Caucasus Peaks and Ancient Towns",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1920&q=90",
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
      requirements: "Citizens of over 90 countries can enter Georgia visa-free for up to one full year. Valid residence permits or visas from Schengen countries, UAE, and GCC allow visa-free entry.",
      processingTime: "For nationalities requiring e-Visas, processing is usually completed in 5 working days.",
      requiredDocuments: [
        "Valid passport with at least 6 months validity",
        "Completed e-Visa application form (if applicable)",
        "Proof of accommodation and return flights",
        "Travel health insurance",
        "Sufficient financial means verification"
      ]
    },
    keywords: ["tbilisi", "gergeti", "kazbek", "kakheti", "signagi", "caucasus", "monasteries", "old town"],
    gallery: [
      "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1561542320-9a18cd340469?auto=format&fit=crop&w=1920&q=90"
    ]
  },
  morocco: {
    slug: "morocco",
    title: "Morocco",
    subtitle: "Discover Vibrant Medinas, Spices, and Sahara Dunes",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1920&q=90",
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
      requirements: "Citizens of several countries (including US, EU, GCC, and others) can enter Morocco visa-free for up to 90 days. Other passport holders must apply for a tourist visa.",
      processingTime: "Tourist visa processing takes approximately 10 to 15 working days.",
      requiredDocuments: [
        "Visa application form",
        "Passport valid for at least 90 days past entry date",
        "Photocopy of passport pages",
        "Confirmed flight reservation",
        "Hotel booking confirmation or certified invitation letter",
        "Proof of professional income and bank statements"
      ]
    },
    keywords: ["marrakesh", "sahara", "chefchaouen", "fes", "atlas", "rabat", "medina", "spices", "desert"],
    gallery: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=90",
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1920&q=90"
    ]
  }
};
