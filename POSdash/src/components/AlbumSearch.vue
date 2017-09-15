<template>
    <div class="container-fluid full-width-container">
        <search-form></search-form>
        <transition name="fade" mode="out-in">
            <div v-if="toggle"  class="row component-section">
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
                              tag="table"
                              class="table table-mc-red pmd-table">
                              <!-- <table class="table table-mc-red pmd-table"> -->
                				<thead>
        							<tr>
        								<th>Actions</th>
        								<th>Title</th>
        								<th>Country</th>
        								<th>Single UPC</th>
        								<th>Year</th>
                                        <th>Format</th>
        							</tr>
        						</thead>
                                <tbody v-for="(listing, index) in paginated('musicSearch')">
                                        <tr>
                                          <td class="pmd-table-row-action">
                                              <a  class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"
                                              @click="switchOpen"
                                              ><i class="material-icons md-dark pmd-sm"></i></a>
                                              <a class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm" @click="remove(index, $event)">
                                                  <i class="material-icons md-dark pmd-sm">delete</i>
                                              </a>
                                          </td>
                                          <td><a :href="'https://www.discogs.com' + listing.uri" target="top">{{listing.title}}</a></td>
                                          <td>{{listing.country}}</td>
                                          <td>{{listing.singleUpc}}</td>
                                          <td>{{listing.year}}</td>
                                          <td>{{listing.singleFormat}}</td>
                                        </tr>
                                        <tr class="child-table">
                    						<td colspan="12">
                    							<div class="direct-child-table">
                    								<table class="table pmd-table table-striped table-sm">
                    									<thead>
                    										<tr>
                                                                <th></th>
                                                                <th>Label</th>
                    											<th class="text-right">Other UPC's</th>
                    											<th class="text-right">ID</th>
                    											<th class="text-right">CatNo</th>
                                                                <th>Other Formats</th>
                    										</tr>
                    									</thead>
                    									<tbody>
              									           <tr>
                                                            <td class="really-no-padding">
                                                                <a :href="'https://www.discogs.com' + listing.uri" target="top"><img :src="listing.thumb"/></a>
                                                            </td>
                                                            <td>
                                                                <ul class="really-no-padding">
                                                                    <li v-for="label in listing.label" class="no-padding">
                                                                        {{label}}
                                                                    </li>
                                                                </ul>
                                                            </td>
                    										<td class="no-padding">
                                                                <ul class="really-no-padding">
                                                                    <li v-for="upc in listing.barcode" class="text-right">
                                                                        {{upc}}
                                                                    </li>
                                                                </ul>
                                                            </td>
                    										<td class="text-right">{{listing.id}}</td>
                    										<td class="text-right">{{listing.catno}}</td>
                                                            <td class="no-padding">
                                                                <ul>
                                                                    <li v-for="format in listing.format" class="text-right">
                                                                        {{format}}
                                                                    </li>
                                                                </ul>
                                                            </td>
                									       </tr>
            							                </tbody>
                        							</table>
                        						</div>
                        					</td>
                        				</tr>
                                </tbody>
                		</paginate>
                        <!-- </table> -->
                		</div>
    				</div>
    			</div>
    		</div>
        </transition>
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
                toggle: false
            }
        },
        methods: {
            remove(index, e) {
                console.log(e, index);
                this.musicSearch.splice(index, 1);
                var target = e.target;
                if (!target.matches('a')){
                    var $parent = target.parentNode;
                    $($parent).siblings().removeClass( "child-table-collapse" );
                } else {
                    $(target).siblings().removeClass( "child-table-collapse" );
                }
                var $parentTR = $(target).closest('tr');
                var $uncleTR = $($parentTR).siblings('tr');
                var $childTable = $($uncleTR).find('.direct-child-table');
                if($($childTable).hasClass('showMe')){
                    $($childTable).removeClass('showMe').slideToggle(200);
                }
            },
            switchOpen(e) {
                var target = e.target;
                if (!target.matches('a')){
                    var $parent = target.parentNode;
                    $($parent).toggleClass( "child-table-collapse" );
                } else {
                    $(target).toggleClass( "child-table-collapse" );
                }
                var $parentTR = $(target).closest('tr');
                var $uncleTR = $($parentTR).siblings('tr');
                var $childTable = $($uncleTR).find('.direct-child-table');
                $($childTable).addClass('showMe').slideToggle(200);
            }
            // showInfo(e) {
            //     console.log(e.toElement.href);
            // }
        },
        components: {
            searchForm: SearchForm
        },
        created() {
          eventBus.$on('startAjax', (toggle)=> {
            this.toggle = false;
          })
          eventBus.$on('getAlbumList', (search)=>{
            search.forEach( (item) => {
                if(item.barcode){
                const barCodeArray = item.barcode;
                item.singleUpc = barCodeArray.shift();
                }
                if(item.format){
                const formatArray = item.format;
                item.singleFormat = formatArray.shift();
                }
            });
            this.musicSearch = search;
            if(search.length > 0){
                this.toggle = true;
            } else {
                this.toggle = false;
            }
        })
      }
    }
</script>

<style scoped lang="scss">

        /*TRANSITION ANIMATIONS*/
        .fade-enter, .fade-leave-to {
            /* set tranisition styles on enter and leave-to*/
            opacity:0;
        }
        .fade-enter {
            transform:scale(1.1);
        }
        .fade-enter-active, .fade-leave-active {
            transition:opacity 300ms cubic-bezier(0.68, -0.1, 0.265, 1.55);
            /* set beziers on active classes */
        }

    .select-checkbox.checkbox.pmd-default-theme{
        margin:0;
        cursor:pointer;
    }
    .table {
        margin-bottom:0;
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
    .fa {
        font-size: 18px;
        transform:translateY(3px);
        color:#ff5722;
    }
    .direct-child-table {
        display:none;
    }
    .pmd-table-row-action {
        width: 110px;
    }
    .pmd-table.table > thead > tr, .pmd-table.table.table > tbody > tr {
        td, th {
            &:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5), &:nth-of-type(6) {
                text-align:right !important;
            }
        }

        .text-right {
            text-align:right;
        }
    }
    // .pmd-table.table.table > tbody > tr {
    //     td {
    //         border:1px solid whitesmoke;
    //         border-bottom:none;
    //     }
    // }
    .direct-child-table {
        .pmd-table.table > thead > tr, .pmd-table.table.table > tbody > tr {
            font-size:.8rem;
            .really-no-padding{
                padding:0;
            }
            img {
                padding:0;
            }
            td, th {
                border:none;
                vertical-align:top;
                // &:nth-of-type(2), &:nth-of-type(3) {
                //     text-align:right !important;
                // }
            }
        }
        .text-right {
            text-align:right;
        }
    }
    .no-padding {
        padding-left:0 !important;
        padding-right:0 !important;
    }
    .text-right {
        text-align:right;
    }
    table ul li{
            padding:4px 12px;
            list-style:none;
            border-bottom:1px dashed lightgray;
        }
</style>
