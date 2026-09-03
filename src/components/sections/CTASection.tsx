import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, Phone } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { company } from '@/data/company';

/**
 * Cierre de conversión. Se repite al final de portada, sectores, proyectos y
 * nosotros, así que es la pieza que más veces ve el visitante: va sobre
 * navy-deep para que se lea como un bloque aparte y no como una sección más.
 */
export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy-deep">
      <div className="rule-accent absolute inset-x-0 top-0" aria-hidden="true" />

      {/* Halo azul y rejilla técnica */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/[0.07] blur-[120px]"
      />
      <div className="tech-grid" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-3">
              <span className="status-dot animate-accent-blink" aria-hidden="true" />
              <span className="eyebrow">CONTACTO</span>
            </span>

            <h2 className="mt-6 text-balance text-h1 text-white">
              ¿Necesita una solución técnica?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              Cuéntenos qué necesita su operación y nuestro equipo podrá evaluar la solución
              adecuada. Respuesta garantizada en menos de 24 horas.
            </p>

            <div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contacto"
                className="btn btn-primary px-8 py-4 text-sm tracking-[0.06em]"
              >
                SOLICITAR PRESUPUESTO
                <ArrowRight className="btn-icon h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline px-8 py-4 text-sm tracking-[0.06em]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                WHATSAPP DIRECTO
              </a>
            </div>

            {/* Datos de contacto reales, en clave de ficha técnica. */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line pt-8 font-mono text-xs text-white/55">
              <a
                href={`tel:${company.contact.phone}`}
                className="link-underline transition-colors duration-base hover:text-accent"
              >
                {company.contact.phoneFormatted}
              </a>
              <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
              <a
                href={`mailto:${company.contact.email}`}
                className="link-underline break-all transition-colors duration-base hover:text-accent"
              >
                {company.contact.email}
              </a>
              <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
              <span className="uppercase tracking-[0.14em]">RUC {company.ruc}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
