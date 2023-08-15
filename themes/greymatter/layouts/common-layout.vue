<!-- layouts/CommonLayout.vue -->
<template>
  <div class="slide">
    <slot/>
    <footer class="footer">Greymatter.io</footer>
  </div>
</template>

<style scoped>
  .slide {
    position: relative;
  }

  .footer {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #888;
    /* Other styling as needed */
  }
</style>
