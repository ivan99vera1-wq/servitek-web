import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { navigation } from '@/data/navigation';

/**
 * 404 con el mismo lenguaje que el resto del sitio: rótulo monoespaciado,
 * numeración, filete rojo y rejilla técnica. Además ofrece salida — el enlace
 * a Inicio y el índice de secciones — en lugar de dejar al visitante en un
 * callejón sin más botón que "volver".
 */
export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy py-24">
      <div className="tech-grid" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-deep/50 via-blue/25 to-transparent"
      />

      <div className="container-custom relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex animate-fade-up items-center gap-3">
              <span className="status-dot animate-accent-blink" aria-hidden="true" />
              <span className="eyebrow">ERROR 404</span>
            </span>

            <h1
              className="mt-6 animate-fade-up text-balance text-display text-white"
              style={{ animationDelay: '80ms' }}
            >
              Esta ruta no existe
            </h1>

            <p
              className="mt-6 max-w-lg animate-fade-up text-lg leading-relaxed text-white/65"
              style={{ animationDelay: '180ms' }}
            >
              La página que buscaba no está disponible o ha cambiado de dirección. Desde aquí puede
              volver al inicio o ir directamente a la sección que necesita.
            </p>

            <div
              className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
              style={{ animationDelay: '280ms' }}
            >
              <Link href="/" className="btn btn-primary px-7 py-4 text-sm tracking-[0.06em]">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                VOLVER AL INICIO
              </Link>
              <Link
                href="/contacto"
                className="btn btn-outline px-7 py-4 text-sm tracking-[0.06em]"
              >
                CONTACTAR
                <ArrowRight className="btn-icon h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Índice de secciones, numerado como el menú móvil. */}
          <nav
            className="animate-fade-up lg:col-span-5"
            style={{ animationDelay: '380ms' }}
            aria-label="Secciones del sitio"
          >
            <p className="eyebrow text-white/55">IR A UNA SECCIÓN</p>
            <ul className="mt-5 border-t border-line">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-4 border-b border-line py-4 text-white/70 transition-colors duration-fast hover:text-white"
                  >
                    <span
                      aria-hidden="true"
                      className="index-number text-white/30 transition-colors duration-base group-hover:text-accent"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    <ArrowRight
                      className="ml-auto h-4 w-4 -translate-x-1 opacity-0 transition-[opacity,transform] duration-base ease-out-expo group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
