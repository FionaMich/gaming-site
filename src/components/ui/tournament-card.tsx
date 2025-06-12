'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users } from 'lucide-react';

export interface TournamentCardProps {
  title: string;
  image: string;
  game: string;
  date: string;
  prizePool: number;
  slots: number;
  slug: string;
}

export function TournamentCard({
  title,
  image,
  game,
  date,
  prizePool,
  slots,
  slug,
}: TournamentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-card rounded-lg border overflow-hidden"
    >
      <Link href={`/tournament/${slug}`}>
        <div className="aspect-[16/9] relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {game}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span>${prizePool.toLocaleString()} Prize Pool</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{slots} Slots</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 