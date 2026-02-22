<template>
  <div class="comments-grid">
    <div
      v-for="(comment, i) in comments"
      :key="i"
      class="comment-card glass-card"
      :style="cardStyle(i)"
    >
      <div class="comment-quote" aria-hidden="true">"</div>
      <p class="comment-text">{{ comment.text }}</p>
      <footer class="comment-author">— {{ comment.author }}</footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const comments = [
  { text: 'Yo he puesto muy rapido que voy solo, pero este viernes en Stuk quizas conozco a alguna sueca que me robe el corazon, como puedo cambiarlo si me pasa?', author: 'Manuel V.' },
  { text: 'Que suene el dembow de PR 🎵', author: 'Javier C.' },
  { text: 'So happy to come and celebrate your special day!!!', author: 'Katja M.' },
  { text: 'Mucho Whisky por favor', author: 'Juan V.' },
  { text: 'Que ilusionnnnnnnnnnnn 💖', author: 'Nuria R.' },
  { text: 'Enhorabuena !!!! Muchísimas gracias por la invitación', author: 'Patricia L.' },
  { text: 'Regálame una niñera para ese día gracias', author: 'Alejandra S.' },
]

const isMobile = ref(false)
const rotations = [-2, 1.5, -1, 2.5, -1.5, 1, -0.5]

const checkMobile = () => { isMobile.value = window.innerWidth < 768 }

onMounted(() => { checkMobile(); window.addEventListener('resize', checkMobile, { passive: true }) })
onUnmounted(() => { window.removeEventListener('resize', checkMobile) })

const cardStyle = (i) => isMobile.value
  ? {}
  : { transform: `rotate(${rotations[i % rotations.length]}deg)` }
</script>

<style scoped>
.comments-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0.5rem 0;
}

.comment-card {
  position: relative;
  padding: 1.75rem 1.5rem 1.5rem;
  max-width: 300px;
  width: 100%;
  text-align: left;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s ease !important;
  cursor: default;
}

.comment-card:hover {
  transform: rotate(0deg) translateY(-6px) scale(1.02) !important;
  box-shadow: 0 16px 50px rgba(26,18,8,0.14), 0 2px 8px rgba(184,148,74,0.2) !important;
}

.comment-quote {
  font-family: var(--font-script);
  font-size: 4rem;
  color: var(--color-gold-light);
  opacity: 0.4;
  line-height: 0.8;
  margin-bottom: 0.5rem;
  user-select: none;
}

.comment-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
  font-size: 0.95rem;
  color: var(--color-muted);
  line-height: 1.7;
  margin: 0 0 1rem;
}

.comment-author {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
}

@media (max-width: 640px) {
  .comment-card { max-width: 100%; }
}
</style>
