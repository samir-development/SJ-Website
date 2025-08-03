export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Boots' | 'Hats';
  images: string[];
  sizes: string[];
  colors: string[];
  material: string;
  reviews: {
    rating: number;
    text: string;
    author: string;
  }[];
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
