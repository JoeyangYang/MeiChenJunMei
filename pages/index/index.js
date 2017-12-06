// pages/index/index.js
var data = new Date();
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2016-09-01',
    dateEnd: '2016-09-02',
    flag: "true",
    nightNum: '1',
    datas: [
      [
        {
          id: '1',
          image: '../../img/live.jpg',
          name: '欢迎大家'
        },
        {
          id: '2',
          image: '../../img/live.jpg',
          name: '欢迎大家'
        }
      ],
      [
        {
          id: '1',
          image: '../../img/live.jpg',
          name: '欢迎大家'
        },
        {
          id: '2',
          image: '../../img/live.jpg',
          name: '欢迎大家'
        }
      ],
      [
        {
          id: '1',
          image: '../../img/live.jpg',
          name: '欢迎大家'
        },
        {
          id: '2',
          image: '../../img/live.jpg',
          name: '欢迎大家'
        }
      ],


    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1500,
    indicatorActiveColor: "#f54556"
  },



  bindDateChangeEnd: function (e) {
    var that = this;
    var starTime = that.data.startTime;
    var endTime = new Date(e.detail.value).getTime();
    var result = ((((endTime - starTime) / 1000) / 60) / 60) / 24;
    console.log(result);
    that.setData({
      nightNum: result,
      dateEnd: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    ///////////////////
    //////////////////////////////不能删//////////////////////////
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          wx.request({
            url: app.globalData.webSite + '/weixin.php/wechat/saveUserinfo', //仅为示例，并非真实的接口地址
            data: {
              rawData: res.rawData,
              weixin_user_id: wx.getStorageSync('weixin_user_id'),
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            method: 'POST',
            success: function (res) {
              if (res.data.code == 0) {
                // console.log(res.data.info);
              }
            }
          })
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
      })
    }
    /////////////////////////////不能删///////////////////////////////////////
    ////////////
    //默认入住时间，离店时间
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
  scroll: function (e) {
    var that = this;
    console.log("我是scroll");
    console.log(e);
    var scrollTop = e.detail.scrollTop;
    var scrollHeight = e.detail.scrollHeight;
    console.log("scrollHeight:" + scrollHeight);
    console.log("scrollTop:" + scrollTop);
    // that.setData({
    //   scrollTop: scrollTop,
    //   scrollHeight: scrollHeight
    // });



    var speed = 20;
    // var marqueeVal = setInterval(function () {

    //   scrollTop += 20;
    //   // that.setData({
    //   //   scrollTop: scrollTop,
    //   // });
    //   scrollTop=scrollTop;
    //   if (scrollTop > 400) {
    //     scrollTop = 0;
    //     scrollTop += 20;
    //     scrollTop = scrollTop;
    //     // that.setData({
    //     //   scrollTop: scrollTop
    //     // });
    //   }
    // }, 1000);

  },
  upper: function (e) {
    console.log("我是upper");
    console.log(e)
  },
  lower: function (e) {

  },
})