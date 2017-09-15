<template>
        <div class="row" id="card-masonry">
            <div class="col-md-10 col-md-push-1 col-sm-12 col-xs-12">
                <form v-on:submit.prevent="getAlbumList">
                    <div class='form-group pmd-textfield pmd-textfield-floating-label col-md-4'>
                      <label>Band</label>
                      <input class='form-control' type='text'
                      v-model="title.name"/>
                    </div>
                    <div class='form-group pmd-textfield pmd-textfield-floating-label col-md-4'>
                      <label>Album</label>
                      <input class='form-control' type='text'
                      v-model="title.album"/>
                    </div>
                    <div class='form-group pmd-textfield pmd-textfield-floating-label col-md-4'>
                      <label>UPC</label>
                      <input class='form-control' type='text'
                      v-model="title.upc"/>
                    </div>
                    <div class="col-sm-6 mobile-vert-spacer">
                      <label class="radio-inline pmd-radio pmd-radio-ripple-effect">
                        <input type="radio" name="optionsRadios" id="CD" value="CD" v-model="title.format">
                        <span for="CD">CD</span>
                      </label>
                      <label class="radio-inline pmd-radio pmd-radio-ripple-effect">
                        <input type="radio" name="optionsRadios" id="Vinyl" value="Vinyl" v-model="title.format">
                        <span for="Vinyl">Vinyl</span>
                      </label>
                      <label class="radio-inline pmd-radio pmd-radio-ripple-effect">
                        <input type="radio" name="optionsRadios" id="Cassette" value="Cassette" v-model="title.format">
                        <span for="Cassette">Tape</span>
                      </label>
                      <label class="radio-inline pmd-radio pmd-radio-ripple-effect">
                        <input type="radio" name="optionsRadios" id="any" value="Album" v-model="title.format">
                        <span for="any">Any</span>
                      </label>
                    </div>
                    <div class="col-sm-6 mobile-vert-spacer">
		                    <button class='pull-right pmd-ripple-effect btn btn-primary' type="submit">Search</button>
                        <button class='pull-right pmd-ripple-effect btn btn-default' @click.prevent="clearForm">Clear</button>
                    </div>
                </form>
            </div>
        </div>
</template>
<script>
        import {eventBus} from '../main';
  export default {
        data() {
            return {
                musicSearch: [],
                requestMusic: "http://api.discogs.com/database/search?",
                bandParam: "artist=",
                albumParam: "&release_title=",
                barcodeParam: "&barcode=",
                formatParam: "&format=",
                Oauth: "&key=COmwGBAqWkMRnFFmdiON&secret=vffgxgmpqRGbjVkRyJihMZBaOluuoHXY",
                fullQuery: "",
                toggle: true,
                title: {
                    name: 'Nirvana',
                    album: 'Bleach',
                    upc: '',
                    format: "Album"
                }
              }
        },
        methods: {
             getAlbumList() {
                eventBus.$emit('startAjax', this.toggle);
                const requestString = this.bandParam + this.title.name + this.albumParam + this.title.album + this.barcodeParam + this.title.upc + this.formatParam + this.title.format;
                const callParams = this.requestMusic + requestString + this.Oauth;
                this.fullQuery = callParams;
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
            },
            clearForm() {
              this.musicSearch = [];
              eventBus.$emit('getAlbumList', this.musicSearch);
            }
        }
    }
</script>
<style scoped lang="scss">
.mobile-vert-spacer {
  margin-top:2rem;
  margin-bottom:2rem;
  @media (min-width: 768px) {
    margin-top:1rem;
    margin-bottom:1rem;
  }
}
.pull-right{
  float:none !important;
  @media (min-width: 768px) {
    float:right !important;
   }
}
</style>
