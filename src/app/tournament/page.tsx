'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { TournamentCard } from '@/components/ui/tournament-card';
import { Button } from '@/components/ui/button';

// This would typically come from an API or database
const tournaments = [
  {
    title: 'CS2 Championship',
    image: '/images/tournaments/cs2-championship.jpg',
    game: 'Counter-Strike 2',
    date: '2024-07-15',
    prizePool: 10000,
    slots: 32,
    slug: 'cs2-championship',
  },
  {
    title: 'LoL Masters',
    image: '/images/tournaments/lol-masters.jpg',
    game: 'League of Legends',
    date: '2024-08-01',
    prizePool: 15000,
    slots: 16,
    slug: 'lol-masters',
  },
  {
    title: 'Valorant Cup',
    image: '/images/tournaments/valorant-cup.jpg',
    game: 'Valorant',
    date: '2024-08-15',
    prizePool: 8000,
    slots: 24,
    slug: 'valorant-cup',
  },
  {
    title: 'Dota 2 Invitational',
    image: '/images/tournaments/dota-2-invitational.jpg',
    game: 'Dota 2',
    date: '2024-09-01',
    prizePool: 20000,
    slots: 16,
    slug: 'dota-2-invitational',
  },
  {
    title: 'Overwatch 2 League',
    image: '/images/tournaments/overwatch-2-league.jpg',
    game: 'Overwatch 2',
    date: '2024-09-15',
    prizePool: 12000,
    slots: 12,
    slug: 'overwatch-2-league',
  },
  {
    title: 'Rocket League Cup',
    image: '/images/tournaments/rocket-league-cup.jpg',
    game: 'Rocket League',
    date: '2024-09-30',
    prizePool: 5000,
    slots: 32,
    slug: 'rocket-league-cup',
  },
];

const filters = {
  status: ['All', 'Upcoming', 'In Progress', 'Completed'],
  game: ['All', 'Counter-Strike 2', 'League of Legends', 'Valorant', 'Dota 2', 'Overwatch 2', 'Rocket League'],
  prizePool: ['All', '$5,000+', '$10,000+', '$15,000+'],
};

export default function TournamentPage() {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedGame, setSelectedGame] = useState('All');
  const [selectedPrizePool, setSelectedPrizePool] = useState('All');

  // Filter tournaments based on selected filters
  const filteredTournaments = tournaments.filter((tournament) => {
    const matchesGame = selectedGame === 'All' || tournament.game === selectedGame;
    const matchesPrizePool = selectedPrizePool === 'All' || (
      selectedPrizePool === '$5,000+' && tournament.prizePool >= 5000 ||
      selectedPrizePool === '$10,000+' && tournament.prizePool >= 10000 ||
      selectedPrizePool === '$15,000+' && tournament.prizePool >= 15000
    );
    return matchesGame && matchesPrizePool;
  });

  return (
    <>
      <PageHeader
        title="Tournaments"
        description="Join competitive gaming tournaments and win prizes"
      />

      {/* Filters */}
      <section className="py-8 bg-accent">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Status Filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Status</h3>
              <div className="flex flex-wrap gap-2">
                {filters.status.map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>

            {/* Game Filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Game</h3>
              <div className="flex flex-wrap gap-2">
                {filters.game.map((game) => (
                  <Button
                    key={game}
                    variant={selectedGame === game ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedGame(game)}
                  >
                    {game}
                  </Button>
                ))}
              </div>
            </div>

            {/* Prize Pool Filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Prize Pool</h3>
              <div className="flex flex-wrap gap-2">
                {filters.prizePool.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedPrizePool === amount ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedPrizePool(amount)}
                  >
                    {amount}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTournaments.map((tournament) => (
              <TournamentCard key={tournament.slug} {...tournament} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 