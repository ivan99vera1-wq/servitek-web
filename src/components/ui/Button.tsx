import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  /** Si se indica, se renderiza como enlace. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-solid text-white hover:bg-blue-solid-hover hover:shadow-glow-sm',
  secondary: 'bg-navy-light text-white hover:bg-navy-lighter',
  outline: 'border-2 border-white/25 text-white hover:bg-white hover:text-navy',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/**
 * Sin 'use client': no tiene estado ni manejadores. Se usa como enlace en
 * todas las páginas y como <button type="submit"> dentro del formulario,
 * que ya es un componente cliente.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-text',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-navy',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
