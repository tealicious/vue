<template>
    <div class="container-fluid full-width-container">
        <div class="row" id="card-masonry">
            <div class="col-md-8 col-md-push-2 col-sm-12 col-xs-12">
                <form v-on:submit.prevent="getAlbumList">
                    <div class='form-group pmd-textfield pmd-textfield-floating-label col-md-6'>
                      <!-- <label>Band</label> -->
                      <input class='form-control' type='text' required="true"
                      v-model="band.name"/>
                    </div>
                    <div class='form-group pmd-textfield pmd-textfield-floating-label col-md-6'>
                      <!-- <label>Album</label> -->
                      <input class='form-control' type='text' required="true"
                      v-model="band.album"/>
                    </div>
                    <div class="pmd-card-actions">
      					      <button class='pmd-ripple-effect btn btn-primary' type="submit">Search Music</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row component-section">
			<div class="col-md-8 col-md-push-2 component-box">
				<div class="component-box">
					<!-- table card example -->
					<div  class="pmd-card pmd-z-depth pmd-card-custom-view">
						<div class="table-responsive">
						<table id="example-checkbox" class="table pmd-table table-hover table-striped display responsive nowrap" cellspacing="0" width="100%">
						<thead>
							<tr>
								<th></th>
								<th>First name</th>
								<th>Last name</th>
								<th>Position</th>
								<th>Office</th>
								<th>Age</th>
								<th>Start date</th>
							</tr>
						</thead>
						<tbody is="transition-group" name="fade" mode="out-in">
                            <!-- <transition-group > -->
                                <tr style="cursor:pointer"
                                    v-for="(album, index) in musicSearch"
                                    :key="index"
                                    @click="remove">
                                    <td class="select-checkbox"></td>
                                    <td>{{album.title}}</td>
                                </tr>
                            <!-- </transition-group> -->
						</tbody>
					</table>
    				</div>
    			</div> <!-- table card example end -->
				</div>
			</div> <!-- inverse table code and example end-->
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
                    name: 'nirvana',
                    album: 'nevermind'
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
      transform:translateX(100%);
    }
</style>
