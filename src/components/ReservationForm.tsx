"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom'; // Este se queda igual
import { submitReservation } from "@/actions/submitReservation";

// --- LÓGICA DE ESTADO Y ACCIÓN ---

// Definimos el estado inicial del formulario
const initialState = {
  message: '', // Mensaje de feedback al usuario
  status: ''   // 'success' o 'error'
};

// La función que se conecta a useFormState. Llama a la Server Action y procesa la respuesta.
async function formAction(prevState: typeof initialState, formData: FormData) {
  // 1. Llamamos a nuestra Server Action original
  const response = await submitReservation(formData);

  // 2. Aquí añadimos la lógica de feedback
  if (response && response.success) {
    // Podríamos limpiar el formulario aquí si queremos
    return {
      message: 'Reserva confirmada. Revisa tu correo.',
      status: 'success'
    };
  } else {
    return {
      message: 'Error al enviar. Inténtalo de nuevo más tarde.',
      status: 'error'
    };
  }
}


// --- COMPONENTE DE BOTÓN PARA ESTADO DE CARGA ---
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.02] disabled:bg-indigo-900 disabled:cursor-not-allowed"
    >
      {pending ? 'Enviando...' : 'Confirmar Reserva'}
    </button>
  );
}


// --- COMPONENTE PRINCIPAL (CON EL FORMULARIO RESTAURADO) ---
export default function ReservationForm() {
  // Conectamos la acción y el estado inicial
  const [state, formActionFn] = useActionState(formAction, initialState);

  return (
    <form action={formActionFn} className="space-y-6">

      {/* RESTAURACIÓN DE INPUTS */}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">Nombre Completo</label>
          <input
            name="name"
            id="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">Email Profesional</label>
          <input
            name="email"
            id="email"
            type="email"
            required
            placeholder="tucorreo@empresa.com"
            className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        {/* TELÉFONO */}
        <div>
          <label htmlFor="phone" className="block text-slate-300 mb-2 font-medium">Teléfono (WhatsApp)</label>
          <input
            name="phone"
            id="phone"
            type="tel"
            required
            placeholder="54911xxxxxxx"
            className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>
      </div>      

      {/* Selección de Servicio */}
      <div>
        <label htmlFor="service" className="block text-slate-300 mb-2 font-medium">Tipo de Consulta</label>
        <select
          name="service"
          id="service"
          className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
        >
          <option value="auditoria">Auditoría Legal</option>
          <option value="contratos">Redacción de Contratos</option>
          <option value="litigios">Litigios</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Fecha y hora Preferida (Turno) */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
            <label htmlFor="date" className="block text-slate-300 mb-2 font-medium">Fecha Preferida</label>
            <input 
              name="date" 
              id="date"
              type="date" 
              required
              className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition [color-scheme:dark]"
            />
        </div>
        <div>
            <label htmlFor="time" className="block text-slate-300 mb-2 font-medium">Hora Preferida</label>
            <input 
              name="time"  
              id="time"
              type="time" 
              required
              className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition [color-scheme:dark]"
            />
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">Detalle de la consulta</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="Cuéntanos brevemente sobre tu caso..."
          className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
        ></textarea>
      </div>

      {/* Botón de Enviar (Usa el componente SubmitButton) */}
      <SubmitButton />

      {/* Mensaje de Feedback */}
      {state.message && (
        <p className={`pt-4 font-bold text-center ${state.status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}