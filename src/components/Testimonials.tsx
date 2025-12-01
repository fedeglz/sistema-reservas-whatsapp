import  siteConfig  from "@/config/siteConfig";

export default function Testimonials() {
  const { showTestimonials, testimonials, theme } = siteConfig;

  //LÓGICA CONDICIONAL: Si está en false, no mostramos nada.
  if (!showTestimonials) {
    return null;
  }

  return (
    // Fondo Slate-950 (Mismo que Problema/Solución para consistencia)
    <section id="testimonios" className={`bg-slate-950 py-24 ${theme.fontFamily}`}>
      <div className="container mx-auto px-4 max-w-6xl text-center">
        
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-white">
          {testimonials.headline}
        </h2>

        {/* Grid de 3 Columnas */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 relative"
            >
              {/* Ícono de Comillas decorativo en color de acento */}
              <div className="text-indigo-500 text-6xl absolute top-4 left-6 opacity-20 font-serif">
                “
              </div>

              <p className="text-slate-300 text-lg italic mb-6 relative z-10">
                "{item.quote}"
              </p>
              
              <div className="border-t border-slate-700 pt-4">
                <h4 className="text-white font-bold">{item.name}</h4>
                <p className="text-indigo-400 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}