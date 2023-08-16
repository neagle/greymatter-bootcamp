<template>
  <Container>
    <div class="slidev-layout default">
      <div class="header">
        <img :src="logoSrc" class="logo" />
        <h1 v-if="props.header">{{ props.header }}</h1>
      </div>
      <slot />
    </div>
  </Container>
</template>

<style scoped>
.header {
  display: flex;
}

.logo {
  width: 200px;
  margin-bottom: 25px;
  margin-right: 25px;
  margin-top: 5px;
}

.logo+h1 {
  color: var(--slidev-theme-primary);
}

::v-deep(h1) {
  color: var(--slidev-theme-primary);
}

::v-deep(h2) {
  margin-bottom: 1em;
  font-size: 24px !important;
}
</style>

<script setup>
import Container from './container.vue'

const props = defineProps({
  header: {
    type: String,
  }
})
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
