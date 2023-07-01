// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cards: [
      {
        image: 'https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-03-21%20221927.png?sign=ff6e2384b215ccb2af5132932d6b9b25&t=1679408418',
        title: '如何预防中老年人失眠？'
      },
      {
        image: 'https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-03-21%20222051.png?sign=f5fd172ffb5608f8557664d677843219&t=1679408481',
        title: '养成良好的口腔护理习惯'
      },
      {
        image: 'https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-03-21%20222201.png?sign=6ee47bf82b48d84abc45400af7e99664&t=1679408538',
        title: '如何防止中老年人肥胖？'
      },
      {
        image: 'https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-03-21%20222626.png?sign=26544b53e0926fd8fa82cf5a0237c6d1&t=1679408800',
        title: '如何预防老年人心脑血管疾病？'
      },
      {
        image: 'https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-03-21%20222535.png?sign=4686bbb21a63ee6e56e9c6666e0b4eb5&t=1679408757',
        title: '如何保护老年人的听力？'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  onShareAppMessage:function(res) {
      if(res.from=='button' ){
        //来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title:'晚景如春',
        path: "pages/home/home",
        imageUrl:"https://636c-cloud1-3g9yux0wa2b2e8c4-1317079251.tcb.qcloud.la/home-main.png?sign=a4f6e8c356cdbecf991bfb7ca5e2e560&t=1678147328",
        success:function(res){
          //转发成功
        },
        fail:function(res){
          //转发失败
        }
      }
  },

  //显示确认紧急求助对话框
  modalTap(){
    wx.showModal({
      title: '紧急求助确认',
      content: '您是否确定发布紧急求助？我们将为您拨打急救电话，联系工作人员立即上门救助，并将您的求助信息发向附近的人和平台。',
      showCancel:true,
      confirmText: '确定',
      complete: (res) => {
        if (res.cancel) {
          console.log('用户单击取消')
        }
    
        if (res.confirm) {
          console.log('用户单击确定')
          wx.makePhoneCall({
            phoneNumber: '120'
          })
        }
      }
    })
  },

  //进入商城界面
  gotoShop:function(){
    wx.navigateTo({
      url: '/pages/home/shop/shop',
    })
  },
  //进入老友桥界面
  gotoMatch:function(){
    wx.navigateTo({
      url: '/pages/home/match/match',
    })
  },
   //进入知乎日报界面
   gotoZhihu:function(){
    wx.navigateTo({
      url: '/pages/home/request/request',
    })
  }
})