'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface BlogPostCardProps {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  category: string;
}

export function BlogPostCard({
  title,
  slug,
  image,
  excerpt,
  date,
  category,
}: BlogPostCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-card rounded-lg border overflow-hidden"
    >
      <Link href={`/blog/${slug}`}>
        <div className="aspect-[16/9] relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {category}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
} 