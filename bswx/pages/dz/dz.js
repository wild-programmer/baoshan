//获取应用实例
var app = getApp()
// pages/dz.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'1',
    latit:'2',
    long:'3',
    location:''
  },
  getLocation: function () {
      var that = this
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          // that.getland(res.latitude, res.longitude)
          console.log(res)
            that.setData({
              name: res.latitude,
              location: res.longitude
          });
        }
      })
  }, 
  /**
  * http://lbs.amap.com/api/webservice/guide/api/georegeo
  */
    getland: function (x,y) {
      wx.request({
        url: 'http://restapi.amap.com/v3/geocode/regeo?output=xml&location='+x+','+y+'39.991957&key=6c6867d5bc4cf5af34c60b90ce784b15&radius=1000&extensions=all',
        method: 'GET',
        data: {},
        success: function (res) {
         console.log(res)
        }
      })
  },     
    /**
   * http://lbs.amap.com/api/webservice/guide/api/search/
   */
    
    upland:function(){
      wx.request({
        url: 'http://restapi.amap.com/v3/place/text?key=6c6867d5bc4cf5af34c60b90ce784b15&keywords=北京大学&types=高等院校&city=北京&children=1&offset=20&page=1&extensions=all',
          method: 'GET',
          data: {},
          success: function (res) {
            that.setData({
              pd_list: res.data.posts          
            })
          }
      }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(2121212)
      app.titleText('地址定位');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      var url = ''
      var options = ''
      app.getUrlId(url, options)
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