<template>
    <div class="container-fluid full-width-container">
        <search-form></search-form>
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
                    <div class="table-responsive pmd-card pmd-z-depth">
            			<paginate
                          name="musicSearch"
                          :list="musicSearch"
                          :per="10"
                          tag="table" class="table table-mc-red pmd-table">
            				<thead>
    							<tr>
    								<th>Actions</th>
    								<th>Title</th>
    								<th>ID</th>
    								<th>UPC</th>
    								<th>Year</th>
                                    <th>Format</th>
    							</tr>
    						</thead>
                            <tbody v-for="(listing, index) in paginated('musicSearch')">
                                <tr>
                                  <td class="pmd-table-row-action">
                                      <a  class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"
                                      :class="{'child-table-collapse' : isOpen}"
                                      @click.capture="switchOpen"><i class="material-icons md-dark pmd-sm"></i></a>
                                      <a @click.prevent="doNothing" class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm" @click="remove">
                                          <i class="material-icons md-dark pmd-sm">delete</i>
                                      </a>
                                  </td>
                                  <td><a :href="listing.resource_url" target="blank">{{listing.title}}</a></td>
                                  <td>{{listing.id}}</td>
                                  <td>{{listing.singleUpc}}</td>
                                  <td>{{listing.year}}</td>
                                  <td>{{listing.format}}</td>
                                </tr>
                                <tr class="child-table">
            						<td colspan="12">
            							<div class="direct-child-table" :class="{showme : isOpen}">
            								<table class="table pmd-table table-striped table-sm">
            									<thead>
            										<tr>
            											<th>Title</th>
            											<th>Amount (%)</th>
            											<th>Status</th>
            											<th>Created</th>
            											<th></th>
            										</tr>
            									</thead>
            									<tbody>
      									           <tr>
                										<td>Service Tax </td>
                										<td>14.5</td>
                										<td><span class="status-btn red-bg">InActive</span></td>
                										<td>2014-03-03</td>
                										<td class="pmd-table-row-action">
                											<a href="javascript:void(0);" class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-xs"><i class="material-icons md-dark pmd-xs">edit</i></a>
                											<a href="javascript:void(0);" class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-xs"><i class="material-icons md-dark pmd-xs">delete</i></a>
                										</td>
        									         </tr>
    							                </tbody>
                							</table>
                						</div>
                					</td>
                				</tr>
                            </tbody>
            		</paginate>
            		</div>
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
                                    <th>Format</th>
    							</tr>
    						</thead>
                            <paginate
                              name="musicSearch"
                              :list="musicSearch"
                              :per="10"
                              tag="tbody">
                                <tr v-for="(listing, index) in paginated('musicSearch')">
                                  <!-- <td class="select-checkbox checkbox pmd-default-theme">
                                      <label class="checkbox-inline pmd-checkbox">
                                      <input type="checkbox" value="" checked>
                                      </label>
                                  </td> -->
                                  <td @click="remove" class="closeIcon"><i class="fa fa-times" aria-hidden="true"></i></td>
                                  <td><a :href="listing.resource_url" target="blank">{{listing.title}}</a></td>
                                  <td>{{listing.id}}</td>
                                  <td>{{listing.singleUpc}}</td>
                                  <td>{{listing.year}}</td>
                                  <td>{{listing.format}}</td>
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
    import {eventBus} from '../main'
    import SearchForm from './SearchForm.vue'
    export default {
        data() {
            return {
                musicSearch: [],
                paginate:['musicSearch'],
                isOpen: false
            }
        },
        methods: {
            remove(index) {
                this.musicSearch.splice(index, 1);
            },
            switchOpen(e) {
                if (!e.target.matches('a')) return;
                console.log(e.target);
                var target = e.target;
                $(target).toggleClass( "child-table-collapse" );
            },
            doNothing(e) {
                event.stopPropagation();
            }
        },
        components: {
            searchForm: SearchForm
        },
        created() {
          eventBus.$on('getAlbumList', (search)=>{
            search.forEach( (item) => {
                if(item.barcode){
                const barCodeArray = item.barcode;
                item.singleUpc = barCodeArray.shift();
                }
                if(item.format){
                const formatArray = item.format;
                item.format = formatArray.shift();
                }
            });
            this.musicSearch = search;
          })
      }
    }
</script>

<style scoped lang="scss">
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
    @media screen and (max-width: 767px){
        .table-responsive {
             margin-bottom: 0;
            border:none;
        }
    }
    .pmd-table.table > thead > tr, .pmd-table.table.table > tbody > tr {
        td, th {
            &:nth-of-type(4), &:nth-of-type(5), &:nth-of-type(6), &:last-of-type {
                text-align:right !important;
            }
        }
    }
    .fa {
        font-size: 18px;
        transform:translateY(3px);
        color:#ff5722;
    }
    .direct-child-table {
        display:none;
        &.showme {
            display:block;
        }
    }
    .pmd-table-row-action {
        width: 110px;
    }
</style>
