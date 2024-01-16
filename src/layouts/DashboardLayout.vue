<template>
  <div class="dashboard-layout">
    <HeaderDashboard />
    <RouterView />
  </div>
</template>

<script>
import HeaderDashboard from "@/components/views/Dashboard/HeaderDashboard.vue";

export default {
  components: {HeaderDashboard}

}
</script>

<style lang="scss" scoped>

</style>