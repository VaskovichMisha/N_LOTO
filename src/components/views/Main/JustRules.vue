<template>
  <div class="mb-90">
    <div class="_container">
      <h2 class="just_rules__title">Простые правила, быстрые и интересные партии и постоянно пополняющийся каталог</h2>
    </div>
    <Just_Rules_Carousel />
  </div>
</template>

<script>
import Just_Rules_Carousel from "@/components/carousels/JustRulesCarousel.vue";

export default {
  components: {
    Just_Rules_Carousel
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/views/Main/JustRules";
</style>