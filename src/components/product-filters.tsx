import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';

const colors = ['Brown', 'Black', 'Granite', 'Sand', 'Tan', 'Grey', 'Natural', 'Cognac', 'Charcoal', 'Forest Green', 'Navy'];
const sizes = ['7', '8', '9', '10', '11', '12', 'S', 'M', 'L', 'XL', 'One Size'];
const materials = ['Leather', 'Wool Felt', 'Suede', 'Straw', 'Merino Wool'];


export function ProductFilters() {
  return (
    <Card className="sticky top-20">
      <CardContent className="p-4">
        <h3 className="font-headline text-2xl mb-4">Filters</h3>
        <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
          <AccordionItem value="category">
            <AccordionTrigger className="font-semibold">Category</AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="all" className="space-y-2">
                <div>
                  <RadioGroupItem value="all" id="r-all" />
                  <Label htmlFor="r-all" className="ml-2">All</Label>
                </div>
                <div>
                  <RadioGroupItem value="boots" id="r-boots" />
                  <Label htmlFor="r-boots" className="ml-2">Boots</Label>
                </div>
                <div>
                  <RadioGroupItem value="hats" id="r-hats" />
                  <Label htmlFor="r-hats" className="ml-2">Hats</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="font-semibold">Price Range</AccordionTrigger>
            <AccordionContent className="pt-4">
                <Slider defaultValue={[100]} max={500} step={10} />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$0</span>
                    <span>$500</span>
                </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="size">
            <AccordionTrigger className="font-semibold">Size</AccordionTrigger>
            <AccordionContent className="space-y-2">
                {sizes.map(size => (
                    <div key={size} className="flex items-center">
                        <Checkbox id={`size-${size}`} />
                        <Label htmlFor={`size-${size}`} className="ml-2">{size}</Label>
                    </div>
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="color">
            <AccordionTrigger className="font-semibold">Color</AccordionTrigger>
            <AccordionContent className="space-y-2">
                {colors.map(color => (
                    <div key={color} className="flex items-center">
                        <Checkbox id={`color-${color}`} />
                        <Label htmlFor={`color-${color}`} className="ml-2">{color}</Label>
                    </div>
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="material">
            <AccordionTrigger className="font-semibold">Material</AccordionTrigger>
            <AccordionContent className="space-y-2">
                {materials.map(material => (
                    <div key={material} className="flex items-center">
                        <Checkbox id={`material-${material}`} />
                        <Label htmlFor={`material-${material}`} className="ml-2">{material}</Label>
                    </div>
                ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
