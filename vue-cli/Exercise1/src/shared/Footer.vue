<template>
  <div class="row">
      <div class="col-xs-12">
          <footer @click="toggleMessage()">
              {{message}}
          </footer>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      context: true,
      message: 'all servers are managed here'
    }
  },
  methods: {
    toggleMessage() {
      this.message = this.context ? 'all servers are managed here' : 'or are they?';
      //same toggle two ways
      // if (this.context){
      //   this.message = 'all servers are managed here';
      // }else {
      //   this.message = 'or are they?';
      // }
      this.context = !this.context;
    }
  }
}
</script>

<style>
footer {
  cursor:pointer;
  }
</style>
