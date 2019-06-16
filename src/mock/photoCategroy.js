import Mock from 'mockjs'
import data from '../../static/json/photosCatagory'

Mock.mock('/photosList', {status: 0, message: data.messages}) // 第二个参数要与mock中的数据结构一样
