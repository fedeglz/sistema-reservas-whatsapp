import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

/**
 * Este es el componente principal de la ruta "/" (la página de inicio).
 * Contiene todos los bloques de contenido único de la Landing Page.
 */
export default function Home() {
  return (
    <main>
      
      <Hero />
      
      {/* 2. Bloque Problema/Solución (Usamos el componente real) */}
      <ProblemSolution /> 

      {/* 3. Bloque Servicios (Sección con fondo blanco/claro) */}
      <Services />

      {/* 4. Testimonios (Se mostrarán solo si están activos en config) */}
      <Testimonials />
      
    </main>
  );
}