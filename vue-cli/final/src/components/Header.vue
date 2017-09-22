<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
  <div class="container">
    <router-link class="navbar-brand" to="/">Stock Broker</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
        <router-link class="nav-item" to="/stocks" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
      </ul>
      <a role="button" class="btn btn-info btn-sm mr-sm-2" href="#" @click="endDay">End Day</a>
      <div class="dropdown mr-sm-3" :class="dropDown ? 'show' : null">
        <a class="btn btn-danger btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">
    Save & Load
    </a>
        <div class="dropdown-menu" :class="dropDown ? 'show' : null" aria-labelledby="dropdownMenuLink" v-if="dropDown" v-on-click-outside="closeDropdown">
          <a class="dropdown-item" href="" @click.prevent="saveData">Save</a>
          <a class="dropdown-item" href="" @click.prevent="loadData">Load</a>
        </div>
      </div>
      <a class="navbar-brand mr-0">{{funds | currency}}</a>
    </div>
  </div>
</nav>
</template>
<script>
import {
  mapGetters
} from 'vuex';
import {
  mapActions
} from 'vuex';
import {
  mixin as onClickOutside
} from 'vue-on-click-outside'
import axios from 'axios';
export default {
  mixins: [onClickOutside],
  data() {
    return {
      dropDown: false
    }
  },
  computed: {
    ...mapGetters(['funds'])
  },
  methods: {
    ...mapActions(['randomizeStocks', 'fetchData']),
    endDay() {
      this.randomizeStocks();
    },
    toggleDropdown() {
      this.dropDown = !this.dropDown;
    },
    closeDropdown() {
      this.dropDown = false;
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        portfolioStocks: this.$store.getters.portfolioStocks,
        stocks: this.$store.getters.stocks
      };
      axios.put('https://vue-project-final.firebaseio.com/data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
}
</script>
