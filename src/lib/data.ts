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
  category: string;
  tags: string[];
  imageId: string;
  position: { lat: number; lng: number };
};

export const destinations: Destination[] = [
  {
    id: 1,
    slug: 'shimla-india',
    name: 'Shimla',
    country: 'India',
    description: 'The queen of hill stations with colonial charm.',
    longDescription:
      'Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. It’s also known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing in wooden toys and crafts.',
    rating: 4.6,
    reviews: 950,
    pricePerNight: 80,
    category: 'Hill Station',
    tags: ['history', 'family'],
    imageId: 'shimla',
    position: { lat: 31.1048, lng: 77.1734 },
  },
  {
    id: 2,
    slug: 'goa-india',
    name: 'Goa',
    country: 'India',
    description: 'Sun, sand, and vibrant nightlife on the west coast.',
    longDescription:
      'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.',
    rating: 4.7,
    reviews: 2200,
    pricePerNight: 120,
    category: 'Beach',
    tags: ['party', 'water sports'],
    imageId: 'goa',
    position: { lat: 15.2993, lng: 74.124 },
  },
  {
    id: 3,
    slug: 'jaipur-india',
    name: 'Jaipur',
    country: 'India',
    description: 'The Pink City, a treasure trove of history and culture.',
    longDescription:
      'Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.',
    rating: 4.8,
    reviews: 1600,
    pricePerNight: 100,
    category: 'Cultural Heritage',
    tags: ['culture', 'royal'],
    imageId: 'jaipur',
    position: { lat: 26.9124, lng: 75.7873 },
  },
  {
    id: 4,
    slug: 'ladakh-india',
    name: 'Ladakh',
    country: 'India',
    description: 'High-altitude desert with breathtaking landscapes.',
    longDescription:
      'Ladakh is a region administered by India as a union territory, and constituting a part of the larger region of Kashmir. It is bordered by Tibet to the east, the Indian state of Himachal Pradesh to the south, Jammu and Kashmir to the west, and the Karakoram Pass to the north. It’s known for its dramatic mountain scenery, Buddhist monasteries, and a vibrant local culture.',
    rating: 4.9,
    reviews: 1100,
    pricePerNight: 150,
    category: 'Adventure',
    tags: ['mountains', 'culture'],
    imageId: 'ladakh',
    position: { lat: 34.164, lng: 77.585 },
  },
  {
    id: 5,
    slug: 'kerala-india',
    name: 'Kerala',
    country: 'India',
    description: "God's Own Country, famous for its backwaters.",
    longDescription:
      "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers.",
    rating: 4.8,
    reviews: 1900,
    pricePerNight: 90,
    category: 'Beach',
    tags: ['nature', 'backwaters', 'wellness'],
    imageId: 'kerala',
    position: { lat: 10.8505, lng: 76.2711 },
  },
  {
    id: 6,
    slug: 'manali-india',
    name: 'Manali',
    country: 'India',
    description: "A backpacker's paradise and honeymoon destination.",
    longDescription:
      'Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It\'s also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass.',
    rating: 4.7,
    reviews: 1800,
    pricePerNight: 70,
    category: 'Hill Station',
    tags: ['adventure', 'honeymoon'],
    imageId: 'manali',
    position: { lat: 32.2432, lng: 77.1892 },
  },
  {
    id: 7,
    slug: 'agra-india',
    name: 'Agra',
    country: 'India',
    description: 'Home to the iconic Taj Mahal, a symbol of eternal love.',
    longDescription:
      'Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh. It is a major tourist destination because of its many Mughal-era buildings, most notably the Taj Mahal, Agra Fort and Fatehpur Sikri, all of which are UNESCO World Heritage Sites. Agra is included on the Golden Triangle tourist circuit, along with Delhi and Jaipur.',
    rating: 4.8,
    reviews: 2500,
    pricePerNight: 110,
    category: 'Cultural Heritage',
    tags: ['history', 'monument'],
    imageId: 'agra',
    position: { lat: 27.1767, lng: 78.0081 },
  },
  {
    id: 8,
    slug: 'udaipur-india',
    name: 'Udaipur',
    country: 'India',
    description: 'The City of Lakes, known for its royal palaces.',
    longDescription:
      'Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it’s set around a series of artificial lakes and is known for its lavish royal residences. City Palace, overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaics.',
    rating: 4.9,
    reviews: 1400,
    pricePerNight: 130,
    category: 'Cultural Heritage',
    tags: ['royal', 'lakes', 'romance'],
    imageId: 'udaipur',
    position: { lat: 24.5854, lng: 73.7125 },
  },
  {
    id: 9,
    slug: 'munnar-india',
    name: 'Munnar',
    country: 'India',
    description: 'Lush green tea plantations and rolling hills.',
    longDescription:
      'Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it\'s surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is a seasonal trekking destination encompassing the Lakkam Waterfalls and Anamudi Peak.',
    rating: 4.7,
    reviews: 1300,
    pricePerNight: 85,
    category: 'Hill Station',
    tags: ['nature', 'tea gardens'],
    imageId: 'munnar',
    position: { lat: 10.0889, lng: 77.0595 },
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
