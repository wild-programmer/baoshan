//app.js
const APP_ID = '';//输入小程序appid
const APP_SECRET = '';//输入小程序app_secret
var OPEN_ID = '';//存储获得的appenid
var SESSION_KEY = '';//存储获取的session_key
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
            wx.request({
              //获取openid的接口
              url: '',
              data:{
                appid:APP_ID,
                app_secret: APP_SECRET,
                js_code:res.code,
                grant_type:'authorization_code'
              },
              method: 'GET',
              success:function(res){
                OPEN_ID=res.data.openid;//获取openid
                SESSION_KEY = res.data.session_key;//获取到session_key
                that.setData({
                  openid:res.data.openid.substr(0,10),
                  session_key:res.data.session_key.substr(0,8)
                })
              }
            })         
        },
         fail: function (res) {
           wx.openSetting({
             //重新请求获取定位
             success: (res) => {
               wx.showModal({
                 title: '提示',
                 content: '你必须要同意',
                 success: function (res) {
                   if (res.confirm) {
                     console.log('用户点击确定')
                   } else if (res.cancel) {
                     console.log('用户点击取消')
                   }
                 }
               })
               console.log("获取位置信息") 
               console.log(res)
             }
           })
         }
      })
    }
  },
  globalData:{
    userInfo:null
  } ,
  titleText:function(text){
    //显示顶部加载动画
    wx.showNavigationBarLoading()
    wx.setNavigationBarTitle({
      title: text
    })
    // 隐藏顶部加载动画
    wx.hideNavigationBarLoading()
  },
  detail: function (page) {
    wx.navigateTo({
      url: '../' + page + '/' + page +'?name=zs'
    })
  },
  redirectTo:function(){
    // 页面重定向  关闭之前打开的页面
    wx.redirectTo({
      url: 'test?name=zs'
    })
  },
  getUrlId: function (url, options){
    var pages = getCurrentPages()  //获取加载的页面
    var currentPage = pages[pages.length - 1]    //获取当前页面的对象  
    url = currentPage.route  //当前页面url
    options = currentPage.options    //获取url中所带的参数
    console.log(options)
  }
  
  /**
   *   Page.prototype.setData()数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值。
  */

})
