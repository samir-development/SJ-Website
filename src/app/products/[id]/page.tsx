import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/products';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Star, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import { ProductDetails } from '@/components/product-details';
import { AiStylist } from '@/components/ai-stylist';
import { ReviewForm } from '@/components/review-form';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: 'Product not found'
    }
  }

  return {
    title: `${product.name} | StompStyle`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  
  if (!product) {
    notFound();
  }
  
  const averageRating = product.reviews.length > 0 
    ? product.reviews.reduce((a, b) => a + b.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="container py-8 md:py-12">
      <div className="text-sm text-muted-foreground mb-4 flex items-center">
        <a href="/" className="hover:text-foreground">Home</a>
        <ChevronRight className="h-4 w-4 mx-1" />
        <a href="/" className="hover:text-foreground">{product.category}</a>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span>{product.name}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <ProductDetails product={product} />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-headline">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.round(averageRating) ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/50'}`} />
                ))}
            </div>
            <span className="text-muted-foreground text-sm">{product.reviews.length} Reviews</span>
          </div>
          <p className="text-3xl font-bold mt-4">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground mt-4">{product.description}</p>
          <Separator className="my-6" />

          <Accordion type="single" collapsible className="w-full mt-6">
            <AccordionItem value="size-guide">
              <AccordionTrigger>Size Guide</AccordionTrigger>
              <AccordionContent>
                Here is a sample size guide. You can replace this with actual sizing information for your products. For hats, common sizes are S, M, L, XL. For boots, numeric sizes are used.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="material-info">
              <AccordionTrigger>Material & Care</AccordionTrigger>
              <AccordionContent>
                Made from {product.material}. To care for your product, please follow the instructions on the label. Proper care will ensure longevity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      <AiStylist productName={product.name} productDescription={product.description} />
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold font-headline mb-4">Customer Reviews</h2>
        <div className="space-y-6">
            {product.reviews.map((review, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card">
                    <div className="flex items-center mb-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/50'}`} />
                            ))}
                        </div>
                        <p className="ml-4 font-bold">{review.author}</p>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                </div>
            ))}
            {product.reviews.length === 0 && <p className="text-muted-foreground">No reviews yet.</p>}
        </div>
        <ReviewForm />
      </div>
    </div>
  );
}
