// File: retrobone/tripsters-innov/tripsters-innov-25d0006c070fe2f6384c93b56a848a48898dcf98/src/lib/data.ts

// ... (keep all the existing destination data for Shimla, Goa, etc.)

export const destinations: Destination[] = [
  // ... (all your existing destinations)
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
    pricePerNight: 6800,
    category: 'Hill Station',
    tags: ['nature', 'tea gardens'],
    imageId: 'munnar',
    position: { lat: 10.0889, lng: 77.0595 },
  },
  // PASTE THE ZIRO DATA HERE
  {
    id: 10,
    slug: 'ziro-india',
    name: 'Ziro',
    country: 'India',
    description: 'A picturesque valley and a UNESCO World Heritage Site.',
    longDescription:
      'Ziro is a picturesque valley in the Lower Subansiri district of Arunachal Pradesh, India. It is known for its stunning natural beauty, lush green rice fields, and the unique culture of the Apatani tribe. Ziro is a UNESCO World Heritage Site and is a popular destination for nature lovers, adventure enthusiasts, and those interested in cultural tourism.',
    rating: 4.8,
    reviews: 1200,
    pricePerNight: 5500,
    category: 'Cultural Heritage',
    tags: ['unesco', 'tribal', 'nature'],
    imageId: 'ziro',
    position: { lat: 27.63, lng: 93.83 },
  },
];

// ... (rest of the file remains the same)
