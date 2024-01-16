<template>
  <div class="modal__wrapper">
    <div class="modal__container">
      <div class="modal__head">
        Welcome to
        <span>CTYPTOLOT</span>
      </div>
      <div class="modal__title">Sign up</div>
      <div class="modal__overflow">
        <div class="modal__apps">
          <a href="#" class="apps__google">
            <img src="../../assets/svg/google.svg" alt="">
            <span>Sign in with Google</span>
          </a>
          <div class="apps">
            <a href="#" class="modal__app">
              <img src="../../assets/svg/Facebook.svg" alt="">
            </a>
            <a href="#" class="modal__app">
              <img src="../../assets/svg/apple.svg" alt="">
            </a>
          </div>
        </div>
        <div class="modal__form">
          <InputModal
              :placeholder="'Username or email address'"
              :type="'text'"
              :id="'name_email'"
              @enter-input-modal="enterName"
          >
            User name
          </InputModal>
          <div
              class="modal__more-inputs"
          >
            <InputModal
                :placeholder="'User name'"
                :type="'text'"
                :id="'name'"
                @enter-input-modal="enterLogin"
            >
              Login
            </InputModal>
            <InputModal
                :placeholder="'Contact Number'"
                :type="'number'"
                :id="'number'"
                @enter-input-modal="enterPhone"
            >
              Contact Number
            </InputModal>
          </div>
          <InputModal
              :placeholder="'Password'"
              :type="'password'"
              :id="'password'"
              @enter-input-modal="enterPassword"
          >
            Enter your Password
          </InputModal>
        </div>
      </div>
      <div class="modal__foot">
        <div class="change__sign">
          <span>No Account ?</span>
          <button
              @click="$emit('open-auth')"
          >
            Sign in
          </button>
        </div>
        <button @click="registration" class="modal__btn-login">Sign up</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputModal from "@/components/inputs/InputModal.vue";

export default {
  data() {
    return {
      dataRegistration: {
        name: '',
        password: '',
        login: '',
        phone: '',
      }
    }
  },
  methods: {
    enterName(inputData) {
      this.dataRegistration.name = inputData
      console.log(this.dataRegistration)
    },
    enterLogin(inputData) {
      this.dataRegistration.login = inputData
    },
    enterPhone(inputData) {
      this.dataRegistration.phone = inputData
    },
    enterPassword(inputData) {
      this.dataRegistration.password = inputData
    },
    registration() {
      this.$store.dispatch('registration', this.dataRegistration)
    }
  },
  components: {
    InputModal
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/components/modals/Modal";
</style>