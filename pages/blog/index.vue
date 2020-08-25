<template>
	<div>
		<Breadcrumb 
			:title="pageTitle" 
			:breadCrumbData="breadCrumbData"
		/>
		<v-container>
			<v-row>
				<v-col cols="12" md="9">
					<v-row>
						<template v-for="(item, index) in items">
							<v-col :key="index" cols="12" md="6">
								<BlogListHover
									
									:item="item"
								/>
							</v-col>
						</template>
					</v-row>
				</v-col>
				<v-col cols="12" md="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nesciunt atque ipsa similique pariatur aliquam libero necessitatibus ut sit voluptatem. Officiis nam excepturi eaque labore sequi, amet veritatis reprehenderit nulla?</v-col>
			</v-row>
		</v-container>
		<v-overlay color="#fff" :value="loading">
			<img src="/loader.gif" alt="">
		</v-overlay>
		<Observer @intersect="intersecting" />
	</div>
</template>
<script>
	import Breadcrumb from '@/components/Breadcrumb'
	import BlogListHover from '@/components/blog/BlogListHover'
	import Observer from '@/components/Observer'	
	export default {
		name: 'blog',
		components: {Breadcrumb, BlogListHover, Observer},
		data: () => ({
			pageTitle: 'blog',
			breadCrumbData: [
				{title: 'Home', url: '/'},
				{title: 'Blog', url: '#'}
			],
			items: [],
			loading: false,
			 page: 1
		}),
		methods: {
			async intersecting(){
				this.loading = true
				const res = await fetch(`http://jsonplaceholder.typicode.com/photos?_page=${this.page}`);
				let items = await res.json();
				this.items = [...this.items, ...items];
				this.page++
				this.loading = false
			}
		}
	}
</script>