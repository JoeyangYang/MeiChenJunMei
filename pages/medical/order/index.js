// pages/hotel/order/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: '',
    userName:'请输入预约人姓名',
    phone:'请输入正确的预约人电话'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options");
    console.log(options);
    var that = this;
    that.setData({
      date:options.data,
      name:options.name,
      priceSingel:options.price,
      id:options.id,
      userName:options.userName,
      phone:options.phone
    });
  },
  submit:function(){
    var that=this;
    var userName=that.data.userName;
    var phone=that.data.phone;
    console.log("保存预约时间");
    console.log(that.data.date);
    var preData = {
      'name': that.data.userName,
      'phone': that.data.phone,
      'time': that.data.date
    };
     var timestamp ;
      var nonceStr ;
      var paySign; 
      var Package;
      var signType = 'MD5';
      var orderid;
    ////////////////////////////////////////
    //姓名电话手动输入
    // if (userName!=''&&userName!='请输入预约人姓名'&&phone!='请输入正确的预约人电话'&&phone!=''){
      wx.request({
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'post',
        url: app.globalData.webSite + '/weixin.php/wechat/createOrder',
        data: {
          weixin_user_id: wx.getStorageSync('weixin_user_id'),
          total: that.data.priceSingel,
          goods_id: that.data.id,
          preData: JSON.stringify(preData),
        },
        success: function (parm) {
          orderid = parm.data.orderid;
          timestamp = String(parm.data.sdkData.timeStamp);
          nonceStr = parm.data.sdkData.nonceStr;
          paySign = parm.data.sdkData.paySign;
          Package = parm.data.sdkData.package;
          wx.showModal({
            title: '提示',
            content: '立即支付吗',
            success: function (res) {
              if (res.confirm) {
                wx.requestPayment({
                  'timeStamp': timestamp,
                  'nonceStr': nonceStr,
                  'package': Package,
                  'signType': signType,
                  'paySign': paySign,
                  'success': function (res) {
                    wx.request({
                      header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                      },
                      method: 'post',
                      data: {
                        weixin_user_id: wx.getStorageSync("weixin_user_id"),
                        orderid: orderid,
                      },
                      url: app.globalData.webSite + 'weixin.php/wechat/confirmOrder',
                      success: function () {
                        wx.switchTab({
                          url: '/pages/me/index/index',
                        })
                      },
                    })
                  },
                  'fail': function (res) {
                    console.log("-----------");
                    console.log(res);
                  },
                })
              } else {
                wx.switchTab({
                  url: '/pages/me/index/index',
                })
                //url: '/pages/order/index/index?orderid=' + orderid + '&status=-1',
              }
            }
          })
        },
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