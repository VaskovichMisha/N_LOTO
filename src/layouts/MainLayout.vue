<template>
  <div class="main-layout">
    <Header
        @open-modal="openModal(1)"
    />
    <RouterView @open-modal="openModal(2)" />
    <Footer />
    <Modal
        :isModalOpen="isModalOpen"
        :changeModal="changeModal"
        @close-modal="closeModal"
        @open-auth="openModal(1)"
        @open-register="openModal(2)"
    />
  </div>
</template>

<script>
import Header from "@/components/views/Main/HeaderMain.vue";
import Footer from "@/components/views/Main/FooterMain.vue";
import AuthModal from "@/components/modals/Modal.vue";
import Modal from "@/components/modals/Modal.vue";

export default {
  data() {
    return {
      isModalOpen: false,
      changeModal: 0
    };
  },
  methods: {
    openModal(num) {
      this.isModalOpen = true
      this.changeModal = num
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.isModalOpen = false
      document.body.style.overflowY = 'auto'
    }
  },
  components: {
    Modal,
    AuthModal,
    Footer,
    Header,
  },
}
</script>

<style lang="scss" scoped>

</style>