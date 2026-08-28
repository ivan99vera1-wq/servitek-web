import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      <h2 className="heading-primary text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-white/50 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
