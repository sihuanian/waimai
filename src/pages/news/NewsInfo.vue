<template>
  <div>
    <h2>Mockjs模拟后台数据</h2>
    <ul>
      <li v-for="item in data" :key="item.message.id.id">
        <p>状态： {{item.status.status}}</p>
        <p>摘要： {{item.message.zhaiyao}}</p>
        <p>标题： {{item.message.title}}</p>
        <p>图片： <img :src="item.message.img"></p>
        <p>click： {{item.message.click.click}}</p>
        <p>id： {{item.message.id.id}}</p>
      </li>
    </ul>
    <Comment/>
  </div>
</template>

<script>
  import axios from 'axios'
  import mockdata from '../../mock/mock'
  import Comment from '../../subcomponents/comment'

  export default {
    name: 'NewsInfo',
    data: function () {
      return {
        data: null
      }
    },

    created () {
      axios.get('/news') // 发出ajax请求
        .then(res => {
          // console.log(res.data[0].message.title)
          this.data = res.data
        })
    },

    components: {
      Comment
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
