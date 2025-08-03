
"use client"

import { Heart } from 'lucide-react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { useWishlist } from '@/hooks/use-wishlist.tsx';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface WishlistButtonProps extends ButtonProps {
  product: Product;
}

export function WishlistButton({ product, className, variant = 'ghost', ...props }: WishlistButtonProps) {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  useEffect(() => {
      setIsWishlisted(wishlistItems.some(item => item.id === product.id));
  }, [wishlistItems, product.id]);


  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  if(!wishlistItems) return null;

  return (
    <Button
      variant={variant}
      size="icon"
      className={cn("rounded-full", className)}
      onClick={handleWishlistToggle}
      {...props}
    >
      <Heart className={cn("h-5 w-5", isWishlisted && 'fill-red-500 text-red-500')} />
      <span className="sr-only">Toggle Wishlist</span>
    </Button>
  );
}
