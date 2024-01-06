<template>
  <div>
    <transition name="modal-fade">
      <div v-if="isModalOpen" class="modal">
        <AuthModal
            v-if="changeModal === 1"
            @open-register="$emit('open-register')"
        />
        <RegistrationModal
            v-if="changeModal === 2"
            @open-auth="$emit('open-auth')"
        />
        <div
            @click="close"
            v-if="isModalOpen"
            class="modal__overlay"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import InputModal from "@/components/inputs/InputModal.vue";
import AuthModal from "@/components/modals/AuthModal.vue";
import RegistrationModal from "@/components/modals/RegistrationModal.vue";

export default {
  components: {RegistrationModal, AuthModal, InputModal},
  props: {
    isModalOpen: {
      type: Boolean,
    },
    changeModal: {
      type: Number
    }
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
@import "../../assets/scss/components/modals/Modal";
</style>