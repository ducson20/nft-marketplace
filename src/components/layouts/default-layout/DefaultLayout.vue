<script setup lang="ts">
import Navbar from "../navbar/Navbar.vue";
import Banner from "../banner/Banner.vue";
import Footer from "../footer/Footer.vue";
</script>

<template>
  <Navbar />
  <Banner />
  <slot></slot>
  <Footer />
</template>

<style lang="scss">
@import "../../../assets/responsive.scss";
</style>
