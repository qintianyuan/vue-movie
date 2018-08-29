<template>
  <div>
    <label for="">评论</label>
    <hr/>
    <ul>
      <li v-for="item in items">
        {{item.username}}评论：{{item.context}}
      </li>
    </ul>
    <div style="padding: 5px">
      <textarea v-model="context" style="width: 80%; height: 50px;" placeholder="内容"></textarea>
    </div>
    <div style="padding-top: 10px">
      <button v-on:click="send_comment">评论</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: ['movie_id'],
  data () {
    return {
      items: [],
      context: ''
    }
  },
  created(){
    this.axios.post('/api/movie/comment',{id: this.movie_id}).then((res)=>{
      if(res.data.status == 0){
        this.items = res.data.data;
      }else{
        console.log("获得失败");
      }
    })
  },
  methods: {
    send_comment(){
      let send_data;
      if(typeof(localStorage.username)!="undefined"){
        send_data = {
          movie_id: this.movie_id,
          context: this.context,
          username: localStorage.username
        }
      }else{
        send_data = {
          movie_id: this.movie_id,
          context: this.context
        }
      }
      this.axios.post('/api/users/postComment',send_data).then((res)=>{
        alert(res.data.message);
      });
      this.context = "";
    }
  }
}
</script>
<style lang='css' scoped>
  .movieList{
    padding: 5px;
    border-bottom: 1px dashed #ababab;
  }
</style>


