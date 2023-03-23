// pages/home/request/story/sotry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    body:"",
    image:"",
    share_url:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    let stories_id=options.id
    let that=this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/'+stories_id,//知乎日报最新话题
      header:{
        'content-type':'application/json'//默认值
      },
      success(res){
       let title=res.data.title
       let body=res.data.body
       let image=res.data.image
       let share_url=res.data.share_url
       that.setData({
         title,body,image,share_url
       })
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