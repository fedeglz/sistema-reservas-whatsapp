'use server'

import twilio from 'twilio';


// Inicializamos el cliente de Twilio con las variables de entorno
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// ----------------------------------------------------
// FUNCIÓN AUXILIAR: Enviar mensaje de WhatsApp
// ----------------------------------------------------
async function sendWhatsappMessage(to: string, body: string) {
  try {
    await twilioClient.messages.create({
      // Twilio requiere el prefijo 'whatsapp:' en el FROM y en el TO
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${to}`,
      body: body,
    });
    return { success: true };
  } catch (error) {
    console.error(`ERROR AL ENVIAR WA a ${to}:`, error);
    return { success: false, error: (error as Error).message };
  }
}

// ----------------------------------------------------
// SERVER ACTION PRINCIPAL
// ----------------------------------------------------
export async function submitReservation(formData: FormData) {
  
  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    service: formData.get('service') as string,
    date: formData.get('date') as string,
    time: formData.get('time') as string,
    message: formData.get('message') as string,
  };

  console.log(' Procesando reserva para WhatsApp...');

  try {
        // 2. ACTUALIZAMOS EL MENSAJE AL CLIENTE
        const clientMessage = 
            `¡Hola ${rawFormData.name}! Tu solicitud de turno para *${rawFormData.service}* el día *${rawFormData.date}* a las *${rawFormData.time}hs* ha sido recibida. Pronto confirmaremos.`;
        
        // 3. ACTUALIZAMOS EL MENSAJE AL PROVEEDOR
        const providerMessage = 
            `NUEVA RESERVA RECIBIDA:\n\n👤 Cliente: ${rawFormData.name}\n📱 Tel: ${rawFormData.phone}\n📧 Email: ${rawFormData.email}\n\n📅 Fecha: ${rawFormData.date}\n⏰ Hora: ${rawFormData.time}\n\n💼 Servicio: ${rawFormData.service}\n💬 Mensaje: ${rawFormData.message}`;

        // 4. ENVIAMOS LOS MENSAJES POR WHATSAPP
        
        await sendWhatsappMessage(rawFormData.phone, clientMessage);
        await sendWhatsappMessage(process.env.PROVIDER_PHONE as string, providerMessage);

        return { success: true };

    } catch (error) {
       // ...
    }
}