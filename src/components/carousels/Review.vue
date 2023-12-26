<template>
  <div class="review">
    <agile class="_container__carousel" :options="options" ref="carousel">
      <div class="review__slide">
        <img src="../../assets/svg/quote__img.svg" alt="">
        <div class="review__block">
          <div class="review__content">
            <p>Команда, опыт, любовь к прогрессу, экспертиза, а еще blockchain и web3 подход: мы не «продаем решения», а создаем стратегию развития вместе, где важен результат, а не набор технологий.</p>
            <div class="review__user">
              <span>Антон Кириленко</span>
              <div>
                <img src="../../assets/image/avatar_user.png" alt="">
              </div>
            </div>
          </div>
          <CarouselButtons
            @prev-button="$refs.carousel.goToPrev()"
            @next-button="$refs.carousel.goToNext()"
          ></CarouselButtons>
        </div>
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
        slidesToShow: 1,
        speed: 50,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
      }
    }
  },
  components: {
    BannerPremium,
    CarouselButtons,
    agile: VueAgile
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/carousels/Review";
</style>