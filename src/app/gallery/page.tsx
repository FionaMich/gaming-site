'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

// This would typically come from an API or database
const galleryItems = [
  {
    id: 1,
    title: 'Tournament Finals',
    category: 'Events',
    image: '/images/gallery/tournament-finals.jpg',
  },
  {
    id: 2,
    title: 'Gaming Setup',
    category: 'Equipment',
    image: '/images/gallery/gaming-setup.jpg',
  },
  {
    id: 3,
    title: 'Team Practice',
    category: 'Teams',
    image: '/images/gallery/team-practice.jpg',
  },
  {
    id: 4,
    title: 'Community Event',
    category: 'Events',
    image: '/images/gallery/community-event.jpg',
  },
  {
    id: 5,
    title: 'Pro Gaming Arena',
    category: 'Venues',
    image: '/images/gallery/gaming-arena.jpg',
  },
  {
    id: 6,
    title: 'Victory Celebration',
    category: 'Events',
    image: '/images/gallery/victory-celebration.jpg',
  },
  {
    id: 7,
    title: 'Streaming Setup',
    category: 'Equipment',
    image: '/images/gallery/streaming-setup.jpg',
  },
  {
    id: 8,
    title: 'Team Meeting',
    category: 'Teams',
    image: '/images/gallery/team-meeting.jpg',
  },
  {
    id: 9,
    title: 'Gaming Competition',
    category: 'Events',
    image: '/images/gallery/gaming-competition.jpg',
  },
];

const categories = ['All', 'Events', 'Teams', 'Equipment', 'Venues'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <>
      <PageHeader
        title="Gallery"
        description="Explore our collection of gaming moments and events."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="relative w-full max-w-5xl aspect-[16/9]">
              <Image
                src={galleryItems.find((item) => item.id === selectedImage)?.image || ''}
                alt={galleryItems.find((item) => item.id === selectedImage)?.title || ''}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 