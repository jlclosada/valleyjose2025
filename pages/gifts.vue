<template>
  <div class="relative w-full min-h-screen flex flex-col items-center text-center px-6 pt-24">
    <!-- Título de la Página -->
    <div class="relative z-10 mt-10 animate-fade-in w-full max-w-4xl backdrop-blur-lg p-10 rounded-3xl text-gray-700">
      <h1 class="text-5xl md:text-6xl font-extrabold font-custom drop-shadow-lg animate-fade-slide">
        ¿Cómo Realizar un Regalo?
      </h1>
    </div>

    <!-- Información sobre el regalo -->
    <div
      class="mt-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-300 animate-fade-in text-gray-700 text-left mb-2">
      <h2 class="text-3xl font-bold mt-4">Cuenta Bancaria para Transferencias</h2>

      <p class="mt-4 text-lg">
        Nos ayudaría mucho en nuestra nueva etapa algo de dinero para empezar. Sí, el regalo de siempre, pero es lo que
        más nos ayudaría.<br><br>
        Sin embargo, si prefieres hacer un regalo más personal o directamente darnos un abrazo, lo aceptaremos
        encantados.
      </p>

      <div class="mt-6">
        <p class="text-lg font-semibold">Titular de la cuenta:</p>
        <p class="text-lg">Valle Hinojosa Herrera</p>
      </div>

      <!-- IBAN con botón de copiar y tooltip -->
      <div class="mt-6 flex items-center gap-3 relative">
        <div>
          <p class="text-lg font-semibold">IBAN:</p>
          <p class="text-lg">{{ account }}</p>
        </div>

        <div class="relative group">
          <button @click="copyToClipboard"
            class="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition relative cursor-pointer">
            📋
          </button>
          <!-- Tooltip que se muestra al pasar el mouse -->
          <span v-if="!copied"
            class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Copiar
          </span>
        </div>

        <!-- Mensaje de "Copiado" -->
        <span v-if="copied" class="text-green-600 text-sm ml-2">¡Copiado!</span>
      </div>

      <div class="mt-6">
        <p class="text-lg font-semibold">Entidad:</p>
        <p class="text-lg">BBVA</p>
      </div>

      <div class="mt-6">
        <p class="text-lg font-semibold">SWIFT/BIC:</p>
        <p class="text-lg">XYZBESMM</p>
      </div>

      <div class="mt-6">
        <p class="text-lg">
          Puedes poner <b>"Regalo de Boda + tu nombre"</b> como concepto para que podamos agradecerte personalmente.
        </p>
      </div>

      <div class="mt-6">
        <p class="text-lg">¡Te lo agradecemos mucho!</p>
      </div>
    </div>

    <!-- Botón de contacto -->
    <div class="mt-8 flex flex-col md:flex-row justify-center gap-6 animate-fade-in">
      <a href="mailto:jlcaclosada@gmail.com,vallehinojosa95@gmail.com"
        class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
        📩 Contactar con Nosotros
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// IBAN almacenado en variables de entorno
const account = import.meta.env.VITE_ACCOUNT;

// Estado para mostrar el mensaje "Copiado"
const copied = ref(false);

// Función para copiar el IBAN al portapapeles
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(account);
    copied.value = true;

    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Error al copiar el IBAN", err);
  }
};
</script>



<style>
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
</style>
