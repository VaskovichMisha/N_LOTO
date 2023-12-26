<template>
  <div class="possibilities__block">
    <h2 class="possibilities__title">Возможности платформы</h2>
    <div class="possibilities__left">
      <span class="possibilities__number">01</span>
      <div class="possibilities__content">
        <h3>Прозрачность</h3>
        <p>Каждая ставка и каждый розыгрыш фиксируется в blockchain. Результат розыгрышей определяет смарт-контракт с открытым исходным кодом</p>
        <PossibilitiesButton @open-modal="$emit('open-modal')">
          Начать играть
        </PossibilitiesButton>
      </div>
    </div>
    <div class="possibilities__right">
      <img src="../assets/image/possibil_one.png" alt="">
    </div>

    <div class="blur possibilities__blur-gradient"></div>
    <div class="blur possibilities__blur-purple"></div>
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