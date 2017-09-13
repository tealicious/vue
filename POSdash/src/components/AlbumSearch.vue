<template>
    <div class="container-fluid full-width-container">
        <div class="row component-section">
			<div class="col-md-10 col-md-push-1 component-box">
				<div class="component-box">
					<!-- table card example -->
                    <paginate-links for="musicSearch"
                        :async="true"
                        :simple="{
                            prev: 'Back',
                            next: 'Next'
                          }"
                        :hide-single-page="true"
                        :show-step-links="true"
                        :classes="{
                        'ul': 'simple-links-container',
                        '.next > a': 'next-link',
                        '.prev > a': 'prev-link'
                      }">
                    </paginate-links>
					<div class="pmd-card pmd-z-depth pmd-card-custom-view">
						<div class="table-responsive">
    						<table id="example-checkbox" class="table pmd-table table-hover table-striped display responsive nowrap dataTable" cellspacing="0" width="100%">
    						<thead>
    							<tr>
    								<th>
                                    </th>
    								<th>Title</th>
    								<th>ID</th>
    								<th>UPC</th>
    								<th>Year</th>
    							</tr>
    						</thead>
                            <paginate
                              name="musicSearch"
                              :list="musicSearch"
                              :per="10">
                                <tr v-for="(artist, index) in paginated('musicSearch')">
                                  <!-- <td class="select-checkbox checkbox pmd-default-theme">
                                      <label class="checkbox-inline pmd-checkbox">
                                      <input type="checkbox" value="" checked>
                                      </label>
                                  </td> -->
                                  <td @click="remove" class="closeIcon"><i class="material-icons md-dark pmd-sm">close</i></td>
                                  <td><a :href="artist.resource_url" target="blank">{{artist.title}}</a></td>
                                  <td>{{artist.id}}</td>
                                  <td>{{artist.singleUpc}}</td>
                                  <td>{{artist.year}}</td>
                                </tr>
                            </paginate>
    					</table>
    				</div>
    			</div> <!-- table card example end -->
				</div>
			</div> <!-- inverse table code and example end-->
		</div>
    </div>
</template>

<script>
    import {eventBus} from '../main';
    export default {
        data() {
            return {
                musicSearch: [],
                paginate:['musicSearch']
            }
        },
        methods: {
            remove(index) {
                this.musicSearch.splice(index, 1);
            }
        },
        created() {
          eventBus.$on('getAlbumList', (search)=>{
            search.forEach( (item) => {
                if(item.barcode){
                const barCodeArray = item.barcode;
                item.singleUpc = barCodeArray.shift();
                }
            });
            this.musicSearch = search;
          })
      }
    }
</script>

<style scoped>
      /*TRANSITION ANIMATIONS*/
    .fade-enter-active, .fade-leave-active, .fade-move {
      transition: all .3s ease;
      /* set beziers on active classes */
    }
    .fade-enter, .fade-leave-to
    /* 2.1.8 and up - set tranisitions on enter and leave-to*/ {
      transform:translateX(100%);
    }

    .select-checkbox.checkbox.pmd-default-theme{
        margin:0;
        cursor:pointer;
    }
    .table > tbody > tr > td {
        border:none;
    }
    .closeIcon {
        display:flex;
        align-items:center;
        cursor:pointer;
    }
    .paginate-links {
        display: flex;
        list-style: none;
        justify-content: space-around;
        width: 90px;
        cursor: pointer;
        padding: 0;
    }
    li.prev {
        margin-right:2rem;
        cursor:pointer;
    }
    table a {
        color:#337ab7;
    }
</style>
