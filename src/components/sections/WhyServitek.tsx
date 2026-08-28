import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { whyServitek } from '@/data/company-content';

export function WhyServitek() {
  return (
    <section className="section-padding bg-[#061321] relative">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue/80">
              <span className="w-8 h-[1px] bg-blue" />
              ¿POR QUÉ SERVITEK?
              <span className="w-8 h-[1px] bg-blue" />
            </span>
            <h2 className="mt-6 text-h2 lg:text-h1 font-bold text-white text-balance">
              {whyServitek.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {whyServitek.pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.number} delay={index * 100}>
              <div className="text-center md:text-left">
                <span className="font-mono text-4xl font-bold text-blue/30">
                  {pillar.number}
                </span>
                <h3 className="mt-4 text-base font-semibold text-white uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-white/45 leading-relaxed">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
