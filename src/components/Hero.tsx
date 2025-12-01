"use client";
import  siteConfig  from "@/config/siteConfig";

const { hero, theme } = siteConfig;

export default function Hero() {
  return (
    // Fondo Slate Oscuro (Gris azulado profundo)
    <section className={`bg-slate-900 py-24 md:py-36 relative overflow-hidden`}>
      
      {/* (Opcional) Un efecto de gradiente sutil de fondo para darle profundidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800/50 to-slate-900 z-0"></div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        
        {/* Titulo Blanco Brillante */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white ${theme.fontFamily}`}>
          {hero.headline}
        </h1>

        {/* Subtítulo Gris Claro */}
        <p className="text-xl sm:text-2xl text-slate-300 mb-10">
          {hero.subHeadline}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* CTA Primario: COLOR ÍNDIGO SÓLIDO (Visible) */}
          <a
            href={hero.primaryCta.href}
            className={`px-8 py-3 text-lg font-bold rounded-lg shadow-lg shadow-indigo-500/30 transition duration-300 transform hover:scale-105 bg-indigo-600 text-white hover:bg-indigo-500`}
          >
            {hero.primaryCta.label}
          </a>
          
          {/* CTA Secundario: Borde blanco/gris */}
          <a
            href={hero.secondaryCta.href}
            className="px-8 py-3 text-lg font-bold rounded-lg transition duration-300 border-2 border-slate-500 text-slate-200 hover:border-indigo-400 hover:text-white"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}