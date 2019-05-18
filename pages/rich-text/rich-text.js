// pages/rich-text/rich-text.js

const htmlSnip = 
`<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`;

const nodeSnip = 
[{
  name: 'div',
  attrs: {
    class: 'div_class',
    style: 'line-height: 60px; color: red;'
  },
  children: [{
    type: 'text',
    text: "You never know what you're gonna get."
  }]
}]
;

const nodeSnipStr = JSON.stringify(nodeSnip);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    htmlSnip,
    nodeSnipStr,
    nodeSnip,
    renderByHtml:false,
    renderByNode:false
  },

  renderHtml(){
    this.setData({
      renderByHtml: true
    })
  },

  renderNode(){
    this.setData({
      renderByNode: true
    })
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

  }
})