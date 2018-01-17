// pages/xq/xq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pd_list: [{
      "url": "https://img3.doubanio.com/view/presto/medium/public/t126191.jpg",
      "selctnum": 1,
      "itemIdx": 0,
    }, {
      "url": "https://img1.doubanio.com/view/presto/medium/public/t126157.jpg",
      "selctnum": 2,
      "itemIdx": 1,

    }, {
      "url": "https://img3.doubanio.com/view/presto/large/public/t126170.jpg",
      "selctnum": 3,
      "itemIdx": 2,

    }, {
      "url": "https://img1.doubanio.com/view/presto/large/public/t126158.jpg",
      "selctnum": 1,
      "itemIdx": 3,

    }, {
      "url": "https://img3.doubanio.com/view/presto/medium/public/t126163.jpg",
      "selctnum": 2,
      "itemIdx": 4,

    }, {
      "url": "https://img3.doubanio.com/view/presto/medium/public/t126166.jpg",
      "selctnum": 3,
      "itemIdx": 5,

    }, {
      "url": "https://img1.doubanio.com/view/presto/medium/public/t126167.jpg",
      "selctnum": 4,
      "itemIdx": 6,

    }],
    selectPerson: 'selectPerson_show',
    firstPerson: '个人',
    selectArea: 'selectPerson_hidden',
  },
  //点击选择类型
  clickPerson: function () {
    console.log(111)
    var selectPerson = this.data.selectPerson;
    if (selectPerson == 'selectPerson_show') {
      this.setData({
        selectArea: 'selectPerson_show',
        selectPerson: 'selectPerson_hidden',
      })
    } else {
      this.setData({
        selectArea: 'selectPerson_hidden',
        selectPerson: 'selectPerson_show',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  taggelreduce: function (e) {
    var that = this;
    var site = e.target.dataset.itemidx;
    var selctnum = that.data.pd_list[site].selctnum;//修改的数据值
    var select = 'pd_list[' + site + '].selctnum';//数据路径 
    if (selctnum > 0) selctnum--; 
    that.setData({
      [select]: selctnum
    })
  },
  taggelAdd: function (e) {
    var that = this;
    var site = e.target.dataset.itemidx;
    var selctnum = that.data.pd_list[site].selctnum;//修改的数据值
    var select = 'pd_list[' + site + '].selctnum';//数据路径
    selctnum++
    that.setData({
      [select]: selctnum
    })
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