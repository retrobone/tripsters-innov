import placeholderImages from './placeholder-images.json';

export type Destination = {
  id: number;
  slug: string;
  name: string;
  country: string;
  description: string;
  longDescription: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  tags: string[];
  imageId: string;
  position: { lat: number; lng: number };
};

export const destinations: Destination[] = [
  {
    id: 1,
    slug: 'paris-france',
    name: 'Paris',
    country: 'France',
    description: 'The city of love, lights, and legendary art.',
    longDescription:
      'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
    rating: 4.8,
    reviews: 1200,
    pricePerNight: 250,
    tags: ['romance', 'art', 'history', 'food'],
    imageId: 'paris',
    position: { lat: 48.8566, lng: 2.3522 },
  },
  {
    id: 2,
    slug: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Ancient temples, sublime gardens, and traditional geishas.',
    longDescription:
      'Kyoto, once the capital of Japan, is a city on the island of Honshu. It\'s famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wood houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.',
    rating: 4.9,
    reviews: 980,
    pricePerNight: 300,
    tags: ['culture', 'history', 'nature'],
    imageId: 'kyoto',
    position: { lat: 35.0116, lng: 135.7681 },
  },
  {
    id: 3,
    slug: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    description: 'Iconic sunsets over whitewashed, blue-domed villages.',
    longDescription:
      'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    rating: 4.9,
    reviews: 1500,
    pricePerNight: 450,
    tags: ['romance', 'beach', 'luxury'],
    imageId: 'santorini',
    position: { lat: 36.3932, lng: 25.4615 },
  },
  {
    id: 4,
    slug: 'bora-bora',
    name: 'Bora Bora',
    country: 'French Polynesia',
    description: 'Luxury overwater bungalows in a turquoise lagoon.',
    longDescription:
      'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving. It’s also a popular luxury resort destination where some guest bungalows are perched over the water on stilts. At the island\'s center rises Mt. Otemanu, a 727m dormant volcano.',
    rating: 4.9,
    reviews: 800,
    pricePerNight: 1200,
    tags: ['luxury', 'beach', 'romance', 'adventure'],
    imageId: 'bora-bora',
    position: { lat: -16.5004, lng: -151.7415 },
  },
  {
    id: 5,
    slug: 'new-york-usa',
    name: 'New York',
    country: 'USA',
    description: 'The city that never sleeps, a melting pot of cultures.',
    longDescription:
      'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
    rating: 4.7,
    reviews: 2500,
    pricePerNight: 350,
    tags: ['city', 'food', 'entertainment'],
    imageId: 'new-york',
    position: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 6,
    slug: 'rome-italy',
    name: 'Rome',
    country: 'Italy',
    description: 'Eternal city of ancient ruins, art, and vibrant street life.',
    longDescription:
      'Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, has St. Peter’s Basilica and the Vatican Museums, which house masterpieces such as Michelangelo’s Sistine Chapel frescoes.',
    rating: 4.8,
    reviews: 1800,
    pricePerNight: 200,
    tags: ['history', 'art', 'food', 'culture'],
    imageId: 'rome',
    position: { lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 7,
    slug: 'shimla-india',
    name: 'Shimla',
    country: 'India',
    description: 'The queen of hill stations with colonial charm.',
    longDescription:
      'Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. It’s also known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing in wooden toys and crafts.',
    rating: 4.6,
    reviews: 950,
    pricePerNight: 80,
    tags: ['hill station', 'history', 'family'],
    imageId: 'shimla',
    position: { lat: 31.1048, lng: 77.1734 },
  },
  {
    id: 8,
    slug: 'goa-india',
    name: 'Goa',
    country: 'India',
    description: 'Sun, sand, and vibrant nightlife on the west coast.',
    longDescription:
      'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.',
    rating: 4.7,
    reviews: 2200,
    pricePerNight: 120,
    tags: ['beach', 'party', 'water sports'],
    imageId: 'goa',
    position: { lat: 15.2993, lng: 74.124 },
  },
  {
    id: 9,
    slug: 'jaipur-india',
    name: 'Jaipur',
    country: 'India',
    description: 'The Pink City, a treasure trove of history and culture.',
    longDescription:
      'Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.',
    rating: 4.8,
    reviews: 1600,
    pricePerNight: 100,
    tags: ['heritage', 'culture', 'royal'],
    imageId: 'jaipur',
    position: { lat: 26.9124, lng: 75.7873 },
  },
  {
    id: 10,
    slug: 'ladakh-india',
    name: 'Ladakh',
    country: 'India',
    description: 'High-altitude desert with breathtaking landscapes.',
    longDescription:
      'Ladakh is a region administered by India as a union territory, and constituting a part of the larger region of Kashmir. It is bordered by Tibet to the east, the Indian state of Himachal Pradesh to the south, Jammu and Kashmir to the west, and the Karakoram Pass to the north. It’s known for its dramatic mountain scenery, Buddhist monasteries, and a vibrant local culture.',
    rating: 4.9,
    reviews: 1100,
    pricePerNight: 150,
    tags: ['adventure', 'mountains', 'culture'],
    imageId: 'ladakh',
    position: { lat: 34.164, lng: 77.585 },
  },
  {
    id: 11,
    slug: 'kerala-india',
    name: 'Kerala',
    country: 'India',
    description: 'God\'s Own Country, famous for its backwaters.',
    longDescription:
      'Kerala, a state on India\'s tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It\'s known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers.',
    rating: 4.8,
    reviews: 1900,
    pricePerNight: 90,
    tags: ['nature', 'backwaters', 'wellness'],
    imageId: 'kerala',
    position: { lat: 10.8505, lng: 76.2711 },
  }
];

export const getImageForDestination = (destination: Destination) => {
  const image = placeholderImages.placeholderImages.find((img) => img.id === destination.imageId);
  return (
    image || {
      imageUrl: 'https://picsum.photos/seed/default/600/400',
      description: 'Default placeholder image',
      imageHint: 'landscape',
    }
  );
};
