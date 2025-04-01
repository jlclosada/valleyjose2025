<template>
  <div class="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6">
    <!-- Contenido principal -->
    <div class="relative z-10 animate-fade-in">
      <h1 class="text-6xl md:text-7xl font-extrabold text-gray-500 font-custom drop-shadow-lg animate-fade-slide">
        ¡Nos Casamos!
      </h1>
      <p class="mt-4 text-2xl text-gray-500 drop-shadow-md animate-fade-slide delay-200">
        Y queremos compartir contigo este día tan especial
      </p>
    </div>
    <!--Confirmación de asistencia-->
    <ConfirmAttendanceModal />

    <!-- Cuenta regresiva -->
    <Countdown />
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

</style>
