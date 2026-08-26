import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'primary' | 'accent';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface text-text',
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
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
