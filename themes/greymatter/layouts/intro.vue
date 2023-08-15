<template>
  <CommonLayout>
    <div class="slidev-layout intro">
      <div class="my-auto">
        <slot />
      </div>
    </div>
  </CommonLayout>
</template>

<script setup>
import CommonLayout from './common-layout.vue'
</script>
