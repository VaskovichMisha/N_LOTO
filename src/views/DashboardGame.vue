<template>
  <main class="dashboard-game">
    <div class="dashboard-game__wrapper">
      <div class="_container">
        <div class="dashboard-game__head">
          <BackButton />
          <div class="dashboard-game__head-title">
            <h2>
              LOTARY
              <span> #103</span>
            </h2>
            <span class="dashboard-game__head-text">fast lotteries with a high probability of winning</span>
          </div>
        </div>
        <div class="dashboard-game__container">
          <DashboardCard :place="'game'" />
          <div class="dashboard-game__table">
            <h3 class="dashboard-game__table-title">Участники лотереи</h3>
            <div class="dashboard-game__table-container">
              <DashboardTableBlock />
              <DashboardTableBlock />
            </div>
          </div>
        </div>
        <div class="dashboard-game__rules">
          <h3 class="dashboard-game__rules-title">Lottery rules</h3>
          <p class="dashboard-game__rules-text">By approving any of the contracts on this page, you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use, hereinafter referred to as “these Terms”. By approving any of the contracts on this page, you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use, hereinafter referred to as “these Terms”. By approving any of the contracts on this page, you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use, hereinafter referred to as “these Terms”. By approving any of the contracts on this page, you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use, hereinafter referred to as “these Terms”. By approving any of the contracts on this page, you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use, hereinafter referred to as “these Terms”.</p>
        </div>
      </div>
      <div class="dashboard-blur"></div>
    </div>
    <div class="dashboard-game__bg"></div>
    <div class="_container dashboard-game__bg-image">
      <img class="" src="../assets/image/orbits_planet.png" alt="">
    </div>
  </main>
</template>

<script>
import BackButton from "@/components/buttons/BackButton.vue";
import DashboardCard from "@/components/views/Dashboard/DashboardCard.vue";
import DashboardTableBlock from "@/components/views/Dashboard/DashboardTableBlock.vue";

export default {
  components: {
    DashboardTableBlock,
    DashboardCard,
    BackButton
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_dashboardGame";
</style>