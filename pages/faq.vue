<template>
  <div class="min-h-screen flex flex-col items-center text-center pt-24">
    <div class="max-w-4xl w-full bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
      <h1 class="text-5xl md:text-6xl font-miller font-custom text-black mb-6">
        Preguntas Frecuentes
      </h1>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-300">
          <button @click="toggleFAQ(index)"
            class="w-full text-left flex justify-betweern items-center py-4 text-xl font-semibold text-gray-800 focus:outline-none cursor-pointer">
            {{ faq.pregunta }}
            <span :class="{ 'rotate-180': faq.abierto }" class="transition-transform duration-300 ml-3 flex items-center justify-center text-gray-500">
              ⬇️
            </span>
          </button>
          <transition name="fade">
            <p v-if="faq.abierto" class="text-gray-600 text-m px-2 pb-4 text-left font-light" v-html="faq.respuesta">
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
    respuesta: "El código de vestimenta es <b>formal</b>. Se recomienda traje para los hombres y vestido para las mujeres. <br>Se recuerda que la boda es <b>durante el día</b>. En Noviembre, en Sevilla no hace especialmente frío, pero se recomienda llevar algo de abrigo.<br><b>Si eres testigo, te toca chaqué</b>.",
    abierto: false
  },
  {
    pregunta: "¿Puedo llevar acompañante?",
    respuesta: "<b>¡Claro!</b> Simplemente indícalo en el formulario de <a href='https://docs.google.com/forms/d/e/1FAIpQLSeg8s8hQTXAMKssr9iePRGYO6RhIUf1eKsO0NfRnYUjJAlD5w/viewform?embedded=true' class='text-blue-800 hover:underline'>confirmación de asistencia</a>. Nos ayudaría mucho saber cuántas personas vendrán.",
    abierto: false
  },
  {
    pregunta: "¿Hay hotel disponible para gente de fuera?",
    respuesta: "Tenemos varias ofertas de hoteles en Sevilla. Por favor, <a href='/contact' class='text-blue-800 hover:underline'>ponte en contacto con nosotros</a> para más información. Los precios rondan los 70-100 € la noche.",
    abierto: false
  },
  {
    pregunta: "¿Habrá opciones de comida para alérgicos?",
    respuesta: "Sí. Por favor, avísanos con anticipación para organizar el menú. En la <a href='https://docs.google.com/forms/d/e/1FAIpQLSeg8s8hQTXAMKssr9iePRGYO6RhIUf1eKsO0NfRnYUjJAlD5w/viewform?embedded=true' class='text-blue-800 hover:underline'>confirmación de asistencia</a> hay un campo para indicar cualquier restricción alimentaria.",
    abierto: false
  },
  {
    pregunta: "¿Dónde y cuándo es la ceremonia?",
    respuesta: "La ceremonia religiosa empezará a las 11:30 de la mañana en la Parroquia de Santa Ana, en Triana, Sevilla.<br>Se recomienda llegar con tiempo para encontrar aparcamiento y tomar asiento.",
    abierto: false
  },
  {
    pregunta: "¿Habrá transporte disponible?",
    respuesta: "En principio no contamos con autobuses o transporte colectivo. Se recomienda llegar en coche o taxi. La iglesia está en el centro de Sevilla, por lo que es fácilmente accesible. Sin emabrgo, en el <a href='https://docs.google.com/forms/d/e/1FAIpQLSeg8s8hQTXAMKssr9iePRGYO6RhIUf1eKsO0NfRnYUjJAlD5w/viewform?embedded=true' class='text-blue-800 hover:underline'>formulario</a> podras registrar si necesitas ayuda con el transporte, para poder organizarlo.",
    abierto: false
  },
  {
    pregunta: "¿Es fácil aparcar?",
    respuesta: "La iglesia está en el centro de Sevilla, por lo que el aparcamiento puede ser complicado. Se recomienda llegar con tiempo para encontrar aparcamiento en la calle. Sin embargo, hay varios parkings públicos cerca de la iglesia como el de <a href='https://maps.app.goo.gl/vLzrGKWFhceFwc15A' class='text-blue-800 hover:underline'>Plaza de Cuba</a> o el <a href='https://maps.app.goo.gl/xRe3LJtbtY7nNSp87' class='text-blue-800 hover:underline'>Parking Paseo de Colón</a>",
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
