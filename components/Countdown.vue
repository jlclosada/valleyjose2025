<template>
  <div class="flex justify-center items-center mt-6">
    <div class="countdown-container flex gap-6 md:gap-10">
      <!-- Días -->
      <div class="countdown-circle">
        <div class="circle-content">
          <div class="time">{{ days.toString().padStart(2, '0') }}</div>
          <div class="label">Días</div>
        </div>
        <div class="circle-progress" :style="{ '--progress': (days / 365) * 100 }"></div>
      </div>

      <!-- Horas -->
      <div class="countdown-circle">
        <div class="circle-content">
          <div class="time">{{ hours.toString().padStart(2, '0') }}</div>
          <div class="label">Horas</div>
        </div>
        <div class="circle-progress" :style="{ '--progress': (hours / 24) * 100 }"></div>
      </div>

      <!-- Minutos -->
      <div class="countdown-circle">
        <div class="circle-content">
          <div class="time">{{ minutes.toString().padStart(2, '0') }}</div>
          <div class="label">Minutos</div>
        </div>
        <div class="circle-progress" :style="{ '--progress': (minutes / 60) * 100 }"></div>
      </div>

      <!-- Segundos -->
      <div class="countdown-circle">
        <div class="circle-content">
          <div class="time">{{ seconds.toString().padStart(2, '0') }}</div>
          <div class="label">Segundos</div>
        </div>
        <div class="circle-progress" :style="{ '--progress': (seconds / 60) * 100 }"></div>
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
.countdown-container {
  padding: 20px;
}

.countdown-circle {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 
    0 4px 30px rgba(0, 0, 0, 0.1),
    inset 0 0 15px rgba(255, 255, 255, 0.3);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.countdown-circle:hover {
  transform: scale(1.05);
  box-shadow: 
    0 6px 40px rgba(0, 0, 0, 0.15),
    inset 0 0 20px rgba(255, 255, 255, 0.4);
}

.circle-progress {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    rgba(134, 101, 168, 0.8) calc(var(--progress, 0) * 1%),
    transparent 0
  );
  mask: radial-gradient(transparent 60%, black 61%);
  transition: background 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.circle-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time {
  font-size: 2.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, #9A7EB0 0%, #3e1561 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: all 0.5s ease;
}

.label {
  font-size: 0.75rem;
  color: #6C5B7B;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 4px;
  font-weight: 500;
  transition: all 0.5s ease;
}

/* Efecto de iluminación suave */
.countdown-circle::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.3),
    rgba(58, 41, 41, 0)
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.countdown-circle:hover::after {
  opacity: 1;
}

/* Responsividad */
@media (max-width: 768px) {
  .countdown-circle {
    width: 100px;
    height: 100px;
  }
  .time {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .countdown-container {
    gap: 8px;
  }
  .countdown-circle {
    width: 85px;
    height: 85px;
  }
  .time {
    font-size: 1.6rem;
  }
  .label {
    font-size: 0.65rem;
  }
}
</style>