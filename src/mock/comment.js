import Mock from 'mockjs'

const Random = Mock.Random

const comments = []
Mock.mock('/comment', function () {
  for (let i = 1; i < 11; i++) {
    const comment = {
      pageIndex: i,
      floor: i,
      username: Random.cname(),
      date: Random.date() + '  ' + Random.time(),
      detail: Random.cparagraph(1, 3)
    }
    comments.push(comment)
  }
  return comments
})
