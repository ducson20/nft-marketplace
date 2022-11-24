<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const appLayout = computed(() => (route.meta.layout || "default") + "-layout");
</script>
<template>
  <component :is="appLayout"><router-view /></component>
</template>

<style lang="scss"></style>
