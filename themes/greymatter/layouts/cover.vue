
<template>
  <Container>
    <div class="slidev-layout cover">
      <div class="my-auto">
        <img :src="logoSrc" class="logo" />
        <slot />
      </div>
    </div>
  </Container>
</template>

<style scoped>
.cover {
  background-image: url('../src/images/mesh.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 100%;
}

::v-deep(h1), ::v-deep(h2) {
  text-align: left;
  margin-left: 5vw !important;
  line-height: 1 !important;
}

::v-deep(h2) {
  color: var(--slidev-theme-primary);
  margin-left: 10vw !important;
}

</style>

<script setup>
import Container from './container.vue'
</script>

<script>
import logoSrc from '../src/images/logos/GM_logo_Bl.png'

export default {
  data() {
    return {
      logoSrc
    }
  }
}
</script>
