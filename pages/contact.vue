<template>
  <div class="page-wrap">

    <!-- ── HERO SIMPLE ── -->
    <section class="page-hero-simple">
      <div class="page-hero-simple-inner">
        <span class="label-tag animate-fade-up">Contacto</span>
        <h1 class="page-hero-simple-title animate-fade-up delay-200 font-great-vibes">
          Estamos aquí para vosotros
        </h1>
        <p class="page-hero-simple-sub animate-fade-up delay-300">
          Cualquier duda, no dudéis en escribirnos
        </p>
      </div>
    </section>

    <!-- ── CONTACTO ── -->
    <section class="content-section">
      <div class="content-inner">
        <div class="contact-grid">

          <!-- Novia -->
          <div class="contact-card glass-card">
            <div class="contact-card-header">
              <span class="font-great-vibes contact-script">La Novia</span>
              <h2 class="contact-name">{{ noviaNombre }}</h2>
            </div>
            <div class="contact-details">
              <a :href="`tel:${noviaTelefono}`" class="contact-row">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{{ noviaTelefono }}</span>
              </a>
              <a :href="`mailto:${noviaEmail}`" class="contact-row">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span class="contact-email">{{ noviaEmail }}</span>
              </a>
            </div>
          </div>

          <!-- Novio -->
          <div class="contact-card glass-card">
            <div class="contact-card-header">
              <span class="font-great-vibes contact-script">El Novio</span>
              <h2 class="contact-name">{{ novioNombre }}</h2>
            </div>
            <div class="contact-details">
              <a :href="`tel:${novioTelefono}`" class="contact-row">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{{ novioTelefono }}</span>
              </a>
              <a :href="`mailto:${novioEmail}`" class="contact-row">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span class="contact-email">{{ novioEmail }}</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Nota pie -->
        <p class="contact-note">
          También podéis escribirnos conjuntamente a
          <a href="mailto:jlcaclosada@gmail.com" class="contact-link">jlcaclosada@gmail.com</a>
          o
          <a href="mailto:vallehinojosa95@gmail.com" class="contact-link">vallehinojosa95@gmail.com</a>
        </p>
      </div>
    </section>

  </div>
</template>

<script setup>
const noviaNombre   = import.meta.env.VITE_NOVIA_NOMBRE
const noviaTelefono = import.meta.env.VITE_NOVIA_TELEFONO
const noviaEmail    = import.meta.env.VITE_NOVIA_EMAIL

const novioNombre   = import.meta.env.VITE_NOVIO_NOMBRE
const novioTelefono = import.meta.env.VITE_NOVIO_TELEFONO
const novioEmail    = import.meta.env.VITE_NOVIO_EMAIL
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
  font-family: var(--font-serif); font-weight: 300;
  font-size: 1.05rem; color: var(--color-muted);
  margin: 1rem 0 0; line-height: 1.7;
}

/* Content */
.content-section { background: var(--color-cream); }
.content-inner { max-width: 860px; margin: 0 auto; padding: 5rem 1.5rem; }

/* Contact grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-card { padding: 2.25rem 2rem; }
.contact-card-header { margin-bottom: 1.75rem; }
.contact-script { font-size: 1.5rem; color: var(--color-gold); display: block; line-height: 1.2; }
.contact-name {
  font-family: var(--font-serif); font-weight: 300;
  font-size: 1.5rem; color: var(--color-dark);
  margin: 0.25rem 0 0; letter-spacing: 0.02em;
}

.contact-details { display: flex; flex-direction: column; gap: 1rem; }
.contact-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-muted);
  text-decoration: none;
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}
.contact-row:hover { color: var(--color-gold-dark); }
.contact-icon { width: 18px; height: 18px; flex-shrink: 0; color: var(--color-gold); }
.contact-email { word-break: break-all; }

.contact-note {
  font-family: var(--font-serif); font-weight: 300;
  font-size: 0.95rem; color: var(--color-muted);
  text-align: center; line-height: 1.8;
  margin: 0;
}
.contact-link {
  color: var(--color-gold-dark);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: rgba(184,148,74,0.4);
  transition: color 0.3s ease;
}
.contact-link:hover { color: var(--color-gold); }

@media (max-width: 640px) {
  .contact-grid { grid-template-columns: 1fr; }
  .content-inner { padding: 3rem 1.25rem; }
  .page-hero-simple { padding: 6rem 1.25rem 3rem; }
}
</style>
