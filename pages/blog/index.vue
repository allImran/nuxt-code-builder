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
				<v-col cols="12" md="3">
					<Search 
						@searching="searching"
					/>
					<CategoryList
						:items="categories"
					/>
				</v-col>
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
	import Search from '@/components/SearchComponent'	
	import CategoryList from '@/components/CategoryList'	
	export default {
		name: 'blog',
		components: {Breadcrumb, BlogListHover, Observer, Search, CategoryList},
		data: () => ({
			pageTitle: 'blog',
			breadCrumbData: [
				{title: 'Home', url: '/'},
				{title: 'Blog', url: '#'}
			],
			items: [],
			loading: false,
			page: 1,
			categories: [
				{id: 1, name:'programming', link: '#'},
				{id: 2, name:'Vue js', link: '#'},
				{id: 3, name:'Nuxt', link: '#'},
				{id: 4, name:'Trcks', link: '#'},
				{id: 5, name:'Technology', link: '#'},
			],
		}),
		methods: {
			async intersecting(){
				this.loading = true
				const res = await fetch(`http://jsonplaceholder.typicode.com/photos?_page=${this.page}`);
				let items = await res.json();
				this.items = [...this.items, ...items];
				this.page++
				this.loading = false
			},
			searching(key){
				console.log(key);
			}
		}
	}
</script>