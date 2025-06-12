'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, Users, Gamepad2 } from 'lucide-react';

interface TeamCardProps {
  name: string;
  image: string;
  slug: string;
  members: number;
  wins: number;
  mainGame: string;
  description: string;
}

export function TeamCard({
  name,
  image,
  slug,
  members,
  wins,
  mainGame,
  description,
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-card rounded-lg border overflow-hidden"
    >
      <Link href={`/team/${slug}`}>
        <div className="aspect-[16/9] relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <Users className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-medium">{members}</span>
              <span className="text-xs text-muted-foreground">Members</span>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-medium">{wins}</span>
              <span className="text-xs text-muted-foreground">Wins</span>
            </div>
            <div className="flex flex-col items-center">
              <Gamepad2 className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-medium text-center line-clamp-1">
                {mainGame}
              </span>
              <span className="text-xs text-muted-foreground">Main Game</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 