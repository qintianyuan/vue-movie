<template>
	<div class="container">
		<div>
			<movie-index-header></movie-index-header>
		</div>
		<div class="userMessage">
			<user-message></user-message>
		</div>
		<div class="contentPic">
			<index-header-pic v-for="item in headerItems" :key="item._id" :recommendImg="item.recommendImg" :recommendSrc="item.recommendSrc" :recommendTitle="item.recommendTitle"></index-header-pic>
		</div>
		<div class="contentMain">
			<Row>
				<i-col span="11" offset="1">
					<Card>
						<p slot="title">
							<Icon type="ios-film-outline"></Icon>电影
						</p>
						<ul class="cont-ul">
							<movies-list v-for="item in movieItems" :key="item._id" :id="item._id" :movieName="item.movieName" :movieTime="item.movieTime"></movies-list>
						</ul>
					</Card>
				</i-col>
				<i-col span="10" offset="1">
					<Card>
						<p slot="title">
							<Icon type="edit"></Icon>新闻
						</p>
						<ul class="cont-ul">
							<news-list v-for="item in newsItems" :key="item._id" :id="item._id" :articleTitle="item.articleTitle" :articleTime="item.articleTime"></news-list>
						</ul>
					</Card>
				</i-col>
			</Row>
		</div>
		<common-footer></common-footer>
	</div>
</template>

<script>
	import MovieIndexHeader from '@/components/MovieIndexHeader';
	import CommonFooter from '@/components/CommonFooter';
	import MoviesList from '@/components/MoviesList';
	import NewsList from '@/components/NewsList';
	import IndexHeaderPic from '@/components/IndexHeaderPic';
	import UserMessage from '@/components/UserMessage';
	export default {
		name: 'index',
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
			MoviesList,
			NewsList,
			IndexHeaderPic,
			UserMessage
		},
		//  这里用于获取数据，需要获得主页推荐，主页新闻列表，主页电影列表
		created(){
			//获取电影
			this.axios.get('/api/showRanking').then((res)=>{
				this.movieItems = res.data.data;
				//console.log(res.data.data);
			}).catch((err)=>{
				console.log(err);
			})
			//获取新闻
			this.axios.get('/api/showArticle').then((res)=>{
				this.newsItems = res.data.data;
				//console.log(res.data.data);
			}).catch((err)=>{
				console.log(err);
			})
			//获取主页推荐
			this.axios.get('/api/showIndex').then((res)=>{
				this.headerItems = res.data.data;
				//console.log(res.data.data);
			}).catch((err)=>{
				console.log(err);
			})
		}
	}
</script>

<style lang="css" scoped>
 .container {
    width: 100%;
    margin: 0 auto;
  }
  .contentMain{
    padding-top: 15px;
  }
  .userMessage{
    margin-top:0px;
    margin-left: 0px;
  }
  .contentPic{
  	width: 80%;
    padding: 5px 0;
    margin: 0 auto;
  }

  .cont-ul {
    padding-top: 0.5rem;
    background-color: #fff;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>