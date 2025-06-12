'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Gamepad2, Medal, Calendar, MapPin } from 'lucide-react';

// This would typically come from an API or database
const teamDetails = {
  'phoenix-gaming': {
    name: 'Phoenix Gaming',
    image: '/images/teams/phoenix-gaming.jpg',
    description: 'Rising from the ashes to dominate the competitive gaming scene with unmatched skill and determination.',
    longDescription: `Phoenix Gaming is one of the most prestigious esports organizations in the world. Founded in 2018, the team has quickly risen through the ranks to become a dominant force in multiple competitive gaming titles.

    Known for their aggressive playstyle and innovative strategies, Phoenix Gaming has consistently placed in the top rankings of major tournaments. The team's dedication to excellence and player development has created a strong foundation for success.`,
    members: [
      {
        name: 'Alex "Blaze" Chen',
        role: 'Team Captain',
        image: '/images/teams/members/alex-chen.jpg',
        games: ['Cyber Warriors', 'Tactical Force'],
      },
      {
        name: 'Sarah "Nova" Williams',
        role: 'Strategic Lead',
        image: '/images/teams/members/sarah-williams.jpg',
        games: ['Cyber Warriors'],
      },
      {
        name: 'Marcus "Titan" Johnson',
        role: 'Support Specialist',
        image: '/images/teams/members/marcus-johnson.jpg',
        games: ['Cyber Warriors', 'Fantasy Realms'],
      },
    ],
    achievements: [
      {
        title: 'World Championship 2023',
        place: '1st Place',
        prize: '$500,000',
        date: 'December 2023',
      },
      {
        title: 'Summer Invitational',
        place: '2nd Place',
        prize: '$250,000',
        date: 'August 2023',
      },
      {
        title: 'Regional Masters',
        place: '1st Place',
        prize: '$100,000',
        date: 'May 2023',
      },
    ],
    stats: {
      totalWins: 156,
      mainGame: 'Cyber Warriors',
      founded: '2018',
      location: 'Los Angeles, CA',
      totalPrizeMoney: '$2.5M+',
    },
    upcomingMatches: [
      {
        opponent: 'Shadow Wolves',
        date: '2024-04-15',
        tournament: 'Spring Championship',
        game: 'Cyber Warriors',
      },
      {
        opponent: 'Neon Dragons',
        date: '2024-04-22',
        tournament: 'Pro League',
        game: 'Tactical Force',
      },
    ],
  },
  // Add more teams here
};

export default function TeamDetailsPage() {
  const params = useParams();
  const team = teamDetails[params.slug as keyof typeof teamDetails];

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Team not found</h1>
          <Button asChild>
            <Link href="/team">Back to Teams</Link>
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
            src={team.image}
            alt={team.name}
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
              {team.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {team.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Follow Team</Button>
              <Button size="lg" variant="outline">
                View Schedule
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose dark:prose-invert max-w-none mb-12"
              >
                <h2 className="text-3xl font-bold mb-6">About the Team</h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {team.longDescription}
                </p>
              </motion.div>

              {/* Team Members */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Team Members</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {team.members.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-lg border overflow-hidden"
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">{member.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {member.role}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {member.games.map((game) => (
                            <span
                              key={game}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                            >
                              {game}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Recent Achievements</h2>
                <div className="space-y-4">
                  {team.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-card rounded-lg border"
                    >
                      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.place} • {achievement.prize}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.date}
                      </div>
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
              {/* Team Stats */}
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Team Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Total Wins</p>
                      <p className="font-medium">{team.stats.totalWins}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gamepad2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Main Game</p>
                      <p className="font-medium">{team.stats.mainGame}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Founded</p>
                      <p className="font-medium">{team.stats.founded}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{team.stats.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Medal className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Prize Money
                      </p>
                      <p className="font-medium">{team.stats.totalPrizeMoney}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Matches */}
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Upcoming Matches</h3>
                <div className="space-y-4">
                  {team.upcomingMatches.map((match) => (
                    <div
                      key={`${match.opponent}-${match.date}`}
                      className="border-b last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">vs. {match.opponent}</p>
                          <p className="text-sm text-muted-foreground">
                            {match.tournament}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(match.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-primary">{match.game}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 