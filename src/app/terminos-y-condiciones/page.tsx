import { Metadata } from 'next';
import { company } from '@/data/company';
import { PageHero } from '@/components/ui/PageHero';
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
    <>
      <PageHero eyebrow="LEGAL" title="Términos y Condiciones" />

      {/* max-w-[68ch]: medida de lectura cómoda para texto corrido. Sin
          límite, en 1440 px las líneas superaban los 120 caracteres. */}
      <div className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-[68ch]">
            <h2 className="mt-12 text-h4 text-white first:mt-0">Titular del sitio</h2>
            <p className="mt-3 text-white/70">
              <strong className="text-white">{company.legalName}</strong>
              <br />
              RUC: {company.ruc}
              <br />
              {company.contact.address}
              <br />
              <a
                href={`mailto:${company.contact.email}`}
                className="link-underline text-blue-text transition-colors duration-fast hover:text-accent"
              >
                {company.contact.email}
              </a>
              <br />
              <a
                href={`tel:${company.contact.phone}`}
                className="link-underline text-blue-text transition-colors duration-fast hover:text-accent"
              >
                {company.contact.phoneFormatted}
              </a>
            </p>

            <h2 className="mt-12 text-h4 text-white first:mt-0">Objeto del sitio</h2>
            <p className="mt-3 text-white/70">
              Este sitio web tiene carácter informativo. Presenta los servicios electromecánicos de{' '}
              {company.name} y facilita el contacto con la empresa. No se comercializan productos ni
              servicios a través del sitio, y su contenido no constituye una oferta contractual:
              cualquier trabajo se rige por el presupuesto y las condiciones que se acuerden por
              escrito en cada caso.
            </p>

            <h2 className="mt-12 text-h4 text-white first:mt-0">Propiedad intelectual</h2>
            <p className="mt-3 text-white/70">
              Los logotipos, marcas y contenidos de este sitio pertenecen a {company.legalName} o a
              sus respectivos titulares, y no pueden reproducirse sin autorización previa.
            </p>

            <div className="mt-14 rounded-[14px] border border-line bg-white/[0.03] p-6">
              <p className="eyebrow mb-3 block text-accent">EN REVISIÓN</p>
              <p className="text-sm leading-relaxed text-white/70">
                Documento en revisión. La versión definitiva se publicará antes de la puesta en
                marcha del sitio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
