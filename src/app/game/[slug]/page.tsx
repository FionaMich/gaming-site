'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { GameCard } from '@/components/ui/game-card';
import { Star, Users, Trophy, Clock, Calendar, MapPin, DollarSign, Gamepad2 } from 'lucide-react';

interface Tournament {
  title: string;
  date: string;
  prizePool: number;
  slots: number;
  slug: string;
}

interface Game {
  title: string;
  image: string;
  category: string;
  players: number;
  rating: number;
  description: string;
  features: string[];
  tournaments: Tournament[];
  releaseDate?: string;
  screenshots?: string[];
}

// This would typically come from a database
const games: Record<string, Game> = {
  "league-of-legends": {
    title: "League of Legends",
    image: "/images/games/league-of-legends.jpg",
    category: "MOBA",
    players: 5000,
    rating: 4.8,
    description: "League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other's base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.",
    features: [
      "Competitive 5v5 gameplay",
      "Over 140 unique champions",
      "Regular updates and patches",
      "Professional esports scene",
      "Free to play"
    ],
    tournaments: [
      {
        title: "LoL Masters",
        date: "2024-08-01",
        prizePool: 15000,
        slots: 16,
        slug: "lol-masters"
      }
    ]
  },
  'counter-strike-2': {
    title: 'Counter-Strike 2',
    image: '/images/games/counter-strike-2.jpg',
    category: 'FPS',
    players: 8000,
    rating: 4.9,
    description:
      'Counter-Strike 2 is a modern take on the classic team-based action gameplay that revolutionized the FPS genre. Experience the next generation of CS with improved graphics, refined gameplay mechanics, and enhanced features.',
    features: [
      'Tactical 5v5 gameplay',
      'Competitive matchmaking',
      'Improved graphics and physics',
      'Workshop support',
      'Active esports scene',
    ],
    tournaments: [
      {
        title: 'CS2 Championship',
        date: '2024-07-15',
        prizePool: 10000,
        slots: 32,
        slug: 'cs2-championship',
      },
    ],
  },
  'valorant': {
    title: 'Valorant',
    image: '/images/games/valorant.jpg',
    category: 'FPS',
    players: 6000,
    rating: 4.7,
    description:
      'Valorant is a tactical shooter where precise gunplay meets unique agent abilities. Blend your style and experience with a global competitive scene, featuring high-stakes team battles and game-changing tactical abilities.',
    features: [
      'Character-based abilities',
      'Precise gunplay mechanics',
      'Regular content updates',
      'Anti-cheat system',
      'Growing esports scene',
    ],
    tournaments: [
      {
        title: 'Valorant Cup',
        date: '2024-08-15',
        prizePool: 8000,
        slots: 24,
        slug: 'valorant-cup',
      },
    ],
  },
  'dota-2': {
    title: 'Dota 2',
    image: '/images/games/dota-2.jpg',
    category: 'MOBA',
    players: 4500,
    rating: 4.6,
    description:
      'Dota 2 is a complex game of strategy where two teams of five players compete to destroy the enemy Ancient. Pick from over 100 heroes and battle in a constantly evolving competitive landscape.',
    features: [
      'Deep strategic gameplay',
      'Over 100 unique heroes',
      'Free to play',
      'Regular updates',
      'Massive esports tournaments',
    ],
    tournaments: [],
  },
  'overwatch-2': {
    title: 'Overwatch 2',
    image: '/images/games/overwatch-2.jpg',
    category: 'FPS',
    players: 3500,
    rating: 4.5,
    description:
      'Overwatch 2 is a team-based action game set in an optimistic future. Choose from a diverse cast of heroes and work together to complete objectives in various game modes.',
    features: [
      'Hero-based gameplay',
      'Multiple game modes',
      'Regular content updates',
      'Cross-platform play',
      'PvE content',
    ],
    tournaments: [],
  },
  'rocket-league': {
    title: 'Rocket League',
    image: '/images/games/rocket-league.jpg',
    category: 'Sports',
    players: 2500,
    rating: 4.7,
    description:
      'Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem. Customize your car, hit the field, and compete in various game modes ranging from casual to competitive.',
    features: [
      'Unique soccer-car gameplay',
      'Cross-platform play',
      'Various game modes',
      'Car customization',
      'Active competitive scene',
    ],
    tournaments: [],
  },
};

// Related games data
const relatedGames = [
  {
    title: "Fantasy Realms",
    image: "/images/games/fantasy-realms.jpg",
    category: "RPG",
    players: 3000,
    rating: 4.6,
    slug: "fantasy-realms"
  },
  {
    title: "Tactical Force",
    image: "/images/games/tactical-force.jpg",
    category: "Shooter",
    players: 2500,
    rating: 4.5,
    slug: "tactical-force"
  }
];

export default function GameDetailsPage() {
  const params = useParams();
  const game = games[params.slug as keyof typeof games];

  if (!game) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative h-full flex items-center">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
              {game.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {game.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{game.players.toLocaleString()} Players</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span>{game.rating.toFixed(1)} Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">About the Game</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {game.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {game.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    Please visit the official game website for detailed system
                    requirements and specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      {game.tournaments.length > 0 && (
        <section className="py-20 bg-accent">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Upcoming Tournaments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {game.tournaments.map((tournament) => (
                <Link
                  key={tournament.slug}
                  href={`/tournament/${tournament.slug}`}
                  className="bg-card p-6 rounded-lg border hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {tournament.title}
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(tournament.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4" />
                      <span>${tournament.prizePool.toLocaleString()} Prize Pool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{tournament.slots} Slots</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Play?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our gaming community and start competing in tournaments today.
            </p>
            <Button size="lg" asChild>
              <Link href="/tournament">Browse Tournaments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Game Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose dark:prose-invert max-w-none"
              >
                <h2 className="text-3xl font-bold mb-6">About the Game</h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {game.description}
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {game.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Star className="h-5 w-5 text-primary" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Screenshots */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Screenshots</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {game.screenshots?.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative aspect-video rounded-lg overflow-hidden"
                    >
                      <Image
                        src={screenshot}
                        alt={`${game.title} Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Game Info */}
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Game Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="font-medium">{game.rating}/5.0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Players</p>
                      <p className="font-medium">{game.players}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium">{game.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Release Date</p>
                      <p className="font-medium">{game.releaseDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Requirements */}
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">System Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Minimum:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>OS: Windows 10 64-bit</li>
                      <li>Processor: Intel Core i5-6600K</li>
                      <li>Memory: 8 GB RAM</li>
                      <li>Graphics: NVIDIA GTX 1060</li>
                      <li>Storage: 50 GB available space</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Recommended:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>OS: Windows 10/11 64-bit</li>
                      <li>Processor: Intel Core i7-8700K</li>
                      <li>Memory: 16 GB RAM</li>
                      <li>Graphics: NVIDIA RTX 2070</li>
                      <li>Storage: 50 GB SSD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Games */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedGames.map((game) => (
              <GameCard key={game.slug} {...game} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 