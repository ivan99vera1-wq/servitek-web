import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y tratamiento de datos personales de SERVITEK.',
};

export default function PoliticaDePrivacidad() {
  return (
    <main className="min-h-screen bg-[#061321] py-16 md:py-24">
      <div className="container-custom">
        <h1 className="text-h2 md:text-display font-bold text-white">
          Política de Privacidad
        </h1>

        <div className="mt-8 max-w-none">
          <p className="text-white/45">
            <em>
              Esta política de privacidad está pendiente de redacción por parte
              del cliente. El contenido completo deberá incluir:
            </em>
          </p>

          <ul className="mt-4 list-inside list-disc space-y-2 text-white/45">
            <li>Datos recopilados del usuario</li>
            <li>Finalidad del tratamiento de datos</li>
            <li>Base legal para el tratamiento</li>
            <li>Conservación de datos</li>
            <li>Compartición con terceros</li>
            <li>Derechos del usuario</li>
            <li>Uso de cookies</li>
            <li>Google Analytics</li>
            <li>Seguridad de datos</li>
            <li>Contacto para consultas</li>
          </ul>

          <p className="mt-6 text-white/45">
            <strong className="text-white/70">SERVITEK E.A.S.</strong>
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
