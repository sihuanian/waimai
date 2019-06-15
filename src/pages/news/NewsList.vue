<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="user in users" :key="user.id">
      <router-link :to="`/home/newsinfo/`+user.id">
        <img class="mui-media-object mui-pull-left"
             :src="user.avatarUrl">
        <div class="mui-media-body">
          {{user.login}}
          <p class='mui-ellipsis'>
            <span>ID: {{user.id}}</span>
            <span>Score: {{user.score}}</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'NewsList',
    data: function () {
      return {
        users: []
      }
    },
    created () {
      this.getLunbotu()
    },

    methods: {
      getLunbotu () {
        const url = 'https://api.github.com/search/users?q=kobe'
        axios.get(url).then(response => {
            this.users = response.data.items.map(item => ({
              id: item.id,
              avatarUrl: item.avatar_url,
              html_url: item.html_url,
              login: item.login,
              score: item.score
            }))
          }
        )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mui-ellipsis
    color lightblue
    display flex
    justify-content space-between
</style>
