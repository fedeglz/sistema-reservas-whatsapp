import  siteConfig  from "@/config/siteConfig";

const { siteName, footer, theme } = siteConfig;

export default function Footer() {
  return (
    <footer className={`bg-slate-950 border-t border-slate-800 pt-16 pb-8 text-slate-400 ${theme.fontFamily}`}>
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Columna 1: Marca y Dirección */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">{siteName}</h2>
            <p className="mb-4 max-w-sm text-slate-400">
              Asesoramiento legal estratégico para empresas que buscan crecimiento, seguridad y eficiencia.
            </p>
            <div className="flex items-center text-slate-300">
              <span className="mr-2">📍</span>
              {footer.address}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos (Legales) */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legales</h3>
            <ul className="space-y-2">
              {footer.legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-indigo-400 transition duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Síguenos</h3>
            <ul className="space-y-2">
              {footer.socialLinks.map((social) => (
                <li key={social.platform}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 transition duration-200 flex items-center"
                  >
                    {/* Aquí podrías agregar íconos reales más tarde */}
                    <span className="mr-2">🔗</span> {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Barra Inferior: Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>{footer.copyright}</p>
          <p className="mt-2 md:mt-0">
            Diseñado con <span className="text-red-500">❤</span> por {siteName}
          </p>
        </div>

      </div>
    </footer>
  );
}