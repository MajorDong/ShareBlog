<template>
  <div id="detail">
    <section class="userInfo">
      <figure class="avatar">
        <img :src="user.avatar" :alt="user.username" class="avatar" />
      </figure>      
      <h3>{{title}}</h3>
      <p>
        <router-link :to="`/user/${user.id}`">{{user.username}}</router-link> 发布于{{createdAt | formatDate}}
      </p>
    </section>
    <section class="article" v-html="markdown">
      
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import blog from '../api/blog'


export default {
  data(){
    return{
      blogId: '',
      title: '',
      rawContent: '',
      user: {},
      createdAt: '',
    }
  },
  computed:{
    markdown(){
      return marked(this.rawContent)
    }
  },
  created(){
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId})
     .then((res) => {
       this.title = res.data.title
       this.rawContent =res.data.content
       this.createdAt = res.data.createdAt
       this.user = res.data.user
     })
  }
};
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