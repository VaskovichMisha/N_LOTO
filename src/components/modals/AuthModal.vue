<template>
  <div class="modal__wrapper">
    <div class="modal__container">
      <div class="modal__head">
        Welcome to
        <span>CTYPTOLOT</span>
      </div>
      <div class="modal__title">Sign in</div>
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
              @enter-input-modal="enterLogin"
          >
            Enter your username or email address
          </InputModal>
          <InputModal
              :placeholder="'Password'"
              :type="'password'"
              :id="'password'"
              @enter-input-modal="enterPassword"
          >
            Enter your Password
          </InputModal>
        </div>
        <div
            class="modal__forgot-pass"
        >
          <a href="#">Forgot Password</a>
        </div>
      </div>
      <div class="modal__foot">
        <div class="change__sign">
          <span>No Account ?</span>
          <button
              @click="$emit('open-register')"
          >
             Sign up
          </button>
        </div>
        <button @click="login" class="modal__btn-login">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputModal from "@/components/inputs/InputModal.vue";

export default {
  data() {
    return {
      dataLogin: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.dataLogin)
    },
    enterLogin(inputData) {
      this.dataLogin.login = inputData
    },
    enterPassword(inputData) {
      this.dataLogin.password = inputData
    },
  },
  components: {
    InputModal
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/components/modals/Modal";
</style>