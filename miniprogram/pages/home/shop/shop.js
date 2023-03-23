// pages/index/index.js
const db = wx.cloud.database(); // 初始化云数据库
const productsCollection = db.collection('shop'); // 获取集合 shop

Page({
  data: {
    products: [], // 商品列表
    keyword: '', // 搜索关键词
  },

  onLoad: function () {
    // 加载商品列表
    this.loadProducts();
  },

  // 加载商品列表
  loadProducts: function () {
    // 从数据库中获取商品列表
    productsCollection.get({
      success: res => {
        console.log(res.data);
        this.setData({
          products: res.data
        });
      },
      fail: err => {
        console.error(err);
      }
    });
  },

  // 搜索商品
  searchProducts: function (e) {
    const keyword = e.detail.value;
    console.log('搜索关键词：', keyword);
    const regExp = new RegExp(keyword, 'i'); // 构造正则表达式，不区分大小写
    const products = this.data.products.filter(product => {
      return regExp.test(product.title) || regExp.test(product.desc); // 搜索商品名称和介绍
    });
    this.setData({
      products: products,
      keyword: keyword,
    });
  },

  // 清空搜索框
  clearSearch: function () {
    this.setData({
      products: this.data.products,
      keyword: '',
    });
  },
});
