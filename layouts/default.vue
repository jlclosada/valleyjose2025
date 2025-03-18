<template>
  <div class="relative min-h-screen flex flex-col text-gray-900">
    <!-- Fondo animado -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute w-full h-full bg-gradient-to-br from-gray-100 via-blue-200 to-indigo-300 animate-gradient">
      </div>
      <div class="absolute w-full h-full bg-white opacity-20 mix-blend-overlay"></div>

      <!-- Partículas flotantes -->
      <div class="absolute inset-0 pointer-events-none">
        <span v-for="i in 50" :key="i" class="particle" :style="randomPosition()"></span>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const randomPosition = () => {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${4 + Math.random() * 4}s`, // Entre 4s y 8s
    animationDelay: `${Math.random() * 3}s`, // Retraso aleatorio
    width: `${4 + Math.random() * 6}px`, // Tamaño entre 4px y 10px
    height: `${4 + Math.random() * 6}px`,
    opacity: Math.random() * 0.6 + 0.4, // Opacidad entre 0.4 y 1
  };
};
</script>

<style>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes floating-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

/* Fondo animado */
.animate-gradient {
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

/* Partículas animadas */
.particle {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  filter: blur(2px);
  animation: floating-up linear infinite;
}
</style>
