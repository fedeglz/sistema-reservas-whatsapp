import  siteConfig  from "@/config/siteConfig";
import ReservationForm from "@/components/ReservationForm"; 

export default function BookingPage() {
  const { siteName } = siteConfig;
  
  return (
    // 2. Usar el color de fondo y el padding para compensar el Navbar fijo
    <section className="bg-slate-900 min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-2xl">
        
        {/* Títulos y Subtítulos */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reserva tu Cita
          </h1>
          <p className="text-xl text-slate-400">
            Selecciona el tipo de asesoría y el horario que mejor se adapte a tu agenda.
          </p>
        </div>

        {/* 3. Llama al componente cliente que contiene toda la lógica del formulario */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
            <ReservationForm />
        </div>

      </div>
    </section>
  );
}