<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/button">登录</router-link> |
      <router-link to="/register">注册</router-link> -->
    <!-- <img src="./assets/images/classify_header/fenlei.png" alt=""> -->
    
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  width 100%
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  position relative

#nav
  height 100%
  position relative
</style>
