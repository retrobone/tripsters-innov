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
