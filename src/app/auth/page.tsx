'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthForm } from '@/components/auth/auth-form';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const router = useRouter();

  const handleSubmit = async (data: { email: string; password: string; username?: string }) => {
    // In a real application, this would make an API call to authenticate or register the user
    console.log('Form submitted:', data);
    
    try {
      if (mode === 'login') {
        // Simulate login API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('User logged in');
      } else {
        // Simulate registration API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('User registered');
      }

      // Redirect to home page after successful auth
      router.push('/');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <AuthForm
          mode={mode}
          onSubmit={handleSubmit}
          onToggleMode={() => setMode(mode === 'login' ? 'register' : 'login')}
        />
      </div>
    </div>
  );
} 