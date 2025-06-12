'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  slug: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({
  title,
  slug,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-card rounded-lg border overflow-hidden"
    >
      <Link href={`/shop/${slug}`}>
        <div className="aspect-square relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-lg font-semibold text-primary">
            ${price.toFixed(2)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
} 