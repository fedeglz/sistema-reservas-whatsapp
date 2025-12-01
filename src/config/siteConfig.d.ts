// src/config/siteConfig.d.ts

// La definición de tipo para una sección de Problema o Solución
interface SectionContent {
  headline: string;
  points: string[];
  colorClass: string;
}

// Declara que el módulo JS exporta un objeto llamado siteConfig.
declare module "@/config/siteConfig" {
  interface ThemeConfig {
    primaryColor: string;
    accentColor: string;
    bgLight: string;
    bgSoft: string;
    bgPrimary: string;
    bgSecondary: string;
    textDark: string;
    textSoft: string;
    textMuted: string;
    fontFamily: string;
  }

  interface NavLink {
    label: string;
    href: string;
  }

  interface Cta {
    label: string;
    href: string;
  }

  interface ProblemSolutionColumn {
    headline: string;
    points: string[];
    color: string;
  }

  interface ServiceItem {
    number: string;
    title: string;
    description: string;
  }

  const siteConfig: {
    siteName: string;
    email: string;
    phone: string;
    theme: ThemeConfig;
    navLinks: NavLink[];

    hero: {
      headline: string;
      subHeadline: string;
      primaryCta: Cta;
      secondaryCta: Cta;
    };

    problemSolution: {
      problem: ProblemSolutionColumn;
      solution: ProblemSolutionColumn;
    };

    services: {
      headline: string;
      items: ServiceItem[];
    };

    showTestimonials: boolean; //El interruptor

    testimonials: {
      headline: string;
      items: {
        name: string;
        role: string;
        quote: string;
      }[];
    };

    footer: {
      copyright: string;
      address: string;
      socialLinks: { platform: string; href: string }[];
      legalLinks: { label: string; href: string }[];
    };
  };

  export default siteConfig;
}
