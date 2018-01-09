<template>
  <div id="footer">
    <ul>
      <li>
        hello
      </li>
      <li class='vue-shadow' @click="scrollToTop()">
        <img  src="./assets/logo.png">
      </li>
      <li>
        again
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, "fast");
      return false;
    }
  }
}
</script>

<style lang="scss">
#footer {
  margin-top:0;
  ul {
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
    align-items:center;
    list-style:none;
    padding:0;
    li {
      text-transform:uppercase;
      font-weight:bold;
      img {
        max-height:50px;
        transform:scaleY(-1);
        cursor:pointer;
      }
    }
  }
}
</style>
