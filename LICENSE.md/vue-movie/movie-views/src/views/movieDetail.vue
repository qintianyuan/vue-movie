<template>
	<div class="container">
		<div>
			<movie-index-header></movie-index-header>
		</div>
		<div class="contentMain">
			<div>
				<h1>{{detail.movieName}}</h1>
				<div class="viewNum">下载次数：{{detail.movieNumDownload}}</div>
			</div>
			<div>
				<button @click="movieDownload">点击下载</button>
			</div>
			<div>
				<img :src="'src/'+ detail.movieImg" alt="" class="headerImg">
			</div>
			<div class="btnPosition" @click="support">
				<div class="SupportBtn">点赞<span>{{detail.movieNumSuppose}}</span></div>
			</div>
		</div>
		<div>
			<comment :movie_id="movie_id"></comment>
		</div>
		<common-footer></common-footer>
	</div>
</template>

<script>
	import MovieIndexHeader from '@/components/MovieIndexHeader';
	import CommonFooter from '@/components/CommonFooter';
	import Comment from '@/components/Comment';

	let movie_id = 0;
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
			this.movie_id = this.$route.params.id;
			movie_id = this.$route.params.id;
			this.axios.post('/api/movie/detail',{id: movie_id}).then((res)=>{
				this.detail = res.data.data;
			}).catch((err)=>{
				console.log(err);
			});
		},
		methods: {
			movieDownload(event){
				this.axios.post('/api/movie/download',{movie_id:movie_id}).then((res)=>{
					if(res.data.status == 1){
						console.log(res.message);
					}else{
						window.location = res.data.data;
					}
				})
			},
			support(event){
				this.axios.post('/api/movie/support',{id: movie_id}).then((res)=>{
					let data_temp = res.data;
					let that = this;
					//console.log(data_temp);
					if(data_temp.status === 0){
						this.axios.post('/api/movie/showNumber',{id:movie_id}).then((result)=>{
							//console.log(result);
							that.detail['movieNumSuppose'] = result.data.data.movieNumSuppose;
						})
					}
				});
			}
		}
	}
</script>
<style lang='css' scoped>
	.headerImg {
		height: 200px;
	}
	.container {
		width: 100%;
		height: 600px;
		margin: 0 auto;
	}
	.contentMain {
		padding-top: 150px;
	}
	.btnPosition {
		padding-left: 48%;
	}
	.SupportBtn {
		width: 60px;
		border: 1px solid #000;
		cursor: pointer;
	}
	.viewNum{
		font-size: 10px;
	}
</style>