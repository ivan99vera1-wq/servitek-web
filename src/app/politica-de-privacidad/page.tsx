import { Metadata } from 'next';
import { company } from '@/data/company';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Política de Privacidad',
  description: 'Política de privacidad y tratamiento de datos personales de SERVITEK E.A.S.',
  path: '/politica-de-privacidad',
  // PENDIENTE (empresa): texto legal sin redactar. No indexar hasta publicarlo.
  noIndex: true,
});

export default function PoliticaDePrivacidad() {
  return (
    <main className="min-h-screen bg-[#061321] py-16 md:py-24">
      <div className="container-custom">
        <h1 className="text-h2 md:text-display font-bold text-white">Política de Privacidad</h1>

        <div className="mt-8 max-w-3xl">
          <h2 className="text-h4 font-semibold text-white/90">Responsable del tratamiento</h2>
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

          <h2 className="text-h4 mt-10 font-semibold text-white/90">Datos que tratamos</h2>
          <p className="mt-3 text-white/70">
            Este sitio web no instala cookies propias ni de terceros, no utiliza herramientas de
            analítica y no almacena datos de navegación.
          </p>
          <p className="mt-3 text-white/70">
            El formulario de contacto no envía información a ningún servidor de SERVITEK: al
            enviarlo se abre WhatsApp en su propio dispositivo con los datos que usted haya
            escrito, y es usted quien decide si completa el envío. En ese caso, la comunicación se
            rige además por las condiciones de WhatsApp.
          </p>

          <h2 className="text-h4 mt-10 font-semibold text-white/90">Finalidad y conservación</h2>
          <p className="mt-3 text-white/70">
            Los datos que nos haga llegar se utilizan únicamente para atender su consulta y
            elaborar, en su caso, la propuesta técnica solicitada. Puede solicitar en cualquier
            momento el acceso, la rectificación o la eliminación de sus datos escribiendo a la
            dirección de correo indicada más arriba.
          </p>

          <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/60">
              Documento en revisión. La versión definitiva, redactada conforme a la normativa
              paraguaya aplicable en materia de protección de datos personales, se publicará
              antes de la puesta en marcha del sitio.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
