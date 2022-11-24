<script setup lang="ts">
import GButton from "@/components/base/GButton.vue";
</script>

<template>
  <div class="page-403">
    <div>
      <h1 class="page-403__title">403 PAGE</h1>
      <router-link :to="{ name: 'home', replace: true }">
        <GButton buttonType="danger">Go To Home Page</GButton></router-link
      >
    </div>
  </div>
</template>

<style lang="scss">
.page-403 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .title {
    text-align: center;
  }
}
</style>
