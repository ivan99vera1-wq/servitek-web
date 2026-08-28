import { CheckCircle, Target, Settings, Clock, Users } from 'lucide-react';

const trustItems = [
  { icon: CheckCircle, text: 'CALIDAD GARANTIZADA' },
  { icon: Target, text: 'EXPERIENCIA' },
  { icon: Settings, text: 'COMPROMISO' },
  { icon: Clock, text: 'ENTREGA OPORTUNA' },
  { icon: Users, text: 'ALIANZAS' },
];

export function TrustBar() {
  return (
    <section className="relative bg-[#071827] border-y border-white/[0.06] overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue/30 to-transparent" />

      <div className="container-custom py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
          {trustItems.map((item, index) => (
            <div key={item.text} className="flex items-center gap-3">
              <item.icon className="h-4 w-4 text-blue shrink-0" />
              <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] text-white/55 whitespace-nowrap">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-[1px] h-4 bg-white/10 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
