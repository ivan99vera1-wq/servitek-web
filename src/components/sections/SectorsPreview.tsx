import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { sectors } from '@/data/sectors';

export function SectorsPreview() {
  const featuredSectors = sectors.slice(0, 4);

  return (
    <section className="section-padding bg-[#0A1F35]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
              <span className="w-8 h-[1px] bg-blue" />
              SECTORES
              <span className="w-8 h-[1px] bg-blue" />
            </span>
            <h2 className="mt-6 text-h2 lg:text-h1 font-bold text-white text-balance">
              Sectores que atendemos
            </h2>
            <p className="mt-4 text-lg text-white/65 max-w-3xl mx-auto">
              Soluciones especializadas para los sectores industriales más exigentes de Paraguay.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredSectors.map((sector, index) => (
            <ScrollReveal key={sector.id} delay={index * 100}>
              <Link
                href={`/sectores/${sector.slug}`}
                className="card-dark block p-6 h-full group relative overflow-hidden"
              >
                {/* Número de fondo */}
                {/* Marca de agua decorativa: el número visible es el de abajo. */}
                <span
                  aria-hidden="true"
                  className="absolute -top-2 -right-2 font-mono text-[80px] font-bold text-white/[0.02] leading-none select-none"
                >
                  0{index + 1}
                </span>

                <span className="relative font-mono text-xs text-blue-text/90">
                  0{index + 1}
                </span>
                <h3 className="relative mt-2 text-lg font-semibold text-white group-hover:text-blue-text transition-colors duration-300">
                  {sector.shortTitle}
                </h3>
                <p className="relative mt-2 text-sm text-white/60 line-clamp-2 leading-relaxed">
                  {sector.description}
                </p>
                <div className="relative mt-4 inline-flex items-center text-sm font-medium text-white/70 group-hover:text-blue-text transition-colors duration-300">
                  Ver soluciones
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <Link
              href="/sectores"
              className="inline-flex items-center text-sm font-medium text-white/70 hover:text-blue-text transition-colors"
            >
              Ver todos los sectores
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
