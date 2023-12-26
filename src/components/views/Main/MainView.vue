<template>
  <div class="_container">
    <h1 class="main__title">
      <span>Лучшие</span>
      лото и игры со всего мира
    </h1>
    <div class="register__button">
      <img src="../../../assets/image/ghost_yellow.png" alt="">
      <LightPurpleButton @open-modal="$emit('open-modal')">
        Регистрация на платформе
        <img src="../../../assets/svg/arrow_white_right.svg" alt="arrow">
      </LightPurpleButton>
    </div>
    <MainOffers>

    </MainOffers>
    <div class="main__bg">
      <img src="../../../assets/image/main_circle.png" alt="">
      <img class="ghost__blue" src="../../../assets/image/ghost_blue.png" alt="">
    </div>
    <div class="blur main_blur__purple"></div>
    <div class="blur main_blur__blue"></div>
  </div>
</template>

<script>
import LightPurpleButton from "@/components/buttons/Light_purple_button.vue";
import MainOffers from "@/components/MainOffers.vue";
export default {
  components: {
    LightPurpleButton,
    MainOffers
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/components/views/Main/MainView";
</style>