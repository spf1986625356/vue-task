<template>
  <div id="friend">
    <div class="header">
      <div class="kw">
        <el-input placeholder="请输入好友学号" v-model="id"></el-input>
      </div>
      <el-button type="primary" @click="search" icon="el-icon-search">搜索</el-button>
      <div class="clear"></div>
    </div>
    <div class="content">
      <div style="width:200px;">
        <div v-for="(o, index) in friendItem" :key="index">
          <el-card :body-style="{ padding: '10px', }">
            <img width="20%" src="../../assets/avatar.jpg" class="image">
            <div style="padding: 2px;">
              <span>学号：{{o.user_id}} </span>
              <div class="bottom clearfix">
                <el-progress :percentage="o.today"></el-progress>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div style="width:890px; margin-left:50px">
        <div style="height:200px;">
          <textarea v-model="news.content"></textarea>
          <el-button style="float:right" size="small" type="primary" @click="addnews">发布动态</el-button>
        </div>
        <div v-for="item in messageItem" class="message">
          <p>{{item.content}}
          </p>
          <!--<p>{{item.content}}</p>-->
          <div class="name">{{item.userid}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        friendItem: '',
        messageItem: '',
        id: '',
        news: {
          userid: this.$store.state.login.userInfo.id,
          content: ''
        }
      }
    },
    created () {
      this.getdata()
      this.getmessage()
    },
    methods: {
      getdata () {
        this.$http.get('http://101.132.185.161:8080/myproject/index/findAllUser').then(res => {
          // console.log(res.data)
          this.friendItem = res.data.content
          // console.log(this.friendItem)
        }, res => {
          console.log('error')
        })
      },
      addnews () {
        this.$http.post('http://101.132.185.161:8080/myproject/wall/add', this.news).then(res => {
          // console.log(res)
          if (res.body.status === 1) {
            this.$message('添加成功！')
            this.getmessage()
          } else {
            this.$message('添加失败！')
          }
        })
      },
      getmessage () {
        this.$http.get('http://101.132.185.161:8080/myproject/wall/findAllWall').then(res => {
          // console.log(res)
          this.messageItem = res.body
        }, res => {
          console.log('error')
        })
      },
      search () {
        if (this.id) {
          this.$http.post('http://101.132.185.161:8080/myproject/findUserInfo', {id: this.id}).then(res => {
          })
        }
      }
    }

  }
</script>
<style scoped>
#friend{
  background:#fff;
  width:1180px;
  margin:20px auto;
  min-height:500px;
}
.header{
  margin:10px;
  padding-bottom:20px;
  border-bottom: 1px solid #ddd;
}
.content{
  padding:10px 20px;
  display: flex;
}
.clear{
  clear:both;
}
  .kw{
    margin:10px;
    width:200px;
    float:left;
  }
  .el-button{
    float:left;
    margin-top:10px;
  }
  .message{
    width:100%;
    height:auto;
    min-height: 150px;
    border:1px solid #fafafa;
    background:#FFFAF0;
    position: relative;
    margin-bottom: 20px;
  }
  .message p{
    text-align: left;
    padding-left:20px;
  }
  .name{
    position:absolute;
    right:0;
    bottom:20px;
    font-size:25px;
    font-family: "Big Caslon";
    text-align:right;
    padding-right:20px;
  }
  textarea{
    width:890px;
    height:120px;
    resize:none;
  }
</style>
