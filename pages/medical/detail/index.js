// pages/hotel/detail/index.js
var qqmapsdk;
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.min.js');
var data=new Date();
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testHandle: '-1',
    date: '2017-09-01',
    userName:'',
    userPhone:'',
    datas: [
      [
        {
          id: '1',
          image: '../../../img/aboutme_circle.jpg',
        },
        {
          id: '2',
          image: '../../../img/aboutme_circle2.jpg',
        }
      ],
      [
        {
          id: '1',
          image: '../../../img/aboutme_circle.jpg',
        },
        {
          id: '2',
          image: '../../../img/aboutme_circle2.jpg',
        }
      ],
      [
        {
          id: '1',
          image: '../../../img/aboutme_circle.jpg',

        },
        {
          id: '2',
          image: '../../../img/aboutme_circle2.jpg',
        }
      ],


    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1500,
    indicatorActiveColor: "#f54556"
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  footJump:function(){
    var that=this;
    var date=that.data.date;
    var name=that.data.hotel.name;
    var price = that.data.hotel.price;
    var id = that.data.hotel.id;
    //请求接口数据
    wx.request({
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'get',
      url: app.globalData.webSite + '/weixin.php/wechat/getUserinfo',
      data: {
        weixin_user_id: wx.getStorageSync("weixin_user_id"),
      },
      success: function (res) {
        if (res.data.data.length!=0){
          res.data.data.forEach(function (val, key) {
            if (val.name == '' || val.phone == '') {
              wx.navigateTo({
                url: '/pages/me/phone_update/index'
              })
            }
            else {
              wx.navigateTo({
                url: '/pages/medical/order/index?data=' + date + '&name=' + name + '&price=' + price + '&id=' + id + '&userName=' + val.name + '&phone=' + val.phone,
              })
            }
          });
        }  
      }
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var hotel = JSON.parse(options.single);
    that.setData({
      hotel: hotel,
    });
    //预约时间
    var y = data.getFullYear();
    var m = data.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = data.getDate();
    var dd = d + 1;
    var ddS = dd < 10 ? ('0' + dd) : dd;
    var dS = d < 10 ? ('0' + d) : d;

    var date = y + '-' + m + '-' + dS;
    var dateEnd = y + '-' + m + '-' + ddS;
    var startTime = new Date(date).getTime();
    var endTime = new Date(dateEnd).getTime();
    this.setData({
      today: date,
      date: date,
      dateEnd: dateEnd,
      startTime: startTime,
      endTime: endTime
    });
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    
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