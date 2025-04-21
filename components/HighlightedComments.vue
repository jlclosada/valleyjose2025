<template>
    <div class="mt-12 w-full px-4 max-w-6xl mx-auto">
      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="(comment, index) in comments"
          :key="index"
          class="p-4 rounded-2xl shadow-lg bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-800 transform hover:scale-105 transition-all duration-300 max-w-sm"
          :style="{ transform: isMobile ? 'rotate(0deg)' : `rotate(${getRandomRotation(index)}deg)` }"
        >
          <p class="text-base italic mb-2">"{{ comment.text }}"</p>
          <p class="text-sm text-right font-semibold text-[#af6abb]">— {{ comment.author }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const comments = [
    { text: 'Yo he puesto muy rapido que voy solo, pero este viernes en Stuk quizas conozco a alguna sueca que me robe el corazon, como puedo cambiarlo si me pasa?', author: 'Manuel V.' },
    { text: 'Que suene el dembow de PR', author: 'Javier C.' },
    { text: 'Por favor, no nos pongáis en aprietos a los solteros que no queremos ningún compromiso. Muchas gracias.', author: 'Pablo C.' },
    { text: 'Mucho Whisky por favor ', author: 'Juan V.' },
    { text: 'Que ilusionnnnnnnnnnnn 💖', author: 'Nuria R.' },
    { text: 'Enhorabuena !!!! Muchísimas gracias por la invitación', author: 'Patricia L.' },
    { text: 'Regálame una niñera para ese día gracias', author: 'Alejandra S..' },
  ]
  
  const isMobile = ref(false)
  
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768
  }
  
  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })
  
  const getRandomRotation = (index) => {
    const rotations = [-2, 1.5, -1, 2.5, -1.5, 1]
    return rotations[index % rotations.length]
  }
  </script>
  