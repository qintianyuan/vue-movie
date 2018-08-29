<template>
  <div>
    <div class="box">
      <input type="text" v-model="toUserName" placeholder="发送用户名">
    </div>
    <div class="box">
      <input type="text" v-model="title" placeholder="发送标题">
    </div>
    <textarea v-model="contex" style="width: 80%; height: 50px; margin: 0 auto;" placeholder="内容"></textarea>
    <div class="box">
      <button @click="send_mail">发送站内信</button>
    </div>
  </div> 
</template>

<script>
export default {
  data () {
    return {
      toUserName: '',
      context:'',
      title:''
    }
  },
  methods: {
    send_mail(){
      let send_data = {
        token: localStorage.token,
        user_id:localStorage._id,
        toUserName:this.toUserName,
        title:this.title,
        context:this.context
      }
      this.axios.post('/api/users/sendEmail',send_data).then((res)=>{
        if(res.data.status == 1){
          alert(res.data.message)
        }else{
          alert('发送成功');
        }
      })
    }
  }
  
}
</script>



