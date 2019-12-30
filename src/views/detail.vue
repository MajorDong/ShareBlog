<template>
  <div id="detail">
    <section class="userInfo">
      <figure class="avatar">
        <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt class="avatar" />
      </figure>      
      <h3>前端异步大揭秘</h3>
      <p>
        <router-link to="/user">小沈</router-link> 发布于3天前
      </p>
    </section>
    <section class="article">
      123
    </section>
  </div>
</template>

<script>
export default {};
</script>
 
<style lang="scss" scoped>
  @import url('../assets/article.scss');

  .userInfo{
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 80px 1fr;
    margin-top: 50px;
    padding-bottom: 27px;
    border-bottom: 1px solid #ddd;
    >.avatar {
      grid-row: 1 / 3;
      grid-column: 1 / 2;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      } 
    }
    h3 {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      margin: 5px 0;
    }
    p {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      font-size: 13px;
      color: gray;
      a {
      text-decoration: none;
      color: #77b8ec;
      cursor: pointer;
    }
    }
    
  }
  .article{
    padding: 23px 0;
  }
</style>