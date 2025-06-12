'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from '@/context/cart-context';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Star, Truck, Shield, ArrowLeft, ArrowRight } from 'lucide-react';

// This would typically come from an API or database
const productDetails = {
  'cyber-warriors-pro-gaming-headset': {
    id: 'cyber-warriors-headset',
    title: 'Cyber Warriors Pro Gaming Headset',
    price: 149.99,
    images: [
      '/images/products/headset-1.jpg',
      '/images/products/headset-2.jpg',
      '/images/products/headset-3.jpg',
      '/images/products/headset-4.jpg',
    ],
    description: 'Professional-grade gaming headset with 7.1 surround sound and noise-canceling microphone.',
    longDescription: `Experience gaming audio like never before with the Cyber Warriors Pro Gaming Headset. Designed for professional gamers and enthusiasts alike, this headset delivers exceptional sound quality and comfort for extended gaming sessions.

    Key Features:
    - 7.1 Virtual Surround Sound
    - Detachable Noise-Canceling Microphone
    - Memory Foam Ear Cushions
    - RGB Lighting with 16.8M Colors
    - Durable Aluminum Frame
    - Cross-Platform Compatibility`,
    variants: {
      colors: ['Black', 'White', 'Red'],
    },
    features: [
      {
        title: 'Premium Audio',
        description: '7.1 virtual surround sound for immersive gaming experience',
      },
      {
        title: 'Comfort First',
        description: 'Memory foam ear cushions for extended gaming sessions',
      },
      {
        title: 'Crystal Clear Comms',
        description: 'Studio-quality microphone with noise cancellation',
      },
      {
        title: 'Built to Last',
        description: 'Durable aluminum frame with reinforced cables',
      },
    ],
    specs: {
      'Driver Size': '50mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 Ohm',
      'Microphone Type': 'Detachable Boom',
      'Cable Length': '2.0m',
      'Weight': '350g',
      'Connectivity': 'USB / 3.5mm',
      'Compatibility': 'PC, PS5, Xbox Series X|S, Mobile',
    },
    relatedProducts: [
      {
        title: 'Pro Gaming Mouse',
        slug: 'pro-gaming-mouse',
        price: 79.99,
        image: '/images/products/mouse.jpg',
        category: 'Accessories',
      },
      {
        title: 'Mechanical Keyboard',
        slug: 'mechanical-keyboard',
        price: 129.99,
        image: '/images/products/keyboard.jpg',
        category: 'Accessories',
      },
      {
        title: 'Gaming Mousepad',
        slug: 'gaming-mousepad',
        price: 29.99,
        image: '/images/products/mousepad.jpg',
        category: 'Accessories',
      },
    ],
  },
  // Add more products here
};

export default function ProductPage() {
  const params = useParams();
  const product = productDetails[params.slug as keyof typeof productDetails];
  const { dispatch } = useCart();
  const [selectedColor, setSelectedColor] = useState(product?.variants.colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link href="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${product.id}-${selectedColor}`,
        title: `${product.title} - ${selectedColor}`,
        price: product.price,
        quantity: 1,
        image: product.images[0],
      },
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="bg-background/80 backdrop-blur-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="bg-background/80 backdrop-blur-sm"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={image}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${
                    index === currentImageIndex
                      ? 'border-primary'
                      : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-2xl font-semibold text-primary">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="prose dark:prose-invert">
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Color</h3>
              <Select
                value={selectedColor}
                onValueChange={setSelectedColor}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  {product.variants.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">2-Year Warranty</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {product.features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-lg border p-6"
                  >
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Description</h2>
              <div className="prose dark:prose-invert max-w-none">
                {product.longDescription.split('\n\n').map((paragraph, index) => {
                  if (paragraph.includes('- ')) {
                    return (
                      <ul key={index} className="list-disc pl-6 my-4">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="mb-2">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-3 border-b last:border-0"
                  >
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="space-y-6">
              {product.relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.slug} {...relatedProduct} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 