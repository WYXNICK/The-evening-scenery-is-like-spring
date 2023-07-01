// pages/home/bridge/bridge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoContext: null,
    currentTab: 'tab1',
    images: [
      'https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/553455ac4ed027420af1099cfd3da52.jpg?sign=f8cb3afec55f7129a3f9f117be7cc65e&t=1686408956',
      'https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/cb4d65296bd7850de43b258c0b1ed82.jpg?sign=1e573e6d1a9fee7557fb33b48dc242bd&t=1686408995',
      'https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/65cde6d0ba35f7c4e12e850ddb100e4.jpg?sign=4708a6a3b058160c9add7457eb1b25c8&t=1686409028','https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/b51df9987930e57fd19034a2dfc1b28.jpg?sign=c69e3842fd1586644edccfd2beb9aa53&t=1686409452'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  onVideoLoaded: function (event) {
    // this.videoContext = event.detail.context;
    // this.videoContext.play();
  },
  onShow: function () {
    // if (this.videoContext) {
    //   this.videoContext.play();
    // }
  },
  onHide: function () {
    if (this.videoContext) {
      this.videoContext.pause();
    }
  },
  onUnload: function () {
    if (this.videoContext) {
      this.videoContext.pause();
    }
  },
  switchTab: function (event) {
    const tab = event.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
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

  },
  onReady() {
  
  }
})