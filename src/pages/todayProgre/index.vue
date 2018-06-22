<template>
  <div>
    <div id="progre">
      <div class="header">
        今日任务
      </div>
      <div class="content">
        <svg id="svgForStroke" xmlns="http://www.w3.org/2000/svg">
          <circle class="one" cx="50%" cy="50%" r="45%" stroke-width="10%" stroke="#ddd"></circle>
          <circle class="two" cx="50%" cy="50%" r="45%" stroke-width="10%" stroke-dasharray="942.4777px 942.4777px" :stroke-dashoffset="942.4777-709*num+'px'"></circle>
        </svg>
        <span v-if="num<0.5">加把劲哦</span>
        <span v-if="num<1&&num>=0.5">路程过半，继续加油！</span>
        <span v-if="num==1">完美</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        num: 0,
        param: {
          id: this.$store.state.login.userInfo.id
        }
      }
    },
    created () {
      this.getdata()
    },
    methods: {
      getdata () {
        this.$http.post('http://101.132.185.161:8080/myproject/task/queryCompletion', this.param).then(res => {
          // console.log(res)
          this.num = res.data
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
  .content{
    position: relative;
  }
  #svgForStroke {
    position: absolute;
    top: 50px;
    left: 320px;
    /*width: 9.13rem;*/
    /*height: 9.13rem;*/
    width:250px;
    height:250px;
    stroke-linecap:round;
    fill: none;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .content span{
    position: absolute;
    top:150px;
    display: block;
    width:120px;
    color:#f9a32d;
    font-size:22px;
    text-align:center;
    left:386px;
  }
  .one{
    stroke:#f8f8f8;
  }
  .two{
    stroke: #f9a32d;
  }
</style>
