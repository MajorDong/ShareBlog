<template>
  <div id="login">
    <div class="loginBox">
      <h2>注册</h2>
      <div class="inputBox">
        <input v-model="username" placeholder="用户名" id="username" />
      </div>
      <div class="inputBox">
        <input v-model="password" type="password" placeholder="密码" @keydown.enter="onRegister" />
      </div>
      <el-button size="medium" @click="onRegister">注册</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    onRegister() {
      this.register({ username: this.username, password: this.password }).then(
        () => {
          this.$router.push({ path: "/" });
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  display: flex;
  justify-content: center;
  .el-button {
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
      color: #4e9d37;
      border-color: #4e9d37;
    }
  }
  .loginBox {
    margin-top: 70px;
    width: 370px;
    background: #ffffff;
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);
    border: 2px solid #415268;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > .notice {
      color: #415268;
      a {
        text-decoration: none;
        color: #61baf1;
      }
    }
    > h2 {
      align-self: center;
      padding: 20px 0 5px 0;
      color: #0f1d2e;
      font-size: 27px;
    }
    > .inputBox {
      > input {
        outline: none;
        border: none;
        border: 2px solid #415268;
        margin: 10px 0;
        font-size: 14px;
        padding: 9px;
        width: 200px;
        &:focus {
          border: 2px solid #61baf1;
          width: 230px;
          transition: all 0.4s;
        }
      }
    }
  }
}
</style>
