<template>
  <div class="movieList">
    <div>
      <router-link :to="{name: 'movieDetail', params: {id: id}}" class="goods-list-link">
      {{movieName}}{{movieTimeShow}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movieList',
  props: ['id','movieName','movieTime'],
  data () {
    return {
      movieTimeShow: ''
    }
  },
  created(){
    this.movieTimeShow = new Date(parseInt(this.movieTime)).toLocaleString().replace(/:\d{1,2}$/,'');
  }
}
</script>
<style lang='css' scoped>
  .movieList{
    padding: 5px;
    border-bottom: 1px dashed #ababab;
  }
</style>


