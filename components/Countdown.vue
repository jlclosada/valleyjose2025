<template>
  <div class="flex justify-center items-center mt-6">
    <div
      class="countdown-box flex gap-12 px-12 py-6 text-center rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl animate-fade-scale">
      <div class="countdown-item">
        <div class="time">{{ days }}</div>
        <div class="label">Días</div>
      </div>
      <div class="countdown-item">
        <div class="time">{{ hours }}</div>
        <div class="label">Horas</div>
      </div>
      <div class="countdown-item">
        <div class="time">{{ minutes }}</div>
        <div class="label">Minutos</div>
      </div>
      <div class="countdown-item">
        <div class="time">{{ seconds }}</div>
        <div class="label">Segundos</div>
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

<style scoped>
.countdown-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px 40px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
}

/* Nueva animación de entrada con escala */
@keyframes fade-scale {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-scale {
  animation: fade-scale 1.5s ease-out;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.time {
  font-size: 4rem;
  font-weight: bold;
  color: rgb(28, 1, 86);
}

.label {
  font-size: 1rem;
  color: #030246;
  text-transform: uppercase;
  margin-top: 8px;
}

/* Responsividad */
@media (max-width: 768px) {
  .countdown-box {
    padding: 15px 30px;
    gap: 20px;
  }

  .time {
    font-size: 3rem;
  }

  .label {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .countdown-box {
    padding: 10px 20px;
    gap: 15px;
  }

  .time {
    font-size: 2.5rem;
  }

  .label {
    font-size: 0.75rem;
  }
}
</style>
