<template>
  <div id="photo">
    <div class="header">
      <el-upload
        action="http://101.132.185.161:8085/api/upload/image"
        list-type="picture-card"
        :data="params"
        accept="image/jpeg,image/png"
        :on-success="handlephoto"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <!--<el-dialog :visible.sync="dialogVisible">-->
        <!--<img width="100%" :src="dialogImageUrl" alt="">-->
      <!--</el-dialog>-->
      <!--<el-button @click="upload" type="primary">上传图片</el-button>-->
    </div>
    <div class="content">
      <div class="img-content" v-for="item in photoItem">
        <img width="100px" :src="item.url" alt="">
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        params: {
          id: this.$store.state.login.userInfo.id
        },
        photoItem: ''
      }
    },
    created () {
      this.getdata()
    },
    methods: {
      handlephoto (res) {
        // console.log(res)
        if (res.status === 1) {
          this.dialogImageUrl = ''
          this.getdata()
        }
      },
      handleRemove (file, fileList) {
        // console.log(file, fileList)
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      getdata () {
        this.$http.post('http://101.132.185.161:8080/myproject/upload/findimage', this.params).then(res => {
          // console.log(res)
          this.photoItem = res.body.content
        })
      }
    }
  }
</script>
<style scoped>
#photo{
  background:#fff;
  width:1180px;
  margin:20px auto;
  min-height:500px;
}
.header{
  margin:20px;
  padding-bottom:20px;
  text-align:left;
  /*border-bottom: 1px solid #ddd;*/
}
.content{
  margin:0 20px;
}
  .img-content{
    width:160px;
    height:150px;
    margin-right:2px;
    margin-bottom:2px;
    overflow:hidden;
    text-align:center;
    float: left;
  }
  .img-content img{
    width:100%;
    height:100%;
  }
  .clear{
    clear: both;
    margin-bottom: 40px;
  }
</style>
