'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { GameCard } from '@/components/ui/game-card';
import { TournamentCard } from '@/components/ui/tournament-card';
import { BlogPostCard } from '@/components/ui/blog-post-card';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/games/league-of-legends.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to the Ultimate Gaming Experience
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Join our community of gamers and compete in exciting tournaments
              across multiple platforms.
            </p>
            <div className="flex gap-4">
              <Link
                href="/tournament"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Join Tournament
              </Link>
              <Link
                href="/about"
                className="bg-white/10 text-white px-8 py-3 rounded-md font-medium hover:bg-white/20 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Games</h2>
            <p className="text-muted-foreground">
              Discover our selection of popular games
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GameCard
              title="League of Legends"
              image="/images/games/league-of-legends.jpg"
              category="MOBA"
              players={5000}
              rating={4.8}
              slug="league-of-legends"
            />
            <GameCard
              title="Counter-Strike 2"
              image="/images/games/counter-strike-2.jpg"
              category="FPS"
              players={8000}
              rating={4.9}
              slug="counter-strike-2"
            />
            <GameCard
              title="Valorant"
              image="/images/games/valorant.jpg"
              category="FPS"
              players={6000}
              rating={4.7}
              slug="valorant"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Tournaments</h2>
            <p className="text-muted-foreground">
              Register now and compete with the best
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TournamentCard
              title="CS2 Championship"
              image="/images/tournaments/cs2-championship.jpg"
              game="Counter-Strike 2"
              date="2024-07-15"
              prizePool={10000}
              slots={32}
              slug="cs2-championship"
            />
            <TournamentCard
              title="LoL Masters"
              image="/images/tournaments/lol-masters.jpg"
              game="League of Legends"
              date="2024-08-01"
              prizePool={15000}
              slots={16}
              slug="lol-masters"
            />
            <TournamentCard
              title="Valorant Cup"
              image="/images/tournaments/valorant-cup.jpg"
              game="Valorant"
              date="2024-08-15"
              prizePool={8000}
              slots={24}
              slug="valorant-cup"
            />
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest News</h2>
            <p className="text-muted-foreground">
              Stay updated with the latest gaming news
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogPostCard
              title="The Rise of Competitive Gaming"
              image="/images/blog/esports-growth.jpg"
              excerpt="Explore how esports has grown into a billion-dollar industry."
              date="2024-06-01"
              category="Esports"
              slug="rise-of-competitive-gaming"
            />
            <BlogPostCard
              title="Gaming Trends in 2024"
              image="/images/blog/gaming-trends.jpg"
              excerpt="Discover the latest trends shaping the gaming industry."
              date="2024-06-05"
              category="Industry"
              slug="gaming-trends-2024"
            />
            <BlogPostCard
              title="Mobile Esports Revolution"
              image="/images/blog/mobile-esports.jpg"
              excerpt="How mobile gaming is changing the esports landscape."
              date="2024-06-10"
              category="Mobile"
              slug="mobile-esports-revolution"
            />
          </div>
        </div>
      </section>
    </>
  );
}
