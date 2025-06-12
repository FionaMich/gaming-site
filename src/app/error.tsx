'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Something went wrong!</h2>
        <p className="text-muted-foreground">
          {error.message || 'An unexpected error occurred'}
        </p>
        <Button
          onClick={reset}
          variant="outline"
        >
          Try again
        </Button>
      </div>
    </div>
  );
} 