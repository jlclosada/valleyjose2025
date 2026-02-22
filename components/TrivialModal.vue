<template>
  <div class="trivial-wrap">
    <span class="label-tag">Juego exclusivo</span>
    <h2 class="trivial-title">
      ¿Quieres ganar <em>premios exclusivos</em> en la boda?
    </h2>
    <p class="trivial-desc">
      Participa en el <strong>trivial</strong> antes del gran día.<br>
      Los mejores jugadores recibirán su premio en persona.
    </p>

    <button @click="showModal = true" class="btn-outline trivial-btn">
      Jugar al Trivial
    </button>
  </div>

  <div v-if="showModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="trivial-title" @click.self="showModal = false">
    <div class="modal-box animate-modal">
      <div class="modal-header">
        <div class="modal-header-deco" aria-hidden="true">
          <span class="font-great-vibes" style="font-size:1.5rem; color:var(--color-gold);">¡Participa!</span>
        </div>
        <h2 id="trivial-title" class="modal-title-inner">Trivial</h2>
        <button @click="showModal = false" class="modal-close" aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="modal-form-wrap">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdlZptqmi6UcYlzKlPxcKOtrAdZ7X2qMOoDbQxqt37Zmtw3cA/viewform?usp=sharing"
          width="100%"
          height="580"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Formulario del trivial"
          loading="lazy"
        >Cargando…</iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>

<style scoped>
.trivial-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
}
.trivial-title {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  color: var(--color-dark);
  line-height: 1.3;
  margin: 0.75rem 0 0;
}
.trivial-title em { font-style: italic; color: var(--color-gold); }
.trivial-desc {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: 1rem;
  color: var(--color-muted);
  margin: 1rem 0 0;
  line-height: 1.7;
}
.trivial-btn { margin-top: 1.75rem; }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26,18,8,0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.modal-box {
  background: var(--color-cream);
  border-radius: 1.5rem;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 30px 80px rgba(26,18,8,0.25), 0 0 0 1px rgba(184,148,74,0.15);
  animation: modal-appear 0.4s cubic-bezier(0.19,1,0.22,1) both;
}
@keyframes modal-appear {
  from { opacity: 0; transform: translateY(20px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.75rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
  position: relative;
}
.modal-header-deco { flex: 1; }
.modal-title-inner {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: 1.1rem;
  color: var(--color-dark);
  margin: 0;
  letter-spacing: 0.05em;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: transparent;
  cursor: pointer;
  color: var(--color-muted);
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-left: auto;
}
.modal-close svg { width: 16px; height: 16px; }
.modal-close:hover { background: var(--color-border); color: var(--color-dark); }
.modal-form-wrap { flex: 1; overflow-y: auto; background: white; }
.modal-form-wrap iframe { display: block; }

@media (max-width: 480px) {
  .modal-box { border-radius: 1rem; max-height: 95vh; }
}
</style>
