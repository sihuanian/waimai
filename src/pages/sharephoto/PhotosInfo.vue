<template>
  <div class="photoinfo-contain">
    <div class="photoinfo-head">
      <h3>{{photoinfo.title}}</h3>
      <span>发表时间： {{photoinfo.date}}</span>
      <span>点击： {{photoinfo.click}}</span>
    </div>

    <div>
      {{photoinfo.photoinfo}}
    </div>

    <Comment/>
  </div>
</template>

<script>
  import photoinfo from '../../mock/photoinfo'
  import Comment from '../../subcomponents/comment'
  import axios from 'axios'

  export default {
    name: 'photosInfo',

    data: function () {
      return {
        photoinfo: {}
      }
    },

    created () {
      axios.get('/photoinfo').then(result => {
        this.photoinfo = result.data
      })
    },

    components: {
      Comment
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .photoinfo-container
    padding 3px

    h3
      color #26a2ff
      font-size 15px
      text-align center
      margin 15px 0

    .subtitle
      display flex
      justify-content space-between
      font-size 13px

    .content
      font-size 13px
      line-height 30px

    .thumbs
      img
        margin 10px
        box-shadow 0 0 8px #999
</style>
