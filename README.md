# KSUA Blog

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

Una plataforma de blog moderna construida con **React 18**, **Tailwind CSS V3** y la API de **DummyJSON**. El proyecto implementa filtrado dinámico, navegación SPA y autenticación protegida con Google SignIn.

---

## Diseño e Inspiración (UI/UX)

La interfaz fue diseñada siguiendo principios de **Minimalismo Moderno**

* **Tipografía:** Inter (Sans-serif) para una legibilidad óptima.
* **Contraste:** Uso de fondos claros (`#F9FAFB`) con tarjetas blancas puras para generar profundidad.
* **Interacciones:** Micro-interacciones en botones y tarjetas para mejorar la experiencia de usuario.
* **Referencia Visual:**
- [Blog](https://dribbble.com/shots/25578455-UI-UX-Mobile-App-Design-for-a-Notes-AI-App-Voice-Journal-App)
- [Blog](https://dribbble.com/shots/24288889-slothUI-World-s-Laziest-Design-System-Blog-Article-Page-UIUX)
- [Login](https://dribbble.com/shots/20624802-Login-Page-Smart-Save)

---

## Stack Tecnológico


* **Frontend:** React.js 18 (Vite)
* **Estilos:** Tailwind CSS (Mobile-first)
* **Iconografía:** Lucide React
* **Estado Global:** Context API (Auth Management)
* **Enrutamiento:** React Router Dom v6
* **HTTP Client:** Axios
* **Autenticación:** Google OAuth 2.0 (`@react-oauth/google`)

---

## Características

- [x] **Feed Dinámico:** Listado de posts con visualización de tags, vistas e interacciones (likes/dislikes).
- [x] **Filtrado por Autor:** Sidebar/Selector funcional que filtra los posts por usuario mediante la API.
- [x] **Detalle del Post:** Vista dedicada para profundizar en el contenido y estadísticas del post.
- [x] **Autenticación Real:** Inicio de sesión con Google.
- [x] **Rutas Protegidas:** El directorio de usuarios es inaccesible sin autenticación previa.
- [x] **Directorio de Usuarios:** Lista detallada de autores con fotografía, cargo y contacto.
---


## Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ksuam/prueba-tecnica-semana.git
   cd prueba-tecnica-semana
   git checkout master
2. **Instalar dependencias:**
   ```bash
   npm i
3. **Copiar el .env adjunto al correo:**
4. **Arrancar el proyecto**
   ```bash
   npm run dev
5. **Recomendaciones**
   - Asegurar que La URL donde corre el proyecto sea http://localhost:5173/ ya que es la unica URL
     que tiene acceso a la implementación con Google
   