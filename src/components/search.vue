<template>
  <div class="search">
    <div class="custom-container">
      <h2 class="search-text">İlan Ara . . .</h2>
      <div class="search-position col-12 col-md-6">
        <input
          @input="filterStates()"
          v-model="state"
          class="search-input"
          type="text"
          placeholder="Pozisyon Adı"
        />
        <div class="search-result" :class="{ 'isSearch' : searchShow}">
          <router-link
            :to="{path : 'ilanlar/' + result[1]}"
            class="search-result__item"
            v-for="result in filteredStates"
            :key="result.id"
          >{{result[0]}}</router-link>
        </div>
      </div>
      <div class="search-district col-12 col-md-6">
        <input class="search-input" type="text" placeholder="Şehir Adı" />
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "search",
  data() {
    return {
      state: "",
      filteredStates: [],
      searchShow: false
    };
  },

  computed: {
    ...mapState(["positions"])
  },
  methods: {
    filterStates() {
      if (this.state.length == 0) {
        this.filteredStates = [];
        this.searchShow = false;
      } else {
        this.filteredStates = this.positions.filter(state => {
          this.searchShow = true;
          return state[0].toLowerCase().startsWith(this.state[0].toLowerCase());
        });
      }
    }
  }
};
</script>

<style lang="scss">
.search {
  width: 100%;
  position: absolute;
  z-index: 99;
  top: 50%;
  transform: translateY(-15%);
  .custom-container {
    display: flex;
  }
  &-text {
    position: absolute;
    top: -85px;
    font-weight: bold;
    font-size: 50px;
    color: white;
  }
  &-position {
    padding-left: 0;
  }
  &-district {
    padding-right: 0;
  }
  &-input {
    background-color: white;
    height: 65px;
    font-size: 18px;
    box-shadow: #00000029 13px 13px 60px 5px;
  }
  &-result {
    background-color: white;
    opacity: 0;
    max-height: 425px;
    height: auto;
    overflow-y: scroll;
    box-shadow: #636363 1px 1px 60px 5px;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    &__item {
      margin-bottom: 5px;
      padding: 13px 22px;
      border-bottom: 1px solid #efefef;
      transition: all 0.5s;
      color: #0c0c0c;
      font-size: 20px;
    }
    &.isSearch {
      opacity: 1;
    }
  }
}
</style>
