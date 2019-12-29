<template>
  <div>
    <footer class="footer">
        <span>Copyright © 2019 Jerry Shen.该网站开源</span>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .footer{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #61baf1;
    color:#0a1d30;
    > span {
      font: 14px/1.6 Arial, "Microsoft YaHei", "黑体", "宋体", sans-serif;
      font-size: 17px;
      padding: 5px;
    }
  }
</style>