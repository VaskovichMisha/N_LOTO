<template>
  <div
      class="dashboard-card"
      :class="place"
  >
    <div class="dashboard-card__head">
      <img src="../../../assets/image/bg_for_carousel.jpg" alt="">
      <div class="dashboard-card__head-content">
        <div class="dashboard-card__head-text">
          <span>1 USDT</span>
          <span>HIT RATE 70%</span>
        </div>
        <button class="dashboard-card__head-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2498 11.557C12.572 11.557 12.8332 11.8181 12.8332 12.1403C12.8332 12.4625 12.572 12.7236 12.2498 12.7236H1.74984C1.42767 12.7236 1.1665 12.4625 1.1665 12.1403C1.1665 11.8181 1.42767 11.557 1.74984 11.557H12.2498ZM12.2498 9.22363C12.572 9.22363 12.8332 9.4848 12.8332 9.80697C12.8332 10.1291 12.572 10.3903 12.2498 10.3903H5.24984C4.92767 10.3903 4.6665 10.1291 4.6665 9.80697C4.6665 9.4848 4.92767 9.22363 5.24984 9.22363H12.2498ZM12.2498 6.8903C12.572 6.8903 12.8332 7.15147 12.8332 7.47363C12.8332 7.7958 12.572 8.05697 12.2498 8.05697H1.74984C1.42767 8.05697 1.1665 7.7958 1.1665 7.47363C1.1665 7.15147 1.42767 6.8903 1.74984 6.8903H12.2498ZM12.2498 4.55697C12.572 4.55697 12.8332 4.81813 12.8332 5.1403C12.8332 5.46247 12.572 5.72363 12.2498 5.72363H5.24984C4.92767 5.72363 4.6665 5.46247 4.6665 5.1403C4.6665 4.81813 4.92767 4.55697 5.24984 4.55697H12.2498ZM12.2498 2.22363C12.572 2.22363 12.8332 2.4848 12.8332 2.80697C12.8332 3.12913 12.572 3.3903 12.2498 3.3903H1.74984C1.42767 3.3903 1.1665 3.12913 1.1665 2.80697C1.1665 2.4848 1.42767 2.22363 1.74984 2.22363H12.2498Z" fill="#194DD9"/>
          </svg>
          <span>Rules</span>
        </button>
      </div>
    </div>
    <div class="dashboard-card__main">
      <div class="dashboard-card__progress">
        <div class="dashboard-card__progress-content">
          <div class="dashboard-card__progress-title">
            <span>Progress</span>
            <img src="../../../assets/svg/clock_icon.svg" alt="">
          </div>
          <span>9 / 10</span>
        </div>
        <ProgressBar percent="65" />
      </div>
      <div class="dashboard-card__stake">
        <span>Total stake per user:</span>
        <span>1.00 USDT</span>
      </div>
      <div class="dashboard-card__info">
        <div class="dashboard-card__info-block">
          <div class="dashboard-card__info-held">
            <span>Lotteries held</span>
            <div>2</div>
          </div>
          <CustomButton>
            Harvest
          </CustomButton>
        </div>
        <div class="dashboard-card__info-block">
          <span>Protected</span>
          <ContractLinks />
        </div>
      </div>
      <div class="dashboard-card__btns">
        <WalletButton>
          Купить билет
        </WalletButton>
        <CounterButton />
      </div>
      <div class="dashboard-card__footer">
        Вы имеете
        <span>0</span>
        билетов в данной лотарее
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/progressbars/ProgressBar.vue";
import CustomButton from "@/components/buttons/CustomButton.vue";
import ContractLinks from "@/components/links/ContractLinks.vue";
import WalletButton from "@/components/buttons/WalletButton.vue";
import CounterButton from "@/components/buttons/CounterButton.vue";

export default {
  props: {
    place: {
      type: String,
      default: ''
    }
  },
  components: {
    CounterButton,
    WalletButton,
    ContractLinks,
    CustomButton,
    ProgressBar
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/views/Dashboard/_dashboardCard.scss";
</style>