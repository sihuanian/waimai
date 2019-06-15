<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="user in users" :key="user.id">
        <a :href="user.html_url"><img :src="user.avatarUrl"></a>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist"><img src="../../assets/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu2.png">
        <div class="mui-media-body">图片分享</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu3.png">
        <div class="mui-media-body">商品购买</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu4.png">
        <div class="mui-media-body">留言反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu5.png">
        <div class="mui-media-body">视频专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu6.png">
        <div class="mui-media-body">联系我们</div>
      </a></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Home',
    data: function () {
      return {
        users: null
      }
    },

    created () {
      this.getLunbotu()
    },

    methods: {
      getLunbotu () {
        const url = 'https://api.github.com/search/users?q=sihuanian'
        axios.get(url).then(response => {
            this.users = response.data.items.map(item => ({
              id: item.id,
              avatarUrl: item.avatar_url,
              html_url: item.html_url,
              login: item.login
            }))
          }
        )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-swipe
    height 200px

    .mint-swipe-item
      &:nth-child(1)
        background-color #f00

      &:nth-child(2)
        background-color #0f0

      &:nth-child(3)
        background-color #00f

      img
        width 100%
        height 100%

  .mui-grid-view.mui-grid-9
    background-color #fff
    border none

    img
      width: 60px
      height: 60px

  .mui-grid-view.mui-grid-9 .mui-table-view-cell
    border none

  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body
    font-size 13px
</style>
