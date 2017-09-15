	<template>
	<aside class="pmd-sidebar sidebar-default pmd-sidebar-slide-push pmd-sidebar-left pmd-sidebar-open bg-fill-darkblue sidebar-with-icons" role="navigation">
		<ul class="nav pmd-sidebar-nav">

			<li v-for="link in links"
			class="dropdown pmd-dropdown pmd-user-info visible-xs visible-md visible-sm visible-lg">
				<a aria-expanded="false" data-toggle="dropdown" class="btn-user dropdown-toggle media" data-sidebar="true" aria-expandedhref="javascript:void(0);">
					<div class="media-left media-middle">
						<i class="fa" :class="link.fa" aria-hidden="true"></i>
					</div>
					<div class="media-body media-middle">{{ link.name }}</div>
					<div class="media-right media-middle"><i class="dic-more-vert dic"></i></div>
				</a>
				<ul class="dropdown-menu"  v-for="sublink in link.sublinks">
					<li><a><i class="media-left media-middle">
						<span class="fa" :class="sublink.fa" aria-hidden="true"></span></i>
						<span class="media-body">{{ sublink.name }}</span></a></li>
				</ul>
			</li>

		</ul>
	</aside><!-- End Left sidebar -->
	<!-- Sidebar Ends -->
</template>

<script>
export default {
	data() {
		return {
			links:[
				{
					name: "User",
					fa: "fa-2x fa-user-circle-o",
					sublinks: [
						{name: "Logout", fa: "fa-sign-out"}
					]
				},
				{
					name: "Inventory",
					fa: "fa-list",
					sublinks: [
						{name: "Search", fa: "fa-search"},
						{name: "Edit", fa: "fa-edit"},
						{name: "Add", fa: "fa-plus"},
						{name: "Remove", fa: "fa-minus"}
					]
				},
				{
					name: "Ceckout",
					fa: "fa-shopping-cart"
				},
				{
					name: "Item History",
					fa: "fa-history"
				},
				{
					name: "Transaction History",
					fa: "fa-barcode"
				},
				{
					name: "Create PO",
					fa: "fa-file-text"
				}
			]
		}
	}

}
</script>

<style lang="scss" scoped>
.media-left {
	img {
		height:40px;
		width:40px;
		border-radius:100%;
	}
}
</style>
