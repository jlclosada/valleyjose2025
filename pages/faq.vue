<template>
  <div class="min-h-screen flex flex-col items-center text-center px-6 pt-24 bg-gray-50">
    <div class="max-w-4xl w-full bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
      <h1 class="text-5xl md:text-6xl font-extrabold font-custom text-blue-900 mb-6">
        Preguntas Frecuentes
      </h1>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-300">
          <button @click="toggleFAQ(index)"
            class="w-full text-left flex justify-between items-center py-4 text-xl font-semibold text-gray-800 focus:outline-none">
            {{ faq.pregunta }}
            <span :class="{ 'rotate-180': faq.abierto }" class="transition-transform duration-300">
              ⌄
            </span>
          </button>
          <transition name="fade">
            <p v-if="faq.abierto" class="text-gray-600 text-lg px-2 pb-4 flex text-left">
              {{ faq.respuesta }}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    pregunta: "¿Cómo debo ir vestido?",
    respuesta: "El código de vestimenta es formal. Se recomienda traje para los hombres y vestido elegante para las mujeres. Se recuerda que la boda es durante el día. En Noviembre Sevilla no es especialmente fría, pero se recomienda llevar algo de abrigo.",
    abierto: false
  },
  {
    pregunta: "¿Puedo llevar acompañante?",
    respuesta: "¡Claro! Simplemente indícalo en el formulario de confirmación de asistencia. Nos ayudaría mucho saber cuántas personas vendrán.",
    abierto: false
  },
  {
    pregunta: "¿Habrá opciones de comida para vegetarianos o personas con alergias?",
    respuesta: "Sí. Por favor, avísanos con anticipación para organizar el menú. En la confirmación de asistencia hay un campo para indicar cualquier restricción alimentaria.",
    abierto: false
  },
  {
    pregunta: "¿Dónde es la ceremonia y a qué hora empieza?",
    respuesta: "La ceremonia religiosa empezará a las 11:30 de la mañana en la Parroquia de Santa Ana, en Triana, Sevilla. Se recomienda llegar con tiempo para encontrar aparcamiento y tomar asiento.",
    abierto: false
  },
  {
    pregunta: "¿Habrá transporte disponible?",
    respuesta: "En principio no contamos con autobuses o transporte colectivo. Se recomienda llegar en coche o taxi. La iglesia está en el centro de Sevilla, por lo que es fácilmente accesible. Sin emabrgo, en el formulario podras registrar si necesitas ayuda con el transporte, para poder organizarlo.",
    abierto: false
  },
  {
    pregunta: "¿Es fácil aparcar?",
    respuesta: "La iglesia está en el centro de Sevilla, por lo que el aparcamiento puede ser complicado. Se recomienda llegar con tiempo para encontrar aparcamiento en la calle. Sin embargo, hay varios parkings públicos cerca de la iglesia como el de Plaza de Cuba o el Parking de Paseo de Colón",
    abierto: false
  }
]);

const toggleFAQ = (index) => {
  faqs.value[index].abierto = !faqs.value[index].abierto;
};
</script>

<style>
.font-custom {
  font-family: 'Great Vibes', cursive;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
