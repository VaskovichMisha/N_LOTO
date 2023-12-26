<template>
  <button @click="$emit('open-modal')">
    <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>