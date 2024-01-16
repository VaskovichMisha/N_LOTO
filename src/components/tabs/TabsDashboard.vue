<template>
  <div class="tabs-dashboard">
    <div
        v-for="tab in tabs"
        :key="tab.id"
        :class="{'active': tab.id === active}"
        @click="activeTab(tab.id)"
        class="tabs-dashboard__tab">
      {{ tab.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    activeTab(id) {
      this.active = id
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/tabs/_tabsDashboard";
</style>