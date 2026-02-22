<template>
  <div class="home">

    <!-- ═══════════════════════════════════════
         HERO — Galería expandible + overlay
         ═══════════════════════════════════════ -->
    <section class="hero">

      <!-- Galería desktop: columnas expandibles -->
      <div v-if="!isMobile" class="hero-gallery" aria-hidden="true">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="hero-col"
          :class="{ 'hero-col--active': hoveredIndex === i }"
          @mouseenter="hoveredIndex = i"
          @mouseleave="hoveredIndex = null"
        >
          <img :src="img" alt="" loading="lazy" />
          <div class="hero-col-overlay"></div>
        </div>
      </div>

      <!-- Galería móvil: imagen única de fondo -->
      <div v-else class="hero-mobile-bg" aria-hidden="true">
        <img :src="images[0]" alt="" />
        <div class="hero-mobile-overlay"></div>
      </div>

      <!-- Contenido centrado del hero -->
      <div class="hero-content">
        <span class="label-tag animate-fade-up" style="color:rgba(255,255,255,0.9); border-color:rgba(255,255,255,0.4); background:rgba(255,255,255,0.12);">
          22 de Noviembre de 2025 · Sevilla
        </span>

        <h1 class="hero-title animate-fade-up delay-200">
          <span class="hero-title-script">Valle</span>
          <span class="hero-title-amp">&amp;</span>
          <span class="hero-title-script">José Luis</span>
        </h1>

        <p class="hero-subtitle animate-fade-up delay-300">
          Real Parroquia de Señora Santa Ana · Cortijo El Esparragal
        </p>

        <div class="hero-divider animate-fade-up delay-500">
          <span class="hero-divider-line"></span>
          <svg class="hero-divider-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
          </svg>
          <span class="hero-divider-line"></span>
        </div>

        <div class="hero-actions animate-fade-up delay-700">
          <ConfirmAttendanceModal />
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="scroll-hint animate-float" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         CUENTA ATRÁS
         ═══════════════════════════════════════ -->
    <section class="countdown-section">
      <div class="section-inner">
        <span class="label-tag">Cuenta atrás</span>
        <h2 class="section-heading">Nos queda poco</h2>
        <Countdown />
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         TRIVIAL
         ═══════════════════════════════════════ -->
    <section class="trivial-section">
      <div class="section-inner">
        <TrivialModal />
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         COMENTARIOS
         ═══════════════════════════════════════ -->
    <section class="comments-section">
      <div class="section-inner">
        <span class="label-tag">Vuestras palabras</span>
        <h2 class="section-heading">Lo que decís vosotros</h2>
        <HighlightedComments />
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)
const hoveredIndex = ref(null)

const images = [
  '/images/img5.jpeg',
  '/images/img6.jpeg',
  '/images/img9.jpeg',
  '/images/img11.jpeg',
  '/images/img13.jpeg',
  '/images/img15.jpeg',
]

const checkMobile = () => { isMobile.value = window.innerWidth < 768 }

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.home { overflow-x: hidden; }

/* ─── HERO ─────────────────────────────────── */
.hero {
  position: relative;
  width: 100%;
  height: 100dvh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-gallery {
  position: absolute;
  inset: 0;
  display: flex;
}

.hero-col {
  flex: 1;
  position: relative;
  overflow: hidden;
  transition: flex 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: crosshair;
}
.hero-col--active { flex: 3.5; }

.hero-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.4,0,0.2,1), filter 0.6s ease;
  filter: brightness(0.5) saturate(0.85);
}
.hero-col--active img {
  transform: scale(1.04);
  filter: brightness(0.62) saturate(1.05);
}

.hero-col-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26,18,8,0.55) 0%, transparent 65%);
  pointer-events: none;
}

/* Móvil */
.hero-mobile-bg { position: absolute; inset: 0; }
.hero-mobile-bg img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.hero-mobile-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(26,18,8,0.3) 0%, rgba(26,18,8,0.5) 60%, rgba(26,18,8,0.7) 100%);
}

/* Contenido hero */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem 1.5rem;
  max-width: 820px;
}

.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  margin: 0;
  line-height: 1.0;
}
.hero-title-script {
  font-family: var(--font-script);
  font-size: clamp(3.5rem, 11vw, 7.5rem);
  color: white;
  text-shadow: 0 2px 40px rgba(0,0,0,0.35);
  line-height: 1.05;
}
.hero-title-amp {
  font-family: var(--font-script);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  color: var(--color-gold-light);
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
  opacity: 0.9;
  line-height: 1;
}
.hero-subtitle {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  margin: 0;
}
.hero-divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 200px;
}
.hero-divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(184,148,74,0.65), transparent);
}
.hero-divider-icon { width: 13px; height: 13px; color: var(--color-gold-light); flex-shrink: 0; }

.hero-actions { margin-top: 0.25rem; }

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: rgba(255,255,255,0.45);
  width: 26px;
}
.scroll-hint svg { width: 100%; }

/* ─── SECCIONES ─────────────────────────────── */
.section-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  text-align: center;
}
.section-heading {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(1.9rem, 3.5vw, 2.8rem);
  color: var(--color-dark);
  margin: 0.75rem 0 2.5rem;
  letter-spacing: 0.02em;
}

.countdown-section { background: var(--color-cream); border-top: 1px solid var(--color-border); }
.trivial-section    { background: var(--color-ivory); }
.comments-section   { background: var(--color-cream); border-top: 1px solid var(--color-border); }

@media (max-width: 768px) {
  .hero-content { gap: 1rem; }
  .section-inner { padding: 3.5rem 1.25rem; }
}
</style>
