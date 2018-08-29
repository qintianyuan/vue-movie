<template>
	<div>
		<div class="box">
			<div style="width: 30%; padding-top: 10%">
				<label for="">LOGIN</label>
				<div>
					<i-input type="text" v-model="username" placeholder="用户名">
						<Icon type="ios-person-outline" slot="prepend"></Icon>
					</i-input>
				</div>
				<div class="box">
					<i-input type="text" v-model="password" placeholder="密码">
						<Icon type="ios-lock-outline" slot="prepend"></Icon>
					</i-input>
				</div>
			</div>
		</div>
		<div class="box">
			<i-button type="primary" @click="userLogin">登录</i-button>
			<i-button type="primary" style="margin-left: 10px" @click="userRegister">注册</i-button>
			<i-button type="primary" style="margin-left: 10px" @click="findBackPassword">忘记密码</i-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MovieDetail',
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			userLogin(){
				this.axios.post('/api/users/login',{username: this.username, password: this.password}).then((res)=>{
					if(res.data.status == 1){
						alert(res.data.message);
					}else{
						let save_token = {
							token: res.data.data.token,
							username: this.username
						}
						console.log(res.data.data);
						localStorage.setItem('token',res.data.data.token);
						localStorage.setItem('username',res.data.data.user[0].username);
						localStorage.setItem('_id',res.data.data.user[0]._id);
						this.$router.go(-1);
					}
				})
			},
			userRegister(){
				this.$router.push({path: 'registerPage'});
			},
			findBackPassword(){
				this.$router.push({path: 'findPasswordPage'});
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