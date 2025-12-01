const siteConfig = {
  siteName: "Firma de Abogados | Salas & Asoc.",
  email: "contacto@salas&asoc.com",
  phone: "+54 9 11 1234-5678",

  // TEMA COMPLETO (TODAS LAS CLAVES QUE USAN LOS COMPONENTES)
  theme: {
    // Fondo principal: Un gris muy oscuro y azulado (No negro)
    primaryColor: "slate-900",
    // Fondo secundario: Para tarjetas (un poco más claro que el fondo)
    secondaryColor: "slate-800",
    // Acento: Índigo vibrante para que los botones EXPLOTEN a la vista
    accentColor: "indigo-600",
    // Color de texto principal
    textColor: "text-gray-100",
    fontFamily: "font-serif",
  },

  // LINKS NAVBAR
  navLinks: [
    // Cambiamos las URLs para que apunten a las nuevas rutas
    { label: "Servicios", href: "/servicios" },     // Antes: "#servicios"
    { label: "Trayectoria", href: "/trayectoria" }, // Antes: "#trayectoria"
    { label: "Contacto", href: "/contacto" },       // Antes: "#contacto"
  ],

  // BLOQUE HERO
  hero: {
    headline: "Asesoramiento Legal Estratégico para Empresas en Crecimiento",
    subHeadline:
      "Optimizamos tu estructura legal para asegurar un crecimiento sostenible y sin riesgos.",
    primaryCta: { label: "Agenda una Turno", href: "/reserva" },
    secondaryCta: { label: "Ver Nuestros Servicios", href: "#servicios" }
  },

  // BLOQUE PROBLEMA / SOLUCIÓN
  problemSolution: {
    problem: {
      headline: "¿Estás cansado de que la burocracia legal frene tu negocio?",
      points: [
        "Contratos que te hacen perder oportunidades por su complejidad.",
        "Multas o sanciones por desconocimiento de las normativas vigentes.",
        "Horas perdidas intentando entender documentos legales en lugar de hacer crecer tu empresa."
      ],
      color: "text-red-500"
    },
    solution: {
      headline:
        "Tu tranquilidad es la única prioridad. Nosotros simplificamos la ley.",
      points: [
        "Elaboración de contratos inteligentes y sencillos en tiempo récord.",
        "Auditoría legal preventiva para blindar tu operación contra riesgos.",
        "Asesoramiento personalizado, directo y sin jerga incomprensible."
      ],
      color: "text-green-500"
    }
  },

  // SERVICIOS
  services: {
    headline: "Nuestros Pilares de Asesoramiento Legal",
    items: [
      {
        number: "01",
        title: "Compliance Normativo y Auditoría",
        description:
          "Blindamos tu empresa contra riesgos legales, asegurando que cada operación cumpla con la normativa vigente."
      },
      {
        number: "02",
        title: "Derecho Societario y Contratos",
        description:
          "Redacción y revisión de contratos comerciales, acuerdos de socios y estructura legal para startups y PyMEs."
      },
      {
        number: "03",
        title: "Propiedad Intelectual y Marcas",
        description:
          "Protección de tus activos intangibles, registro de marcas y defensa contra el uso no autorizado."
      },
      {
        number: "04",
        title: "Litigios Complejos y Arbitraje",
        description:
          "Representación experta en disputas comerciales y civiles de alta complejidad."
      }
    ]
  },

  // TESTIMONIOS
  // Cambia a 'false' para ocultar toda la sección si el cliente no tiene testimonios.
  showTestimonials: true,
  testimonials: {
    headline: "Lo que dicen nuestros clientes",
    items: [
      {
        name: "Carlos Rodríguez",
        role: "CEO de TechSolutions",
        quote: "Gracias a su asesoría, pudimos estructurar nuestra ronda de inversión sin riesgos legales. Son un socio estratégico clave."
      },
      {
        name: "Mariana López",
        role: "Fundadora de Innova",
        quote: "La auditoría preventiva nos salvó de multas millonarias. Su enfoque es práctico, directo y muy profesional."
      },
      {
        name: "Grupo Empresarial Norte",
        role: "Directorio",
        quote: "Eficiencia y claridad. Redactaron nuestros contratos internacionales en tiempo récord. Totalmente recomendados."
      }
    ]
  },
  // FOOTER
  footer: {
    copyright: "© 2024 González & Asociados. Todos los derechos reservados.",
    address: "Av. Corrientes 1234, Piso 10, Buenos Aires, Argentina",
    socialLinks: [
      { platform: "LinkedIn", href: "https://linkedin.com" },
      { platform: "Twitter", href: "https://twitter.com" },
      { platform: "Instagram", href: "https://instagram.com" }
    ],
    legalLinks: [
      { label: "Política de Privacidad", href: "/privacidad" },
      { label: "Términos y Condiciones", href: "/terminos" }
    ]
  }
};

export default siteConfig;


