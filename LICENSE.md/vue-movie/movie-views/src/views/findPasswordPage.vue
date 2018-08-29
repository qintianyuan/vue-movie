<template>
	<div>
		<div v-show="showUserInfo">
			<div class="box">
				<label for="">输入用户名：</label>
				<input v-model = "username" placeholder="用户名">
			</div>
			<div class="box">
				<label for="">输入邮箱：</label>
				<input v-model = "userMail" placeholder="邮箱">
			</div>
			<div class="box">
				<label for="">输入手机：</label>
				<input v-model = "userPhone" placeholder="手机">
			</div>
			<div class="box">
				<button @click="checkUser">找回密码</button>
			</div>
		</div>
		<div v-show="showRePassword">
			<div class="box">
				<label for="">输入新密码：</label>
				<input type="text" v-model="repassword" placeholder="输入新密码"> 
			</div>
			<div class="box">
				<button @click="changeUserPassword">修改新密码</button>
			</div>
		</div>
	</div>
</template>

<script>
	
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
		methods: {
			checkUser(){
				this.axios.post('/api/users/findPassword', {username: this.username, userMail: this.userMail, userPhone: thisPhone}).then((res)=>{
					if(res.data.status == 1){
						alert(res.data.message);
					}else{
						alert(res.data.message);
						this.showRePassword = true;
						this.showUserInfo = false;
					}
				})
			}
		}
	}
</script>
<style lang='css' scoped>
	 .box{
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    padding-top: 10px;
	  }
</style>