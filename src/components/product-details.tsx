
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useCart } from '@/hooks/use-cart';
import type { Product } from '@/lib/types';
import { WishlistButton } from './wishlist-button';

export function ProductDetails({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const { addItem } = useCart();
  const isOutOfStock = product.stock <= 0;

  const handleAddToCart = () => {
    addItem(product, 1, selectedSize, selectedColor);
  };

  return (
    <div>
      <div className="relative">
        <div className="aspect-square relative rounded-lg border overflow-hidden mb-4">
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint="product photo"
          />
           {isOutOfStock && (
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <span className="text-foreground font-bold text-lg bg-background/80 px-4 py-2 rounded-md">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="absolute top-3 right-3 z-10">
          <WishlistButton product={product} variant="secondary" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`aspect-square relative rounded-md border overflow-hidden ${selectedImage === img ? 'ring-2 ring-primary ring-offset-2' : ''}`}
          >
            <Image src={img} alt={`${product.name} thumbnail ${index + 1}`} fill className="object-cover" data-ai-hint="product photo" />
          </button>
        ))}
      </div>
      
      <div className="mt-8">
        <Label className="font-semibold text-base">Color: {selectedColor}</Label>
        <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-2 mt-2">
          {product.colors.map(color => (
            <RadioGroupItem key={color} value={color} id={`color-${color}`} className="sr-only" />
          ))}
          {product.colors.map(color => (
              <Label key={color} htmlFor={`color-${color}`} className={`cursor-pointer rounded-md border-2 p-2 px-4 ${selectedColor === color ? 'border-primary' : ''}`}>
                {color}
              </Label>
          ))}
        </RadioGroup>
      </div>

      <div className="mt-6">
        <Label className="font-semibold text-base">Size: {selectedSize}</Label>
        <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2 mt-2">
          {product.sizes.map(size => (
            <RadioGroupItem key={size} value={size} id={`size-${size}`} className="sr-only" />
          ))}
          {product.sizes.map(size => (
              <Label key={size} htmlFor={`size-${size}`} className={`cursor-pointer rounded-md border-2 p-2 px-4 ${selectedSize === size ? 'border-primary' : ''}`}>
                {size}
              </Label>
          ))}
        </RadioGroup>
      </div>

      <Button size="lg" className="w-full mt-8" onClick={handleAddToCart} disabled={isOutOfStock}>
        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
}
