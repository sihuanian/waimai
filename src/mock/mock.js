import Mock from 'mockjs'
const Random = Mock.Random // 引用mockjs和mockjs中的Random

Mock.mock('/news', function () { // 拦截url为‘/news’的ajax请求，并向发出请求的主体返回模拟数据
  const datas = [] // 保存模拟数据的数组容器
  for (let i = 0; i < 10; i++) { // 生成十条数据
    const data =
      {
        status: Mock.mock({ // 调用方式注意，这是两个对象
          'status|0-1': 0
        }),
        message:
          {
            title: Mock.mock('@csentence'),
            zhaiyao: Mock.mock('@csentence'),
            img: Random.image('200x100'),
            date: Mock.mock('@date'),
            click: Mock.mock({'click|0-100': 0}), // 调用方式注意，这是两个对象
            id: Mock.mock({'id|0-999': 0}) // 调用方式注意，这是两个对象
          }
      }
    datas.push(data) // 将每条模拟据加入到模拟数据容器中
  }
  return datas // 返回这个模拟数据容器
})
