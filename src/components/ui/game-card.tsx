'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';

export interface GameCardProps {
  title: string;
  image: string;
  category: string;
  players: number;
  rating: number;
  slug: string;
  key?: string;
}

export function GameCard({
  title,
  image,
  category,
  players,
  rating,
  slug,
}: GameCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-card rounded-lg border overflow-hidden"
    >
      <Link href={`/game/${slug}`}>
        <div className="aspect-[16/9] relative">
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
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{players.toLocaleString()} Players</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 