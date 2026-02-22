<template>
  <div class="page-wrap">

    <!-- ── HERO SIMPLE ── -->
    <section class="page-hero-simple">
      <div class="page-hero-simple-inner">
        <span class="label-tag animate-fade-up">Regalos</span>
        <h1 class="page-hero-simple-title animate-fade-up delay-200 font-great-vibes">
          Con vosotros es suficiente
        </h1>
        <p class="page-hero-simple-sub animate-fade-up delay-300">
          Lo que más ilusión nos hace es compartir este día con todos vosotros
        </p>
      </div>
    </section>

    <!-- ── CONTENIDO ── -->
    <section class="content-section">
      <div class="content-inner">

        <!-- Transferencia -->
        <div class="gift-block glass-card">
          <div class="gift-block-header">
            <span class="label-tag">Opción 1</span>
            <h2 class="gift-block-title">Transferencia Bancaria</h2>
          </div>
          <p class="gift-text">
            Si quieres hacernos un regalo, nos ayudaría mucho en nuestra nueva etapa algo de dinero para empezar. Sabemos que es el regalo más típico, pero es lo que más nos ayudaría.
          </p>

          <div class="iban-box glass-card">
            <div class="iban-info">
              <div>
                <p class="iban-label">Titular</p>
                <p class="iban-value"><u>Valle Hinojosa Herrera</u> o <u>José Luis Cáceres Losada</u></p>
              </div>
              <div>
                <p class="iban-label">Entidad</p>
                <p class="iban-value">BBVA</p>
              </div>
              <div>
                <p class="iban-label">IBAN</p>
                <p class="iban-value iban-number">{{ account || 'Contacta con nosotros' }}</p>
              </div>
            </div>
            <button @click="copyIban" class="copy-btn" :class="{ 'copy-btn--done': copied }" aria-label="Copiar IBAN">
              <span v-if="!copied">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
                Copiar
              </span>
              <span v-else>✓ Copiado</span>
            </button>
          </div>

          <p class="gift-note">
            Puedes poner <strong>tu nombre</strong> como concepto. Por favor, no incluyas <strong>"Boda"</strong> o <strong>"Regalo"</strong> en el concepto. De cara a Hacienda puede ser mortal 😅
          </p>
        </div>

        <!-- Efectivo -->
        <div class="gift-block glass-card">
          <div class="gift-block-header">
            <span class="label-tag">Opción 2</span>
            <h2 class="gift-block-title">Dinero en Efectivo</h2>
          </div>
          <p class="gift-text">
            <strong>La mejor opción de cara a Hacienda.</strong> Hoy en día, los regalos de boda se consideran donaciones y tenemos que declararlos. El dinero en efectivo también nos vendría muy bien.
          </p>
        </div>

        <!-- Regalo personal -->
        <div class="gift-block glass-card">
          <div class="gift-block-header">
            <span class="label-tag">Opción 3</span>
            <h2 class="gift-block-title">Regalo Personal</h2>
          </div>
          <p class="gift-text">Si te gustaría hacernos un regalo más personal, aquí tienes algunas ideas que nos encantarían:</p>
          <ul class="gift-list">
            <li>Vajillas y cristalería <em>(preferiblemente en tonos neutros, blancos o azules)</em></li>
            <li>Utensilios de cocina <em>(sartenes, ollas, cuchillos de calidad)</em></li>
            <li>Ropa de cama y toallas <em>(preferiblemente en tonos neutros, blancos o azules)</em></li>
            <li>Cabecero de cama</li>
            <li>Electrodomésticos pequeños <em>(batidora, tostadora, cafetera)</em></li>
            <li>Minibar</li>
          </ul>
        </div>

        <!-- CTA contacto -->
        <div style="text-align:center; margin-top: 1rem;">
          <a
            href="mailto:jlcaclosada@gmail.com,vallehinojosa95@gmail.com"
            class="btn-outline"
          >
            Contactar con nosotros
          </a>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const account = import.meta.env.VITE_ACCOUNT
const copied = ref(false)

const copyIban = async () => {
  if (!account) return
  try {
    await navigator.clipboard.writeText(account)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2500)
  } catch {
    // clipboard API not available
  }
}
</script>

<style scoped>
.page-wrap { overflow-x: hidden; }

/* Hero simple */
.page-hero-simple {
  background: var(--color-ivory);
  border-bottom: 1px solid var(--color-border);
  padding: 7rem 1.5rem 4rem;
  text-align: center;
}
.page-hero-simple-inner { max-width: 680px; margin: 0 auto; }
.page-hero-simple-title {
  font-size: clamp(3rem, 8vw, 5rem);
  color: var(--color-gold);
  margin: 0.75rem 0 0;
  line-height: 1.1;
}
.page-hero-simple-sub {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: 1.1rem;
  color: var(--color-muted);
  margin: 1rem 0 0;
  line-height: 1.7;
}

/* Content */
.content-section { background: var(--color-cream); }
.content-inner { max-width: 780px; margin: 0 auto; padding: 4rem 1.5rem; display: flex; flex-direction: column; gap: 2rem; }

/* Gift blocks */
.gift-block { padding: 2.25rem 2rem; }
.gift-block-header { margin-bottom: 1.25rem; }
.gift-block-title {
  font-family: var(--font-serif); font-weight: 300;
  font-size: 1.7rem; color: var(--color-dark);
  margin: 0.5rem 0 0; letter-spacing: 0.02em;
}
.gift-text {
  font-family: var(--font-serif); font-weight: 300;
  font-size: 1rem; color: var(--color-muted);
  line-height: 1.8; margin: 0 0 1.25rem;
}
.gift-note {
  font-family: var(--font-serif); font-weight: 300;
  font-size: 0.9rem; color: var(--color-muted);
  line-height: 1.7; margin: 1rem 0 0;
  font-style: italic;
}
.gift-note strong { color: var(--color-dark); font-weight: 400; font-style: normal; }

/* IBAN box */
.iban-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(184,148,74,0.05) !important;
  border-color: rgba(184,148,74,0.25) !important;
  flex-wrap: wrap;
}
.iban-info { display: flex; flex-direction: column; gap: 0.75rem; flex: 1; }
.iban-label {
  font-family: var(--font-sans); font-size: 0.55rem;
  font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--color-gold); margin: 0 0 0.2rem;
}
.iban-value {
  font-family: var(--font-serif); font-weight: 400;
  font-size: 1rem; color: var(--color-dark); margin: 0;
}
.iban-number {
  font-family: var(--font-sans); font-size: 0.95rem;
  letter-spacing: 0.08em; color: var(--color-dark);
}

/* Copy button */
.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1.4rem;
  background: transparent;
  border: 1.5px solid var(--color-gold);
  border-radius: 100px;
  font-family: var(--font-sans);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold-dark);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  white-space: nowrap;
}
.copy-btn svg { width: 14px; height: 14px; }
.copy-btn:hover { background: var(--color-gold); color: white; }
.copy-btn--done { background: var(--color-gold); color: white; }

/* Gift list */
.gift-list {
  list-style: none;
  padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 0.6rem;
}
.gift-list li {
  font-family: var(--font-serif); font-weight: 300;
  font-size: 1rem; color: var(--color-muted);
  line-height: 1.5;
  padding-left: 1.2rem;
  position: relative;
}
.gift-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-gold);
  font-size: 0.8rem;
}
.gift-list em { color: var(--color-gold-dark); font-style: italic; }

@media (max-width: 600px) {
  .content-inner { padding: 3rem 1.25rem; }
  .gift-block { padding: 1.75rem 1.25rem; }
  .iban-box { flex-direction: column; align-items: flex-start; }
  .page-hero-simple { padding: 6rem 1.25rem 3rem; }
}
</style>
