<template>
  <div id="header">
    <div class="content">
      <div class="logo"><img src="../../assets/logo.png" alt=""></div>
      <ul class="nav">
        <router-link :to="{name:'todayTask', params:{tabSelected:'todaytask'}}"><li>任务管理</li></router-link>
        <router-link :to="{name:'friend', params:{tabSelected:'friend'}}"><li>好友动态</li></router-link>
        <router-link :to="{name:'photo', params:{tabSelected:'photo'}}"><li>个人相册</li></router-link>
        <router-link :to="{name:'file', params:{tabSelected:'file'}}"><li>个人文件</li></router-link>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link" style="color:#f9a32d">
              个人设置<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><router-link :to="{name:'user', params:{tabSelected:'user'}}">详细信息</router-link></el-dropdown-item>
              <el-dropdown-item><span @click="logout">安全退出</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <!--<router-link :to="{name:'user', params:{tabSelected:'user'}}">-->
          <!--<li>个人设置</li>-->
        <!--</router-link>-->
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'

  export default {
    data: function () {
      return {}
    },
    methods: {
      logout () {
        console.log('hahah')
        this.tuichu()
        this.$router.push('/login')
      },
      ...mapMutations({
        tuichu: 'logout'
      })
    }
  }
</script>
<style scoped>
  #header{
    width:100%;
    height:88px;
    background-color: #fff;
  }
  .content{
    width:1180px;
    height:88px;
    margin:0 auto;
  }
  .logo{
    float: left;
    width:100px;
    margin-left:-10px;
    height:88px;
    line-height: 88px;
  }
  .logo img{
    margin-top: 8px;
    margin-left: 20px;
  }
  .nav{
    float: right;
    width:600px;
    height:88px;
  }
  .nav li{
    display: inline-block;
    width:100px;
    height:88px;
    line-height:88px;
    text-align:center;
    color:#f9a32d;
    font-weight:500;
    cursor: pointer;
  }
  .nav li:hover{
    background-color: #F16A1F;
    color:#fff;
  }
</style>
