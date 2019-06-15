<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入你要评论的内容 （最多120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="comment-main">
      <div class="comment-title">第0楼：匿名用户 发表时间：2019-06-15 18:20:30</div>
      <div class="comment-body">comment body</div>
      <div class="comment-title">第1楼：匿名用户 发表时间：2019-06-15 18:20:30</div>
      <div class="comment-body">comment body</div>
      <div class="comment-title">第2楼：匿名用户 发表时间：2019-06-15 18:20:30</div>
      <div class="comment-body">comment body</div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
  export default {

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
