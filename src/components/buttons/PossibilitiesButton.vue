<template>
  <button @click="$emit('open-modal')" class="possibilities__btn">
    <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.possibilities__btn {
  width: fit-content;
  color: #00092B;
  font-size: 16px;
  font-weight: 400;
  background: #fff;
  padding: 18px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
}

@media (max-width: 1280px) {
  .possibilities__btn {
    font-size: 14px;
    padding: 16px 32px;
  }
}

@media (max-width: 1140px) {
  .possibilities__btn {
    font-size: 14px;
    padding: 16px 32px;
  }
}
</style>