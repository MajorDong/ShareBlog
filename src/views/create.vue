<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限17个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows=3 v-model="description"></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows=15 v-model="content"></el-input>
    <p class="msg">限30个字</p>
    <div>
      <el-switch
      v-model="atIndex"
      active-text="首页展示"
      inactive-text="自己可见">
      </el-switch>  
    </div>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script>
import blog from '../api/blog'
export default {
  data(){
    return{
      atIndex:false,
      title: '',
      description: '',
      content: '',
    }
  },
  methods: {
    onCreate(){
      blog.createBlog({title: this.title, description: this.description, content: this.content, atIndex: this.atIndex})
        .then((res) => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}`})
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  #create {
  padding-bottom: 30px;
  > .el-button{
      font-size: 15px;
        border-radius: 0px;
        border: 2px solid #415268;
        color: #415268;
        background: #ffffff;
        padding: 7px 22px;
        margin: 20px 0;
        &:hover {
          cursor: pointer;
          transition: all 0.3s;
          color: #61baf1;
          border-color: #61baf1;
        }
  }

  h1 {
    text-align: center;
    padding-top: 20px;
  }

  .msg {
    text-align: right;
    font-size: 12px;
    color: #61baf1;
  }
}
</style>