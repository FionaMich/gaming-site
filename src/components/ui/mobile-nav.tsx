'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
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

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="ml-auto text-foreground/60 hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background">
          <nav className="container py-6">
            <ul className="space-y-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'block text-base font-medium transition-colors hover:text-primary',
                      pathname === href
                        ? 'text-foreground'
                        : 'text-foreground/60'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
} 