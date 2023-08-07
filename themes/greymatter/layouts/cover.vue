
<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <img :src="logoSrc" class="logo" />
      <slot />
    </div>
  </div>
</template>

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
