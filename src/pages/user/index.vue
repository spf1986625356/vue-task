<template>
  <div class="user">
    <div id="setting">
      <div class="header">个人设置</div>
      <div class="setting-content">
        <p><span>学号：{{user.number}}</span></p>
        <p><span>密码：*******</span><a @click="pwdalert = true">修改</a></p>
        <p><span>手机：</span><a @click="phonealert = true">绑定</a></p>
        <p><span>邮箱：</span><a @click="emailalert = true">绑定</a></p>
      </div>
    </div>
    <div class="alert" v-if="pwdalert">
      <div class="pwd_content">
        <div class="alert_header">
          <div class="alert_title">
            修改密码
          </div>
        </div>
        <div class="alert_content">
          <el-input type="password" v-on:blur="apCheck" v-model="opwd" placeholder="请输入原始密码"></el-input>
          <el-input type="password" v-on:blur="pwdCheck" v-model="npwd1" placeholder="请输入新密码"></el-input>
          <el-input type="password" v-on:blur="pwdAssure" v-model="npwd2" placeholder="请再次确认密码"></el-input>
        </div>
        <div class="alert_footer">
          <a class="alert_btn" margin-right="10px" @click="apUpdate">确定</a>
          <a class="alert_btn" margin-left="10px" @click="pwdalert = false;opwd='';npwd1='';npwd2=''">取消</a>
        </div>
      </div>
    </div>
    <div class="alert" v-if="phonealert">
      <div class="pwd_content">
        <div class="alert_header">
          <div class="alert_title">
            绑定手机
          </div>
        </div>
        <div class="alert_content">
          <el-input type="password" v-on:blur="apCheck" v-model="this.param.phone" placeholder="请输入手机号"></el-input>
          <el-input style="width:11.25rem; height:2.25rem;margin-right: 5px" type="password" v-on:blur="pwdCheck" v-model="npwd1" placeholder="请输入验证码"></el-input>
          <el-button @click="sendcode" type="info">发送验证码</el-button>
        </div>
        <div class="alert_footer">
          <a class="alert_btn" margin-right="10px" @click="apUpdate">确定</a>
          <a class="alert_btn" margin-left="10px" @click="phonealert = false;">取消</a>
        </div>
      </div>
    </div>
    <div class="alert" v-if="emailalert">
      <div class="pwd_content">
        <div class="alert_header">
          <div class="alert_title">
            绑定邮箱
          </div>
        </div>
        <div class="alert_content">
          <el-input type="password" v-on:blur="apCheck" v-model="opwd" placeholder="请输入邮箱地址"></el-input>
        </div>
        <div class="alert_footer">
          <a class="alert_btn" margin-right="10px" @click="apUpdate">确定</a>
          <a class="alert_btn" margin-left="10px" @click="emailalert = false;">取消</a>
        </div>
      </div>
    </div>
    <div id="phone-dia">

    </div>
    <div id="email-dia">

    </div>
    <div id="notice">
      <div class="header">消息提示</div>
      <div class="content">
        <p style="padding-top:15px;">
          <span>站内信</span>
          <el-switch
            v-model="stationLetter"
            active-color="#FD9827"
            inactive-color="#EAEAEA">
          </el-switch>
        </p>
        <p>
          <span>短信通知</span>
          <span class="notify-time">
            <span>过期前</span>
            <select name="notifyTime">
              <option v-for="option in options" :value="option">{{option}}</option>
            </select>
            <span>天通知对方</span>
          </span>
          <el-switch
            v-model="smsNotification"
            active-color="#FD9827"
            inactive-color="#EAEAEA">
          </el-switch>
        </p>
        <p>
          <span>邮件通知</span>
          <el-switch
            v-model="emailNotification"
            active-color="#FD9827"
            inactive-color="#EAEAEA">
          </el-switch>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        opwd: '',
        npwd1: '',
        npwd2: '',
        user: this.$store.state.login.userInfo,
        param: {
          id: this.$store.state.login.userInfo.id,
          phone: '',
          code: ''
        },
        pwdalert: false,
        phonealert: false,
        emailalert: false,
        stationLetter: true,
        smsNotification: true,
        emailNotification: true,
        options: [1, 2, 3, 4, 5, 6, 7]
      }
    },
    methods: {
      apCheck () {
        if (this.param.phone && !(/^1[34578]\d{9}$/.test(this.param.phone))) {
          this.$message('手机号格式错误，请重新输入！')
        }
      },
      sendcode () {
        if (this.apCheck(this.param.phone)) {
          this.$http.post('http://101.132.185.161:8080/myproject/user/generCode', {phone: this.param.phone}).then(res => {
            // console.log(res)
          }, res => {
            console.log('error')
          })
        }
      },
      pwdCheck () {},
      pwdAssure () {},
      apUpdate () {
        this.pwdalert = false
      }
    }
  }
</script>
<style scoped>
  .user{
    display:flex;
  }
  #setting{
    background: #fff;
    margin-top:20px;
    padding:20px 30px;
    width:520px;
    text-align: left;
  }
  .header{
    font-size: 20px;
    width:100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  #notice{
    background: #fff;
    margin-top:20px;
    margin-left:20px;
    padding:20px 30px;
    width:520px;
    text-align: left;
  }
  .setting-content{
    padding:0 5px;
  }
  .setting-content a{
    float:right;
    display: inline-block;
    padding-left: 20px;
    font-size:15px;
    color:#00aeef;
  }
  p{
    padding-top:5px;
  }
  .notify-time{
    padding-left:180px;
  }
  .el-switch {
    width:4.13rem;
    height:1.63rem;
    float: right;
  }
  .open,.close{
    color:#fff;
  }
  .open{
    position: absolute;
    padding-left:43rem;
  }
  .alert{
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom: 0;
    margin:0;
    background-color: rgba(0,0,0,0.1);
    z-index:100000;
  }
  .pwd_content{
    width:350px;
    margin:14.81rem auto 0;
    padding:1.25rem;
    border-radius:0.25rem;
    background: #fff;
  }
  .alert_content{
    width:100%;
    line-height:10px;
    text-align:center;
  }
  .el-input{
    width:300px;
    margin:20px 0 0;
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
  td{
    text-align:left;
  }
  td span{
    display: block;
    width:9rem;
    height:1.3rem;
    padding-right:1.25rem;
    padding-top:0.5rem;
    font-size:0.88rem;
    text-align:right;
    line-height:2.25rem;
  }
  input{
    width:25.01rem;
    height:2.13rem;
    margin-top:1.25rem;
    border-radius:0.25rem;
    border:0.06rem solid #DFE4ED;
  }
  .ads{
    width:1.13rem;
    height:1.13rem;
    text-align:left;
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
    cursor: pointer;
  }
</style>
