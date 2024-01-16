<template>
  <header class="header-dashboard">
    <div class="_container header-dashboard__wrapper">
      <div class="header-dashboard__left">
        <div class="header-dashboard__logo">
          <div>CRYPTOLOT</div>
          <span>Прозрачные лотареи на блокчейн</span>
        </div>
        <nav class="header-dashboard__nav">
          <a href="/dashboard">Dashboard</a>
          <a href="#">История</a>
          <SelectOptions :settings="settings" />
          <button class="header-dashboard__nav-dots">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </nav>
      </div>
      <div class="header-dashboard__right">
        <WalletButton size="small">
          Пополнение / Вывод средств
        </WalletButton>
        <SelectWallet :data="wallets" />
        <HeaderDashboardButton icon="letter" />
        <HeaderDashboardButton icon="exit" />
      </div>
    </div>
  </header>
</template>

<script>
import SelectOptions from "@/components/selects/SelectOptions.vue";
import DashboardButton from "@/components/buttons/WalletButton.vue";
import WalletButton from "@/components/buttons/WalletButton.vue";
import SelectWallet from "@/components/selects/SelectWallet.vue";
import HeaderDashboardButton from "@/components/buttons/HeaderDashboardButton.vue";
export default {
  data() {
    return {
      settings: [
        { name: 'setting 1', id: 0 },
        { name: 'setting 2', id: 1 },
        { name: 'setting 3', id: 2 },
        { name: 'setting 4', id: 3 },
      ],
      wallets: [
        { wallet: 'USD LOT', value: 124.06, id: 0 },
        { wallet: 'EURO LOT', value: 140.08, id: 0 },
        { wallet: 'USD LOT', value: 150.24, id: 0 },
        { wallet: 'EURO LOT', value: 128.05, id: 0 },
      ]
    }
  },
  components: {
    HeaderDashboardButton,
    SelectWallet,
    WalletButton,
    DashboardButton,
    SelectOptions
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/components/views/Dashboard/_headerDashboard";
</style>