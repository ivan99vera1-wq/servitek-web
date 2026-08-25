import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-display font-bold text-primary">404</h1>
        <h2 className="text-h3 mt-4 font-semibold text-primary">
          Página no encontrada
        </h2>
        <p className="text-body mt-2 text-text-muted">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
