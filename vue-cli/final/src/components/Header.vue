<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
  <router-link class="navbar-brand" to="/">Stock Broker | Funds : ${{funds}}</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link class="nav-item" to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
      <router-link class="nav-item" to="/stocks" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
    </ul>
    <a role="button" class="btn btn-info btn-sm mr-sm-2" href="#">End Day</a>
    <div class="dropdown show">
      <a class="btn btn-danger btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Save & Load
    </a>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" href="#">Save</a>
        <a class="dropdown-item" href="#">Load</a>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
import {
  mapGetters
} from 'vuex';
export default {
  computed: {
    ...mapGetters(['funds'])
  }
}
</script>
