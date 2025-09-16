<template>
  <div class="relative w-full min-h-screen flex flex-col items-center text-center px-6 pt-24">
    <!-- Bloque único con toda la información -->
    <div
      class="relative z-10 animate-fade-in w-full max-w-5xl bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-gray-300 text-gray-700"
    >
      <!-- Título -->
      <h1 class="text-5xl md:text-6xl font-miller drop-shadow-lg animate-fade-slide">
        ✨ Preboda ✨
      </h1>
      <p class="mt-6 text-lg md:text-xl font-light text-gray-600 text-center">
        Un momento especial para celebrar juntos antes del gran día 💕<br>
        Tendremos el local para nosotros solos, con comida, bebida y buena música.<br>
        ¡Nos encantaría contar con vuestra presencia!<br><br>
      </p>

      <!-- Detalles -->
      <div class="mt-12 text-left">
        <h2 class="text-3xl font-miller mb-4">📍 Lugar</h2>
        <p class="text-lg font-light mb-8">Bar Avenate, Calle Virgen de Regla 4</p>

        <h2 class="text-3xl font-miller mb-4">📅 Fecha y Hora</h2>
        <p class="text-lg font-light mb-12">Viernes, 21 de Noviembre de 2025 – 19:00h</p>
      </div>

      <!-- Botón -->
      <div class="flex justify-center">
        <a
          href="https://calendar.google.com/"
          target="_blank"
          class="px-10 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-light rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
        >
          📆 Añadir al Calendario
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No necesita lógica por ahora
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

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-slide {
  animation: fade-slide 1s ease-out;
}

.font-miller {
  font-family: "Miller Display", serif;
}
</style>
