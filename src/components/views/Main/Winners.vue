<template>
  <div class="_container winners">
    <div class="winners__block">
      <div class="winners__line">
        <div class="winners__line-bg"></div>
        <div class="winners__progress progress__percent"></div>
      </div>
      <div class="winners__info">
        <div class="winners__texts">
          <span class="winners__title">Победители</span>
          <span class="winners__text">Последние выигрыши</span>
        </div>
        <img class="winners__img" src="../../../assets/image/winners_img.png" alt="">
      </div>
    </div>
    <div
        class="winners__block"
        v-for="item in 3"
    >
      <div class="winners__line">
        <div class="winners__line-bg"></div>
        <div class="winners__progress progress__percent"></div>
      </div>
      <div class="winners__info">
        <div class="winners__texts">
          <span class="winners__title">userName</span>
          <span class="winners__value">Последние выигрыши</span>
        </div>
        <img class="winners__img" src="../../../assets/image/winners_img.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/views/Main/Winners";
</style>