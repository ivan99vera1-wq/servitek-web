export const serviceOptions = [
  "Iluminación e Ingeniería Ex",
  "Auditoría y Automatización",
  "Motores, Bombas y HVAC",
  "Infraestructura Eléctrica y Respaldo",
  "Materiales Eléctricos y Línea ATEX",
  "Otro"
];

export const whatsappMessageTemplate = (data: {
  name: string;
  company: string;
  phone: string;
  city: string;
  serviceType: string;
  message: string;
}) => {
  return `Hola, me interesa información sobre sus servicios.

*Datos de contacto:*
- Nombre: ${data.name}
- Empresa: ${data.company}
- Teléfono: ${data.phone}
- Ciudad: ${data.city}
- Servicio de interés: ${data.serviceType}

*Mensaje:*
${data.message}`;
};
