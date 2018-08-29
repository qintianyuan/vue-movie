<template>
	<div class="container">
		<div>
			<movie-index-header></movie-index-header>
		</div>
		<div class="userMessage">
			<user-message></user-message>
		</div>
		<label for="">收件箱</label>
		<div>
			<email-list v-for="item in receive_items" :title="item.title" :fromUser="item.fromUser" :context="item.context"></email-list>
		</div>
		<label for="">发件箱</label>
		<div>
			<email-list v-for="item in send_items" :title="item.title" :fromUser="item.fromUser" :context="item.context"></email-list>
		</div>
		<send-talk-box></send-talk-box>
		<common-footer></common-footer>
	</div>
</template>

<script>
    import MovieIndexHeader from '../components/MovieIndexHeader'
	import CommonFooter from '../components/commonFooter'
	import UserMessage from '../components/UserMessage'
	import EmailList from '../components/EmailList.vue'
	import SendTalkBox from  '../components/SendTalkBox.vue'
	export default {
		name: 'MovieDetail',
		data() {
			return {
				receive_items: [],
      			send_items:[],
      			detail:[]
			}
		},
		created(){
			let userId = localStorage._id;
			let send_data= {
				token: localStoken.token,
				user_id: localStorage._id,
				receive: 0
			}
			let receive_data= {
				token: localStoken.token,
				user_id: localStorage._id,
				receive: 1
			}
			if(userId){
		      this.axios.post('/api/users/showEmail',send_data).then((res) => {
		        if( res.data.status==1){
		          alert(res.data.message)
		        }else{
		          this.send_items = res.data.data;
		        }
		      //console.log(res.data.data)
		      })
		      this.$http.post('/api/users/showEmail',receive_data).then((data) => {
		        if(  res.data.status==1){
		          alert(res.data.message)
		        }else{
		          this.receive_items = res.data.data;
		        }
		        //console.log( res.data.data)
		      })
		    }else{
		      alert("用户信息错误")
		    }
		},
		components: {
		    MovieIndexHeader,
		    CommonFooter,
		    UserMessage,
		    EmailList,
		    SendTalkBox,
		},
		methods: {
			
		}
	}
</script>
<style lang='css' scoped>
	.box{
    display: inline-flex;
  }
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .userMessage{
    padding-top:60px;
    margin-top:-10px;
    margin-left: -10px;
  }
</style>