'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PageHeader } from '@/components/ui/page-header';
import { cn } from '@/lib/utils';
import { type BaseComponentProps } from '@/types';

interface Team {
  name: string;
  image: string;
  slug: string;
}

interface PointTableEntry {
  position: number;
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  form: Array<'W' | 'L' | 'D'>;
  trend: 'up' | 'down' | 'same';
}

interface PointTableData {
  [key: string]: PointTableEntry[];
}

// This would typically come from an API or database
const tournaments = [
  'Premier League',
  'Champions League',
  'Europa League',
];

const pointTableData = {
  'premier-league': [
    {
      position: 1,
      team: {
        name: "Arsenal",
        image: "/images/teams/arsenal.png",
        slug: "arsenal",
      },
      played: 26,
      won: 18,
      drawn: 4,
      lost: 4,
      gf: 62,
      ga: 24,
      gd: 38,
      points: 58,
      form: ["W", "W", "W", "L", "W"],
      trend: "up",
    },
    {
      position: 2,
      team: {
        name: "Manchester City",
        image: "/images/teams/manchester-city.png",
        slug: "manchester-city",
      },
      played: 26,
      won: 17,
      drawn: 5,
      lost: 4,
      gf: 58,
      ga: 26,
      gd: 32,
      points: 56,
      form: ["W", "W", "W", "W", "D"],
      trend: "up",
    },
    {
      position: 3,
      team: {
        name: "Liverpool",
        image: "/images/teams/liverpool.png",
        slug: "liverpool",
      },
      played: 26,
      won: 16,
      drawn: 6,
      lost: 4,
      gf: 55,
      ga: 25,
      gd: 30,
      points: 54,
      form: ["L", "W", "W", "W", "D"],
      trend: "same",
    },
  ],
  'champions-league': [
    // Add Champions League data here with the same structure
  ],
  'europa-league': [
    // Add Europa League data here with the same structure
  ],
};

export default function PointTablePage() {
  const [selectedTournament, setSelectedTournament] = React.useState(tournaments[0]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getFormBadge = (result: string) => {
    switch (result) {
      case 'W':
        return (
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
            W
          </span>
        );
      case 'L':
        return (
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500/10 text-red-500 text-xs font-medium">
            L
          </span>
        );
      default:
        return (
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-medium">
            D
          </span>
        );
    }
  };

  const normalizedTournamentKey = selectedTournament.toLowerCase().replace(/\s+/g, '-');
  const tableData = pointTableData[normalizedTournamentKey as keyof typeof pointTableData] || [];

  return (
    <>
      <PageHeader
        title="Point Table"
        description="Current standings and statistics for all tournaments."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Select
              value={selectedTournament}
              onValueChange={setSelectedTournament}
            >
              <SelectTrigger className="w-full sm:w-[300px]">
                <SelectValue placeholder="Select tournament" />
              </SelectTrigger>
              <SelectContent>
                {tournaments.map((tournament) => (
                  <SelectItem key={tournament} value={tournament}>
                    {tournament}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-card rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 font-medium">Position</th>
                    <th className="text-left py-4 px-6 font-medium">Team</th>
                    <th className="text-center py-4 px-6 font-medium">Played</th>
                    <th className="text-center py-4 px-6 font-medium">Won</th>
                    <th className="text-center py-4 px-6 font-medium">Drawn</th>
                    <th className="text-center py-4 px-6 font-medium">Lost</th>
                    <th className="text-center py-4 px-6 font-medium">GF</th>
                    <th className="text-center py-4 px-6 font-medium">GA</th>
                    <th className="text-center py-4 px-6 font-medium">GD</th>
                    <th className="text-center py-4 px-6 font-medium">Points</th>
                    <th className="text-center py-4 px-6 font-medium">Form</th>
                    <th className="text-center py-4 px-6 font-medium">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <motion.tr
                      key={row.team.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b last:border-0 hover:bg-muted/50"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {row.position === 1 && (
                            <Trophy className="h-4 w-4 text-primary" />
                          )}
                          <span className={row.position === 1 ? 'font-semibold' : ''}>
                            #{row.position}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Link
                          href={`/team/${row.team.slug}`}
                          className="flex items-center gap-3 hover:text-primary transition-colors"
                        >
                          <div className="relative w-10 h-10">
                            <Image
                              src={row.team.image}
                              alt={row.team.name}
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <span className="font-medium">{row.team.name}</span>
                        </Link>
                      </td>
                      <td className="py-4 px-6 text-center">{row.played}</td>
                      <td className="py-4 px-6 text-center">{row.won}</td>
                      <td className="py-4 px-6 text-center">{row.drawn}</td>
                      <td className="py-4 px-6 text-center">{row.lost}</td>
                      <td className="py-4 px-6 text-center">{row.gf}</td>
                      <td className="py-4 px-6 text-center">{row.ga}</td>
                      <td className="py-4 px-6 text-center">{row.gd}</td>
                      <td className="py-4 px-6 text-center font-semibold">{row.points}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-1">
                          {row.form.map((result, i) => (
                            <div key={i}>{getFormBadge(result)}</div>
                          ))}
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        {getTrendIcon(row.trend)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Legend</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                <span className="text-sm">Tournament Leader</span>
              </div>
              <div className="flex items-center gap-2">
                {getFormBadge('W')}
                <span className="text-sm">Win</span>
              </div>
              <div className="flex items-center gap-2">
                {getFormBadge('L')}
                <span className="text-sm">Loss</span>
              </div>
              <div className="flex items-center gap-2">
                {getFormBadge('D')}
                <span className="text-sm">Draw</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 