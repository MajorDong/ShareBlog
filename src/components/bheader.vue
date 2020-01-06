<template>
  <div class="bheader">
    <div class="header1" v-if="!isLogin">
      <div class="banner">
        <router-link to="/">
          <div class="logo">
            <span>BlogTalk</span>
          </div>
        </router-link>
        <div class="sloganWrapper">
          <h1>We think through blogs.</h1>
          <div class="line"></div>
          <div class="title">用博客交流思想 LET'S SHARE</div>
          <div>
            <router-link to="/login">
              <el-button>立即登录</el-button>
            </router-link>
            <router-link to="/register">
              <el-button>注册账号</el-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="header2" v-else>
      <h1><router-link to="/">BlOGTALK</router-link></h1>
      

      <div>
        <router-link to="/create"><i class="edit el-icon-plus"></i></router-link>
      </div>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.name" />
        <ul>
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          <li>
            <a href="#" @click="onLogout">注销</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "bheader",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user", "isLogin"])
  },
  created() {
    this.checkLogin();
  },
  methods: {
    ...mapActions(["checkLogin", "logout"]),
    onLogout() {
      this.logout();
    }
  }
};
</script>

<style lang="scss" scoped>
.bheader {
  > .header2 {
    display: flex;
    align-items: center;
    background: #0a1d30;
    a {
      text-decoration: none;
      color: #ffffff;
    }
    > h1 {
      flex-grow: 1;
      padding: 7px 7px;
      color: #ffffff;
      > a{
        text-decoration: none;
        color: #ffffff;
      }
    }
    .edit {
      color: #fff;
      font-size: 30px;
      padding-right: 25px;
    }
    img {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
    }
    .user {
      position: relative;
      right: 10px;
      padding: 3px;
      ul {
        display: none;
        position: absolute;
        right: 0;
        list-style: none;
        border: 1px solid #eaeaea;
        margin: 0;
        padding: 0;
        background-color: #fff;

        a {
          text-decoration: none;
          color: #333;
          font-size: 12px;
          display: block;
          padding: 5px 10px;

          &:hover {
            background-color: #eaeaea;
            color: #61baf1;
          }
        }
      }

      &:hover ul {
        display: block;
      }
    }
  }
  .header1 {
    height: 400px;
    position: relative;
    > .banner {
      font: 14px/1.6 Arial, "Microsoft YaHei", "黑体", "宋体", sans-serif;
      height: 100%;
      width: 100%;
      background-image: url(../assets/img/bheader.jpg);
      background-position: center center;
      background-size: cover;

      .logo {
        text-decoration: none;
        font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial,
          cursive;
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
        top: 15%;
        left: 25%;
        color: #ffffff;
        font-family: "Libre Baskerville", serif;

        > h1 {
          font-size: 60px;
          font-family: "Libre Baskerville", serif;
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
}
</style>