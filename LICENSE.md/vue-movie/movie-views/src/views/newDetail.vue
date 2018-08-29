<template>
	<div class="container">
		<div>
			<movie-index-header></movie-index-header>
		</div>
		<div class="contentMain">
			<div>
				<h1>{{detail.articleTitle}}</h1>
				<div>{{detail.artcleTime}}</div>
				<div class="contentText">{{detail.articleContext}}</div>
			</div>
		</div>
		<comment  :movie_id="article_id"></comment>
		<common-footer></common-footer>
	</div>
</template>

<script>
	import MovieIndexHeader from '@/components/MovieIndexHeader';
	import CommonFooter from '@/components/CommonFooter';
	import Comment from '@/components/Comment';

	let article_id = 0;
	export default {
		name: 'MovieDetail',
		data() {
			return {
				detail: [],
				movie_id: ''
			}
		},
		components: {
			MovieIndexHeader,
			CommonFooter,
			Comment
		},
		//获取数据 需要获得主页推荐，主页新闻列表，主页电影列表
		created() {
			this.article_id = this.$route.params.id;
			article_id = this.$route.params.id;
			this.axios.post('/api/articleDetail',{article_id: article_id}).then((res)=>{
				this.detail = res.data.data;
				console.log(res.data.data);
			}).catch((err)=>{
				console.log(err);
			});
		}
	}
</script>
<style lang='css' scoped>
	.container {
		width: 100%;
		height: 600px;
		margin: 0 auto;
	}
	.contentMain {
		padding-top: 150px;
	}
	.contentText {
		font-size: 15px;
		padding-top: 20px;
	}
</style>