import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="font-bold font-headline text-xl mb-2">StompStyle</h3>
            <p className="text-muted-foreground text-sm">Quality boots & hats for the modern adventurer.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Men</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Women</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Kids</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Size Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-2">Subscribe to get the latest on sales, new releases and more.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} StompStyle. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
