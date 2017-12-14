// pages/order/index/index.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    on: 'on0',
    animation:'animation0',
    show:'show',
    flag:true,
    hospitalAddress: app.globalData.address,
    empty: 'empty_box',
  },
  //跳转详情页
  detail:function(e){
    var detail=JSON.stringify(e.currentTarget.dataset.detail)
    wx.navigateTo({
      url:'/pages/order/detail/index?detail='+detail
    })
  },
  //申请退款
  refund:function(e){
    var that = this;
    var price = e.currentTarget.dataset.sum;
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/medical/refund/index?price=' + price + '&orderid=' + orderid,
    })
  },
  //跳转到首页
  jump:function(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  //跳转到预约页面
  appointment:function(e){
    var singleHotel = JSON.stringify(e.currentTarget.dataset.single);
    wx.navigateTo({
      url: '/pages/medical/detail/index?single=' + singleHotel,
    })
  },
  //跳转到支付页面
  pay:function(e){
    console.log("点击立即付款");
    var that=this;
    var price = e.currentTarget.dataset.price;
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/medical/order_pay/index?price=' + price + '&orderid=' + orderid,
      success:function(res){
        console.log("跳转成功");
      },
      fail:function(res){
       console.log("跳转失败");
       console.log(res);
      },
    })
  },
  //事件处理
  orderNavClick: function(e) {
    var that = this;
    //获取导航index值(1开始)
    var index = e.currentTarget.dataset.active; 
    index++;
    var status = e.currentTarget.dataset.active; 
    var on = 'on' + index;
    var animation='animation'+index;
    that.setData({
      on: on,
      animation: animation
    });
    //index -= 1;
    //请求接口数据
      wx.request({
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'get',
        url: app.globalData.webSite + '/weixin.php/wechat/getOrder',
        data: {
          status: status
        },
        success: function (res) {
          var data = res.data;
          //订单状态翻译
          if (data.code == '0') {
            data.data.forEach(function (val, key) {
              if (val.status == '0') {
                data.data[key].status = '待付款';
              
              }
              if (val.status == '1') {
                data.data[key].status = '已付款';
                
              }
              if (val.status == '2') {
                data.data[key].status = '已完成';
              }
              if (val.status == '3') {
                data.data[key].status = '退款中';
              }
            });
            
          }else{
            data.data=[];
            
          }
          //set数据
          that.setData({
            hotelList: data.data
          });
          if (that.data.hotelList.length==0){
            that.setData({
              empty: 'empty_box1',
            })
          } else if (that.data.hotelList.length != 0){
            that.setData({
              empty: 'empty_box',
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
    wx.getSystemInfo({
      success: function (res) {
        var height = res.windowHeight / 2;
        that.setData({
          height: height
        });
      },
    })
    var index=options.status;
    index++;
    var status = options.status;
    var animation = 'animation' + index;
    var on = 'on' + index;
     //请求接口数据
      wx.request({
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'get',
        url: app.globalData.webSite + '/weixin.php/wechat/getOrder',
        data: {
          status: status
        },
        success: function (res) {
          var data = res.data;
          //订单状态翻译
          if (data.code == '0') {
            data.data.forEach(function (val, key) {
              if (val.status == '0') {
                data.data[key].status = '待付款';
                
              }
              if (val.status == '1') {
                data.data[key].status = '已付款';
                
              }
              if (val.status == '2') {
                data.data[key].status = '已完成';
                
              }
              if (val.status == '3') {
                data.data[key].status = '退款中';
              }
            });
            
          }else{
           data.data=[];

          }
          //set数据
          that.setData({
            hotelList: data.data,
            animation: animation,
            on: on
          });
          if (that.data.hotelList.length == 0) {
            that.setData({
              empty: 'empty_box1',
            })
          } else if (that.data.hotelList.length != 0) {
            that.setData({
              empty: 'empty_box',
            })
          }
        }
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