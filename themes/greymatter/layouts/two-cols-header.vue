<!--
  Usage:
```md
---
layout: two-cols-header
---
This spans both
::left::
# Left
This shows on the left
::right::
# Right
This shows on the right
```
-->

<template>
  <Container>
    <div class="slidev-layout two-cols-header">
      <div class="header">
        <img :src="logoSrc" class="logo" />
        <h1 v-if="props.header">{{ props.header }}</h1>
      </div>

      <div class="col-header">
        <slot />
      </div>
      <div class="columns">

        <div class="col-left" :class="props.class">
          <slot name="left" />
        </div>
        <div class="col-right" :class="props.class">
          <slot name="right" />
        </div>
      </div>
      <div class="footer">
        <slot name="footer" />
      </div>
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

.col-header ::v-deep(h1) {
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
  header: {
    type: String,
  },
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
      logoSrc,
    }
  }
}
</script>
