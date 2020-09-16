<template>
	<div>
		<Breadcrumb 
			:title="pageTitle" 
			:breadCrumbData="breadCrumbData"
		/>

		<v-container>
			<v-row>
				<v-col cols="12" md="9" >
					<SingleBlog 
						:item="blog"
					/>
				</v-col>
				<v-col cols="12" md="3">
					<Search
						class="mt-5"
						@searching="searching"
					/>
					<CategoryList
						:items="categories"
					/>

					<p class="recent-blog-title mb-0">Recent Blogs</p>
					<!-- recent blogs -->
					<v-row dense>
			            <nuxt-link class="service-link" v-for="(item, i) in recentBlog" :key="i" to="#">
			              <RecentBlog :item="item" />
			            </nuxt-link>
			         </v-row>
					<!-- recent blogs -->
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
import SingleBlog from '@/components/blog/SingleBlog'
import RecentBlog from '@/components/blog/RecentBlog'
import Search from '@/components/SearchComponent'	
import CategoryList from '@/components/CategoryList'
import blog from './blog'
export default {
	name: 'single-blog-page',
	components: {SingleBlog, Breadcrumb, Search, CategoryList, RecentBlog},
	data: () => ({
		blog: blog.blog,
		recentBlog: blog.recent,
		pageTitle: 'blog',
		breadCrumbData: [
			{title: 'Home', url: '/'},
			{title: 'Blog', url: '/blog'},
			{title: 'Coading', url: '#'},
		],
		categories: [
			{id: 1, name:'programming', link: '#'},
			{id: 2, name:'Vue js', link: '#'},
			{id: 3, name:'Nuxt', link: '#'},
			{id: 4, name:'Trcks', link: '#'},
			{id: 5, name:'Technology', link: '#'},
		],
	}),
	methods: {
			searching(key){
				console.log(key);
			}
		}
}
</script>