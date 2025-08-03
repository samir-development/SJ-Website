
"use client"

import { useWishlist } from '@/hooks/use-wishlist.tsx';
import { ProductCard } from '@/components/product-card';
import { ShoppingBag } from 'lucide-react';

export function WishlistGrid() {
  const { wishlistItems } = useWishlist();

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-xl font-semibold">Your wishlist is empty</h3>
        <p className="mt-2 text-muted-foreground">
          Looks like you haven't added anything to your wishlist yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishlistItems.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
