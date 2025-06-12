import { GameCard } from '@/components/ui/game-card';

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
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Games</h1>
            <p className="text-xl text-muted-foreground">
              Discover our selection of competitive games and join tournaments
              across multiple platforms and genres.
            </p>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard key={game.slug} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Game Categories</h2>
            <p className="text-muted-foreground">
              Browse games by your favorite genre
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border hover:border-primary transition-colors text-center">
              <h3 className="text-xl font-semibold mb-2">FPS Games</h3>
              <p className="text-muted-foreground">
                First-person shooter games with intense action and strategic
                gameplay.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border hover:border-primary transition-colors text-center">
              <h3 className="text-xl font-semibold mb-2">MOBA Games</h3>
              <p className="text-muted-foreground">
                Multiplayer online battle arena games with team-based strategy.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border hover:border-primary transition-colors text-center">
              <h3 className="text-xl font-semibold mb-2">Sports Games</h3>
              <p className="text-muted-foreground">
                Competitive sports games with unique twists and mechanics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 