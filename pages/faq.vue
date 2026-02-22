<template>
  <div class="page-wrap">

    <!-- ── HERO SIMPLE ── -->
    <section class="page-hero-simple">
      <div class="page-hero-simple-inner">
        <span class="label-tag animate-fade-up">Preguntas</span>
        <h1 class="page-hero-simple-title animate-fade-up delay-200 font-great-vibes">
          Todo lo que necesitas saber
        </h1>
      </div>
    </section>

    <!-- ── FAQ ── -->
    <section class="content-section">
      <div class="content-inner">
        <div class="faq-list">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ 'faq-item--open': faq.open }"
          >
            <button class="faq-question" @click="toggle(i)" :aria-expanded="faq.open">
              <span class="faq-question-text">{{ faq.pregunta }}</span>
              <span class="faq-chevron" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <transition name="faq-body">
              <div v-if="faq.open" class="faq-answer" v-html="faq.respuesta"></div>
            </transition>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'

const faqs = ref([
  {
    pregunta: '¿Cómo debo ir vestido?',
    respuesta: `
      El código de vestimenta es <strong>formal</strong>. Se recomienda traje para los hombres y vestido midi o corto para las mujeres.<br><br>
      Se recuerda que la boda es <strong>durante el día</strong>. En noviembre, en Sevilla no hace especialmente frío, pero se recomienda llevar algo de abrigo.<br><br>
      <strong>Si eres testigo, te toca chaqué</strong>.<br><br>
      Mira este video de inspiración:
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DIRh7ZhMyxC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" data-instgrm-version="14" style="background:#FFF; border:0; margin: 1em auto; max-width:540px;"></blockquote>
    `,
    open: false,
  },
  {
    pregunta: '¿Puedo llevar acompañante?',
    respuesta: `<strong>¡Claro!</strong> Simplemente indícalo en el <a href="https://docs.google.com/forms/d/e/1FAIpQLSeg8s8hQTXAMKssr9iePRGYO6RhIUf1eKsO0NfRnYUjJAlD5w/viewform?embedded=true" class="faq-link" target="_blank" rel="noopener noreferrer">formulario de confirmación de asistencia</a>. Nos ayudaría mucho saber cuántas personas vendrán.`,
    open: false,
  },
  {
    pregunta: '¿Hay hotel disponible para gente de fuera?',
    respuesta: `Tenemos varias ofertas de hoteles en Sevilla. Por favor, <a href="/contact" class="faq-link">ponte en contacto con nosotros</a> para más información. Los precios rondan los <strong>70–100 € la noche</strong>.`,
    open: false,
  },
  {
    pregunta: '¿Habrá opciones de comida para alérgicos?',
    respuesta: `Sí. Por favor, avísanos con anticipación para organizar el menú. En la <a href="https://docs.google.com/forms/d/e/1FAIpQLSeg8s8hQTXAMKssr9iePRGYO6RhIUf1eKsO0NfRnYUjJAlD5w/viewform?embedded=true" class="faq-link" target="_blank" rel="noopener noreferrer">confirmación de asistencia</a> hay un campo para indicar cualquier restricción alimentaria.`,
    open: false,
  },
  {
    pregunta: '¿Dónde y cuándo es la ceremonia?',
    respuesta: `La ceremonia religiosa empezará a las <strong>11:30 h</strong> en la Parroquia de Santa Ana, en Triana, Sevilla. La convocatoria en la parroquia será a las <strong>11:00 h</strong>.`,
    open: false,
  },
  {
    pregunta: '¿Habrá transporte disponible?',
    respuesta: `Contamos con autobuses que facilitarán el traslado desde la iglesia hasta el cortijo en Gerena con trayectos de ida y vuelta. Si necesitas sitio en el autobús, por favor indícanoslo personalmente para poder reservar las plazas.`,
    open: false,
  },
  {
    pregunta: '¿Es fácil aparcar?',
    respuesta: `La iglesia está en el centro de Sevilla, por lo que el aparcamiento puede ser complicado. Se recomienda llegar con tiempo. Hay varios parkings públicos cerca como el de <a href="https://maps.app.goo.gl/vLzrGKWFhceFwc15A" class="faq-link" target="_blank" rel="noopener noreferrer">Plaza de Cuba</a> o el <a href="https://maps.app.goo.gl/xRe3LJtbtY7nNSp87" class="faq-link" target="_blank" rel="noopener noreferrer">Parking Paseo de Colón</a>.`,
    open: false,
  },
])

const toggle = (i) => {
  faqs.value[i].open = !faqs.value[i].open
}

onMounted(() => {
  watch(
    () => faqs.value.map(f => f.open),
    async () => {
      await nextTick()
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      } else {
        const s = document.createElement('script')
        s.src = '//www.instagram.com/embed.js'
        s.async = true
        document.body.appendChild(s)
      }
    },
    { deep: true }
  )
})
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

/* Content */
.content-section { background: var(--color-cream); }
.content-inner { max-width: 780px; margin: 0 auto; padding: 4rem 1.5rem; }

/* FAQ list */
.faq-list { display: flex; flex-direction: column; }

.faq-item {
  border-bottom: 1px solid var(--color-border);
}
.faq-item:first-child { border-top: 1px solid var(--color-border); }

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.faq-question-text {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 1.1rem;
  color: var(--color-dark);
  line-height: 1.4;
  transition: color 0.3s ease;
}
.faq-item--open .faq-question-text { color: var(--color-gold-dark); }

.faq-chevron {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-gold);
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
}
.faq-chevron svg { width: 100%; height: 100%; }
.faq-item--open .faq-chevron { transform: rotate(180deg); }

.faq-answer {
  padding: 0 0 1.5rem;
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: 1rem;
  color: var(--color-muted);
  line-height: 1.85;
}

/* Links inside FAQ */
:deep(.faq-link) {
  color: var(--color-gold-dark);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: rgba(184,148,74,0.4);
  transition: color 0.3s ease;
}
:deep(.faq-link:hover) { color: var(--color-gold); }

/* FAQ transition */
.faq-body-enter-active,
.faq-body-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.faq-body-enter-from,
.faq-body-leave-to { opacity: 0; transform: translateY(-6px); }

@media (max-width: 600px) {
  .content-inner { padding: 3rem 1.25rem; }
  .page-hero-simple { padding: 6rem 1.25rem 3rem; }
  .faq-question-text { font-size: 1rem; }
}
</style>
