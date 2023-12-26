<template>
  <div
      class="faq__block"
      v-for="item in faq"
      :key="item"
  >
    <div class="faq__details">
      <div
          class="details__head"
          :class="{'faq__head--active': item.openDetails}"
          @click="toggleDetails(item)"
      >
        Что такое CryptoLot?
      </div>
      <div
          class="faq__summary"
          :class="{'faq__summary--active': item.openDetails}"
          v-if="item.openDetails"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, distinctio dolor doloremque ducimus, illo in laboriosam minima, non officiis quibusdam quis quos recusandae sed sit suscipit temporibus tenetur voluptatem! Quisquam.
      </div>
    </div>
    <button
        @click="toggleDetails(item)"
        class="details__button"
    >
      <img v-if="!item.openDetails" src="../assets/svg/faq_plus.svg" alt="">
      <img class="details__button--rotate" v-if="item.openDetails" src="../assets/svg/arrow_black_right.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        { openDetails: false, id: 0 },
        { openDetails: false, id: 1 },
        { openDetails: false, id: 2 },
        { openDetails: false, id: 3 },
        { openDetails: false, id: 4 },
      ]
    }
  },
  methods: {
    toggleDetails(item) {
      item.openDetails = !item.openDetails
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/DetailsFaq";
</style>