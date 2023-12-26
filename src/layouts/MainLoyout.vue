<template>
  <Header
      @open-modal="openModal"
  />
  <RouterView @open-modal="openModal" />
  <Footer />
  <AuthModal
      :visible="isModalOpen"
      @close-modal="closeModal"
  />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AuthModal from "@/components/modals/AuthModal.vue";
export default {
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.isModalOpen = false
      document.body.style.overflowY = 'auto'
    }
  },
  components: {
    AuthModal,
    Footer,
    Header,
  },
}
</script>

<style lang="scss" scoped>

</style>