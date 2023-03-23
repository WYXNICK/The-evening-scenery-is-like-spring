// pages/home/match/match.js
const db = wx.cloud.database();
const userCollection = db.collection("user");

Page({
  data: {
    similarUsers: []
  },

  findSimilarUsers: function() {
    const that = this;
    wx.showLoading({
      title: '正在匹配...',
    });
    wx.cloud.callFunction({
      name: 'matchUsers',
      env:'cloud1-3g9yux0wa2b2e8c4',
      success: function(res) {
        wx.hideLoading();
        console.log(res.result)
        that.setData({
          similarUsers: res.result
        });
      },
      fail: console.error
    });
  },

  startChat: function(e) {
    const userId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/chat/chat?userId=${userId}`
    });
  }
});
