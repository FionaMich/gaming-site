'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/page-header';
import { TeamCard } from '@/components/ui/team-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// This would typically come from an API or database
const teams = [
  {
    name: 'Phoenix Gaming',
    slug: 'phoenix-gaming',
    image: '/images/teams/phoenix-gaming.jpg',
    description: 'Rising from the ashes to dominate the competitive gaming scene with unmatched skill and determination.',
    members: 12,
    wins: 156,
    mainGame: 'Cyber Warriors',
    category: 'Professional',
  },
  {
    name: 'Shadow Wolves',
    slug: 'shadow-wolves',
    image: '/images/teams/shadow-wolves.jpg',
    description: 'A pack of elite gamers known for their strategic prowess and teamwork in multiple esports titles.',
    members: 15,
    wins: 203,
    mainGame: 'Tactical Force',
    category: 'Professional',
  },
  {
    name: 'Neon Dragons',
    slug: 'neon-dragons',
    image: '/images/teams/neon-dragons.jpg',
    description: 'Bringing the heat to competitive gaming with their flashy plays and innovative strategies.',
    members: 8,
    wins: 89,
    mainGame: 'Fantasy Realms',
    category: 'Semi-Pro',
  },
  {
    name: 'Quantum Raiders',
    slug: 'quantum-raiders',
    image: '/images/teams/quantum-raiders.jpg',
    description: 'A rising force in the amateur scene, known for their dedication and rapid improvement.',
    members: 10,
    wins: 45,
    mainGame: 'Cyber Warriors',
    category: 'Amateur',
  },
  {
    name: 'Frost Giants',
    slug: 'frost-giants',
    image: '/images/teams/frost-giants.jpg',
    description: 'Dominating the northern esports scene with their cool-headed approach to competitive gaming.',
    members: 14,
    wins: 178,
    mainGame: 'Tactical Force',
    category: 'Professional',
  },
];

const categories = ['All', 'Professional', 'Semi-Pro', 'Amateur'];

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTeams = teams.filter((team) => {
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.mainGame.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || team.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        title="Teams"
        description="Discover and follow the best gaming teams in the world."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredTeams.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <h3 className="text-xl font-semibold mb-2">No teams found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTeams.map((team) => (
                <TeamCard key={team.slug} {...team} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
} 