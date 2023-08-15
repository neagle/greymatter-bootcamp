
<template>
  <CommonLayout>
    <div class="slidev-layout cover">
      <div class="my-auto w-full">
        <img :src="logoSrc" class="logo" />
        <slot />
      </div>
    </div>
  </CommonLayout>
</template>

<script setup>
import CommonLayout from './common-layout.vue'
</script>

<script>
import logoSrc from '../src/logos/GM_logo_Bl.png'

export default {
  data() {
    return {
      logoSrc
    }
  }
}
</script>
