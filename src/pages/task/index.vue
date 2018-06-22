<template>
  <div class="user">
    <div class="tableft">
      <Aside></Aside>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Aside from '../layout/aside.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      Aside
    }
  }
</script>
<style scoped>
  .tableft{
    display: flex;
  }
</style>
