const app = getApp()

Page({
  data: {
    gender: '',
    age: '',
    region: ['', '', ''],
    hobbies: [],
    health: '',
    userimg:'',
    nickname:''
  },
  onLoad: function (options) {
      this.setData({
        userimg:app.globalData.userimg,
        nickname:app.globalData.nickname
      })
      console.log(app.globalData.nickname)
  },
  onGenderChange: function (e) {
    this.setData({
      gender: e.detail.value
    })
  },

  onAgeInput: function (e) {
    this.setData({
      age: e.detail.value
    })
  },

  onRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  onHobbiesChange: function (e) {
    this.setData({
      hobbies: e.detail.value
    })
  },

  onHealthChange: function (e) {
    this.setData({
      health: e.detail.value
    })
  },

  submitForm: function (e) {
    const db = wx.cloud.database()
    const user = db.collection('user')
   
    user.add({
      data: {
        gender: this.data.gender,
        age: this.data.age,
        region: this.data.region,
        hobbies: this.data.hobbies,
        health: this.data.health,
        userimg:this.data.userimg,
        nickname:this.data.nickname
      },
      success: function (res) {
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (err) {
        wx.showToast({
          title: '提交失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})
