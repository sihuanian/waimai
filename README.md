# waimai

## 上传代码
1. git add .
2. git commit -m "message"
3. git push
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 首页设计
1. 顶部使用了Mint-UI的Header组件

2. 底部使用了MUI的Tabbar.html
   + 使用icons-extra.html中的图标需要添加icons-extra.css，mui-icons-extra.ttf到项目中来，并在main.js中引入icons-extra.css
   + 创建.vue文件（Home.vue,Vip.vue,Shopping.vue,Search.vue）
   + 配置路由的router属性，path,component,默认显示path,redirect
   + 路由配置linkActiveClass属性  linkActiveClass: 'mui-active' // 覆盖高亮的类，默认的是 router-link-active
   + 改造a标签为<router-link>,href属性置换成to属性

3. 要在中间区域放置一个router-view匹配到的组件
    
    + 引入轮播图需要给mint-swipe设置height
     1. 使用axios向https://api.github.com/search/users?q={username} 请求数据,得到items中子项的id,avatarUrl
     2. 在<mt-swipe-item>中使用v-for遍历users,设置子元素img中src属性值为user.avatarUrl
     3. 图片与父容器的宽度不匹配，设置样式
    + 九宫格改成六宫格
     1. 使用MUI中的gird-default,去掉三个li,之后根据目标效果更改样式
        + 将li中的a标签改造成<router-link>,配置路由
          + 绘置newslist,使用mui中的media list
          + 使用axiox请求，修改显示的图片和文字
     2. 将显示图标字体的span标签替换成img标签，之后再改变img的宽高
    + 为router-view添加动画效果 
    
## NewsInfo.vue
    + 使用mockjs模拟后台数据

## subcomponents/comment.vue 
    + 绘制评论界面
    + 加载评论数据

