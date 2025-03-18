<template>
  <div class="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6">
    <!-- Contenido principal -->
    <div class="relative z-10 animate-fade-in">
      <h1 class="text-6xl md:text-7xl font-extrabold text-gray-500 font-custom drop-shadow-lg animate-fade-slide">
        ¡Nos Casamos!
      </h1>
      <p class="mt-4 text-2xl text-gray-500 drop-shadow-md animate-fade-slide delay-200">
        En este día tan especial, queremos compartir nuestra felicidad contigo
      </p>
      <button @click="showModal = true"
        class="mt-6 px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-xl transition-all transform hover:scale-110 hover:bg-indigo-400 hover:text-white animate-pulse cursor-pointer">
        Confirmar Asistencia
      </button>
    </div>
    <!-- Modal de Confirmación de Asistencia -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white rounded-2xl p-6 w-full max-w-lg relative">
        <button @click="showModal = false" class="absolute top-2 right-2 text-gray-500 hover:text-gray-800">✖</button>
        <h2 class="text-2xl font-bold text-gray-700 mb-4">Confirma tu asistencia</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeg8s8hQTXAMKssr9iePRGYO6RhIUf1eKsO0NfRnYUjJAlD5w/viewform?embedded=true"
          width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
      </div>
    </div>

    <!-- Cuenta regresiva -->
    <div class="relative z-10 mt-12 text-center animate-fade-in">
      <h2 class="text-3xl font-bold text-gray-600">Cuenta regresiva para el gran día</h2>
      <div class="mt-6 countdown-container">
        <div class="countdown-box">
          <span class="time">{{ days }}</span>
          <span class="label">Días</span>
        </div>
        <div class="countdown-box">
          <span class="time">{{ hours }}</span>
          <span class="label">Horas</span>
        </div>
        <div class="countdown-box">
          <span class="time">{{ minutes }}</span>
          <span class="label">Minutos</span>
        </div>
        <div class="countdown-box">
          <span class="time">{{ seconds }}</span>
          <span class="label">Segundos</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const showModal = ref(false);

onMounted(() => {
  const weddingDate = new Date('2025-11-22T11:30:00');

  const updateCountdown = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      days.value = 0;
      hours.value = 0;
      minutes.value = 0;
      seconds.value = 0;
      return;
    }

    days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutes.value = Math.floor((diff / (1000 * 60)) % 60);
    seconds.value = Math.floor((diff / 1000) % 60);
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
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

/* Estilos de la cuenta regresiva */
.countdown-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 10px;
}

.countdown-box {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 12px 20px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.time {
  font-size: 3rem;
  font-weight: bold;
  color: rgb(28, 1, 86);
}

.label {
  display: block;
  font-size: 1rem;
  color: #030246;
  text-transform: uppercase;
}
</style>
