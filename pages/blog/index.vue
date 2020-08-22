<template>
	<div>
		<Breadcrumb 
			:title="pageTitle" 
			:breadCrumbData="breadCrumbData"
		/>
		<v-container>
			<v-row>
				<v-col cols="12" md="8">
					<v-row>
						<v-col cols="12" md="6">
							<BlogListHover />
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="12" md="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nesciunt atque ipsa similique pariatur aliquam libero necessitatibus ut sit voluptatem. Officiis nam excepturi eaque labore sequi, amet veritatis reprehenderit nulla?</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
	import Breadcrumb from '@/components/Breadcrumb'
	import BlogListHover from '@/components/blog/BlogListHover' 
	export default {
		name: 'blog',
		components: {Breadcrumb, BlogListHover},
		data: () => ({
			pageTitle: 'blog',
			breadCrumbData: [
				{title: 'Home', url: '/'},
				{title: 'Blog', url: '#'}
			],
		}),
	}
</script>