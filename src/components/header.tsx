import Link from 'next/link';
import { Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CartSheet } from './cart-sheet';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-2xl">StompStyle</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/">Men</Link>
            <Link href="/">Women</Link>
            <Link href="/">Kids</Link>
            <Link href="/">Accessories</Link>
            <Link href="/" className="text-accent">Sale</Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
          </div>
          <nav className="flex items-center">
            <ThemeToggle />
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <CartSheet />
          </nav>
        </div>
      </div>
    </header>
  );
}
