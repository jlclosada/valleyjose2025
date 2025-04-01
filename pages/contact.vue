<template>
  <div class="relative w-full min-h-screen flex flex-col items-center text-center px-6 pt-24">
    <div class="relative z-10 mt-2 animate-fade-in w-full max-w-4xl backdrop-blur-lg p-10 rounded-3xl text-gray-700">
      <h1 class="text-5xl md:text-6xl font-extrabold font-custom drop-shadow-lg animate-fade-slide">
        Contacto
      </h1>
    </div>

    <div
      class="mt-2 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-300 animate-fade-in text-gray-700">
      <h2 class="text-3xl font-bold">Información de Contacto</h2>

      <div class="mt-6 text-left">
        <h3 class="text-2xl font-semibold">Novia</h3>
        <p class="text-lg"><strong>Nombre:</strong> {{ noviaNombre }}</p>
        <p class="text-lg"><strong>Teléfono:</strong> {{ noviaTelefono }}</p>
        <p class="text-lg"><strong>Email:</strong> <span class="email-text">{{ noviaEmail }}</span></p>
      </div>

      <div class="mt-6 text-left">
        <h3 class="text-2xl font-semibold">Novio</h3>
        <p class="text-lg"><strong>Nombre:</strong> {{ novioNombre }}</p>
        <p class="text-lg"><strong>Teléfono:</strong> {{ novioTelefono }}</p>
        <p class="text-lg"><strong>Email:</strong> <span class="email-text">{{ novioEmail }}</span></p>
      </div>
    </div>
  </div>
</template>

<script setup>
const noviaNombre = import.meta.env.VITE_NOVIA_NOMBRE;
const noviaTelefono = import.meta.env.VITE_NOVIA_TELEFONO;
const noviaEmail = import.meta.env.VITE_NOVIA_EMAIL;

const novioNombre = import.meta.env.VITE_NOVIO_NOMBRE;
const novioTelefono = import.meta.env.VITE_NOVIO_TELEFONO;
const novioEmail = import.meta.env.VITE_NOVIO_EMAIL;
</script>

<style scoped>
.font-custom {
  font-family: 'Great Vibes', cursive;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-slide {
  animation: fade-slide 1s ease-out;
}

/* Estilo para los correos electrónicos */
.email-text {
  word-wrap: break-word;
  /* Permite que el correo electrónico se ajuste y no se salga del contenedor */
  white-space: nowrap;
  /* Evita que se dividan palabras o emails en varias líneas */
  overflow-wrap: break-word;
  /* Ayuda en caso de palabras largas o emails largos */
}

/* Estilos responsivos */
@media (max-width: 768px) {

  /* Reducir tamaño de fuente para pantallas pequeñas */
  .text-lg {
    font-size: 1rem;
    /* Reducir tamaño para móviles */
  }

  /* Ajustar el título principal */
  h1 {
    font-size: 2rem;
    /* Reducir el tamaño del título en móviles */
  }

  h2 {
    font-size: 1.75rem;
    /* Reducir el tamaño del subtítulo */
  }

  h3 {
    font-size: 1.5rem;
    /* Reducir el tamaño de los encabezados secundarios */
  }
}
</style>
