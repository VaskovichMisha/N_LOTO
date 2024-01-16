<template>
  <div class="details-faq">
    <div>
      <div
          @click="openDetails = !openDetails"
          :class="{ 'active': openDetails }"
          class="details-faq__summary"
      >
        <div>Что такое CryptoLot?</div>
      </div>
      <div
          class="details-faq__content"
          :class="{ 'active': openDetails }"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repudiandae, sequi. Culpa cupiditate eos, natus nulla officia possimus quibusdam! Aperiam corporis culpa cum deserunt facere, nemo officia saepe voluptatibus. Quis.
        </div>
      </div>
    </div>
    <button
        @click="openDetails = !openDetails"
        class="details-faq__btn"
    >
      <img v-if="!openDetails" src="../assets/svg/faq_plus.svg" alt="">
      <img v-else src="../assets/svg/arrow_black_right.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openDetails: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/_detailsFaq";
</style>