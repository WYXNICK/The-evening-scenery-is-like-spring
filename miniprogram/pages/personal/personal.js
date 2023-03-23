// pages/personal/personal.js
// // pages/personal/personal.js
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad() {},

  // 获取用户信息
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {
        console.log(res.userInfo)
        app.globalData.nickname=res.userInfo.nickName
        app.globalData.userimg=res.userInfo.avatarUrl
        console.log(app.globalData.nickname)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        
      }
    })


  },

  // 用户选择头像
  onChooseAvatar(e) {
    const {
      avatarUrl
    } = e.detail
    console.log(avatarUrl);

    this.setData({
      ['userInfo.avatarUrl']: avatarUrl,
    })
    app.globalData.userimg = avatarUrl
  },

  // 用户修改昵称
  changeNickName(e) {
    let name = e.detail.value;
    if (name.length === 0) return;
    this.setData({
      ['userInfo.nickName']: e.detail.value
    })
    app.globalData.nickname = e.detail.value
    console.log(app.globalData.nickname)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
})
