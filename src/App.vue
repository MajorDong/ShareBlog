<template>
  <div id="app">
    <div id="header">
      <bheader></bheader>
    </div>
    <main id="main">
      <router-view/>
    </main>
    <div id="footer">
      <bfooter></bfooter>
    </div>
  </div>
</template>

<script>
import Bheader from './components/bheader'
import Bfooter from './components/bfooter'

export default {
  components: {
    'bheader': Bheader,
    'bfooter': Bfooter
  },
}
</script>

<style lang="scss">
 *{
   padding: 0;
   margin: 0;
 }
 body {
   font: 14px/1.6 Arial,"Microsoft YaHei","黑体","宋体",sans-serif;
 }
 html, body, #app {
   height: 100%;
 }
 #app {
   display:grid;
   grid-template-rows: auto 1fr auto;
   grid-template-columns: 12% auto 12%;
   grid-template-areas: "header header header"
                        ".      main   .     "
                        "footer footer footer";
   >#header{
     grid-area: header;
   }
   >#main{
     grid-area: main;
   }
   >#footer {
     grid-area: footer;
   }
 }
</style>
