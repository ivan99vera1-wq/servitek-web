import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#061321] px-4">
      <div className="text-center">
        <h1 className="text-display font-bold text-white">404</h1>
        <h2 className="text-h3 mt-4 font-semibold text-white">
          Página no encontrada
        </h2>
        <p className="text-body mt-2 text-white/60">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-blue-solid px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-solid-hover"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
