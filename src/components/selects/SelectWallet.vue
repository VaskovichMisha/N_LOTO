<template>
  <div class="select-wallet">
    <div @click="toggleOptions = !toggleOptions" class="select-wallet__selected">
      <div class="select-wallet__selected-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_161_2387)">
            <path d="M10 0C15.5226 0 20 4.4774 20 10C20 15.5226 15.5224 20 10 20C4.4776 20 0 15.5238 0 10C0 4.4762 4.4768 0 10 0Z" fill="#53AE94"/>
            <path d="M11.2341 8.66777V7.18017H14.6359V4.91357H5.37271V7.18017H8.77491V8.66657C6.00991 8.79357 3.93091 9.34117 3.93091 9.99717C3.93091 10.6532 6.01091 11.2008 8.77491 11.3286V16.0936H11.2349V11.3282C13.9949 11.2008 16.0697 10.6536 16.0697 9.99817C16.0697 9.34277 13.9949 8.79557 11.2349 8.66817M11.2349 10.9246V10.9234C11.1655 10.9278 10.8089 10.9492 10.0149 10.9492C9.38011 10.9492 8.93351 10.9312 8.77611 10.923V10.925C6.33331 10.8168 4.50991 10.3914 4.50991 9.88237C4.50991 9.37337 6.33351 8.94857 8.77611 8.84017V10.5012C8.93611 10.5122 9.39371 10.5392 10.0253 10.5392C10.7839 10.5392 11.1653 10.5076 11.2353 10.5012V8.84017C13.6733 8.94877 15.4925 9.37457 15.4925 9.88177C15.4925 10.389 13.6725 10.815 11.2353 10.9236" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_161_2387">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <div class="select-wallet__text">
          <span>{{ selectedValue }} </span>
          <span>{{ selectedWallet }}</span>
        </div>
      </div>
      <svg :class="{'rotate-180': toggleOptions}" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M12.75 6.87727C12.6095 6.73759 12.4194 6.65918 12.2213 6.65918C12.0231 6.65918 11.833 6.73759 11.6925 6.87727L9.00002 9.53227L6.34502 6.87727C6.2045 6.73759 6.01441 6.65918 5.81627 6.65918C5.61813 6.65918 5.42804 6.73759 5.28752 6.87727C5.21723 6.947 5.16143 7.02995 5.12335 7.12134C5.08528 7.21274 5.06567 7.31077 5.06567 7.40977C5.06567 7.50878 5.08528 7.60681 5.12335 7.69821C5.16143 7.7896 5.21723 7.87255 5.28752 7.94227L8.46752 11.1223C8.53724 11.1926 8.6202 11.2484 8.71159 11.2864C8.80298 11.3245 8.90101 11.3441 9.00002 11.3441C9.09903 11.3441 9.19706 11.3245 9.28846 11.2864C9.37985 11.2484 9.4628 11.1926 9.53252 11.1223L12.75 7.94227C12.8203 7.87255 12.8761 7.7896 12.9142 7.69821C12.9523 7.60681 12.9719 7.50878 12.9719 7.40977C12.9719 7.31077 12.9523 7.21274 12.9142 7.12134C12.8761 7.02995 12.8203 6.947 12.75 6.87727Z" fill="#141A21"/>
      </svg>
    </div>
    <div v-if="toggleOptions" class="select-wallet__list">
      <div
          v-for="wallet in data"
          :key="wallet.id"
          class="select-wallet__item"
          @click="changeSelected(wallet)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_161_2387)">
            <path d="M10 0C15.5226 0 20 4.4774 20 10C20 15.5226 15.5224 20 10 20C4.4776 20 0 15.5238 0 10C0 4.4762 4.4768 0 10 0Z" fill="#53AE94"/>
            <path d="M11.2341 8.66777V7.18017H14.6359V4.91357H5.37271V7.18017H8.77491V8.66657C6.00991 8.79357 3.93091 9.34117 3.93091 9.99717C3.93091 10.6532 6.01091 11.2008 8.77491 11.3286V16.0936H11.2349V11.3282C13.9949 11.2008 16.0697 10.6536 16.0697 9.99817C16.0697 9.34277 13.9949 8.79557 11.2349 8.66817M11.2349 10.9246V10.9234C11.1655 10.9278 10.8089 10.9492 10.0149 10.9492C9.38011 10.9492 8.93351 10.9312 8.77611 10.923V10.925C6.33331 10.8168 4.50991 10.3914 4.50991 9.88237C4.50991 9.37337 6.33351 8.94857 8.77611 8.84017V10.5012C8.93611 10.5122 9.39371 10.5392 10.0253 10.5392C10.7839 10.5392 11.1653 10.5076 11.2353 10.5012V8.84017C13.6733 8.94877 15.4925 9.37457 15.4925 9.88177C15.4925 10.389 13.6725 10.815 11.2353 10.9236" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_161_2387">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <div class="select-wallet__text">
          <span>{{ wallet.wallet }} </span>
          <span>{{ wallet.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      toggleOptions: false,
      selectedWallet: this.data[0].wallet,
      selectedValue: this.data[0].value,
    }
  },
  methods: {
    changeSelected(wallet) {
      this.selectedWallet = wallet.wallet
      this.selectedValue = wallet.value
      this.toggleOptions = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/selects/_selectWallet";
</style>