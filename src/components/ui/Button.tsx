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

/**
 * Se apoya en las clases `.btn` de globals.css para que estos botones lleven
 * la misma luz recorriendo el borde que el resto del sitio. `secondary`
 * comparte el tratamiento de `outline`: son los dos niveles no principales y
 * mantener un tercer estilo solo abría una variante más que sostener.
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-outline',
  outline: 'btn btn-outline',
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
  /* Las clases de variante van primero y sin pasar por twMerge: `.btn` y
     `.btn-primary` no son utilidades de Tailwind y tailwind-merge no las
     conoce, pero sí reconocería un choque entre ellas y `className`. */
  const classes = `${variantStyles[variant]} ${cn(
    'disabled:cursor-not-allowed disabled:opacity-50',
    sizeStyles[size],
    className
  )}`;

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
