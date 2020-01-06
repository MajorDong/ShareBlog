<template>
  <div class="index">
    <section class="blog-posts">
      <router-link :to="`/detail/${blog.id}`" v-for="blog in blogs" :key="blog.id">
        <div class="item">
          <figure class="avatar">
            <img :src="blog.user.avatar" :alt="blog.user.username" />
            <figcaption>{{blog.user.username}}</figcaption>
          </figure>
          <h3>
            {{blog.title}}
            <span>{{blog.createdAt | formatDate}}</span>
          </h3>
          <p>{{blog.description}}</p>
        </div>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination @current-change="onPageChange" background layout="prev, pager, next" :total="total"></el-pagination>
    </section>
  </div>
</template>


<script>
import blog from "../api/blog";

export default {
  name: "index",
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1,

    };
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({page: this.page}).then(res => {
      this.blogs = res.data;
      this.total = res.total;
      this.page = res.page
    });
  },
  methods: {
    onPageChange(newPage){
      blog.getIndexBlogs({ page:newPage }).then(res => {
      this.blogs = res.data;
      this.total = res.total;
      this.page = res.page
      this.$router.push({path: '/', query: {page: newPage }})
    });
    }
  }
};
</script>

<style lang="scss" scoped>
.index {
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  .item {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 80px 1fr;
    margin: 30px 0;
    > .avatar {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      justify-self: center;
      text-align: center;
      margin-left: 0;
      margin-top: 5px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    h3 {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      span {
        color: gray;
        font-size: 12px;
        font-weight: normal;
        margin: 0 5px;
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