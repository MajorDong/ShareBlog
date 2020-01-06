<template>
  <div id="user">
    <section class="userInfo">
      <img :src="user.avatar" :alt="user.username" class="avatar"/>
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
          <div class="date">
            <span class="day">{{splitDate(blog.createdAt).date}}</span>
            <span class="month">{{splitDate(blog.createdAt).month}}月</span>
            <span class="year">{{splitDate(blog.createdAt).year}}</span>
          </div>
          <h3>{{blog.title}}</h3>
          <p>{{blog.descript}}</p>
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
  data() {
    return {
      userId: '',
      blogs: [],
      user: {},
      page: 1,
      total: 0
    };
  },
  created() {
    this.userId = this.$route.params.userId;
    this.page = this.$route.query.page || 1
    blog.getBlogsByUserId(this.userId, { page: this.page }).then(res => {
      this.user = res.data[0].user
      this.page = res.page;
      this.total = res.total;
      this.blogs = res.data;
    });
  },
  methods:{
    splitDate(dateStr){
      let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
      return{
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },
    onPageChange(newPage){
      blog.getBlogsByUserId(this.userId, { page: newPage }).then(res => {
      this.blogs = res.data;
      this.total = res.total;
      this.page = res.page
      this.$router.push({path: `/user/${this.userId}`, query: {page: newPage }})
    });
    }
  }
};
</script>

<style lang="scss" scoped>
#user {
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .userInfo {
    display: grid;
    grid: auto auto / 80px 1fr;
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;

    img {
      grid-column: 1;
      grid-row: 1 / span 2;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    h3 {
      grid-column: 2;
      grid-row: 1;
      margin-top: 10px;
    }
  }

  .item {
    display: grid;
    grid: auto auto auto / 80px 1fr;
    margin: 20px 0;
    text-decoration: none;
    color: #333;
    .date {
      grid-column: 1;
      grid-row: 1 / span 3;
      justify-self: center;
      text-align: center;

      span {
        display: block;
        color: gray;
      }

      .day {
        font-size: 40px;
      }
    }

    h3 {
      grid-column: 2;
      grid-row: 1;
      margin-top: 13px;
    }

    p {
      grid-column: 2;
      grid-row: 2;
      margin-top: 10px;
    }
  }
}
</style>