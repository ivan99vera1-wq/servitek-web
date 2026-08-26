import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'bg-primary py-16 md:py-24',
        className
      )}
    >
      <div className="container-custom">
        <h1 className="text-h1 md:text-display text-white text-balance">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/80 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
