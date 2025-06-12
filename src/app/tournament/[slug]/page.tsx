'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Calendar, Users, Gamepad2, MapPin, DollarSign } from 'lucide-react';

// This would typically come from an API or database
const tournamentDetails = {
  'cyber-warriors-championship': {
    title: 'Cyber Warriors Championship 2024',
    image: '/images/tournaments/cyber-warriors-championship.jpg',
    description: 'The most prestigious Cyber Warriors tournament of the year, featuring the world\'s top teams.',
    game: 'Cyber Warriors',
    startDate: '2024-06-15',
    endDate: '2024-06-20',
    location: 'Los Angeles Convention Center',
    prizePool: '$1,000,000',
    format: 'Double Elimination',
    teams: [
      {
        name: 'Phoenix Gaming',
        seed: 1,
        image: '/images/teams/phoenix-gaming.jpg',
      },
      {
        name: 'Shadow Wolves',
        seed: 2,
        image: '/images/teams/shadow-wolves.jpg',
      },
      {
        name: 'Neon Dragons',
        seed: 3,
        image: '/images/teams/neon-dragons.jpg',
      },
      {
        name: 'Quantum Raiders',
        seed: 4,
        image: '/images/teams/quantum-raiders.jpg',
      },
    ],
    schedule: [
      {
        date: '2024-06-15',
        matches: [
          {
            time: '10:00 AM',
            team1: 'Phoenix Gaming',
            team2: 'Quantum Raiders',
            round: 'Quarter Finals',
          },
          {
            time: '2:00 PM',
            team1: 'Shadow Wolves',
            team2: 'Neon Dragons',
            round: 'Quarter Finals',
          },
        ],
      },
      {
        date: '2024-06-16',
        matches: [
          {
            time: '12:00 PM',
            team1: 'TBD',
            team2: 'TBD',
            round: 'Semi Finals',
          },
        ],
      },
      {
        date: '2024-06-20',
        matches: [
          {
            time: '3:00 PM',
            team1: 'TBD',
            team2: 'TBD',
            round: 'Finals',
          },
        ],
      },
    ],
    standings: [
      {
        position: 1,
        team: 'TBD',
        wins: 0,
        losses: 0,
        prize: '$500,000',
      },
      {
        position: 2,
        team: 'TBD',
        wins: 0,
        losses: 0,
        prize: '$250,000',
      },
      {
        position: 3,
        team: 'TBD',
        wins: 0,
        losses: 0,
        prize: '$150,000',
      },
      {
        position: 4,
        team: 'TBD',
        wins: 0,
        losses: 0,
        prize: '$100,000',
      },
    ],
  },
  // Add more tournaments here
};

export default function TournamentDetailsPage() {
  const params = useParams();
  const tournament = tournamentDetails[params.slug as keyof typeof tournamentDetails];
  const [activeTab, setActiveTab] = useState('overview');

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tournament not found</h1>
          <Button asChild>
            <Link href="/tournament">Back to Tournaments</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={tournament.image}
            alt={tournament.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              {tournament.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {tournament.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Register Now</Button>
              <Button size="lg" variant="outline">
                View Schedule
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tournament Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="standings">Standings</TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="overview" className="space-y-8">
                {/* Tournament Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Date</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {new Date(tournament.startDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                      })} -{' '}
                      {new Date(tournament.endDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Location</h3>
                    </div>
                    <p className="text-muted-foreground">{tournament.location}</p>
                  </div>

                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Prize Pool</h3>
                    </div>
                    <p className="text-muted-foreground">{tournament.prizePool}</p>
                  </div>

                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Gamepad2 className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Game</h3>
                    </div>
                    <p className="text-muted-foreground">{tournament.game}</p>
                  </div>

                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Trophy className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Format</h3>
                    </div>
                    <p className="text-muted-foreground">{tournament.format}</p>
                  </div>

                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Teams</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {tournament.teams.length} Participating
                    </p>
                  </div>
                </motion.div>

                {/* Participating Teams */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Participating Teams</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tournament.teams.map((team, index) => (
                      <motion.div
                        key={team.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card rounded-lg border overflow-hidden"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={team.image}
                            alt={team.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold">{team.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Seed #{team.seed}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="schedule">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {tournament.schedule.map((day) => (
                    <div key={day.date} className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        {new Date(day.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </h3>
                      <div className="space-y-4">
                        {day.matches.map((match, index) => (
                          <div
                            key={`${match.team1}-${match.team2}-${match.time}`}
                            className="bg-card rounded-lg border p-6"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {match.round}
                                </p>
                                <div className="text-lg font-semibold">
                                  {match.team1} vs {match.team2}
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">{match.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="standings">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-x-auto"
                >
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-6">Position</th>
                        <th className="text-left py-4 px-6">Team</th>
                        <th className="text-center py-4 px-6">W/L</th>
                        <th className="text-right py-4 px-6">Prize</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tournament.standings.map((standing) => (
                        <tr
                          key={standing.position}
                          className="border-b last:border-0"
                        >
                          <td className="py-4 px-6">#{standing.position}</td>
                          <td className="py-4 px-6">{standing.team}</td>
                          <td className="py-4 px-6 text-center">
                            {standing.wins}-{standing.losses}
                          </td>
                          <td className="py-4 px-6 text-right">
                            {standing.prize}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
} 