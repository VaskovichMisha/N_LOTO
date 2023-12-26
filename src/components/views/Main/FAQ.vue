<template>
  <div class="faq _container">
    <h2 class="faq__title">FAQ</h2>
    <div class="faq__container">
      <DetailsFaq />
    </div>
  </div>
</template>

<script>

import DetailsFaq from "@/components/DetailsFaq.vue";

export default {
  components: {
    DetailsFaq,
  }

}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/views/Main/FAQ";
</style>