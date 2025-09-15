<template>
  <div class="relative w-full min-h-screen flex flex-col items-center text-center px-6 pt-24">
    <!-- Título de la Página -->
    <div class="relative z-10 mt-10 animate-fade-in w-full max-w-4xl backdrop-blur-lg p-10 rounded-3xl text-gray-700">
      <h1 class="text-5xl md:text-6xl font-miller drop-shadow-lg animate-fade-slide">
        ¿Cómo Realizar un Regalo?
      </h1>
    </div>

    <!-- Información sobre el regalo -->
    <div
      class="mt-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-300 animate-fade-in text-gray-700 text-left mb-2">
      <p class="mt-4 text-lg font-light">
        Lo que más ilusión nos hace es compartir este día con todos vosotros! Ese es nuestro mayor regalo.<br><br>
        Si quieres hacernos un regalo, nos ayudaría mucho en nuestra nueva etapa algo de dinero para empezar. Sabemos que es el regalo más típico, pero es lo que
        más nos ayudaría.<br><br>
        Sin embargo, si prefieres hacer un regalo más personal o directamente darnos un abrazo, nos parecerá estupendo!
      </p>
      <h2 class="text-3xl mt-4 font-miller">Cuenta Bancaria para Transferencias 🏦 💳 🪪</h2>
      
      <p class="mt-4 text-lg font-light">
        Puedes realizar una transferencia a la siguiente cuenta bancaria:
      </p>

      <div class="mt-6">
        <p class="text-lg font-miller-600">Titular de la cuenta:</p>
        <p class="text-lg font-miller"><u>Valle Hinojosa Herrera</u> o <u>José Luis Cáceres Losada</u> (tú decides)</p>
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
        <p class="text-lg font-miller"><b>Entidad:</b></p>
        <p class="text-lg font-miller">BBVA</p>
      </div>

      <!-- <div class="mt-6">
        <p class="text-lg font-semibold">SWIFT/BIC:</p>
        <p class="text-lg">XYZBESMM</p>
      </div> -->

      <div class="mt-6">
        <p class="text-lg font-light">
          Puedes poner <b>"Tu nombre"</b> como concepto para que podamos agradecértelo personalmente. Por favor, no incluir <b>"Boda"</b> o <b>"Regalo"</b> o similares en el concepto. De cara a Hacienda puede ser mortal 😅.
        </p>
      </div>
      <h2 class="text-3xl mt-4 font-miller">Dinero en efectivo 💵</h2>
      <p class="mt-4 text-lg font-light">
        <b>La mejor opción de cara a Hacienda.</b><br></br>
        Hoy en día, los regalos de boda se consideran donaciones y por eso tenemos que declararlo.</b><br></br>
        El dinero en efectivo también nos vendría muy bien.<br></br>
      </p>

      <h2 class="text-3xl mt-4 font-miller">Regalo personal 🎁</h2>
      <p class="mt-4 text-lg font-light">
        Si te gustaría hacernos un regalo más personal, aquí tienes algunas ideas que nos encantarían: <br></br>
        <br></br>
        - Vajillas y cristalería (preferiblemente en tonos neutros, blancos o azules) ✅ <br></br>
        - Utensilios de cocina (sartenes, ollas, cuchillos de calidad) ✅ <br></br>
        - Ropa de cama y toallas (preferiblemente en tonos neutros, blancos o azules) ✅ <br></br>
        - Cabecero de cama <br></br>
        - Electrodomésticos pequeños (batidora, tostadora, cafetera) ✅ <br></br>
        - Minibar <br></br>
      </p>

      <div class="mt-6">
        <p class="text-lg font-light">¡Te lo agradecemos mucho!</p>
      </div>
    </div>

    <!-- Botón de contacto -->
    <div class="mt-8 flex flex-col md:flex-row justify-center gap-6 animate-fade-in">
      <a href="mailto:jlcaclosada@gmail.com,vallehinojosa95@gmail.com"
        class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-light rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
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
