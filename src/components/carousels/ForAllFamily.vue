<template>
  <div class="for-family">
    <div class="for-family__head _container">
      <h2 class="for-family__title">Для всей семьи</h2>
      <CarouselButtons
          @prev-button="$refs.carousel.goToPrev()"
          @next-button="$refs.carousel.goToNext()"
      />
      <div class="blur for-family__blur"></div>
    </div>
    <agile class="_container__carousel" :options="options" ref="carousel">
      <div
          class="for-family__slide"
      >
        <img src="../../assets/image/games_img_five.png" alt="">
      </div>
      <div
          class="for-family__slide"
      >
        <img src="../../assets/image/games_img_six.png" alt="">
      </div>
      <div
          class="for-family__slide"
      >
        <img src="../../assets/image/games_img_seven.png" alt="">
        <BannerPremium />
      </div>
      <div
          class="for-family__slide"
      >
        <img src="../../assets/image/games_img_eight.png" alt="">
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

import CarouselButtons from "@/components/buttons/CarouselButtons.vue";
import BannerPremium from "@/components/BannerPremium.vue";

export default {
  data() {
    return {
      options: {
        infinite: true,
        slidesToShow: 4,
        speed: 50,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
      }
    }
  },
  components: {
    CarouselButtons,
    BannerPremium,
    agile: VueAgile
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/components/carousels/ForAllFamily";
</style>