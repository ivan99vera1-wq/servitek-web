import Image from 'next/image';

/**
 * Pantalla de carga.
 *
 * Es una exportación estática: en la práctica casi nunca llega a verse. Por
 * eso no lleva nada que haya que descargar aparte del logotipo, que ya está
 * en caché desde la cabecera, y ninguna animación dura más de 1,4 s.
 */
export default function Loading() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy px-4">
      <div className="tech-grid opacity-70" aria-hidden="true" />

      <div className="relative flex w-full max-w-xs animate-fade-in flex-col items-center gap-8">
        <Image
          src="/images/logo/logo-principal.webp"
          alt="SERVITEK"
          width={181}
          height={60}
          className="h-11 w-auto"
          priority
        />

        {/* Barra de progreso indeterminada: raíl fino y un tramo rojo que lo
            recorre. Transmite "cargando" sin fingir un porcentaje real. */}
        <div
          className="relative h-px w-full overflow-hidden bg-line-strong"
          role="progressbar"
          aria-label="Cargando"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1/4 animate-progress-sweep bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>

        <p className="font-mono text-eyebrow uppercase text-white/55">Cargando</p>
      </div>
    </div>
  );
}
