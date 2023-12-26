<template>
  <div class="_container possibilities">
    <Transparency @open-modal="$emit('open-modal')" />
    <Accessibility @open-modal="$emit('open-modal')" />
    <Catalog @open-modal="$emit('open-modal')" />
  </div>
</template>

<script>
import Transparency from "@/components/Transparency.vue";
import Accessibility from "@/components/Accessibility.vue";
import Catalog from "@/components/Catalog.vue";
export default {
  components: {
    Catalog,
    Accessibility,
    Transparency,
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/components/views/Main/Possibilities";
</style>