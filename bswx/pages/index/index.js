//获取应用实例
var app = getApp()
Page({
  data: {
    propagation:true,
    currentTab: '',
    cont_topbac:'0',//控制侧边图标的切换data
    zeroHidden:'zeroHidden',//控制加减按钮显示
    cainum:0,//
    pd_list: [{
      "url":"https://img3.doubanio.com/view/presto/medium/public/t126191.jpg",
      "selctnum":0,
      "itemIdx":0,
    }, {
        "url": "https://img1.doubanio.com/view/presto/medium/public/t126157.jpg",
        "selctnum": 0,
        "itemIdx": 1,

    }, {
        "url": "https://img3.doubanio.com/view/presto/large/public/t126170.jpg",
        "selctnum": 0,
        "itemIdx": 2,

    }, {
        "url": "https://img1.doubanio.com/view/presto/large/public/t126158.jpg",
        "selctnum": 0,
        "itemIdx": 3,

    }, {
        "url": "https://img3.doubanio.com/view/presto/medium/public/t126163.jpg",
        "selctnum": 0,
        "itemIdx": 4,

    }, {
        "url": "https://img3.doubanio.com/view/presto/medium/public/t126166.jpg",
        "selctnum": 0,
        "itemIdx": 5,

    }, {
        "url": "https://img1.doubanio.com/view/presto/medium/public/t126167.jpg",
        "selctnum": 0,
        "itemIdx": 6,

    }],
    user:{
      pd_cont: [{ "name": "主厨推荐", len: 0 }, { "name": "滋补养生", len: 1 }, { "name": "美食养颜", len: 2 }, { "name": "排毒轻体", len: 3 }, { "name": "减脂增肌", len:      4}]
    }
  },
  taggelreduce:function(e){
    var that = this;
    var addnum = that.data.cainum;
    var site = e.target.dataset.itemidx;
    var selctnum = that.data.pd_list[site].selctnum;//修改的数据值
    var select = 'pd_list[' + site + '].selctnum';//数据路径
    if (addnum > 0) addnum--
    if (selctnum > 0) selctnum--
    that.setData({
      cainum: addnum,
      [select]: selctnum
    })
  },
  taggelAdd:function(e){
    var that = this;
    var addnum = that.data.cainum;
    var site = e.target.dataset.itemidx;
    var selctnum = that.data.pd_list[site].selctnum;//修改的数据值
    var select = 'pd_list['+site+'].selctnum';//数据路径
    addnum++
    selctnum++   
    that.setData({
      cainum: addnum,
      [select]: selctnum
    })     
  },
  // 左侧菜品列表图标的切换
  bondIcontap:function(e){
    // 改变属性值
    this.setData({
      cont_topbac: e.target.dataset.topbac
    });
  },
 /*** 扫码***/
  saoma:function(e){
    console.log('jnlai')
    wx.scanCode({
      fail:function(e){
        // 接收失败的回调
      },
      complete:function(e){
        //调用结束的回调
      },
      success:function(res){
        //调用成功的回调
        let result = res.result //所扫码的内容
        let scanType = res.scanType //所扫码的类型
        let charSet = res.charSet //	所扫码的字符集
        let path = res.path;
        console.log(result + "result" + scanType + "scanType" + path + "path" + charSet +"charSet")
      }
    })
  },
 /*** 滑动切换tab***/
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /*** 点击tab切换***/
  swichNav: function (e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    });
  },
  //跳转部分
   /***点击进详情***/
  navigator: function (e) {
    app.detail('xq')
  },
   /***购物车点击事件***/
  shopcarnav: function (e) { 
    app.detail('shopcar')
  },
  /***地址点击事件***/
  getLand: function () {
    app.detail('dz')
  },
  //跳转部分
  onLoad: function () {
    var that = this;
    /*
     * 页面加载时候记得判断数量不为零时候显示减去按钮
    */
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    // wx.request({
    //     url: 'https://moment.douban.com/api/stream/date/2017-12-18',
    //     method: 'GET',
    //     data: {},
    //     success: function (res) {
    //       that.setData({
    //        pd_list: res.data.posts          
    //     })
    //   }
    // }) 
    //活动轮播
    // wx.request({
    //   url: 'http://127.0.0.1:8080/LaiHaiManage/app/activity/getAppActivityByCarousel.do',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     'Accept': 'application/json'
    //   },
    //   success: function (res) {
    //     that.setData({
    //       carousel_images: res.data.pd_list
    //     })
    //   }
    // })
  }
})
