import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { WishlistButton } from './wishlist-button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group relative">
        <div className="absolute top-2 right-2 z-10">
          <WishlistButton product={product} />
        </div>
        <CardContent className="p-0">
          <Link href={`/products/${product.id}`} className="group">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={`${product.category.toLowerCase()}`}
              />
            </div>
          </Link>
          <div className="p-4 border-t">
            <Link href={`/products/${product.id}`}>
              <h3 className="font-semibold text-lg truncate">{product.name}</h3>
              <p className="text-muted-foreground text-sm">{product.category}</p>
              <p className="font-bold text-lg mt-2">${product.price.toFixed(2)}</p>
            </Link>
          </div>
        </CardContent>
      </Card>
  );
}
