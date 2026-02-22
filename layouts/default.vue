<template>
  <div class="layout-root">
    <Navbar />
    <main class="layout-main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.layout-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-cream);
}

.layout-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
