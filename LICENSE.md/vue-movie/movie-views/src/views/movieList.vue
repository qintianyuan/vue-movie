<template>
	<div class="container">
		<div>
			<movie-index-header></movie-index-header>
		</div>
		<div class="contentMain">
			<div>
				<div class="contentLeft">
					<ul class="cont-ul">
						<movies-list v-for="item in movieItems" :key="item._id" :id="item._id" :movieName="item.movieName" :movieTime="item.movieTime"></movies-list>
					</ul>
				</div>
			</div>
		</div>
		<common-footer></common-footer>
	</div>
</template>

<script>
	import MovieIndexHeader from '@/components/MovieIndexHeader';
	import MoviesList from '@/components/MoviesList';
	import CommonFooter from '@/components/CommonFooter';
	export default {
		name: 'movieList',
		data() {
			return {
				headerItems: [],
				newsItems: [],
				movieItems: []
			}
		},
		components: {
			MovieIndexHeader,
			CommonFooter,
			MoviesList
		},
		//获取电影数据
		created(){
			this.axios.get('api/movie/list').then((res)=>{
				this.movieItems = res.data.data;
			}).catch((err)=>{
				console.log(err);
			})
		}
	}
</script>
<style lang='css' scoped>
	.container {
		width: 100%;
		margin: 0 auto;
	}
	.contentMain {
		padding-top: 150px;
		padding-top: 20px;
	}
	.contentText{
		font-size: 15px;
		padding-top: 20px;
	}
</style>
