<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows=3></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows=20></el-input>
    <p class="msg">限30个字</p>
    <el-button >确定</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #edit {
  padding-bottom: 30px;
  > .el-button{
      font-size: 15px;
        border-radius: 0px;
        border: 2px solid #415268;
        color: #415268;
        background: #ffffff;
        padding: 7px 22px;
        margin: 20px;
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