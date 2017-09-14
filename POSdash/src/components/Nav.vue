<template>
	<nav class="navbar navbar-inverse navbar-fixed-top pmd-navbar pmd-z-depth">

		<div class="container-fluid">
			<div class="pmd-navbar-right-icon pull-right navigation">
				<app-search-bar></app-search-bar>
			</div>
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<a href="javascript:void(0);" class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pull-left margin-r8 pmd-sidebar-toggle"><i class="material-icons">menu</i></a>
			  <a href="index.html" class="navbar-brand">
					Plaid Room Records
			  </a>
			</div>
		</div>

	</nav><!--End Nav bar -->
	<!-- Header Ends -->
</template>

<script>
import Searchbar from './Searchbar.vue'
export default {
		components: {
			appSearchBar: Searchbar
		}
}
</script>
<style scoped lang="scss">
.navbar-brand {
	@media screen and (max-width:767px) {
		display:none;
	}
}
</style>
