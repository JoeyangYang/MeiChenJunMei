// pages/me/phone_update/index.js
var winWidth = 0
var winHeight = 0  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: "300",
    height: "100",
    second:3,
    className:'model',
     on:'on1' 
    
  },
  //获取用户输入值
  bindInput: function (e) {
    var value = e.detail.value;
    this.setData({
      modifiy_phone: value
    });
  },
  //修改手机号
confirm:function(e){
  var that=this;
   var modifiy_phone = that.data.modifiy_phone;
   //console.log(modifiy_phone);
  //  if (modifiy_phone == ''){
  //    that.setData({
  //      className: 'model',
  //      on: 'on1'
  //    });
  //    console.log(11111);
  //  }else{
     console.log(22222);
     that.setData({
       className: 'model1',
       on: 'on'
     });
     var num = that.data.second;
     var timer = setInterval(function () {
       num--;
       that.setData({
         second: num
       });
       if (num == 0) {
         clearInterval(timer);
         wx.reLaunch({
           url: '/pages/me/index/index',
         })
       }
     }, 1000);
   
   
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //获取设备信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth
        });
      },
    })
    var elementWidth = that.data.width;
    var windowWidth = that.data.windowWidth;
    var left = (windowWidth - elementWidth) / 2;
    that.setData({
      left: left
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
  
  }
})