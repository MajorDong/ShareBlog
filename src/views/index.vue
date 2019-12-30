<template>
  <div class="index">
    <section class="blog-posts">
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>小沈</figcaption> 
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3> 
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>小沈</figcaption> 
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3> 
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
    </section>
  </div>
</template>


<script>
import request from '../helpers/request.js'
import auth from '../api/auth'
window.request = request
window.auth = auth

export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    onClick1() {
      this.$message.error("错了哦，这是一条错误消息");
    },
    alert() {
      this.$alert();
    }
  }
};
</script>

<style lang="scss" scoped>
  .index{
    .item{
      display: grid;
      grid-template-rows:auto auto;
      grid-template-columns: 80px 1fr;
      margin: 30px 0;
      >.avatar {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        justify-self: center;
        text-align: center;
        margin-left: 0;
        margin-top: 5px;
        img {
          width:60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      h3 {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        span{
          color: gray;
          font-size: 12px;
          font-weight: normal;
        }
      }
      p {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        margin-top: 3px;
      }  
    }
  }
</style>