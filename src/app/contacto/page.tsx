import  siteConfig  from "@/config/siteConfig";

export default function ContactPage() {
  const { footer, email, phone } = siteConfig;

  return (
    <section className="bg-slate-900 min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contacto
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Estamos disponibles para resolver tus dudas generales. Para agendar una reunión específica, por favor utiliza nuestro sistema de reservas.
          </p>
        </div>

        {/* Grid de Tarjetas de Contacto */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Tarjeta 1: Dirección */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center hover:border-indigo-500 transition duration-300">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-white font-bold text-lg mb-2">Visítanos</h3>
            <p className="text-slate-400 text-sm">{footer.address}</p>
          </div>

          {/* Tarjeta 2: Email */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center hover:border-indigo-500 transition duration-300">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-white font-bold text-lg mb-2">Escríbenos</h3>
            <p className="text-slate-400 text-sm">{email}</p>
          </div>

          {/* Tarjeta 3: Teléfono */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center hover:border-indigo-500 transition duration-300">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-white font-bold text-lg mb-2">Llámanos</h3>
            <p className="text-slate-400 text-sm">{phone}</p>
          </div>

          {/* Tarjeta 4: Horarios (Nuevo) */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center hover:border-indigo-500 transition duration-300">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-white font-bold text-lg mb-2">Horarios</h3>
            <p className="text-slate-400 text-sm">Lun - Vie: 9:00 - 18:00</p>
            <p className="text-slate-400 text-sm">Sábados: Cerrado</p>
          </div>

        </div>

        {/* Mapa (Placeholder Visual) */}
        <div className="w-full h-96 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
             {/* Aquí iría un iframe de Google Maps real */}
             <div className="text-center">
                <p className="text-slate-500 text-lg">🗺️ Mapa de Google Maps</p>
                <p className="text-slate-600 text-sm mt-2">(Se integrará aquí)</p>
             </div>
        </div>

      </div>
    </section>
  );
}