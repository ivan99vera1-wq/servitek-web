import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/services/ServiceCard';
import { services } from '@/data/services';

/**
 * Unidades de negocio.
 *
 * Antes duplicaba, con otro tamaño, el mismo marcado que ServiceCard: dos
 * tarjetas de servicio distintas en dos páginas del mismo sitio. Ahora usa el
 * componente compartido y rompe la rejilla haciendo que la primera unidad
 * ocupe las dos columnas — la jerarquía la marca la composición, no un estilo
 * paralelo.
 */
export function BusinessUnits() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy-light">
      <div className="tech-grid opacity-70" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="ÁREAS DE SERVICIO"
            title="Cinco unidades de negocio"
            description="Del diagnóstico y el montaje al mantenimiento y la provisión de materiales certificados."
            className="mb-14 md:mb-20"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={index * 90}
              fullHeight
              className={index === 0 ? 'md:col-span-2' : undefined}
            >
              <ServiceCard service={service} index={index} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/servicios"
              className="link-underline py-2 text-sm font-medium text-white/75 transition-colors duration-base hover:text-blue-text"
            >
              Ver todos los servicios
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
