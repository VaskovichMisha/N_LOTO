<template>
  <MainView @open-modal="$emit('open-modal')" />
  <JustRules />
  <Winners />
  <Novelty />
  <ForAllFamily />
  <ForSmart />
  <Possibilities @open-modal="$emit('open-modal')" />
  <Review />
  <FAQ />
  <Brands />
</template>

<script>
import MainView from "@/components/views/Main/MainView.vue";
import JustRules from "@/components/views/Main/JustRules.vue";
import Winners from "@/components/views/Main/Winners.vue";
import Novelty from "@/components/carousels/Novelty.vue";
import ForAllFamily from "@/components/carousels/ForAllFamily.vue";
import ForSmart from "@/components/carousels/ForSmart.vue";
import Possibilities from "@/components/views/Main/Possibilities.vue";
import Review from "@/components/carousels/Review.vue";
import FAQ from "@/components/views/Main/FAQ.vue";
import Brands from "@/components/views/Main/Brands.vue";

export default {
  components: {
    Brands,
    FAQ,
    Review,
    ForSmart,
    ForAllFamily,
    Winners,
    MainView,
    JustRules,
    Novelty,
    Possibilities,
  }
}
</script>

<style lang="scss" scoped>

</style>