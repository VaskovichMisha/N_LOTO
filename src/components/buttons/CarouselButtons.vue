<template>
  <div class="carousel__btns">
    <button @click="$emit('prev-button')" class="carousel__btn">
      <img src="../../assets/svg/arrow_white_right.svg" alt="">
    </button>
    <button @click="$emit('next-button')" class="carousel__btn">
      <img src="../../assets/svg/arrow_white_right.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/buttons/CarouselButtons";
</style>