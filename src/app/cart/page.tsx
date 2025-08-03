import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function CheckoutPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline">Checkout</h1>
        <p className="text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="text-primary underline">
            Log in
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="me@example.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main St" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Anytown" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="12345" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Payment</CardTitle>
              <CardDescription>
                All transactions are secure and encrypted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="**** **** **** ****" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input id="expiry" placeholder="MM / YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </CardContent>
             <CardFooter>
                 <Button size="lg" className="w-full">Place Order</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="lg:sticky lg:top-24 h-fit">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-md border overflow-hidden">
                    <Image src="https://placehold.co/600x600.png" alt="Product" layout="fill" objectFit="cover" data-ai-hint="boots" />
                </div>
                <div className="flex-1">
                    <p className="font-semibold">The Rancher</p>
                    <p className="text-sm text-muted-foreground">Size: 10 / Brown</p>
                </div>
                <p className="font-semibold">$249.99</p>
              </div>
              <Separator />
               <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-md border overflow-hidden">
                    <Image src="https://placehold.co/600x600.png" alt="Product" layout="fill" objectFit="cover" data-ai-hint="hat" />
                </div>
                <div className="flex-1">
                    <p className="font-semibold">The Outlaw</p>
                    <p className="text-sm text-muted-foreground">Size: L / Granite</p>
                </div>
                <p className="font-semibold">$129.99</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$379.98</span>
                </div>
                 <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$10.00</span>
                </div>
                 <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>$31.35</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$421.33</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
