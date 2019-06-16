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
    
## PhotoList.vue    
使用tab-top-webview-main.html设置滑动的导航条
  1. 引入mui.js(出现严格模式的报错)
    + [使用babel-plugin-transform-remove-strict-mode](<https://github.com/genify/babel-plugin-transform-remove-strict-mode>) 
    + [引入mui.js报错](<https://blog.csdn.net/u012815877/article/details/81187826>)
  2. 页面下方的导航栏没有效果（App.vue 中的 `router-link` 身上的类名 `mui-tab-item` 存在兼容性问题）
    + 改变mui-tab-item的名字（如：mui-tab-item1），将与mui-tab-item相关属性copy到mui-tab-item1
  3. 在导航栏上显示static/photosCatagory.json中的数据
    + 创建mock/photoCategroy.js,导入mockjs和static/photoCatagory.json
    + Mock.mock(url,{static, messages})
    + 在PhotoList.vue中动态设置a标签的类名
    
 制作图片列表
  1. 图片列表使用mint-ui lazy load
    + lazy load需要全局引入mintui
  2. 渲染   
  3. 修改样式
  
  图片详情
  1. 创建photosInfo.vue
  2. 改造a标签，需要使用tag属性
