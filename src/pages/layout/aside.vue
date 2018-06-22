<template>
  <div>
    <div id="tab-left">
      <div v-if="tabSelected =='todaytask'" class="tabs" >
        <div class="tab">
            <router-link :to="{name:'todayTask'}"><span>今日任务</span></router-link>
        </div>
        <div class="tab">
            <router-link :to="{name:'todayProgre'}"><span>任务进度</span></router-link>
        </div>
        <div class="tab">
            <router-link :to="{name:'weekCondition'}"><span>完成率</span></router-link>
        </div>
      </div>
      <div v-if="tabSelected =='other'" class="tabs" >
        <div class="tab">
          <span>今日任务</span>
        </div>
        <div class="tab">
          <span>任务进度</span>
        </div>
        <div class="tab">
          <span>完成率</span>
        </div>
      </div>
      <div v-if="tabSelected =='user'" class="tabs" >
        <div class="tab">
          <span>个人设置</span>
        </div>
        <div class="tab">
          <span>消息提示</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        tabSelected: 'todaytask'
      }
    },
    created () {
      this.tabSelected = this.$route.params.tabSelected ? this.$route.params.tabSelected : 'todaytask'
      // console.log(this.tabSelected)
    }
  }
</script>
<style scoped>
  #tab-left{
    width:270px;
  }
  .tabs{
    width:250px;
    border-top:2px solid #F16A1F;
    padding:20px 0;
    background-color: #fff;
  }
  .tab{
    width:250px;
    color:#f9a32d;
    display: block;
    height:60px;
    line-height: 60px;
  }
  .tab a{
    width:250px;
    color:#f9a32d;
    display: block;
    height:60px;
    line-height: 60px;
  }
  .router-link-active{
    background:#f9a32d;
    color:#fff !important;
  }
</style>
