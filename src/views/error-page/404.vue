<script setup lang="ts">
import GButton from "@/components/base/GButton.vue";
</script>

<template>
  <div class="page-404">
    <div>
      <h1 class="page-404__title">404 PAGE</h1>
      <router-link :to="{ name: 'home', replace: true }">
        <GButton buttonType="danger">Go To Home Page</GButton></router-link
      >
    </div>
  </div>
</template>

<style lang="scss">
.page-404 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .title {
    text-align: center;
  }
}
</style>
