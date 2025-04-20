<template>
  <nav class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-2">
          <span class="text-3xl font-miller bold text-black">V&J |</span>
          <span class="mt-1 md:inline text-black text-2xl font-miller"> 22.11.2025</span>
        </a>

        <!-- Menú Desktop -->
        <div class="hidden lg:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.path"
            :href="item.path"
            class="group relative text-xl font-miller text-gray-800 hover:text-[#54335a] transition-colors transform hover:scale-105 cursor-pointer"
          >
            {{ item.label }}
            <!-- Línea de subrayado animada -->
            <span class="absolute left-0 -bottom-1 h-0.5 bg-[#54335a] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </div>

        <!-- Botón Menú Móvil -->
        <button 
          @click="toggleMenu"
          class="lg:hidden p-2 rounded-md text-gray-700 focus:outline-none cursor-pointer"
          aria-label="Menú"
        >
          <svg 
            class="w-6 h-6 transition-transform duration-200" 
            :class="{ 'rotate-90': menuOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menú Móvil -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-show="menuOpen"
        class="lg:hidden absolute inset-x-0 z-40 bg-white shadow-lg"
      >
        <div class="container mx-auto px-4 py-3 space-y-4">
          <a
            v-for="item in navItems"
            :key="item.path"
            :href="item.path"
            @click="toggleMenu"
            class="block px-4 py-3 text-lg font-miller text-gray-700 hover:text-[#54335a] hover:bg-gray-50 rounded-lg transition-colors transform hover:scale-105 cursor-pointer"
          >
            {{ item.label }}
          </a>
          <div class="pt-4 pb-2 text-center text-sm text-gray-500 font-miller">
            Valle & José Luis · 2025
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/ceremonia', label: 'Ceremonia' },
  { path: '/celebracion', label: 'Celebración' },
  { path: '/contact', label: 'Contacto' },
  { path: '/faq', label: 'FAQ' },
  { path: '/gifts', label: 'Regalos' }
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? 'hidden' : '';
};

const handleClickOutside = (event) => {
  const navElement = document.querySelector('nav');
  if (menuOpen.value && !navElement.contains(event.target)) {
    toggleMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* Efecto de hover en el menú */
.group:hover {
  transform: scale(1.05); /* Añade escala al hacer hover en el menú */
  transition: transform 0.3s ease-in-out; /* Asegura que la escala sea suave */
}

/* Línea de subrayado */
.group .absolute {
  transition: all 0.3s ease-in-out;
}

/* Cursor pointer para el menú móvil */
.cursor-pointer {
  cursor: pointer;
}
</style>
