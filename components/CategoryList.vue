<template>
	<div class="category-list-area mt-5">
		<span class="category-list-title">Categories</span>
		<ul>
			<li v-for="item in items" :key="item.id">
				<n-link
					:to="item.link"
				>{{ item.name }}
				</n-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'categorylist',
		props: {
			items: {required: true}
		}		
	}
</script>