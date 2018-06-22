<template>
    <div id="todaytask">
      <div class="header">
        <span class="addtask" @click="add">+</span>
      </div>
      <div class="body">
        <div class="task"  v-for="(item,index) in taskItem" v-bind:class="{ active: item.type==1 }">
          <div class="task-content">{{item.content}}</div>
          <span v-if="item.type==0" class="finish" @click="finish(item.id)"><i class="el-icon-check"></i></span>
          <span v-if="item.type==0" class="fail" @click="deletetask(item.id)"><i class="el-icon-close"></i></span>
        </div>
      </div>
      <div id="alert" v-show="show">
        <div class="add_content">
          <div class="alert_header">
            <div class="alert_title">
              新建任务
            </div>
          </div>
          <div class="alert_content">
            <textarea name="" id="" cols="30" rows="10" v-model="newtask.content"></textarea>
          </div>
          <div class="alert_footer">
            <a class="alert_btn" margin-right="10px" @click="assure">确定</a>
            <a class="alert_btn" margin-left="10px" @click="cancel">取消</a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data: function () {
      return {
        show: false,
        taskItem: [
        ],
        newtask: {
          userid: this.$store.state.login.userInfo.id,
          content: ''
        }
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$http.post('http://101.132.185.161:8080/myproject/task/queryTodayTask', { id: this.$store.state.login.userInfo.id }).then(res => {
          console.log(res)
          this.taskItem = res.data.content
          // console.log(this.taskItem)
        })
      },
      finish (index) {
        this.$http.post('http://101.132.185.161:8080/myproject/task/finishTodayTask', {userid: this.$store.state.login.userInfo.id, id: index}).then(res => {
          // console.log(res)
          this.getData()
        }, res => {
          console.log('error')
        })
      },
      deletetask (index) {
        this.$http.post('http://101.132.185.161:8080/myproject/task/deleteTodayTask', {id: index}).then(res => {
          // console.log(res)
          this.getData()
        }, res => {
          console.log('error')
        })
      },
      add () {
        this.show = true
      },
      assure () {
        this.$http.post('http://101.132.185.161:8080/myproject/task/addTodayTask', this.newtask).then(res => {
          console.log(res)
          if (res.body.status === 1) {
            this.$message('添加成功！')
            this.show = false
            this.getData()
          }
        }, res => {
          console.log('error')
        })
      },
      cancel () {
        this.show = false
      }
    }
  }
</script>
<style scoped>
  #todaytask{
    width:890px;
    margin-top:20px;
    padding:10px;
    background-color: #fff;
    min-height:500px;
  }
  .addtask{
    display: block;
    width: 50px;
    height:50px;
    color:#f9a32d;
    font-size:33px;
    font-weight: 500;
    cursor: pointer;
  }
  .task {
    width:100%;
    height:60px;
    line-height:60px;
    display: flex;
  }
  .task-content{
    text-align:left;
    padding-left:100px;
    line-height:60px;
    width:570px;
  }
  .active{
    background: #f5dab1;
  }
  #alert{
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom: 0;
    margin:0;
    background-color: rgba(0,0,0,0.3);
    z-index:100000;
  }
  .add_content{
    width:350px;
    height:300px;
    margin:8.81rem auto 0;
    padding:1.25rem;
    border-radius:0.25rem;
    background: #fff;
  }
  .finish{
    color:green !important;
    display: inline-block;
    height:60px;
    line-height:60px;
    width:100px;
  }
  .fail{
    color:red !important;
    display: inline-block;
    height:60px;
    line-height: 60px;
    width:100px;
  }
  .alert_content{
    width:100%;
    line-height:10px;
    text-align:center;
  }
  .alert_header{
    width:350px;
    border-bottom: 1px solid #DFE4ED;
  }
  .alert_title{
    padding-bottom: 1.25rem;
    display: inline-block;
    font-size: 1.25rem;
  }

  textarea{
    width:350px;
    resize:none;
    outline: none;
    margin-top: 20px;
    border:1px solid #ddd;
  }
  label{
    width:5.25rem;
    height:0.88rem;
    font-size:0.88rem;
    color:rgba(204,204,204,1);
  }
  .alert_footer{
    text-align:center;
  }
  .alert_btn{
    display: inline-block;
    margin:0;
    width:5rem;
    height:2.25rem;
    background:rgba(253,152,39,1);
    border-radius: 0.25rem ;
    font-size:0.88rem;
    color:#fff !important;
    text-align: center;
    line-height:2.25rem;
    margin:2rem auto 0;
  }
</style>
