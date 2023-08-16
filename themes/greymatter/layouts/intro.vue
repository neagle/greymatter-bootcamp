<template>
  <Container>
    <div class="slidev-layout intro">
      <div class="my-auto">
        <slot />
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from './container.vue'
</script>
