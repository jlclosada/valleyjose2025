<template>
  <!-- Botón para abrir la modal -->
  <button @click="showModal = true"
    class="mt-6 px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-xl transition-all transform hover:scale-110 hover:bg-indigo-400 hover:text-white animate-pulse cursor-pointer">
    Confirmar Asistencia
  </button>

  <!-- Modal de Confirmación de Asistencia -->
  <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-3xl p-8 w-full max-w-2xl relative animate-modal">
      <!-- Botón de cierre -->
      <button @click="showModal = false"
        class="absolute top-4 right-4 w-10 h-10 bg-red-800 text-white rounded-full flex justify-center items-center hover:bg-red-500 transition-all transform hover:scale-110 focus:outline-none shadow-xl cursor-pointer">
        ✖
      </button>

      <h2 class="text-3xl font-extrabold text-gray-800 mb-6">Confirma tu asistencia</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeg8s8hQTXAMKssr9iePRGYO6RhIUf1eKsO0NfRnYUjJAlD5w/viewform?embedded=true"
        width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
</script>

<style scoped>
/* Animación para la aparición de la modal */
@keyframes modal-slide {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animación de la modal */
.animate-modal {
  animation: modal-slide 0.4s ease-out;
}

/* Estilos para el botón de apertura (Confirmar Asistencia) */
button {
  transition: all 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Estilos específicos para el botón de apertura de la modal (Confirmar Asistencia) */
button:hover {
  background-color: #4f46e5;
  /* Azul cuando se hace hover */
  color: white;
  /* Texto blanco */
  transform: scale(1.1);
  /* Aumentar tamaño */
}

/* Estilos para el botón de cierre */
button:focus {
  outline: none;
}


/* Responsividad */
@media (max-width: 768px) {

  /* Para pantallas más pequeñas, ajustar el tamaño de la modal */
  .bg-white {
    max-width: 90%;
    padding: 16px;
  }

  h2 {
    font-size: 2rem;
  }

  iframe {
    height: 500px;
  }
}
</style>
