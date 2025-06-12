'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/page-header';
import { GameCard } from '@/components/ui/game-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// This would typically come from an API or database
const games = [
  {
    title: 'League of Legends',
    image: '/images/games/league-of-legends.jpg',
    category: 'MOBA',
    players: 5000,
    rating: 4.8,
    slug: 'league-of-legends',
  },
  {
    title: 'Counter-Strike 2',
    image: '/images/games/counter-strike-2.jpg',
    category: 'FPS',
    players: 8000,
    rating: 4.9,
    slug: 'counter-strike-2',
  },
  {
    title: 'Valorant',
    image: '/images/games/valorant.jpg',
    category: 'FPS',
    players: 6000,
    rating: 4.7,
    slug: 'valorant',
  },
  {
    title: 'Dota 2',
    image: '/images/games/dota-2.jpg',
    category: 'MOBA',
    players: 4500,
    rating: 4.6,
    slug: 'dota-2',
  },
  {
    title: 'Overwatch 2',
    image: '/images/games/overwatch-2.jpg',
    category: 'FPS',
    players: 3500,
    rating: 4.5,
    slug: 'overwatch-2',
  },
  {
    title: 'Rocket League',
    image: '/images/games/rocket-league.jpg',
    category: 'Sports',
    players: 2500,
    rating: 4.7,
    slug: 'rocket-league',
  },
];

export default function GamesPage() {
  return (
    <>
      <PageHeader
        title="Games Library"
        description="Discover our collection of exciting games across various genres."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.slug} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Game Categories</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Explore games across different genres and find your favorite competitive scene.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card p-6 rounded-lg border hover:border-primary transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">FPS Games</h3>
                <p className="text-muted-foreground">
                  First-person shooter games with intense action and precision gameplay.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card p-6 rounded-lg border hover:border-primary transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">MOBA Games</h3>
                <p className="text-muted-foreground">
                  Multiplayer online battle arena games with strategic team-based combat.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card p-6 rounded-lg border hover:border-primary transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">Sports Games</h3>
                <p className="text-muted-foreground">
                  Competitive sports games with realistic physics and team dynamics.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Compete?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our gaming community and participate in exciting tournaments.
            </p>
            <Button size="lg" asChild>
              <Link href="/tournament">Browse Tournaments</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 