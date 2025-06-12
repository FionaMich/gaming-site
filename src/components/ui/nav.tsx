'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { cn } from '@/lib/utils';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from './theme-toggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/games', label: 'Games' },
  { href: '/tournament', label: 'Tournament' },
  { href: '/blog', label: 'Blog' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const pathname = usePathname();
  const { items } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 font-bold text-xl">
          Bamer
        </Link>
        <div className="hidden md:flex items-center space-x-6 flex-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden flex-1">
          <MobileNav />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/cart"
            className="relative flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
} 