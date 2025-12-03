#  Landing Page Corporativa con Sistema de Reservas (WhatsApp)

Una solución integral para profesionales (abogados, contadores, consultores) que buscan digitalizar su negocio. Esta plantilla incluye una landing page de alto rendimiento y un sistema de agendamiento de turnos que notifica automáticamente vía WhatsApp.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white)

##  Características Principales

- **Diseño "Dark Slate" Premium:** Interfaz elegante, seria y totalmente adaptable a móviles (Responsive).
- **Backend Moderno:** Utiliza **Server Actions** de Next.js 15 para procesar datos sin exponer APIs públicas.
- **Integración con WhatsApp:** Conexión con la API de **Twilio** para enviar confirmaciones inmediatas al cliente y alertas al dueño del servicio.
- **Feedback Visual:** Formularios con estados de carga (`useActionState`) y validación en tiempo real.
- **Arquitectura Escalable:** Configuración centralizada en `siteConfig.ts` para facilitar la personalización.

##  Instalación y Configuración

Sigue estos pasos para correr el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/landing-page-servicios-template.git](https://github.com/TU_USUARIO/landing-page-servicios-template.git)
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Renombra el archivo `.env.example` a `.env.local` (o crea uno nuevo) y añade tus credenciales de Twilio:
    ```env
    TWILIO_ACCOUNT_SID="tu_account_sid"
    TWILIO_AUTH_TOKEN="tu_auth_token"
    TWILIO_WHATSAPP_NUMBER="whatsapp:+1415xxxxxxx"
    PROVIDER_PHONE="54911xxxxxxx" # Número del dueño que recibe las alertas
    ```

4.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

##  Estructura del Proyecto

- `/src/app`: Rutas de la aplicación (App Router).
- `/src/actions`: Lógica del servidor (Server Actions) para el envío de WhatsApp.
- `/src/components`: Componentes reutilizables (Navbar, Hero, Forms).
- `/src/config`: Archivo de configuración global del sitio.

##  Autor

Desarrollado por **Federico González**.
*Desarrollador Full Stack especializado en soluciones Java y Next.js.*

---
