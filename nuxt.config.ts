import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head:{
      title: 'Valle & Jose 2025',
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Great+Vibes&family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;600&display=swap",
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/heart.ico'
        }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
