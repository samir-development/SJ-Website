import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'The Rancher',
    description:
      'Classic, durable leather boots designed for the rugged individual. Full-grain leather with a Goodyear welt construction ensures these boots will last a lifetime. Features a traditional western stitch pattern.',
    price: 249.99,
    category: 'Boots',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Brown', 'Black'],
    material: 'Leather',
    stock: 15,
    reviews: [
      { rating: 5, text: 'Best boots I have ever owned!', author: 'John D.' },
      { rating: 4, text: 'Very comfortable and stylish.', author: 'Jane S.' },
    ],
  },
  {
    id: '2',
    name: 'The Outlaw',
    description:
      'A rugged and stylish felt hat that commands attention. Made from 100% fine wool felt, it features a classic cattleman crease and a decorative leather band. Water-repellent and durable for all weather conditions.',
    price: 129.99,
    category: 'Hats',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Granite', 'Sand'],
    material: 'Wool Felt',
    stock: 25,
    reviews: [
        { rating: 5, text: 'Fantastic hat, fits perfectly.', author: 'Mark R.' },
    ],
  },
  {
    id: '3',
    name: 'The Wanderer',
    description:
      'Comfortable suede boots perfect for everyday adventures. These boots feature a soft, flexible suede upper and a cushioned insole for all-day comfort. The minimalist design pairs well with any casual outfit.',
    price: 179.99,
    category: 'Boots',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    sizes: ['7', '8', '9', '10'],
    colors: ['Tan', 'Grey'],
    material: 'Suede',
    stock: 20,
    reviews: [
      { rating: 5, text: 'So comfortable and they look great!', author: 'Emily K.' },
      { rating: 4, text: 'Good value for the price.', author: 'Chris B.' },
    ],
  },
  {
    id: '4',
    name: 'The Drifter',
    description:
      'A classic straw hat ideal for sunny days. Woven from natural straw for breathability, it features a wide brim for sun protection and a simple ribbon band. Lightweight and comfortable for all-day wear.',
    price: 79.99,
    category: 'Hats',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    sizes: ['One Size'],
    colors: ['Natural'],
    material: 'Straw',
    stock: 30,
    reviews: [],
  },
    {
    id: '5',
    name: 'The City Slicker',
    description:
      'Sleek and modern leather boots for the urban explorer. Made from polished top-grain leather, these boots feature a slim profile, a side zipper for easy wear, and a durable rubber sole for excellent traction on city streets.',
    price: 219.99,
    category: 'Boots',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Jet Black', 'Cognac'],
    material: 'Leather',
    stock: 18,
    reviews: [
      { rating: 5, text: 'Perfect for work and going out.', author: 'Alex T.' },
      { rating: 5, text: 'Incredibly stylish and well-made.', author: 'Samantha P.' },
    ],
  },
  {
    id: '6',
    name: 'The Mountaineer',
    description:
      'A warm and durable beanie for cold weather. Crafted from a soft merino wool blend, this hat offers excellent insulation while remaining breathable. The ribbed knit ensures a snug, comfortable fit.',
    price: 49.99,
    category: 'Hats',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    sizes: ['One Size'],
    colors: ['Charcoal', 'Forest Green', 'Navy'],
    material: 'Merino Wool',
    stock: 40,
    reviews: [
        { rating: 5, text: 'Very warm and not itchy at all!', author: 'David L.' },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
