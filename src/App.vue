<template>
  <div class="app-container">
    <mt-header fixed title="Vue项目"></mt-header>
    <transition name="move">
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/shopping">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet">
.app-container
  padding-top 40px
  padding-bottom 50.4px

.move-enter-active
.move-leave-active
  transition all 0.5s ease

.move-leave-to
  transform translateX(-100%)
  opacity 0
  position absolute

.move-enter
  transform translateX(-100%)
  opacity 0

.mui-bar-tab .mui-tab-item1.mui-active
  color #007aff

.mui-bar-tab .mui-tab-item1
  display table-cell
  overflow hidden
  width 1%
  height 50px
  text-align center
  vertical-align middle
  white-space nowrap
  text-overflow ellipsis
  color #929292

.mui-bar-tab .mui-tab-item1 .mui-icon
  top 3px
  width 24px
  height 24px
  padding-top 0
  padding-bottom 0

.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label
  font-size 11px
  display block
  overflow hidden
  text-overflow ellipsis

</style>
