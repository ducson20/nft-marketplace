<script setup lang="ts"></script>
<template>
  <div class="layout">
    <div class="layout__wrapper">
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
    </div>
    <div class="layout__wrapper">
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
    </div>
  </div>
  <div class="layout">
    <div class="layout__wrapper">
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
    </div>
    <div class="layout__wrapper">
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
      <div class="layout__item">
        <img src="../assets/image/Bitmap (1).png" alt="" />
      </div>
    </div>
  </div>

</template>

<style lang="scss">
.layout {
  display: flex;
  flex-wrap: wrap;
  &__wrapper {
    &:last-child {
      margin-top: 100px;
    }
  }
  &__item {
    padding-right: 8px;
    padding-left: 8px;
  }
}
</style>
