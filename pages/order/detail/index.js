// pages/order/detail/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   refund:'申请退款',
   imgUrl: "/img/detail1.jpg",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that=this;
   wx.getStorage({
     key: 'hotelList',
     success: function(res) {
       var signHotel=[];
       var hotel=res.data.data;
    hotel.forEach(function(val,key){
      
      if(val.id==options.id){
        if (val.status == '0') {
          val.status = '待手术';
          that.setData({
            imgUrl: "/img/detail1.jpg",
            imgText:'您的手术已预约成功，祝您手术顺利'
          });
        }
        if (val.status == '1') {
          val.status = '已完成';
          that.setData({
            imgUrl: "/img/detail2.jpg",
            imgText: '您的手术已成功，祝您早日康复'
          });
        }
        if (val.status == '2') {
          val.status = '退款中';
          that.setData({
            imgUrl: "/img/detail3.jpg",
            imgText: '我们正在飞速的为您处理退款，请稍后'
          });
        }
        if (val.status == '3') {
          val.status = '已退款';
          that.setData({
            imgUrl: "/img/detail4.jpg",
            imgText: '您的退款已经完成，给您带来的不便我们深感歉意',
            refund:'拨打电话'
          });
        }
        signHotel.push(val);
        that.setData({
          hotel: signHotel
        });
      }
    });
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