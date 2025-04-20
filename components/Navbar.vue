<template>
  <nav class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-2">
          <span class="text-3xl font-miller bold text-black">V&J |</span>
          <span class="mt-1 md:inline text-gray-700 text-2xl font-miller font-custom"> 22.11.2025</span>
        </a>

        <!-- Menú Desktop -->
        <div class="hidden lg:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.path"
            :href="item.path"
            class="group relative text-xl font-medium text-gray-800 hover:text-indigo-900 transition-colors"
          >
            {{ item.label }}
            <!-- Línea de subrayado animada -->
            <span class="absolute left-0 -bottom-1 h-0.5 bg-indigo-900 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </div>

        <!-- Botón Menú Móvil -->
        <button 
          @click="toggleMenu"
          class="lg:hidden p-2 rounded-md text-gray-700 focus:outline-none"
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
            class="block px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {{ item.label }}
          </a>
          <div class="pt-4 pb-2 text-center text-sm text-gray-500">
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