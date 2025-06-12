'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/page-header';
import { Trophy, Users, Gamepad2, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: Trophy,
    title: 'Professional Tournaments',
    description:
      'Join our professionally organized tournaments with substantial prize pools.',
  },
  {
    icon: Users,
    title: 'Active Community',
    description:
      'Be part of a thriving gaming community with thousands of active members.',
  },
  {
    icon: Gamepad2,
    title: 'Multiple Games',
    description:
      'Compete in various popular games across different genres and platforms.',
  },
  {
    icon: Target,
    title: 'Skill Development',
    description:
      'Improve your gaming skills through coaching and practice sessions.',
  },
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Tournament Director',
    image: '/images/authors/sarah-johnson.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Community Manager',
    image: '/images/authors/michael-chen.jpg',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Head of Operations',
    image: '/images/authors/alex-rodriguez.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Bamer"
        description="Your premier destination for gaming excellence and competitive eSports."
      />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Bamer</h1>
            <p className="text-xl text-muted-foreground mb-12">
              We are dedicated to creating the ultimate gaming experience for
              players of all skill levels. Our platform brings together competitive
              gaming, community engagement, and professional esports.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card p-6 rounded-lg border hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The dedicated professionals behind Bamer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(({ name, role, image }) => (
              <div
                key={name}
                className="bg-card rounded-lg border overflow-hidden group"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{name}</h3>
                  <p className="text-muted-foreground">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your gaming journey with Bamer today and become part of our
              growing community.
            </p>
            <Link
              href="/tournament"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
            >
              Join Tournament
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 