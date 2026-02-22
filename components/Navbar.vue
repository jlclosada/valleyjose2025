<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar-inner">
      <!-- Logo -->
      <a href="/" class="navbar-logo" aria-label="Inicio">
        <span class="logo-initials">V <span class="logo-amp">&amp;</span> J</span>
        <span class="logo-divider"></span>
        <span class="logo-date">22 · XI · 2025</span>
      </a>

      <!-- Menú Desktop -->
      <div class="nav-links">
        <a v-for="item in navItems" :key="item.path" :href="item.path" class="nav-link">
          {{ item.label }}
        </a>
      </div>

      <!-- Botón Menú Móvil -->
      <button @click="toggleMenu" class="menu-toggle" :aria-expanded="menuOpen" aria-label="Abrir menú">
        <span class="hamburger" :class="{ 'hamburger--open': menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Menú Móvil -->
    <transition name="mobile-menu">
      <div v-show="menuOpen" class="mobile-nav">
        <div class="mobile-nav-inner">
          <a
            v-for="item in navItems"
            :key="item.path"
            :href="item.path"
            @click="closeMenu"
            class="mobile-nav-link"
          >
            {{ item.label }}
          </a>
          <div class="mobile-nav-footer">
            <span class="font-great-vibes" style="font-size:1.5rem; color: var(--color-gold);">Valle &amp; José Luis</span>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const scrolled = ref(false);

const navItems = [
  { path: '/',            label: 'Inicio' },
  { path: '/ceremonia',   label: 'Ceremonia' },
  { path: '/celebracion', label: 'Celebración' },
  { path: '/contact',     label: 'Contacto' },
  { path: '/faq',         label: 'FAQ' },
  { path: '/gifts',       label: 'Regalos' },
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = '';
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 40;
};

const handleClickOutside = (e) => {
  const nav = document.querySelector('.navbar');
  if (menuOpen.value && nav && !nav.contains(e.target)) closeMenu();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background 0.4s ease, box-shadow 0.4s ease;
  background: rgba(250, 247, 242, 0.0);
}

.navbar--scrolled {
  background: rgba(250, 247, 242, 0.94);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 1px 0 rgba(184,148,74,0.18), 0 4px 24px rgba(26,18,8,0.07);
}

.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: opacity 0.3s ease;
}
.navbar-logo:hover { opacity: 0.7; }

.logo-initials {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: 1.25rem;
  color: var(--color-dark);
  letter-spacing: 0.08em;
  line-height: 1;
}

.logo-amp {
  font-family: var(--font-script);
  font-size: 1.55rem;
  color: var(--color-gold);
  vertical-align: middle;
}

.logo-divider {
  width: 1px;
  height: 20px;
  background: rgba(184,148,74,0.35);
  flex-shrink: 0;
}

.logo-date {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-muted);
}

/* Nav links desktop */
.nav-links {
  display: none;
  align-items: center;
  gap: 2.5rem;
}
@media (min-width: 1024px) { .nav-links { display: flex; } }

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.3s ease;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1px;
  background: var(--color-gold);
  transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
}
.nav-link:hover { color: var(--color-gold-dark); }
.nav-link:hover::after { width: 100%; }

/* Hamburger */
.menu-toggle {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}
@media (min-width: 1024px) { .menu-toggle { display: none; } }

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 22px;
}
.hamburger span {
  display: block;
  height: 1.5px;
  background: var(--color-dark);
  border-radius: 2px;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  transform-origin: center;
}
.hamburger span:nth-child(2) { width: 70%; }
.hamburger span:nth-child(3) { width: 85%; }
.hamburger--open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); }
.hamburger--open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger--open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); width: 100%; }

/* Menú móvil */
.mobile-nav {
  position: absolute;
  inset-x: 0; top: 100%;
  background: rgba(250,247,242,0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1px solid rgba(184,148,74,0.15);
  box-shadow: 0 20px 40px rgba(26,18,8,0.1);
}
.mobile-nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.mobile-nav-link {
  font-family: var(--font-sans);
  font-size: 0.63rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  padding: 0.9rem 0;
  border-bottom: 1px solid rgba(184,148,74,0.1);
  transition: color 0.3s ease;
}
.mobile-nav-link:hover { color: var(--color-gold); }
.mobile-nav-link:last-of-type { border-bottom: none; }
.mobile-nav-footer { margin-top: 1.5rem; text-align: center; }

.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
