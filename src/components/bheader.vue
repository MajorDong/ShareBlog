<template>
  <div class="bheader">
    <div class="header1" v-if="!isIndex">
      <div class="banner">
        <div class="logo">
          <span>BlogTalk</span>
        </div>
        <div class="sloganWrapper">
          <h1>We think through blogs.</h1>
          <div class="line"></div>
          <div class="title">用博客交流思想 LET'S SHARE</div>
          <div>
            <el-button>立即登录</el-button>
            <el-button>注册账号</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="header2" v-else>
      <h1>BlOGTALK</h1>
      <i class="edit el-icon-edit"></i>
      <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "bheader",
  data(){
    return{
      isIndex:false,
    }
  },
  watch:{
    
  }
};
</script>

<style lang="scss" scoped>
.bheader {
  > .header2 {
    display: flex;
    align-items: center;
    background: #0a1d30;
    > h1 {
      flex-grow: 1;
      padding: 7px 7px;
      color: #ffffff;
    }
    > .edit {
      color: #fff;
      font-size: 30px;
    }
    > img {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-left: 15px;
      margin-right: 7px;
    }
  }
  .header1 > .banner {
    font: 14px/1.6 Arial, "Microsoft YaHei", "黑体", "宋体", sans-serif;
    height: 520px;
    width: 100%;
    background-image: url(../assets/img/bheader.jpg);
    background-position: center center;
    background-size: cover;
    position: relative;
    > .logo {
      text-decoration: none;
      font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial, cursive;
      font-size: 20px;
      font-weight: bold;
      position: absolute;
      transform: translateY(-50%);
      color: #fff;
      top: 50%;
      left: 0;
      width: 150px;
      height: 150px;
      background-color: #0a1d30;
      z-index: 30;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > .sloganWrapper {
      position: absolute;
      top: 30%;
      left: 25%;
      color: #ffffff;
      font-family: "Libre Baskerville", serif;

      > h1 {
        font-size: 60px;
        ont-family: "Libre Baskerville", serif;
      }
      > .line {
        width: 64px;
        height: 0;
        border-top: 3px solid;
        border-color: #61baf1;
        margin-top: 7px;
        margin-bottom: 20px;
      }
      > .title {
        font: 14px/1.6 Arial, "Microsoft YaHei", "黑体", "宋体", sans-serif;
        font-size: 17px;
        margin-bottom: 20px;
      }
      .el-button {
        font-size: 15px;
        border-radius: 0px;
        border: 2px solid #ffffff;
        color: #ffffff;
        background: #0a1d30;
        padding: 7px 22px;
        margin-right: 13px;
        &:hover {
          cursor: pointer;
          transition: all 0.3s;
          color: #35bdf6;
          border-color: #61baf1;
          box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>