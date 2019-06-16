import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/lazy', function () {
  const lazyLoads = []
  for (let i = 0; i < 10; i++) {
    const lazyLoad = {
      status: 0,
      message: {
          id: i,
          title: Mock.mock('@csentence'),
          zhaiyao: Mock.mock('@csentence'),
          img: Random.image('200x100')
      }
    }
    lazyLoads.push(lazyLoad)
  }
  return lazyLoads
})
