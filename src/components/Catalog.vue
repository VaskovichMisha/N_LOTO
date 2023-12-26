<template>
  <div class="possibilities__block">
    <div class="possibilities__left">
      <span class="possibilities__number">03</span>
      <div class="possibilities__content">
        <h3>Каталог</h3>
        <p>Постоянно обновляемый каталог лотерей, большой выбор</p>
        <PossibilitiesButton @open-modal="$emit('open-modal')">
          Начать играть
        </PossibilitiesButton>
      </div>
    </div>
    <div class="possibilities__right">
      <img src="../assets/image/possibil_one.png" alt="">
      <div class="possibilities__abs">
        <div>
          <img src="../assets/image/games_img_one.png" alt="">
          <img src="../assets/image/games_img_one.png" alt="">
          <img src="../assets/image/games_img_one.png" alt="">
          <img src="../assets/image/games_img_one.png" alt="">
          <img src="../assets/image/games_img_one.png" alt="">
        </div>
        <div>
          <img src="../assets/image/games_img_one.png" alt="">
          <img src="../assets/image/games_img_one.png" alt="">
          <img src="../assets/image/games_img_one.png" alt="">
          <img src="../assets/image/games_img_one.png" alt="">
          <img src="../assets/image/games_img_one.png" alt="">
        </div>
      </div>
    </div>
    <div class="blur possibilities__blur-gradient"></div>
    <img class="catalog__dice" src="../assets/image/dise.png" alt="">
  </div>
</template>

<script>
import PossibilitiesButton from "@/components/buttons/PossibilitiesButton.vue";

export default {
  components: {
    PossibilitiesButton,
  }
}
</script>

<style lang="scss">

</style>