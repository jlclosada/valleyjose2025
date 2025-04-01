<template>
  <nav
    class="backdrop-blur-lg bg-white/60 shadow-md py-4 fixed w-full top-0 z-50 transition-all duration-500 border-b border-blue-300/30">
    <div class="container mx-auto flex justify-between items-center px-6">
      <!-- Logo / Título -->
      <a href="/" class="text-4xl md:text-4xl font-extrabold tracking-wide flex items-center gap-2 font-custom
        relative text-blue-900 hover:scale-110 transition-all duration-300 animate-shimmer">
        Valle & Jose Luis
      </a>

      <!-- Botón Menú Móvil -->
      <button @click.stop="toggleMenu" ref="menuButton"
        class="lg:hidden text-blue-900 focus:outline-none cursor-pointer">
        <svg class="w-8 h-8 transition-transform duration-300" :class="{ 'rotate-90': menuOpen }" fill="none"
          stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Menú para pantallas grandes -->
      <ul class="hidden lg:flex space-x-10 text-lg font-medium">
        <li><a href="/" class="nav-link">Inicio</a></li>
        <li><a href="/ceremonia" class="nav-link">Ceremonia</a></li>
        <li><a href="/celebracion" class="nav-link">Celebración</a></li>
        <li><a href="/contact" class="nav-link">Contacto</a></li>
        <li><a href="/faq" class="nav-link">FAQ</a></li>
        <li><a href="/gifts" class="nav-link">Regalos</a></li>
      </ul>
    </div>

    <!-- Menú Móvil Desplegable -->
    <transition name="slide-fade">
      <div v-if="menuOpen" ref="menuDropdown"
        class="lg:hidden absolute top-full left-0 w-full bg-white/90 shadow-lg py-6 backdrop-blur-xl rounded-b-3xl transition-all duration-500 border-t border-blue-200/40 cursor-pointer">
        <ul class="text-center text-lg font-medium space-y-6">
          <li><a href="/" class="nav-link" @click="toggleMenu">Inicio</a></li>
          <li><a href="/ceremonia" class="nav-link" @click="toggleMenu">Ceremonia</a></li>
          <li><a href="/celebracion" class="nav-link" @click="toggleMenu">Celebración</a></li>
          <li><a href="/contact" class="nav-link" @click="toggleMenu">Contacto</a></li>
          <li><a href="/faq" class="nav-link" @click="toggleMenu">FAQ</a></li>
          <li><a href="/gifts" class="nav-link" @click="toggleMenu">Regalos</a></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const menuDropdown = ref(null);
const menuButton = ref(null);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Función para cerrar el menú si se hace clic fuera de él
const onClickOutside = (event) => {
  if (
    menuOpen.value &&
    menuDropdown.value &&
    !menuDropdown.value.contains(event.target) &&
    !menuButton.value.contains(event.target) // Evita que se cierre si se hace clic en el botón
  ) {
    menuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", onClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", onClickOutside);
});
</script>

<style>
/* Fuente personalizada */
.font-custom {
  font-family: "Great Vibes", cursive;
}

/* Estilo del Link */
.nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  color: #1e3a8a;
  transition: color 0.3s, transform 0.2s;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: rgba(30, 58, 138, 0.4);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-out;
}

.nav-link:hover {
  color: #0e1a40;
  transform: scale(1.03);
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Animaciones del Menú Móvil */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
@keyframes shimmer {
  0% {
    color: #17327c;
    text-shadow: 0px 0px 5px rgba(6, 6, 6, 0.2),
      0px 0px 10px rgba(221, 225, 237, 0.2);
  }

  50% {
    color: #3350b9;
    text-shadow: 0px 0px 10px rgba(223, 214, 214, 0.4),
      0px 0px 20px rgba(5, 14, 39, 0.4);
  }

  100% {
    color: #1e3a8a;
    text-shadow: 0px 0px 5px rgba(241, 235, 235, 0.2),
      0px 0px 10px rgba(30, 58, 138, 0.2);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite alternate ease-in-out;
}
</style>
