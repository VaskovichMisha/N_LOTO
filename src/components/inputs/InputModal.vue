<template>
  <div class="modal__input">
    <label :for="id">
      <slot />
    </label>
    <input :type="type" :id="id" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'type', 'id']
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/Inputs/InputModal";
</style>