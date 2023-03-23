
// pages/list/list.js
const app=getApp()
const db=wx.cloud.database()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
  listData:{},
  search:'',
  searchData:{}
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
   this.getData()
  },
  addpost:function()
  {
    wx.navigateTo({
      url: '../addpost/addpost'
    })
  },

 async formSubmit(e) {
    let that=this
    console.log(e.detail.value)
    db.collection('post').where({
      title:e.detail.value.find
    }).get({
      success:res=>{
        console.log(res)
      this.setData({
        searchData:res.data[0]
      })
      const searchData=res.data[0]
      console.log(searchData)
      app.globalData.searchData=searchData
      console.log(app.globalData.searchData)
      wx.navigateTo({
        url: './../search/search',
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
    this.getData()
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
      
  },

  onPullDownRefresh() {
    this.onShow();
    console.log("上拉刷新");
    wx.showNavigationBarLoading() //在标题栏中显示加载
    
    },
  async getData(){
    const listData=(await wx.cloud.callFunction({
      name:"list_getData"
  
    })).result
    this.setData({
      listData
    })
    console.log(listData)
    app.globalData.listData=listData
  },

  async addStar(e){
    const id=e.currentTarget.dataset.id
    const list=this.data.listData
    await list.filter(post=>{
      if(post._id==id){
        post.addStar=true
        let stars=post.stars||0
        post.stars=stars+1
      }
    })
    this.setData({
      listData:list
    })
  }
})