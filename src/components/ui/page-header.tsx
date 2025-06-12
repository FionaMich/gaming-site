'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" />
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
} 