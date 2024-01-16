<template>
  <div class="modal__input">
    <label :for="id">
      <slot />
    </label>
    <input @input="enterInput" v-model="inputModal" :type="type" :id="id" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputModal: ''
    }
  },
  methods: {
    enterInput() {
      this.$emit('enter-input-modal', this.inputModal)
    }
  },
  props: ['placeholder', 'type', 'id']
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/Inputs/InputModal";
</style>