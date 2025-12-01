import siteConfig from "@/config/siteConfig";

const { problemSolution, theme } = siteConfig;

export default function ProblemSolution() {
  
  
  return (
    // Fondo MÁS oscuro que el Hero para separar secciones (Slate-950)
    <section id="problema-solucion" className={`bg-slate-950 py-24 ${theme.fontFamily}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white">
          ¿Por qué necesitas una Asesoría Legal Estratégica?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* TARJETA 1: PROBLEMA (Fondo Slate-800 - Tarjeta Oscura) */}
          <div className="bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-700 hover:border-red-500 transition duration-300">
            <h3 className="text-2xl font-bold mb-6 text-red-400">
              {problemSolution.problem.headline}
            </h3>
            <ul className="space-y-4">
              {problemSolution.problem.points.map((point, index) => (
                <li key={index} className="flex items-start text-slate-300">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          
          {/* TARJETA 2: SOLUCIÓN (Fondo Slate-800 - Tarjeta Oscura) */}
          <div className="bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-700 hover:border-emerald-500 transition duration-300">
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">
              {problemSolution.solution.headline}
            </h3>
            <ul className="space-y-4">
              {problemSolution.solution.points.map((point, index) => (
                <li key={index} className="flex items-start text-slate-300">
                  <span className="text-emerald-500 mr-2 font-bold">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
