<!-- layouts/container.vue -->
<template>
  <div class="slide">
    <slot/>
    <footer class="footer">
      <div>
        TM &amp; © Greymatter.io
      </div>
    </footer>
  </div>
</template>

<style scoped>
  .slide {
    position: relative;
  }

  .footer {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: #888;
    display: flex;
    /* Other styling as needed */
  }
</style>
