const cloud=require('wx-server-sdk')
cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})
const db=cloud.database()
const _=db.command
const $=db.command.aggregate
exports.main=async(event,context)=>{
  const data=(await db.collection('post').aggregate()
  .lookup({
    from:'collect',
    localField:'collect',
    foreignField:'_id',
    as:'category',
  })
  .limit(50)//数量取决于功能
  .end()).list
  return data
}