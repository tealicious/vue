<template>
  <form class="navbar-form navbar-left"
        @submit.prevent="getAlbumList"
        style="display:flex">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Search"
              required="true"
              v-model="query">
    </div>
    <button class="pmd-ripple-effect btn btn-primary">Search</button>
  </form>
</template>

<script>
import {eventBus} from '../main';
  export default {
        data() {
            return {
                musicSearch: [],
                requestMusic: "http://api.discogs.com/database/search?q=",
                Oauth: "&key=COmwGBAqWkMRnFFmdiON&secret=vffgxgmpqRGbjVkRyJihMZBaOluuoHXY",
                query: 'Happy End',
                toggle: true
            }
        },
        methods: {
             getAlbumList() {
                eventBus.$emit('startAjax', this.toggle);
                const callParams = this.requestMusic + this.query + this.Oauth;
                this.$http.jsonp(callParams)
                    .then(response => {
                        return response.json();
                    }).then( fetchedData => {
                        const searchReturn = fetchedData.data.results;
                        const musicSearchArray = [];
                        for (let key in searchReturn) {
                                // use the unique keynames to access their user objects
                                musicSearchArray.push(searchReturn[key]);
                        }
                         this.musicSearch = musicSearchArray;
                         eventBus.$emit('getAlbumList', this.musicSearch);
                    }, error => {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
.navbar-form {
  display:flex;
  border-color:transparent;
  border:none !important;
  box-shadow:none;
  margin-top:4px;
  @media screen and (min-width:768px){
    margin-top:8px;
  }
  .form-group {
    margin-bottom:0;
    margin-right:3px;
  }
  input {
    width:0;
    min-width:200px;
    transition: width .75s ease;
  }
  input:focus {
    @media screen and (min-width:736px){
      width:300px;
      transition: width .25s ease;
    }
  }
}
</style>
