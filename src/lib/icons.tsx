import { Lightbulb, Cog, Wrench, Zap, PackageCheck, type LucideIcon } from 'lucide-react';

/**
 * Iconos de las unidades de negocio.
 *
 * Único punto donde se asocia `service.icon` con su componente. Antes este
 * mapa estaba duplicado en tres ficheros y añadir un servicio obligaba a
 * tocarlos todos.
 */
const icons: Record<string, LucideIcon> = {
  Lightbulb,
  Cog,
  Wrench,
  Zap,
  PackageCheck,
};

/** Devuelve el icono del servicio, o Zap si el nombre no está registrado. */
export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Zap;
  return <Icon className={className} aria-hidden="true" />;
}
