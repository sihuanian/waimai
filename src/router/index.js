import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/tabbar/Home'
import Vip from '../pages/tabbar/Vip'
import Shopping from '../pages/tabbar/Shopping'
import Search from '../pages/tabbar/Search'
import NewsList from '../pages/news/NewsList'
import NewsInfo from '../pages/news/NewsInfo'
import PhotoList from '../pages/sharephoto/PhotoList'
import PhotosInfo from '../pages/sharephoto/PhotosInfo'
import GoodsList from '../pages/goods/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/vip', component: Vip},
    {path: '/shopping', component: Shopping},
    {path: '/search', component: Search},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo},
    {path: '/home/photolist', component: PhotoList},
    {path: '/home/photoinfo', component: PhotosInfo},
    {path: '/home/goodslist', component: GoodsList}
  ],
  linkActiveClass: 'mui-active' // 覆盖高亮的类，默认的是 router-link-active
})
