'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AuthFormProps {
  mode: 'login' | 'register';
  onSubmit: (data: { email: string; password: string; username?: string }) => void;
  onToggleMode: () => void;
}

export function AuthForm({ mode, onSubmit, onToggleMode }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-6 bg-card rounded-lg border"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        {mode === 'login' ? 'Welcome Back' : 'Create Account'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <Button type="submit" className="w-full">
          {mode === 'login' ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={onToggleMode}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {mode === 'login'
            ? "Don't have an account? Sign up"
            : 'Already have an account? Sign in'}
        </button>
      </div>
    </motion.div>
  );
} 