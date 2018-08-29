<template>
	<div class="container">
		<div>
			<movie-index-header></movie-index-header>
		</div>
		<div class="userMessage">
			<user-message></user-message>
		</div>
		<div class="box">用户名：{{detail.username}}</div>
		<div class="box">用户邮箱：{{detail.userMail}}</div>
		<div class="box">用户电话：{{detail.userPhone}}</div>
		<div class="box">用户状态：{{detail.userStatus}}</div>
		<div class="box"><button @click="ShowChangeUserPassword">修改密码</button></div>
		<div v-show="showRePassword">
			<div class="box">
				<label for="">输入旧密码：</label>
				<input type="text" v-model="password" placeholder="输入旧密码">
			</div>
			<div class="box">
				<button @click="changeUserPassword">修改密码</button>
			</div>
		</div>
		<div style="padding-top: 10px;">
			<router-link to="/sendEmail">
				<button>发送站内信</button>
			</router-link>			
		</div>
		<common-footer></common-footer>
	</div>
</template>

<script>
	import MovieIndexHeader from '../components/MovieIndexHeader'
	import CommonFooter from '../components/commonFooter'
	import UserMessage from '../components/UserMessage'
	export default {
		name: 'MovieDetail',
		data() {
			return {
				username: '',
				userMail: '',
				userPhone: '',
				repassword: '',
				showRePassword: false,
				showUserInfo: true
			}
		},
		components: {
		    MovieIndexHeader,
		    CommonFooter,
		    UserMessage
		  },
		created () {
		    let userId=this.$route.query.id
		    if(userId){
		      this.axios.post('/api/showUser',{user_id: userId}).then((res) => {
		        if(res.data.status==1){
		          alert(res.data.message)
		        }else{
		          this.detail = res.data.data;
		          if(res.data.data.userStop){
		            this.userStatus="用户已经被封停"
		          }else{
		            this.userStatus="用户状态正常"
		          }
		        }
		      console.log( res.data.data)
		      })
		    }else{
		      alert("用户信息错误")
		    }
		  },
		methods: {
			ShowChangeUserPassword(event){
		      this.showRePassword=true
		    },
		    changeUserPassword(event){
		      let token=localStorage.token
		      let user_id=localStorage._id
		        this.axios.post('/api/users/findPassword',{token: token,user_id:user_id,repassword:this.repassword,password:this.password}).then((res) => {
		          if(res.data.status==1){
		            alert(res.data.message)
		          }else{
		            alert(res.data.message)
		            this.$router.go(-1)
		          }
		        })
		      }
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