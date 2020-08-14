<template>
	<div class="breadcrumb">
		<div class="content">
			<h3>{{ title }}</h3>
			<ul>
				<li v-for="(item, index) in breadCrumbData" :key="index">
					<nuxt-link :to="item.url">
						{{ item.title }}
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'breadcrumb',
		props: {
			breadCrumbData: {
				required: true
			},
			title: {
				type: String
			}
		}
	}
</script>