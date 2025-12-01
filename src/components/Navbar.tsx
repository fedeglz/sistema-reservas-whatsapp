"use client";

import { useState, useEffect } from "react";
import  siteConfig  from "@/config/siteConfig";

const { siteName, navLinks, theme } = siteConfig;

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Lógica para detectar el scroll (Esconder/Mostrar)
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setShowNavbar(false); // Bajar -> Esconder
        } else {
          setShowNavbar(true);  // Subir -> Mostrar
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-300 shadow-lg border-b border-slate-800
        ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
        bg-slate-900/95 backdrop-blur-md text-white`} 
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo / Nombre */}
        <a href="/" className={`text-2xl font-bold text-white ${theme.fontFamily}`}>
          {siteName}
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-slate-300 hover:text-indigo-400 font-medium transition duration-200`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón Móvil */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </header>
  );
}



