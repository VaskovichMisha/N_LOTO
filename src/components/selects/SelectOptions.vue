<template>
  <div class="select-options">
    <div @click="toggleOptions = !toggleOptions" class="select-options__selected">
      <span>{{ selectedOptions }}</span>
      <svg :class="{'rotate-180': toggleOptions}" xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
        <path d="M10.2458 1.16726C10.0584 0.981006 9.80498 0.876465 9.5408 0.876465C9.27661 0.876465 9.02316 0.981006 8.8358 1.16726L5.2458 4.70726L1.7058 1.16726C1.51844 0.981006 1.26498 0.876465 1.0008 0.876465C0.736612 0.876465 0.483161 0.981006 0.295798 1.16726C0.20207 1.26022 0.127675 1.37082 0.0769067 1.49268C0.026138 1.61454 0 1.74525 0 1.87726C0 2.00927 0.026138 2.13997 0.0769067 2.26183C0.127675 2.38369 0.20207 2.49429 0.295798 2.58726L4.5358 6.82726C4.62876 6.92099 4.73936 6.99538 4.86122 7.04615C4.98308 7.09692 5.11379 7.12306 5.2458 7.12306C5.37781 7.12306 5.50852 7.09692 5.63037 7.04615C5.75223 6.99538 5.86283 6.92099 5.9558 6.82726L10.2458 2.58726C10.3395 2.49429 10.4139 2.38369 10.4647 2.26183C10.5155 2.13997 10.5416 2.00927 10.5416 1.87726C10.5416 1.74525 10.5155 1.61454 10.4647 1.49268C10.4139 1.37082 10.3395 1.26022 10.2458 1.16726Z" fill="#141A21"/>
      </svg>
    </div>
    <div v-if="toggleOptions" class="select-options__list">
      <div
          v-for="setting in settings"
          :key="setting.id"
          class="select-options__item"
          @click="changeSelected(setting)"
      >
        <span>{{ setting.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      toggleOptions: false,
      selectedOptions: 'Setting',
    }
  },
  methods: {
    changeSelected(setting) {
      this.selectedOptions = setting.name
      this.toggleOptions = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/selects/_selectOptions";
</style>