<template>
  <div class="message">
    <p>{{title}}</p>
    <p>{{fromUser}}</p>
    <p>{{context}}</p>
  </div> 
</template>

<script>
export default {
  props:['title','fromUser','context'],
  data () {
    return {
      
    }
  }
  
}
</script>
<style lang='css' scoped>
  .message{
    border: 1px solid;
  }
</style>



