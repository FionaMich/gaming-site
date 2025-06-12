'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';

// This would typically come from an API or database
const products = [
  {
    title: 'Pro Gaming Headset',
    description: 'High-quality gaming headset with surround sound and noise-canceling microphone.',
    image: '/images/shop/gaming-headset.jpg',
    price: '$129.99',
    category: 'Accessories',
    inStock: true,
  },
  {
    title: 'Mechanical Gaming Keyboard',
    description: 'RGB mechanical keyboard with customizable switches and macro keys.',
    image: '/images/shop/gaming-keyboard.jpg',
    price: '$149.99',
    category: 'Accessories',
    inStock: true,
  },
  {
    title: 'Gaming Mouse',
    description: 'Precision gaming mouse with adjustable DPI and programmable buttons.',
    image: '/images/shop/gaming-mouse.jpg',
    price: '$79.99',
    category: 'Accessories',
    inStock: true,
  },
  {
    title: 'Limited Edition Gaming Chair',
    description: 'Ergonomic gaming chair with premium features and exclusive design.',
    image: '/images/shop/gaming-chair.jpg',
    price: '$399.99',
    category: 'Furniture',
    inStock: false,
  },
  {
    title: 'Gaming Mousepad XL',
    description: 'Extra-large gaming mousepad with stitched edges and non-slip base.',
    image: '/images/shop/mousepad.jpg',
    price: '$29.99',
    category: 'Accessories',
    inStock: true,
  },
  {
    title: 'Streaming Microphone',
    description: 'Professional USB microphone perfect for streaming and content creation.',
    image: '/images/shop/microphone.jpg',
    price: '$159.99',
    category: 'Streaming',
    inStock: true,
  },
];

const categories = ['All', 'Accessories', 'Furniture', 'Streaming'];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState<string[]>([]);

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' ? true : product.category === selectedCategory
  );

  const handleAddToCart = (title: string) => {
    setCartItems(prev => [...prev, title]);
    // In a real application, this would integrate with a shopping cart system
    console.log(`Added ${title} to cart`);
  };

  return (
    <>
      <PageHeader
        title="Gaming Shop"
        description="Discover premium gaming gear and accessories for the ultimate gaming setup."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.title}
                {...product}
                onAddToCart={() => handleAddToCart(product.title)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 