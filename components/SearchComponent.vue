<template>
	<div class="search-area mt-3">
		<v-text-field
			v-model="keyword"
			@input="onSearch"
			dense
			outlined
            placeholder="Search..."
            append-icon="mdi-magnify"
         ></v-text-field>
	</div>
</template>

<script>
	import { debounce } from 'lodash';

	export default {
		name: 'search-component',
		data () {
			return {
				keyword: '',
			}
		},
		methods: {
			onSearch: debounce(function (){
				this.$emit('searching', this.keyword);
			}, 1000),
		}
	}
</script>