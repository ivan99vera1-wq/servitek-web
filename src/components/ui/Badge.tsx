import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'primary' | 'accent';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/5 text-white/60',
  primary: 'bg-blue/10 text-blue',
  accent: 'bg-blue/10 text-blue',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
