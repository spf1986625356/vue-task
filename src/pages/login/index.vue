<template>
  <div>
    <form id="form">
      <div class="content">
        <p class="header"><span style="font-weight:500;font-size: 22px;">登录</span></p>
        <input type="text" v-model="user.number" placeholder="请输入您的用户名"/>
        <input type="password" v-model="user.password" placeholder="请输入您的密码"/>
        <div id="btn">
          <button type="button" class="login-btn" @click="submit">登录</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data: function () {
      return {
        user: {
          number: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      submit () {
        this.login(this.user).then(function (res) {})
        this.$http.post('http://101.132.185.161:8085/api/index/login', this.user).then(res => {
          // console.log(res)
          if (res.body.status === 1) {
            this.$router.push('/index/task/todaytask')
          } else {
            this.$message('用户名或密码错误！')
          }
        }, res => {
          console.log('error')
        })
      }
    }
  }
</script>
<style scoped>
  #form{
    width:20%;
    margin:0 auto;
    margin-top: 200px;
  }
  input{
    width:80%;
    margin:10px;
    height:30px;
    padding:5px;
    font-size: 14px;
  }
  .header{
    text-align: center;
  }
  .login-btn{
    background-color: #000;
    color:#fff;
    width: 70px;
    height: 30px;
    margin:20px auto;
    font-size: 16px;
  }
</style>
