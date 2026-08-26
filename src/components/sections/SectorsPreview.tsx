import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { sectors } from '@/data/sectors';

export function SectorsPreview() {
  const featuredSectors = sectors.slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            title="Sectores que atendemos"
            subtitle="Soluciones especializadas para los sectores industriales más exigentes de Paraguay."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSectors.map((sector, index) => (
            <ScrollReveal key={sector.id} delay={index * 100}>
              <Link
                href={`/sectores/${sector.slug}`}
                className="card-industrial block p-6 h-full group"
              >
                <span className="label-engineering text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {sector.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted line-clamp-2">
                  {sector.description}
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  Ver soluciones
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <Link
              href="/sectores"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Ver todos los sectores
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
