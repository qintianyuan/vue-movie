<template>
	<div>
		<div>
			<div class="box">
				<label for="">输入用户名：</label>
				<input v-model="username" placeholder="用户名">
			</div>
			<div class="box">
				<label for="">输入密码：</label>
				<input v-model="password" placeholder="密码">
			</div>
			<div class="box">
				<label for="">重复输入密码：</label>
				<input v-model="rePassword" placeholder="密码">
			</div>
			<div class="box">
				<label for="">输入邮箱：</label>
				<input v-model="userMail" placeholder="邮箱">
			</div>
			<div class="box">
				<label for="">输入手机：</label>
				<input v-model="userPhone" placeholder="手机">
			</div>
			<div class="box">
				<i-button type="primary" @click="userRegister">注册</i-button>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'register',
		data() {
			return {
				username: '',
				password: '',
				userMail: '',
				userPhone: '',
				rePassword: ''
			}
		},
		
		methods: {
			userRegister(){
				if(this.password != this.rePassword) {
					alert("两次密码不一致")
				}else{
					let sendDate = {
						username: this.username,
						password: this.password,
						userMail: this.userMail,
						userPhone: this.userPhone
					}
					this.axios.post('/api/users/register', sendDate).then((res)=>{
						if(res.data.status == 1){
							alert(res.data.message);
						}else{
							alert(res.data.message);
							this.$router.go(-1);
						}
					})
				}
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