<template>
  <div class="headerPic">
    <p class="imgTitle">{{recommendTitle}}</p>
    <a :href=recommendSrc>
      <img :src="'src/'+recommendImg" alt="" class="headerImg">
    </a>
  </div>
</template>

<script>
export default {
  name: 'indexheaderpic',
  props: ['recommendSrc','recommendImg','recommendTitle'],
  data () {
    return {
    }
  }
  
}
</script>
<style lang='css' scoped>
  .headerPic{
    width: 15%;
  background-color: antiquewhite;
}
  .headerImg{
    width: 100%;
  }
  .imgTitle{
    z-index: 2;
    position: absolute;
    color:#fff;
    font-size:20px;
  }
</style>


