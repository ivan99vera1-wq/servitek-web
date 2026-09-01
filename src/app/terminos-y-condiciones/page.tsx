import { Metadata } from 'next';
import { company } from '@/data/company';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sitio web de SERVITEK E.A.S.',
  path: '/terminos-y-condiciones',
  // PENDIENTE (empresa): texto legal sin redactar. No indexar hasta publicarlo.
  noIndex: true,
});

export default function TerminosYCondiciones() {
  return (
    <main className="min-h-screen bg-[#061321] py-16 md:py-24">
      <div className="container-custom">
        <h1 className="text-h2 md:text-display font-bold text-white">Términos y Condiciones</h1>

        <div className="mt-8 max-w-3xl">
          <h2 className="text-h4 font-semibold text-white/90">Titular del sitio</h2>
          <p className="mt-3 text-white/70">
            <strong className="text-white">{company.legalName}</strong>
            <br />
            RUC: {company.ruc}
            <br />
            {company.contact.address}
            <br />
            <a
              href={`mailto:${company.contact.email}`}
              className="text-blue-text hover:underline"
            >
              {company.contact.email}
            </a>
            <br />
            <a href={`tel:${company.contact.phone}`} className="text-blue-text hover:underline">
              {company.contact.phoneFormatted}
            </a>
          </p>

          <h2 className="text-h4 mt-10 font-semibold text-white/90">Objeto del sitio</h2>
          <p className="mt-3 text-white/70">
            Este sitio web tiene carácter informativo. Presenta los servicios de ingeniería
            eléctrica y electromecánica de {company.name} y facilita el contacto con la empresa. No
            se comercializan productos ni servicios a través del sitio, y su contenido no
            constituye una oferta contractual: cualquier trabajo se rige por el presupuesto y las
            condiciones que se acuerden por escrito en cada caso.
          </p>

          <h2 className="text-h4 mt-10 font-semibold text-white/90">Propiedad intelectual</h2>
          <p className="mt-3 text-white/70">
            Los logotipos, marcas y contenidos de este sitio pertenecen a {company.legalName} o a
            sus respectivos titulares, y no pueden reproducirse sin autorización previa.
          </p>

          <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/60">
              Documento en revisión. La versión definitiva se publicará antes de la puesta en
              marcha del sitio.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
