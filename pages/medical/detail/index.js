// pages/hotel/detail/index.js
var qqmapsdk;
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.min.js');
var data=new Date();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testHandle: '-1',
    date: '2017-09-01',
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
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  //点击事件
  testClick: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var testHandle = that.data.testHandle;
    var spec = e.currentTarget.dataset.spec;
    wx.setStorage({
      key: 'spec',
      data: {
        spec: spec
      }
    });
    wx.getStorage({
      key: 'singleHotel',
      success: function(res) {
        var hotel = res.data;
        if (index == testHandle) {
          //数据绑定
          that.setData({
            hotel: hotel,
            testHandle: '-1'
          });
        }else {
          hotel.data.homeStyle[index].active = 'active';
          //数据绑定
          that.setData({
            hotel: hotel,
            testHandle: index
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'singleHotel',
      success: function(res) {
        console.log("缓存");
        console.log(res);
        var hotel = res.data;
        that.setData({
          hotel: hotel,
        });
      }
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