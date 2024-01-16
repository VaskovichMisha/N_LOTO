<template>
  <div class="counter-button">
    <button @click="minusCount">-</button>
    <span>{{ count }}</span>
    <button @click="plusCount">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    minusCount() {
      if (this.count > 0 ) {
        this.count = this.count - 1
      }
    },
    plusCount() {
      this.count += 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/buttons/_counterButton";
</style>