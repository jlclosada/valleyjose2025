<template>
  <div class="countdown-wrap">
    <div v-if="!isOver" class="countdown-grid">
      <div v-for="unit in units" :key="unit.label" class="countdown-unit">
        <div class="unit-ring">
          <svg class="ring-svg" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#D4AE6A" />
                <stop offset="100%" stop-color="#8A6E32" />
              </linearGradient>
            </defs>
            <circle class="ring-bg" cx="50" cy="50" r="44" />
            <circle
              class="ring-fill"
              cx="50" cy="50" r="44"
              :stroke-dasharray="`${unit.dash} ${circumference}`"
              stroke="url(#goldGrad)"
            />
          </svg>
          <span class="unit-value">{{ unit.value }}</span>
        </div>
        <span class="unit-label">{{ unit.label }}</span>
      </div>
    </div>

    <div v-else class="countdown-done">
      <span class="font-great-vibes">¡Hoy es el gran día!</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const days    = ref(0)
const hours   = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const isOver  = ref(false)

const circumference = 2 * Math.PI * 44

const pad = (n) => String(n).padStart(2, '0')
const pct = (val, max) => (val / max) * circumference

const units = computed(() => [
  { label: 'Días',     value: pad(days.value),    dash: pct(days.value, 365) },
  { label: 'Horas',    value: pad(hours.value),   dash: pct(hours.value, 24) },
  { label: 'Minutos',  value: pad(minutes.value), dash: pct(minutes.value, 60) },
  { label: 'Segundos', value: pad(seconds.value), dash: pct(seconds.value, 60) },
])

onMounted(() => {
  const target = new Date('2025-11-22T11:30:00')
  const tick = () => {
    const diff = target - new Date()
    if (diff <= 0) { isOver.value = true; return }
    days.value    = Math.floor(diff / 86_400_000)
    hours.value   = Math.floor(diff / 3_600_000) % 24
    minutes.value = Math.floor(diff / 60_000) % 60
    seconds.value = Math.floor(diff / 1_000) % 60
  }
  tick()
  setInterval(tick, 1000)
})
</script>

<style scoped>
.countdown-wrap {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
}

.countdown-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.unit-ring {
  position: relative;
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.ring-bg {
  fill: none;
  stroke: var(--color-border);
  stroke-width: 2.5;
}

.ring-fill {
  fill: none;
  stroke-width: 2.5;
  stroke-linecap: round;
  transition: stroke-dasharray 0.8s cubic-bezier(0.4,0,0.2,1);
}

.unit-value {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: 2.5rem;
  color: var(--color-dark);
  letter-spacing: -0.02em;
  line-height: 1;
  position: relative;
  z-index: 1;
}

.unit-label {
  font-family: var(--font-sans);
  font-size: 0.54rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.countdown-done {
  text-align: center;
  padding: 2rem;
  font-size: 3rem;
  color: var(--color-gold);
}

@media (max-width: 640px) {
  .countdown-grid { gap: 1.1rem; }
  .unit-ring { width: 85px; height: 85px; }
  .unit-value { font-size: 1.75rem; }
  .unit-label { font-size: 0.48rem; }
}

@media (max-width: 380px) {
  .unit-ring { width: 72px; height: 72px; }
  .unit-value { font-size: 1.45rem; }
}
</style>
