<template>
  <div class="footer">
    <p>Vue.js实例</p>
  </div>
</template>

<script>
export default {
  name: 'commonFooter',
  data () {
    return {
      
    }
  }
}
</script>
<style lang='css' scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    border-top: 2px solid #ccc;
    background-color: #000;
  }
  .footer p {
    font-size: 10px;
    color: #fff;
    text-align: center;
  }
</style>


