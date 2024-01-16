<template>
  <button class="wallet-button" :class="size">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  height: 50px;
  border-radius: 8px;
  background: #194DD9;
  border: 1px solid #194DD9;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 100%;
  color: #fff;
  width: 100%;

  &.small {
    padding: 0 16px;
    font-size: 14px;
    height: 40px;
  }
}
</style>