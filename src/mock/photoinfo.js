import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/photoinfo', function () {
    const arr = {
        id: 1,
        title: Mock.mock('@ctitle'),
        date: Mock.mock('@date') + '  ' + Mock.mock('@time'),
        click: Mock.mock({'click|0-20': 10}),
        photoinfo: Mock.mock('@cparagraph')
    }
  return arr
})
