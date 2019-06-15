<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入你要评论的内容 （最多120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="comment-main" v-for="comment in comments" :key="comment.floor">
      <div class="comment-title">
        第{{comment.floor}}楼：用户：{{comment.username}} 发表时间：{{comment.date}}
      </div>
      <div class="comment-body">
        {{comment.detail}}
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import comment from '../mock/comment'
  import axios from 'axios'

  export default {
    data: function () {
      return {
        comments: null
      }
    },

    methods: {
      getComment () {
        axios.get('/comment').then(res => {
            this.comments = res.data
          }
        )
      },
      getMore () {
        this.getComment()
      }
    },

    created () {
      this.getComment()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .comment
    h3
      font-size 18px

    textarea
      margin 0

    .comment-main
      font-size 13px
      padding-top 5px

      .comment-title
        line-height 30px
        background-color #ccc

      .comment-body
        padding-top 5px
        line-height 35px
        text-indent 2em
</style>
