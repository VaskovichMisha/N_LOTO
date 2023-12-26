<template>
  <div>
    <transition name="modal-fade">
      <div v-if="visible" class="modal">
        <div class="modal__overflow">
          <div class="modal__content">
            <div class="modal__container">
              <div class="modal__head">
                Welcome to
                <span>CTYPTOLOT</span>
              </div>
              <div class="modal__title">{{ toggleSign ? 'Sign up' : 'Sign in' }}</div>
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
                >
                  Enter your username or email address
                </InputModal>
                <div
                    v-if="toggleSign"
                    class="modal__more-inputs"
                >
                  <InputModal
                      :placeholder="'User name'"
                      :type="'text'"
                      :id="'name'"
                  >
                    User name
                  </InputModal>
                  <InputModal
                      :placeholder="'Contact Number'"
                      :type="'number'"
                      :id="'number'"
                  >
                    Contact Number
                  </InputModal>
                </div>
                <InputModal
                    :placeholder="'Password'"
                    :type="'password'"
                    :id="'password'"
                >
                  Enter your Password
                </InputModal>
              </div>
              <div
                  v-if="!toggleSign"
                  class="modal__forgot-pass"
              >
                <a href="#">Forgot Password</a>
              </div>
              <div class="modal__foot">
                <div class="change__sign">
                  <span>No Account ?</span>
                  <button
                      @click="toggleSign = !toggleSign"
                  >
                    {{ toggleSign ?  'Sign in' : 'Sign up' }}
                  </button>
                </div>
                <button class="modal__btn-login">{{ toggleSign ? 'Sign up' : 'Sign in' }}</button>
              </div>
            </div>
            <div class="modal__bg"></div>
          </div>
        </div>
      </div>
    </transition>
   <transition name="overlay-fade">
     <div
         @click="close"
         v-if="visible"
         class="modal__overlay"
     ></div>
   </transition>
  </div>
</template>

<script>
import InputModal from "@/components/inputs/InputModal.vue";

export default {
  components: {InputModal},
  props: {
    visible: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      toggleSign: false
    }
  },
  methods: {
    close() {
      this.$emit('close-modal');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/modals/AuthModal";
</style>