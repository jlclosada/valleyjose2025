<template>
    <!-- Encabezado Promocional -->
    <div class="text-center mt-12 mb-8 px-6 max-w-3xl mx-auto">
      <h2
        class="text-4xl md:text-5xl font-miller leading-tight text-black drop-shadow-md animate-fade-in-up"
      >
        ¿Quieres conseguir
        <span class="text-pink-600 dark:text-pink-800 underline decoration-4 underline-offset-4 font-bold animated-underline">
          premios exclusivos
        </span>
        en la boda?
      </h2>
      <p class="mt-5 text-lg md:text-xl text-gray-800 font-miller animate-fade-in-up">
        <span class="font-bold">¡Participa en el trivial!</span> Los mejores jugadores tendrán un premio asegurado que se entregará el mismo día de la boda.
      </p>
  
      <!-- Botón para abrir la modal del trivial -->
        <div class="mt-10 flex justify-center">
            <button
            @click="showModal = true"
            class="relative px-10 py-4 rounded-full shadow-2xl backdrop-blur-lg border bg-white/10 hover:bg-white/20 transition-all duration-500 group overflow-hidden cursor-pointer hover:scale-105"
            >
            <span class="absolute inset-0 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-full"></span>
            <span class="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-70 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
            <span class="relative z-10 text-[#4f2d6d] group-hover:text-white text-xl md:text-2xl font-medium tracking-wide transition-all duration-300 font-bold">
                Jugar al Trivial
              </span>
            </button>
        </div>
    </div>
  
    <!-- Modal del Trivial -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div class="modal-content bg-white dark:bg-gray-900 rounded-3xl p-8 w-full max-w-2xl relative overflow-hidden">
        <div class="absolute inset-0 border-4 border-transparent animate-border rounded-3xl pointer-events-none"></div>
  
        <button @click="showModal = false"
          class="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-full flex justify-center items-center hover:from-red-600 hover:to-red-800 transition-all transform hover:scale-110 focus:outline-none shadow-lg cursor-pointer z-20">
          <span class="text-xl font-bold">✖</span>
        </button>
  
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-miller text-gray-800 dark:text-white mb-6 text-center">
            ¡Participa en el Trivial!
          </h2>
          <div class="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdlZptqmi6UcYlzKlPxcKOtrAdZ7X2qMOoDbQxqt37Zmtw3cA/viewform?usp=sharing"
              width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">
              Cargando…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showModal = ref(false)
  </script>
  
  <style scoped>
  @keyframes modal-appear {
    0% { opacity: 0; transform: translateY(20px) scale(0.95); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  
  @keyframes border-pulse {
    0%, 100% { border-color: transparent; opacity: 0.5; }
    50% { border-color: #f0abfc; opacity: 1; }
  }
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .modal-content {
    animation: modal-appear 0.4s ease;
  }
  
  .animate-border {
    animation: border-pulse 3s ease-in-out infinite;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out both;
  }

  button {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  /* Efecto especial para el botón principal */
.modal-trigger {
    box-shadow: 
      0 4px 20px rgba(165, 180, 252, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset,
      0 0 20px rgba(255, 255, 255, 0.2) inset;
  }
  
  .modal-trigger:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 6px 30px rgba(167, 139, 250, 0.6),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset,
      0 0 30px rgba(255, 255, 255, 0.3) inset;
  }
  
  </style>
  