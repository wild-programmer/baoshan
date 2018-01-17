// myticket.js
Page({
  /**
   * 页面事件
   */
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: '',
    pd_list:"",
    user:{
      pd_cont:[{"name":"主厨推荐"},{"name":"滋补养生"},{"name":"美食养颜"},{"name":"排毒轻体"},{"name":"减脂增肌"}]
    }
  },
  /*** 滑动切换tab***/
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /*** 点击tab切换***/
  swichNav: function (e) {
    console.log(e)
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this; 
    app.titleText('当前页面')
    var u_id =wx.getStorageSync("userInfo").u_id;
    //活动详情页
    // wx.request({
    //   url: 'https://moment.douban.com/api/stream/date/2017-12-18',
    //   method: 'GET',
    //   data: {},
    //   success: function (res) {
    //     that.setData({
    //       pd_list: res.data.posts          
    //     })
    //   }
    // }) 
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