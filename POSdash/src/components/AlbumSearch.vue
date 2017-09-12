<template>
    <div class="pmd-card pmd-z-depth">
        <div class="row">
            <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <form v-on:submit.prevent="getAlbumList">
                    <div class='form-group pmd-textfield pmd-textfield-floating-label col-md-6'>
                      <label>Band</label>
                      <input class='form-control' type='text' required="true"
                      v-model="band.name"/>
                    </div>
                    <div class='form-group pmd-textfield pmd-textfield-floating-label col-md-6'>
                      <label>Album</label>
                      <input class='form-control' type='text' required="true"
                      v-model="band.album"/>
                    </div>
                    <div class="pmd-card-actions">
    					<button class='pmd-ripple-effect btn btn-primary' type="submit">Search Music</button>
                    </div>
                </form>
                <br />
                <br />
                <ul class="list-group">
                    <transition-group name="fade" mode="out-in">
                        <li class='list-group-item'
                            style="cursor:pointer"
                            v-for="(album, index) in musicSearch"
                            :key="index"
                            @click="remove">
                            <img :src="album.thumb" />
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                musicSearch: [],
                requestUrl: "https://vuexhr.firebaseio.com/data.json",
                requestMusic: "http://api.discogs.com/database/search?",
                bandParam: "artist=",
                albumParam: "&release_title=",
                Oauth: "&key=COmwGBAqWkMRnFFmdiON&secret=vffgxgmpqRGbjVkRyJihMZBaOluuoHXY",
                band: {
                    name: '',
                    album: ''
                }
            }
        },
        methods: {
             getAlbumList() {
                const requestString = this.bandParam + this.band.name + this.albumParam + this.band.album;
                const callParams = this.requestMusic + requestString + this.Oauth;
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
                    }, error => {
                        console.log(error);
                    });
            },
            remove(index) {
                this.musicSearch.splice(index, 1);
            }
        }
    }
</script>

<style>
      /*TRANSITION ANIMATIONS*/
    .fade-enter-active, .fade-leave-active, .fade-move {
      transition: all .3s ease;
      /* set beziers on active classes */
    }
    .fade-enter, .fade-leave-to
    /* 2.1.8 and up - set tranisitions on enter and leave-to*/ {
      opacity:0;
    }
</style>
