<template>
  <div>
  <div class="header" v-if="!isLogin">
    <Row>
      <i-col span="2" offset="22">
        <router-link to="/loginPage">
          <div class="header_menu"><Icon type="person"></Icon>登录</div>
        </router-link>
      </i-col>
    </Row>
  </div>
  <div class="header" v-if="isLogin">
    <Row>
      <i-col span="2" offset="22">
        <router-link :to="{path: '/userInfo', query: {id: id}}">
          <div class="header_menu">
            <Icon type="person" ></Icon><span>退出</span>{{username}}
          </div>
        </router-link>
        
      </i-col>
    </Row>
  </div>
  </div>
</template>

<script>
export default {
  name: 'usermessage',
  data () {
    return {
        isLogin: false,
        username: '',
        token: ''
    }
  },
  created(){
    //此时登陆成功
    this.token = localStorage.getItem('token');
    console.log(this.token);
    if(this.token){
      this.isLogin = true;
      this.username = localStorage.getItem('username');
      this.id = localStorage.getItem('_id');
      console.log(this.isLogin,this.username,this._id);
    }else{
      console.log('用户登录失败');
    }
  },
  methods: {
    unlogin(){
      if(this.token){
        console.log(111);
        localStorage.removeItem(this.token);
        localStorage.removeItem(this.username);
        localStorage.removeItem(this.id);
        this.isLogin = false;
        this.username = '';
      }
    }
  }
}
</script>
<style lang='css' scoped>
 .header{
  width: 100%;
  height: 30px;
  left: 0;
  top: 0;
  color: #000;
  line-height: 30px;
  background-color: #c3bbbb;
  cursor: pointer;
}
  .header_menu{
    padding-top: 6px;
    color:#fff;
    font-size:12px;
  }
</style>


