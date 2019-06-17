<template>
  <div>
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl"
           class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cata"
             :key="item.id" @click="showPhotos">
            {{item.title}}
          </a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.message.id" to="/home/photoinfo" tag="li">
         <img v-lazy="item.message.img">
        <div class="info">
          <h1 class="info-title">{{ item.message.title }}</h1>
          <div class="info-body">{{ item.message.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import mui from '../../lib/js/mui.min'
  import axios from 'axios'
  import mockdata from '../../mock/photoCategroy'
  import lazy from '../../mock/lazyLoad'

  export default {
    data: function () {
      return {
        cata: [],
        list: []
      }
    },

    created () {
      this.getAllCategory()
      this.showPhotos()
    },

    mounted () {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      })
    },

    methods: {
      getAllCategory () {
        // 获取所有的图片分类
        axios.get('/photosList').then(result => {
          if (result.data.status === 0) {
            // 手动拼接出一个最完整的分类列表
            result.data.message.unshift({'id': 0, 'title': '全部'})
            this.cata = result.data.message
          }
        })
      },
      showPhotos () {
        axios.get('/lazy').then(result => {
            this.list = result.data
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    touch-action pan-y

  .mui-slider
    position: fixed
    top 40px
    background-color #fff

  .photo-list
    list-style none
    margin: 0
    padding: 10px
    padding-top 50px
    li
      background-color #ccc
      text-align center
      margin-bottom 10px
      box-shadow 0 0 9px #999
      position relative
      img
        width: 100%
        vertical-align: middle

      img[lazy="loading"]
        width 40px
        height: 300px;
        margin: auto

      .info
        color white
        width 100%
        text-align left
        position absolute
        bottom 0
        background-color rgba(0, 0, 0, 0.4)
        max-height 84px
        .info-title
          font-size 14px

        .info-body
          font-size 13px

</style>
