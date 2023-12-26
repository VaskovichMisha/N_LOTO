<template>
  <div class="for-smart">
    <div class="for-smart__head _container">
      <h2 class="for-smart__title">Для самых умных</h2>
      <CarouselButtons
          @prev-button="$refs.carousel.goToPrev()"
          @next-button="$refs.carousel.goToNext()"
      />
    </div>
    <agile class="_container__carousel" :options="options" ref="carousel">
      <div
          class="for-smart__slide"
      >
        <img src="../../assets/image/games_img_three.png" alt="">
      </div>
      <div
          class="for-smart__slide"
      >
        <img src="../../assets/image/games_img_eight.png" alt="">
        <BannerPremium />
      </div>
      <div
          class="for-smart__slide"
      >
        <img src="../../assets/image/games_img_four.png" alt="">
      </div>
      <div
          class="for-smart__slide"
      >
        <img src="../../assets/image/games_img_one.png" alt="">
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
@import "src/assets/scss/components/carousels/ForSmart";
</style>