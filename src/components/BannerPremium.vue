<template>
  <div class="banner__premium">
    <img src="../assets/svg/diamond_yellow.svg" alt="">
    <span>Премиум</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner__premium {
  position: absolute;
  top: 8px;
  left: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #14063D;
  border-radius: 50px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.banner__premium img {
  width: 20px;
  height: auto;
}

@media (max-width: 1280px) {
  .banner__premium {
    gap: 7px;
    padding: 7px 14px;
    font-size: 12.5px;
  }

  .banner__premium img {
    width: 18px;
  }
}

@media (max-width: 1280px) {
  .banner__premium {
    gap: 6px;
    padding: 6px 12px;
    font-size: 11px;
  }

  .banner__premium img {
    width: 16px;
  }
}
</style>