import Services from "@/components/Services"; 

// Reutilizamos el componente de servicios que ya creamos, pero en su propia página
export default function ServicesPage() {
  return (
    <main className="bg-slate-900 min-h-screen pt-20">
      <Services />
    </main>
  );
}