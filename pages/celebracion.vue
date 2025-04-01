<template>
  <div class="relative w-full min-h-screen flex flex-col items-center text-center px-6 pt-24">
    <!-- Contenido principal -->
    <div class="relative z-10 mt-10 animate-fade-in w-full max-w-4xl backdrop-blur-lg p-10 rounded-3xl text-gray-700">
      <h1 class="text-5xl md:text-6xl font-extrabold font-custom drop-shadow-lg animate-fade-slide">
        Cortijo El Esparragal
      </h1>
    </div>
    <!-- Imagen de la Iglesia -->
    <div class="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg animate-fade-in">
      <img src="/assets/images/cortijo.jpg" alt="Iglesia Nuestra Señora del Amor"
        class="w-full rounded-3xl object-cover">
    </div>

    <!-- Detalles de la Ceremonia -->
    <div
      class="mt-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-300 animate-fade-in text-gray-700 text-left">
      <h2 class="text-3xl font-bold">Detalles de la ceremonia</h2>
      <p class="mt-3 text-lg">📍 <strong>Cortijo El Esparragal, Gerena, Sevilla</strong></p>
      <p class="text-lg mt-3">📅 <strong>22 de Noviembre de 2025</strong></p>
      <p class="text-lg mt-3">⏰ <strong>13:30</strong></p>
    </div>

    <!-- Mapa Interactivo -->
    <div class="mt-12 w-full max-w-4xl rounded-3xl overflow-hidden shadow-xl animate-fade-in">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4724.518036814649!2d-6.10781583190993!3d37.527140109831876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd123f06e04eb561%3A0x981a797489571205!2sHacienda%20Esparragal!5e0!3m2!1ses!2ses!4v1742312808054!5m2!1ses!2ses"
        width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- Botones de Acción -->
    <div class="mt-6 flex flex-col md:flex-row justify-center gap-6 animate-fade-in">
      <a href="https://maps.app.goo.gl/SHt8dZZCAFqFkz17A" target="_blank"
        class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
        📍 Abrir en Google Maps
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const googleCalendarLink = ref(
  "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWcxNDAxdnU5NHRqbnBkNWhvY2l0NGVoNGEgamxjYWNsb3NhZGFAbQ&tmsrc=jlcaclosada%40gmail.com"
);
</script>

<style>
/* Animaciones */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-slide {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.font-custom {
  font-family: 'Great Vibes', cursive;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-slide {
  animation: fade-slide 1s ease-out;
}
</style>
