<template>
 <div id="files">
   <div class="header">
     <el-upload
       class="upload-demo"
       action="http://101.132.185.161:8085/api/upload/file"
       :data="params"
       accept=".doc,.docx,.ppt,.pptx,.xls,.xlsx,.pdf"
       :on-success="handlefile"
       :on-preview="handlePreview"
       :on-remove="handleRemove"
       :before-remove="beforeRemove"
       multiple
       :limit="3"
       :file-list="fileList">
       <el-button size="middle" type="primary">点击上传</el-button>
       <div style="margin-top:20px;" slot="tip" class="el-upload__tip">只能上传.doc,.docx,.ppt,.pptx,.xls,.xlsx,.pdf文件，且不超过500kb</div>
     </el-upload>
   </div>
   <div class="content">
     <div class="file-content" v-for="item in files">
       <a class="file" :href="item.url" javascript=":;">{{item.title}}</a>
     </div>
   </div>
 </div>
</template>
<script>
 export default{
   data () {
     return {
       fileList: [],
       params: {
         id: this.$store.state.login.userInfo.id
       },
       files: ''
     }
   },
   created () {
     this.getdata()
   },
   methods: {
     getdata () {
       this.$http.post('http://101.132.185.161:8080/myproject/upload/findfile', this.params).then(res => {
         // console.log(res)
         this.files = res.body.content
       })
     },
     handlefile (res) {
       // console.log(res)
       if (res.status === 1) {
         this.$message('上传成功！')
         this.getdata()
       } else {
         this.message('上传失败！')
       }
     },
     handleRemove (file, fileList) {
       console.log(file, fileList)
     },
     handlePreview (file) {
       console.log(file)
     },
     handleExceed (files, fileList) {
       this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
     },
     beforeRemove (file, fileList) {
       return this.$confirm(`确定移除 $ { file.name } ？`)
     }
   }
 }
</script>
<style scoped>
 #files{
   background:#fff;
   width:1180px;
   margin:20px auto;
   min-height:500px;
 }
 .header{
   margin:20px;
   padding-bottom:20px;
   text-align:left;
   border-bottom: 1px solid #ddd;
 }
  .file-content{
    padding-left:20px;
    text-align:left;
    line-height:40px;
  }
  .file{
    display: block;
    text-decoration: underline;
  }
</style>
