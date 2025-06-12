'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from '@/context/cart-context';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingCart } from 'lucide-react';

// This would typically come from an API or database
const wishlistItems = [
  {
    id: 'cyber-warriors-headset',
    title: 'Cyber Warriors Pro Gaming Headset',
    price: 149.99,
    image: '/images/products/headset-1.jpg',
    slug: 'cyber-warriors-pro-gaming-headset',
    inStock: true,
  },
  {
    id: 'pro-gaming-mouse',
    title: 'Pro Gaming Mouse',
    price: 79.99,
    image: '/images/products/mouse.jpg',
    slug: 'pro-gaming-mouse',
    inStock: true,
  },
  {
    id: 'gaming-chair',
    title: 'Ergonomic Gaming Chair',
    price: 299.99,
    image: '/images/products/chair.jpg',
    slug: 'ergonomic-gaming-chair',
    inStock: false,
  },
];

export default function WishlistPage() {
  const { dispatch } = useCart();
  const [items, setItems] = useState(wishlistItems);

  const handleRemoveFromWishlist = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item: typeof items[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
        image: item.image,
      },
    });
    handleRemoveFromWishlist(item.id);
  };

  return (
    <>
      <PageHeader
        title="Wishlist"
        description="Your saved items for future purchase."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Your wishlist is empty
              </h2>
              <p className="text-muted-foreground mb-8">
                Browse our shop and add items to your wishlist.
              </p>
              <Button asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-card rounded-lg border"
                >
                  <div className="relative w-full sm:w-48 aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <Link
                      href={`/shop/${item.slug}`}
                      className="text-xl font-semibold hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                    <p className="text-lg font-semibold text-primary mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="text-sm mt-2">
                      {item.inStock ? (
                        <span className="text-green-500">In Stock</span>
                      ) : (
                        <span className="text-red-500">Out of Stock</span>
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button
                      className="w-full sm:w-auto"
                      onClick={() => handleAddToCart(item)}
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
} 