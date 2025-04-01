<template>
  <div
    class="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-fixed">

    <!-- Imágenes distribuidas de forma estética a los lados -->
    <div class="absolute inset-0 z-0">
      <div v-for="(image, index) in images" :key="index" class="absolute" :style="getImageStyle(index)">
        <img :src="image" alt="Imagen" class="object-cover rounded-xl shadow-lg">
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="relative z-10 animate-fade-in">
      <div class="relative text-container p-4 rounded-lg">
        <h1 class="text-6xl md:text-7xl font-extrabold text-white font-custom drop-shadow-2xl animate-fade-slide">
          ¡Nos Casamos!
        </h1>
        <p class="mt-4 text-2xl text-white drop-shadow-lg animate-fade-slide delay-200">
          Y queremos compartir contigo este día tan especial
        </p>
      </div>
    </div>

    <!-- Confirmación de asistencia -->
    <ConfirmAttendanceModal />

    <!-- Cuenta regresiva -->
    <Countdown />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Array de imágenes que se mostrarán sobre el fondo
const images = [
  '/images/img5.jpeg',
  '/images/img6.jpeg',
  '/images/img9.jpeg',
  '/images/img11.jpeg',
  '/images/img13.jpeg',
  '/images/img15.jpeg',
];

// Función para obtener las posiciones estéticas de las imágenes
const getImageStyle = (index) => {
  const styles = [
    { left: '5%', top: '5%', width: '20%', height: '20%', transform: 'rotate(-5deg)' },
    { right: '5%', top: '5%', width: '20%', height: '20%', transform: 'rotate(5deg)' },
    { left: '5%', top: '30%', width: '20%', height: '20%', transform: 'rotate(-10deg)' },
    { right: '5%', top: '30%', width: '20%', height: '20%', transform: 'rotate(10deg)' },
    { left: '5%', bottom: '15%', width: '20%', height: '20%', transform: 'rotate(5deg)' },
    { right: '5%', bottom: '15%', width: '20%', height: '20%', transform: 'rotate(-5deg)' },
    { left: '10%', top: '20%', width: '20%', height: '20%', transform: 'rotate(0deg)' },
    { right: '10%', top: '20%', width: '20%', height: '20%', transform: 'rotate(0deg)' },
    { left: '15%', bottom: '10%', width: '20%', height: '20%', transform: 'rotate(-5deg)' },
    { right: '15%', bottom: '10%', width: '20%', height: '20%', transform: 'rotate(5deg)' },
  ];

  return styles[index % styles.length];
};
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

/* Estilo de las imágenes flotantes */
img {
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0.9;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

img:hover {
  transform: scale(1.05);
  opacity: 1;
}

/* Mejorar visibilidad de los textos */
h1,
p {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}

h1 {
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.7);
}

/* Responsividad: ajustar las imágenes en pantallas pequeñas */
@media (max-width: 768px) {

  /* Mostrar solo algunas imágenes en pantallas móviles (3 primeras imágenes) */
  .absolute:nth-child(n+0) {
    display: none;
  }

  /* Aumentar el tamaño de las imágenes en pantallas móviles */
  img {
    width: auto;
    height: auto;
    opacity: 0.9;
  }

  .absolute {
    width: auto;
    height: auto;
  }

  /* Fondo oscuro semitransparente y desenfoque detrás del texto */
  .text-container {
    /* Desenfoque del fondo */
    border-radius: 15px;
    padding: 20px;
  }

  /* Mejorar visibilidad del texto */
  h1,
  p {
    color: white;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  }

}
</style>
