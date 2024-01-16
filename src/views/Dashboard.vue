<template>
  <main class="main-dashboard">
    <div class="main-dashboard__wrapper">
      <div class="_container">
        <div class="main-dashboard__header">
          <div class="main-dashboard__title">
            <h2>Fast lotteries</h2>
            <span>fast lotteries with a high probability of winning</span>
          </div>
          <TabsDashboard :tabs="tabsDashboard" />
        </div>
        <div class="main-dashboard__container">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        <div class="main-dashboard__faq">
          <h2 class="main-dashboard__faq-title">FAQ</h2>
          <div class="main-dashboard__faq-container">
            <DashboardDetails />
            <DashboardDetails />
            <DashboardDetails />
            <DashboardDetails />
            <DashboardDetails />
            <DashboardDetails />
            <DashboardDetails />
            <DashboardDetails />
          </div>
        </div>
        <div class="main-dashboard__terms">
          <div class="main-dashboard__terms-title">
            <h2>Terms of use</h2>
            <div>
              <span class="main-dashboard__terms-date">Revised: April 8, 2022</span>
              <span>Please read the terms carefully as they govern <br> your use of Lotary “Fixed” services.</span>
            </div>
          </div>
          <div class="main-dashboard__terms-line"></div>
          <DashboardTerms />
        </div>
      </div>
      <div class="dashboard-blur"></div>
    </div>
    <div class="main-dashboard__bg"></div>
    <div class="_container main-dashboard__bg-image">
      <img class="" src="../assets/image/orbits_planet.png" alt="">
    </div>
  </main>
</template>

<script>
import TabsDashboard from "@/components/tabs/TabsDashboard.vue";
import DashboardCard from "@/components/views/Dashboard/DashboardCard.vue";
import DashboardDetails from "@/components/views/Dashboard/DashboardDetails.vue";
import DashboardTerms from "@/components/views/Dashboard/DashboardTerms.vue";

export default {
  data() {
    return {
      tabsDashboard: [
        { name: 'Active', id: 0 },
        { name: 'Completed', id: 1 },
        { name: 'Winners', id: 2 },
      ]
    }
  },
  components: {
    DashboardTerms,
    DashboardDetails,
    DashboardCard,
    TabsDashboard,
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_dashboard";
</style>