<template>
  <div class="_container__carousel just_rules__carousel">
    <agile :options="options" ref="carousel">
      <div
        v-for="slide in 5"
        :key="slide"
        class="just_rules__slide"
      >
        <div class="just_rules__slide-block">
          <div>
            <h3>NEON Cards</h3>
            <span>Весёлая и быстрая карточная игра, для малого  и большого количества игроков</span>
          </div>
          <button
              @click="$refs.carousel.goToNext()"
              class="just_rules__next-btn"
          >
            <img src="../../assets/svg/arrow_black_right.svg" alt="">
          </button>
        </div>
        <img class="just_rules__img" src="../../assets/image/bg_for_carousel.jpg" alt="">
      </div>
    </agile>
    <div class="blur just_rules__blur"></div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  data() {
    return {
      options: {
        infinite: false,
        slidesToShow: 1,
        changeDelay: 50,
      }
    }
  },
  components: {
    agile: VueAgile
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/components/carousels/Just_Rules_Carousels";
</style>