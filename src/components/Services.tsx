import siteConfig from "@/config/siteConfig";

export default function Services() {
  const { services, theme } = siteConfig;
  const bgColor = "bg-slate-900";

  return (
    <section id="servicios" className={`${bgColor} py-24 ${theme.fontFamily}`}>
      <div className="container mx-auto px-4 max-w-6xl text-center">
        
        <h2 className="text-4xl font-extrabold mb-4 text-white">
          {services.headline}
        </h2>
        <p className="text-xl text-slate-400 mb-16">
          Nuestra experiencia se centra en los desafíos clave de las empresas de hoy.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.items.map((service, index) => (
            <div 
              key={index} 
              // Tarjetas Slate-800 (igual que problema/solución)
              className="p-6 rounded-lg shadow-lg border border-slate-700 hover:border-indigo-500 transition duration-300 transform hover:-translate-y-1 bg-slate-800 text-left"
            >
              <div className="text-3xl font-bold mb-4 text-indigo-500">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}