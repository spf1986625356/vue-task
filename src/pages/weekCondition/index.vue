<template>
  <div id="progre">
    <div class="header">
      本周完成率
    </div>
    <div class="body">
      <div class="pro_content">
        <div class="week_name">Mon(星期一):</div>
        <div class="week_pro"><el-progress :percentage="condition.monday"></el-progress></div>
      </div>
      <div class="pro_content">
        <div class="week_name">Tue(星期二):</div>
        <div class="week_pro"><el-progress :percentage="condition.tuesday"></el-progress></div>
      </div>
      <div class="pro_content">
        <div class="week_name">Wen(星期三):</div>
        <div class="week_pro"><el-progress :percentage="condition.wednesday"></el-progress></div>
      </div>
      <div class="pro_content">
        <div class="week_name">Thur(星期四):</div>
        <div class="week_pro"><el-progress :percentage="condition.toursday"></el-progress></div>
      </div>
      <div class="pro_content">
        <div class="week_name">Fri(星期五):</div>
        <div class="week_pro"><el-progress :percentage="condition.friday"></el-progress></div>
      </div>
      <div class="pro_content">
        <div class="week_name">Sat(星期六):</div>
        <div class="week_pro"><el-progress :percentage="condition.saturday"></el-progress></div>
      </div>
      <div class="pro_content">
        <div class="week_name">Sun(星期日):</div>
        <div class="week_pro"><el-progress :percentage="condition.sonday"></el-progress></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        condition: ''
      }
    },
    created () {
      this.getdata()
    },
    methods: {
      getdata () {
        this.$http.post('http://101.132.185.161:8080/myproject/week/queryWeekCompletion', {userId: this.$store.state.login.userInfo.id}).then(res => {
          console.log(res.data)
          this.condition = res.data.content
        }, res => {
          console.log('error')
        })
      }
    }
  }
</script>
<style scoped>
  #progre{
    width:890px;
    margin-top:20px;
    padding:10px;
    background-color: #fff;
    min-height:500px;
  }
  .header{
    font-size: 20px;
    margin-top:20px;
  }
  .pro_content{
    width:890px;
    height:64px;
    line-height:50px
   }
  .week_name{
    width:100px !important;
    display: inline-block;
  }
  .week_pro{
    width:700px !important;
    display: inline-block
  }
</style>
