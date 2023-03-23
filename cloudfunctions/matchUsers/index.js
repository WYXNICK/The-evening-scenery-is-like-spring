// 云函数 matchUsers
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const userCollection = db.collection("user")

exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()
  console.log(OPENID)
  // 查询当前用户的信息
  const currentUser = await userCollection.where({
    _openid: OPENID
  }).get()
  const { region, age, hobbies, health, gender } = currentUser.data[0]

  // 计算匹配度并按照匹配度降序排序
  const similarUsers = await userCollection.where({
    region,
    age: db.command.gte(age - 3).and(db.command.lte(age + 3)),
    hobbies: db.command.in(hobbies),
    health: db.command.gte(health - 2).and(db.command.lte(health + 2)),
    gender: gender === '男' ? '女' : '男'
  }).get()
  .then(res => {
    // 计算匹配度
    res.data.forEach(user => {
      let matchScore = 0
      if (user.region === region) matchScore += 1
      if (Math.abs(user.age - age) <= 3) matchScore += 2
      user.hobbies.forEach(hobby => {
        if (hobbies.includes(hobby)) matchScore += 3
      })
      if (Math.abs(user.health - health) <= 2) matchScore += 4
      user.matchScore = matchScore
    })
    // 按匹配度降序排序并返回结果
    return res.data.sort((a, b) => b.matchScore - a.matchScore)
  })
  return similarUsers


}
