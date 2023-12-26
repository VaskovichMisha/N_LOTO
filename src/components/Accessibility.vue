<template>
  <div class="possibilities__block">
    <div class="possibilities__left">
      <span class="possibilities__number">02</span>
      <div class="possibilities__content">
        <h3>Доступность </h3>
        <p>Доступность со всего мира и широкая поддержка устройств</p>
        <PossibilitiesButton @open-modal="$emit('open-modal')">
          Начать играть
        </PossibilitiesButton>
      </div>
    </div>
    <div class="possibilities__right">
      <img src="../assets/image/possibil_two.svg" alt="">
    </div>
    <div class="blur possibilities__blur-gradient"></div>
  </div>
</template>

<script>
import PossibilitiesButton from "@/components/buttons/PossibilitiesButton.vue";

export default {
  components: {
    PossibilitiesButton,
  }
}
</script>

<style lang="scss">

</style>