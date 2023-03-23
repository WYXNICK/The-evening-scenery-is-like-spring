// pages/content/content.js
const app=getApp()
const db=wx.cloud.database()
const _=db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
        console.log(options)
        this.getContent(options)
        this.updateViews(options)
  },
   
  getContent(options){
    const listData=app.globalData.listData
    console.log(listData)
    const data=listData.filter(list=>{
      if(list._id==options.id){
        return list
      }
    })
    console.log(data[0])
    this.setData({
      contentData:data[0]
    })
  },

  async updateViews(options){
    const id=parseInt(options.id,10)
    await db.collection('post').where({
      id:id
    })
    .update({
      data:{
        views:_.inc(1)
      }
    })
  },
  async addFavor(){
    const id=this.data.contentData.id
    await db.collection('post').where({//更新收藏字段
     id:id
    })
    .update({
      data:{
        favorites:_.inc(1)
      }
    })
    await db.collection('user').where({
      //更新用户收藏文章的id
      _openid:'{openid}'
    }).update({
      data:{
        favorites:_.push(id)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})