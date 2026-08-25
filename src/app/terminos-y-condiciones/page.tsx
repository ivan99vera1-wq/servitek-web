import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sitio web de SERVITEK.',
};

export default function TerminosYCondiciones() {
  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container-custom">
        <h1 className="text-h2 md:text-display font-bold text-primary">
          Términos y Condiciones
        </h1>

        <div className="prose prose-lg mt-8 max-w-none">
          <p className="text-text-muted">
            <em>
              Estos términos y condiciones están pendientes de redacción por
              parte del cliente. El contenido completo deberá incluir:
            </em>
          </p>

          <ul className="mt-4 list-inside list-disc space-y-2 text-text-muted">
            <li>Condiciones de uso del sitio web</li>
            <li>Propiedad intelectual</li>
            <li>Limitación de responsabilidad</li>
            <li>Enlaces a sitios de terceros</li>
            <li>Modificaciones de los términos</li>
            <li>Ley aplicable y jurisdicción</li>
            <li>Información de contacto</li>
          </ul>

          <p className="mt-6 text-text-muted">
            <strong>SERVITEK E.A.S.</strong>
            <br />
            RUC: 80176311-8
            <br />
            Email: servitek.py@gmail.com
            <br />
            Teléfono: 0981 118743
          </p>
        </div>
      </div>
    </main>
  );
}
