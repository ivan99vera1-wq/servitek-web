'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-h2 font-bold text-primary">Error</h1>
        <h2 className="text-h3 mt-4 font-semibold text-primary">
          Algo salió mal
        </h2>
        <p className="text-body mt-2 text-text-muted">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta de nuevo.
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
