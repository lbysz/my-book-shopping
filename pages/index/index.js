//index.js
const WXAPI = require('apifm-wxapi')
WXAPI.init('swhlby')

//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    goods:[]
  },
  // tapBanner: function (e) {
  //   const goodsId = e.currentTarget.dataset.id // 取到参数值
  //   if (goodsId) { // 如果后台有填写业务编号，那就跳转，否则不跳转
  //     wx.navigateTo({
  //       url: "/pages/detail/detail?id=" + goodsId
  //     })
  //   }
  // },
  //事件处理函数
  tapBanner: function (event) {
    console.log(event),
      //带id跳转到指定的页面，这里的event.currentTarget.dataset.id是获取wxml页面上的data-id参数
      wx.navigateTo({
        url: "../detail/detail?id=" + event.currentTarget.dataset.id,//url跳转地址
        success: function (res) {
          console.log(res)
        },
        fail: function (res) {
          console.log(res)
        }
      })
  },
  //获取轮播图
  getSwiperList(){
    WXAPI.banners({
      key: 'home',
      type: 'home'
    }).then(res=>{
      if(res.code==0){
        this.setData({
          banners:res.data
        })
      }
    })
  },
  //获取推荐
  getRecommend(){
    WXAPI.goods().then(res=>{
      if(res.code==0){
        this.setData({
          goods:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList();
    this.getRecommend();
    // this.initPage();
  },
  // async initPage() {
  //   wx.showLoading();
  //   //获取轮播
  //   const bannerRes = await WXAPI.banners({
  //     type: 'home'
  //   })
  //   if (bannerRes.code == 700) {
  //     console.log('请在后台添加 banner 轮播图片，自定义类型填写 index')
  //   } else {
  //     this.setData({
  //       banners: bannerRes.data
  //     });
  //   }

  //   wx.hideLoading()
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})