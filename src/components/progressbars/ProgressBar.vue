<template>
  <div class="progressbar">
    <div class="progressbar-bar"></div>
    <div
        class="progressbar-progress"
        :style="{ width: percent + '%' }"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.progressbar {
  position: relative;
  width: 100%;
  margin-bottom: 32px;

  &-bar {
    width: 100%;
    height: 8px;
    background: #EFF4FC;
    border-radius: 80px;
  }

  &-progress {
    height: 8px;
    background: #27AE60;
    border-radius: 80px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>