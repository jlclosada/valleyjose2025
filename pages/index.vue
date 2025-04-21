<template>
  <div class="w-full min-h-screen">
    <!-- Fondo e imágenes -->
    <div class="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-fixed">
      <!-- Desktop: galería completa -->
      <div v-if="!isMobile" class="section absolute inset-0 z-0">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          alt="Imagen"
        />
      </div>

      <!-- Móvil: solo una imagen -->
      <div v-else class="absolute inset-0 z-0">
        <img :src="images[0]" alt="Imagen fondo móvil" class="w-full h-full object-cover opacity" />
      </div>

      <!-- Confirmación de asistencia -->
      <ConfirmAttendanceModal />

      <!-- Cuenta regresiva -->
      <Countdown />
    </div>

    <!-- Comentarios destacados: FUERA del bloque centrado -->
    <HighlightedComments />
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
const images = [
  '/images/img5.jpeg',
  '/images/img6.jpeg',
  '/images/img9.jpeg',
  '/images/img11.jpeg',
  '/images/img13.jpeg',
  '/images/img15.jpeg',
];
</script>

<style scoped>
/* Fondo principal */
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.bg-fixed {
  background-attachment: fixed;
}

/* Animaciones */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-slide {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.font-custom {
  font-family: 'Great Vibes', cursive;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-slide {
  animation: fade-slide 1s ease-out;
}

/* Estilo de las imágenes tipo galería expandible */
.section {
  display: flex;
  min-width: 60px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
}

.section img {
  width: 0px;
  flex-grow: 1;
  object-fit: cover;
  opacity: 1;
  transition: 0.5s ease;
  border-radius: 8px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.section img:hover {
  cursor: crosshair;
  width: 300px;
  opacity: 1;
  filter: contrast(120%);
}

/* Texto */
h1, p {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}

h1 {
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.7);
}

/* Contenedor del texto */
.text-container {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
}

/* Efecto de texto con borde */
.text-stroke {
  color: transparent;
  -webkit-text-stroke: 1.5px #ffffff;
  text-stroke: 1.5px #ffffff;
}

/* Gradiente para el texto */
.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #e2d1f8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(226, 209, 248, 0.3);
}

/* Animaciones personalizadas */
@keyframes title-appear {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes subtitle-appear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  60% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes underline-pulse {
  0%, 100% {
    transform: scaleX(1);
    opacity: 1;
  }
  50% {
    transform: scaleX(1.1);
    opacity: 0.8;
  }
}

@keyframes float-1 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(10px) rotate(-5deg);
  }
}

.animate-title {
  animation: title-appear 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.animate-subtitle {
  animation: subtitle-appear 1.8s ease-out forwards;
}

.animate-underline {
  animation: underline-pulse 3s ease-in-out infinite;
}

.animate-float-1 {
  animation: float-1 8s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 6s ease-in-out infinite 2s;
}

/* Responsividad mejorada */
@media (max-width: 768px) {
  h1 {
    font-size: 4.5rem;
    line-height: 1.1;
  }
  
  p {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
  
  .text-container {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 3.5rem;
  }
  
  p {
    font-size: 1.2rem;
  }
}

/* Responsivo */
@media (max-width: 768px) {
  .section {
    flex-direction: column;
    height: auto;
  }

  .section img {
    width: 100%;
    height: 200px;
  }

  .section img:hover {
    width: 100%;
    height: 250px;
  }
}
</style>
