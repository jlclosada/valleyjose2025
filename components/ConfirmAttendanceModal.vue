<template>
  <!-- Botón principal -->
  <button @click="showModal = true" class="rsvp-btn" aria-label="Confirmar asistencia">
    <span class="rsvp-btn-text">Confirmar Asistencia</span>
    <svg class="rsvp-btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
    </svg>
  </button>

  <!-- Modal overlay -->
  <Teleport to="body">
    <transition name="modal-fade">
      <div
        v-if="showModal"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        @click.self="showModal = false"
      >
        <div class="modal-box animate-modal">
          <!-- Header -->
          <div class="modal-header">
            <div class="modal-header-deco" aria-hidden="true">
              <span class="font-great-vibes" style="font-size:1.6rem; color:var(--color-gold);">Valle &amp; José Luis</span>
            </div>
            <h2 id="modal-title" class="modal-title">Confirmar Asistencia</h2>
            <button
              @click="showModal = false"
              class="modal-close"
              aria-label="Cerrar"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Iframe formulario -->
          <div class="modal-form-wrap">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeg8s8hQTXAMKssr9iePRGYO6RhIUf1eKsO0NfRnYUjJAlD5w/viewform?embedded=true"
              width="100%"
              height="580"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Formulario de confirmación de asistencia"
              loading="lazy"
            >Cargando…</iframe>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>

<style scoped>
/* Botón RSVP */
.rsvp-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.8rem;
  background: rgba(255,255,255,0.15);
  color: white;
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  border-radius: 100px;
  border: 1.5px solid rgba(255,255,255,0.55);
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
.rsvp-btn:hover {
  background: rgba(255,255,255,0.25);
  border-color: rgba(255,255,255,0.8);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
}
.rsvp-btn-text { position: relative; }
.rsvp-btn-icon { width: 14px; height: 14px; flex-shrink: 0; opacity: 0.85; }

/* Overlay */
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

/* Caja modal */
.modal-box {
  background: var(--color-cream);
  border-radius: 1.5rem;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 30px 80px rgba(26,18,8,0.25),
    0 0 0 1px rgba(184,148,74,0.15);
}

/* Header modal */
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
.modal-title {
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

/* Form iframe */
.modal-form-wrap {
  flex: 1;
  overflow-y: auto;
  background: white;
}
.modal-form-wrap iframe { display: block; }

/* Transición */
.modal-fade-enter-active,
.modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to { opacity: 0; }

@media (max-width: 480px) {
  .modal-box { border-radius: 1rem; max-height: 95vh; }
  .modal-title { font-size: 0.9rem; }
  .rsvp-btn { padding: 0.85rem 2rem; }
}
</style>
