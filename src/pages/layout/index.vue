<template>
  <div>
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from './header.vue'
  import Footer from './footer.vue'
  export default{
    data: function () {
      return {
      }
    },
    components: {Header, Footer}
  }
</script>
<style scoped>
  .content{
    width:1180px;
    margin:0 auto;
    display: flex;
  }
</style>
