import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { aboutContent } from '@/data/company-content';
import { Shield, Clock, Zap } from 'lucide-react';

const icons = [Shield, Clock, Zap];

/**
 * Propuesta de valor.
 *
 * Composición editorial asimétrica: el titular ocupa cinco columnas a la
 * izquierda y los tres diferenciales caen a la derecha como una lista
 * numerada con filetes, no como tres tarjetas idénticas. Es la sección que
 * marca el ritmo entre la banda de confianza (densa) y las unidades de
 * negocio (rejilla), así que necesita mucho aire.
 */
export function ValueProposition() {
  return (
    <section className="section-padding relative bg-navy">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Columna izquierda: titular */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-3">
                <span className="status-dot" aria-hidden="true" />
                <span className="eyebrow">PROPUESTA DE VALOR</span>
              </span>

              <h2 className="mt-6 text-balance text-h1 text-white">
                Soluciones diseñadas para mantener su operación en marcha.
              </h2>

              <div className="rule-accent mt-8" aria-hidden="true" />

              <p className="mt-8 text-lg leading-relaxed text-white/65">
                Trabajamos en los sectores más exigentes de la industria paraguaya, donde la
                continuidad operativa no es opcional.
              </p>
            </ScrollReveal>
          </div>

          {/* Columna derecha: diferenciales numerados */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {aboutContent.differentials.map((item, index) => {
                const Icon = icons[index] || Shield;
                return (
                  <li key={item.title}>
                    <ScrollReveal delay={index * 110} direction="right">
                      <div className="group flex items-start gap-6 py-8 md:gap-10 md:py-10">
                        <span className="index-number pt-1.5">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="shrink-0 rounded-lg bg-blue/10 p-3 text-blue-text transition-[background-color,color,transform] duration-base ease-out-expo group-hover:-translate-y-0.5 group-hover:bg-blue-solid group-hover:text-white">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-h4 text-white">{item.title}</h3>
                          <p className="mt-2.5 leading-relaxed text-white/65">{item.description}</p>
                          {/* Filete que se extiende al pasar por encima */}
                          <span
                            aria-hidden="true"
                            className="mt-5 block h-px w-8 bg-accent/60 transition-[width] duration-base ease-out-expo group-hover:w-24"
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
