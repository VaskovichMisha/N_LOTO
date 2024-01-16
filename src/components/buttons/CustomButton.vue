<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  padding: 8px 14px;
  border-radius: 8px;
  background: #27AE60;
  color: #fff;
}
</style>