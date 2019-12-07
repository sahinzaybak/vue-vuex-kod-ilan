<template>
  <div class="header">
    <div class="custom-container">
      <div class="header-left">
        <router-link to="/"> 
        <img class="header-logo" src="../assets/img/logo.png" alt />
        </router-link>
      </div>
      <div class="header-right">
        <div class="header-right-button">
          <div class="header-right-button__link">Ücretsiz İlan Ekle</div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.header {
  position: absolute;
  width: 100%;
  z-index: 9999;
  background-color: #1b1212bf;
  padding: 10px 0;
  box-shadow: #424242 1px 1px 60px 5px;
  .custom-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-right {
    &-button {
      background-color: #f7963f;
      padding: 12px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 39px;
      &__link {
        color: white;
        font-weight: 700;
        letter-spacing: 0.4px;
        position: relative;
        top: 2px;
        font-size: 16px;
      }
    }
  }
  &-logo {
    max-width: 70px;
  }
}
</style>
