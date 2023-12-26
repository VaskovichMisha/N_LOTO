<template>
  <button @click="$emit('open-modal')" class="light_purple__button">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>