<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-script font-great-vibes">Valle &amp; José Luis</p>

      <div class="footer-divider" aria-hidden="true">
        <span></span>
        <svg viewBox="0 0 24 24" fill="currentColor" style="width:10px; color:var(--color-gold); flex-shrink:0;">
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
        </svg>
        <span></span>
      </div>

      <p class="footer-copy">&copy; Valle y José Luis · 2025 · Sevilla</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--color-ivory);
  border-top: 1px solid var(--color-border);
  padding: 2.5rem 1.5rem;
  text-align: center;
}
.footer-inner {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.footer-script {
  font-size: 2rem;
  color: var(--color-gold);
  line-height: 1;
  margin: 0;
}
.footer-divider {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 120px;
}
.footer-divider span {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(184,148,74,0.5), transparent);
}
.footer-copy {
  font-family: var(--font-sans);
  font-size: 0.58rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin: 0;
  opacity: 0.75;
}
</style>
