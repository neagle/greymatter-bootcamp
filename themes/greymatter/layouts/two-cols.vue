<!--
  Usage:
```md
---
layout: two-cols
---
# Left
This shows on the left
::right::
# Right
This shows on the right
```
-->

<template>
  <Container>
    <div class="slidev-layout two-cols">
      <img :src="logoSrc" class="logo" />

      <div class="columns">
        <div class="col-left" :class="props.class">
          <slot />
        </div>
        <div class="col-right" :class="props.class">
          <slot name="right" />
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.logo {
  width: 200px;
  margin-bottom: 25px;
}

.col-left::v-deep(h1) {
  color: var(--slidev-theme-primary);
}

.col-header ::v-deep(h2) {
  margin-bottom: 1em;
}

.columns {
  display: flex;
  gap: 50px;
}
</style>

<script setup>
import Container from './container.vue'

const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
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
