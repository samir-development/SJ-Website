import Image from 'next/image';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { ProductFilters } from '@/components/product-filters';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-12">
      <section className="relative h-[60vh] w-full flex items-center justify-center text-center text-white bg-gray-800">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-40"
          data-ai-hint="western landscape"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold font-headline">Crafted for the Trail Ahead</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover timeless style and rugged durability with our collection of handcrafted boots and hats.
          </p>
          <Button size="lg" className="mt-8">
            Shop The Collection
          </Button>
        </div>
      </section>

      <section className="container">
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <ProductFilters />
          </aside>
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold font-headline">All Products</h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
