<template>
  <div class="relative w-full min-h-screen flex flex-col items-center text-center px-6 pt-24">
    <!-- Contenido principal -->
    <div class="relative z-10 mt-10 animate-fade-in w-full max-w-4xl backdrop-blur-lg p-10 rounded-3xl text-gray-700">
      <h1 class="text-5xl md:text-6xl font-extrabold font-custom drop-shadow-lg animate-fade-slide">
        Real Parroquia de Señora Santa Ana
      </h1>
    </div>
    <!-- Imagen de la Iglesia -->
    <div class="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg animate-fade-in">
      <img src="/assets/images/iglesia.jpg" alt="Iglesia Nuestra Señora del Amor"
        class="w-full rounded-3xl object-cover">
    </div>

    <!-- Detalles de la Ceremonia -->
    <div
      class="mt-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-300 animate-fade-in text-gray-700">
      <h2 class="text-3xl font-bold">Detalles de la Ceremonia</h2>
      <p class="mt-3 text-lg">📍 <strong>Real Parroquia de Señora Santa Ana, Sevilla</strong></p>
      <p class="text-lg">📅 <strong>22 de Noviembre de 2025</strong></p>
      <p class="text-lg">⏰ <strong>11:30 AM</strong></p>
    </div>
    <a target="_blank"
      href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+Valle+%26+Jose+Luis&dates=20251122T103000Z/20251122T120000Z&details=Acompáñanos+en+nuestra+ceremonia+religiosa+en+la+Real+Parroquia+de+Señora+Santa+Ana&location=Real+Parroquia+de+Señora+Santa+Ana&sf=true&output=xml"
      class="mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
      📅 Añadir a Google Calendar
    </a>

  </div>

  <!-- Mapa Interactivo -->
  <div class="mt-12 w-full max-w-4xl rounded-3xl overflow-hidden shadow-xl animate-fade-in">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.2961934295986!2d-6.003118024036655!3d37.382827034640904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1435d75267%3A0xd8111f64acb927d7!2sReal%20Parroquia%20de%20Se%C3%B1ora%20Santa%20Ana!5e0!3m2!1ses!2ses!4v1742311209618!5m2!1ses!2ses"
      width="900" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <!-- Botones de Acción -->
  <div class="mt-6 flex flex-col md:flex-row justify-center gap-6 animate-fade-in">
    <a href="https://maps.app.goo.gl/Z84XY6usHn9onaBv8" target="_blank"
      class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
      📍 Abrir en Google Maps
    </a>
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
