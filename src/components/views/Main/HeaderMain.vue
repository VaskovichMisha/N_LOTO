<template>
  <header class="_container">
    <div class="header">
      <nav class="header__nav">
        <a href="#">О компании</a>
        <a href="#">Вакансии</a>
      </nav>
      <div class="header__title">
        <div>CRYPTOLOT</div>
        <span>Прозрачные лотареи на блокчейн</span>
      </div>
      <White_B_button
          class="header__button"
          @open-modal="$emit('open-modal')"
      >
        Начать играть
      </White_B_button>
    </div>
  </header>
</template>

<script>
import White_B_button from "@/components/buttons/White_B_button.vue";
export default {
  components: {
    White_B_button,
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/components/views/Main/HeaderMain";
</style>