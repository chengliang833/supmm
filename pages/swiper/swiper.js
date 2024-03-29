// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: ['itcls1', 'itcls2', 'itcls3'],
    indicatorDots: true,
    // vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

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

  }, 

  // 开关指示点
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  chageAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  durationChange(e){
    console.log(e);
    this.setData({
      duration: e.detail.value
    })
  },

  intervalnChange(e){
    this.setData({
      interval: e.detail.value
    })
  }
})