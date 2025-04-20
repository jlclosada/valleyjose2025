<template>
  <!-- Botón para abrir la modal - Versión premium -->
  <button @click="showModal = true"
    class="modal-trigger relative overflow-hidden group mt-32 px-10 py-5 font-miller rounded-full shadow-2xl transition-all duration-500 cursor-pointer">
    <span class="absolute inset-0 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-full"></span>
    <span class="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
    <span class="relative z-10 text-[#4f2d6d] group-hover:text-white text-xl md:text-2xl font-medium tracking-wide transition-all duration-300 font-miller">
      Confirmar Asistencia
    </span>
    <span class="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500 rounded-full"></span>
  </button>

  <!-- Modal de Confirmación de Asistencia -->
  <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
    <div class="modal-content bg-white rounded-3xl p-8 w-full max-w-2xl relative overflow-hidden">
      <!-- Efecto de borde animado -->
      <div class="absolute inset-0 border-4 border-transparent animate-border rounded-3xl pointer-events-none"></div>
      
      <!-- Botón de cierre premium -->
      <button @click="showModal = false"
        class="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-full flex justify-center items-center hover:from-red-600 hover:to-red-800 transition-all transform hover:scale-110 focus:outline-none shadow-lg cursor-pointer z-20">
        <span class="text-xl font-bold">✖</span>
      </button>

      <div class="relative z-10">
        <h2 class="text-3xl md:text-4xl font-miller text-gray-800 mb-6 text-center">
        </h2>
        
        <div class="rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeg8s8hQTXAMKssr9iePRGYO6RhIUf1eKsO0NfRnYUjJAlD5w/viewform?embedded=true"
            width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Cargando…
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
</script>

<style scoped>
/* Animaciones para la modal */
@keyframes modal-appear {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes border-pulse {
  0%, 100% {
    border-color: transparent;
    opacity: 0.5;
  }
  50% {
    border-color: #a78bfa;
    opacity: 1;
  }
}

.modal-content {
  animation: modal-appear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-border {
  animation: border-pulse 3s ease-in-out infinite;
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

/* Efecto de brillo al pasar el mouse */
.modal-trigger::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
  transform: scale(0);
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
  pointer-events: none;
}

.modal-trigger:hover::before {
  transform: scale(1);
  opacity: 0.3;
}

/* Responsividad mejorada */
@media (max-width: 768px) {
  .modal-content {
    max-width: 95%;
    padding: 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  iframe {
    height: 500px;
  }
  
  .modal-trigger {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  iframe {
    height: 400px;
  }
  
  .modal-trigger {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
  }
  
  .modal-content {
    padding: 1rem;
  }
}
</style>