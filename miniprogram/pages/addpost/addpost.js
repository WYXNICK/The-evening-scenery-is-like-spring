// pages/addpost/addpost.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_arr:[],
    img:'',
    //标题
    title: '',
    //内容
    content:'',
    //作者
    author:'',
    //时间
    time:'',
    // collect: [
    //   {id: 1,name: '官方通知',},
    //   {id: 2,name: '求助信息'}, 
    //   {id: 3,name: '日常娱乐'}, 
    //   {id: 4,name: '知识分享',}
    // ],
    collect: [
      '官方通知','求助信息', '日常娱乐','知识分享',
    ],
    //分类
    current:'日常娱乐',
    id:0
  },
 collectChange(e) {
    this.setData({
        current: e.detail.value
    });
},
formSubmit: function (e) {
  console.log(app.globalData.userimg)
  var that = this
  
  //获取当前页面数据  
  var myDate = new Date();
  var month=myDate.getMonth()+1;
  this.data.content=e.detail.value.content,   
  this.data.title=e.detail.value.title,
  this.data.author=app.globalData.nickname,
  this.data.createTime=myDate.getFullYear()+'/'+ month+'/'+myDate.getDate();

  this.setData({
    content:e.detail.value.content,   
    title:e.detail.value.title,
    author:app.globalData.nickname,
    createTime:myDate.getFullYear()+'/'+ month+'/'+myDate.getDate()
  })

  const db = wx.cloud.database()
  //用于把所有信息存入数据库
  //当前页面信息存入数据库
  db.collection('post').add({
    data: {
      title:e.detail.value.title,
      content:e.detail.value.content,
      collect:that.data.current,
      author:app.globalData.nickName,
      createTime:myDate.getFullYear()+'/'+ month+'/'+myDate.getDate(),
      image:this.data.img,
      commentNumber:0,
      icon:app.globalData.userimg,
      favorites:0,
      stars:0,
      views:0
    },
    success: res => {
      this.setData({
        title:this.data.title,
        content:this.data.detail,
        collect:that.data.current,
        author:app.globalData.nickName,
        createTime:this.data.time,
        image:this.data.img,
        favorites:0,
        stars:0,
        views:0
      })
      /*
      wx.showToast({
        title: '已提交至管理员审核，请耐心等待！',
      })
     */ 
      console.log('[数据库] [新增记录] 成功，记录 _id: ')
      //跳转
      wx.switchTab({
        url: '../list/list?title='+this.data.title+'&content='+this.data.detail+'&author='+this.data.writer+'&collect='+that.data.current+ '&createTime='+this.data.time,
      })
    },
    fail: err => {
      wx.showToast({
        icon: 'none',
        title: '新增记录失败'
      })
      console.error('[数据库] [新增记录] 失败：', err)
    }
  })
},
upimg: function () {
  console.log('upimg')
  //获取图片url
  var that = this;
  
  //console.log('上传图片')
  //console.log(that.data.id)
  wx.chooseImage({
    //最多可以选择的图片总数
    count: 1,
     // 可以指定是原图还是压缩图，默认二者都有
    sizeType:['compressed'],
    // 可以指定来源是相册还是相机，默认二者都有
    sourceType: ['album', 'camera'], 
    success: (res)=>{
      
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    var tempFilePaths = String(res.tempFilePaths);
    console.log(tempFilePaths)
    this.setData({
      img:tempFilePaths
    })
    console.log(this.data.img)

  },
})
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
  onShareAppMessage() {

  }
})