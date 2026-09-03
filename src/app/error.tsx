'use client';

import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

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
    <div className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy py-24">
      <div className="tech-grid" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-deep/50 via-blue/25 to-transparent"
      />

      <div className="container-custom relative z-10 max-w-2xl">
        <span className="inline-flex animate-fade-up items-center gap-3">
          <span className="status-dot animate-accent-blink" aria-hidden="true" />
          <span className="eyebrow">FALLO INESPERADO</span>
        </span>

        <h1
          className="mt-6 animate-fade-up text-balance text-h1 text-white"
          style={{ animationDelay: '80ms' }}
        >
          Algo ha salido mal
        </h1>

        <p
          className="mt-5 animate-fade-up text-lg leading-relaxed text-white/65"
          style={{ animationDelay: '180ms' }}
        >
          No hemos podido cargar esta parte del sitio. Vuelva a intentarlo; si el problema persiste,
          escríbanos y lo revisamos.
        </p>

        <div className="mt-10 animate-fade-up" style={{ animationDelay: '280ms' }}>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-primary px-7 py-4 text-sm tracking-[0.06em]"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            INTENTAR DE NUEVO
          </button>
        </div>
      </div>
    </div>
  );
}
