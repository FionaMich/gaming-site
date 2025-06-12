import * as React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
} 