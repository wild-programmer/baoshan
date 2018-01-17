var app = getApp()
// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {   
    items: [
      { name: 'all', value: '宝善堂', checked: false, url: "https://img3.doubanio.com/view/presto/medium/public/t126191.jpg", },
      { name: 'USA', value: '美国', checked: true, url: "https://img1.doubanio.com/view/presto/medium/public/t126157.jpg"},
      { name: 'CHN', value: '中国', checked: false, url: "https://img3.doubanio.com/view/presto/large/public/t126170.jpg"}
    ]
  },
  // 清空购物车
  deletall:function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要清空购物车么？',
      success: function (res) {
        if (res.confirm) {
          // 用户点击确定
          that.setData({
            items:''
          })
        } else if (res.cancel) {
          // 用户点击取消
        }
      }
    })
  },
  //全选部分
  allckeckd:function(e){
    var that = this;
    var arr = that.data.items;
    var tagcheck = (arr[e.target.dataset.tag].checked==true)?false:true;
    arr.forEach((value,index) => 
    {
      var src = "items[" + index +"].checked"
      that.setData({
        [src]: tagcheck
      })
    });
  },
  // 多选切换
  tageckeckd:function(e){
    var that = this;
    var arr = that.data.items;
    var tag = e.target.dataset.tag;
    var checked = 'items[' + tag +'].checked';
    that.setData({
      [checked]: arr[tag].checked?false:true
    });  
    arr.forEach((value,index) => 
    {
      if (!arr[index].checked){
        if (index==0) return;
        that.setData({
          "items[0].checked": false
        })
        tag = false
      }
    });
    if (tag !== false){
      that.setData({
        "items[0].checked": true
      })
    }
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.titleText('购物车')  
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