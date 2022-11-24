<script setup lang="ts">
import Navbar from "../navbar/Navbar.vue";
import Footer from "../footer/Footer.vue";
</script>

<template>
  <Navbar />
  <div class="wrapper-no-banner"><slot></slot></div>

  <Footer />
</template>

<style lang="scss">
@import "../../../assets/responsive.scss";
.wrapper-no-banner {
  padding-top: calc(88px + 60px);
}
</style>
