// pages/order/detail/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   imgUrl: "/img/detail1.jpg",
   address: app.globalData.address,
   phone: app.globalData.phone,

  },
  //申请退款
  refund: function (e) {
    var that = this;
    var price = e.currentTarget.dataset.sum;
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/medical/refund/index?price=' + price + '&orderid=' + orderid,
    })
  },
  //跳转到首页
  jump: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  //跳转到支付页面
  pay: function (e) {
    var that = this;
    var price = e.currentTarget.dataset.price;
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/medical/order_pay/index?price=' + price + '&orderid=' + orderid,
    })
  },
  //跳转到预约页面
  appointment: function (e) {
    var singleHotel = JSON.stringify(e.currentTarget.dataset.single);
    wx.navigateTo({
      url: '/pages/medical/detail/index?single=' + singleHotel,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       var that=this;
       var detail = JSON.parse(options.detail);
                if (detail.status == '待付款') {
                  that.setData({
                    imgUrl: "/img/detail1.jpg",
                    imgText: '您的手术已下单成功，请您尽快付款'
                  });
                }
                if (detail.status == '已完成') {
                
                  that.setData({
                    imgUrl: "/img/detail2.jpg",
                    imgText: '您的手术已成功完成，祝您早日康复'
                  });
                }
                if (detail.status == '退款中') {
                  that.setData({
                    imgUrl: "/img/detail3.jpg",
                    imgText: '我们正在飞速的为您处理退款，请稍后',
                  });
                }
                if (detail.status == '已付款') {
                  that.setData({
                    imgUrl: "/img/detail4.jpg",
                    imgText: '您的付款已经我们已经收到，请您尽快预约手术',
                  });
                }
       that.setData({
         detail:detail
       })
      //  wx.request({
      //    header: {
      //      "Content-Type": "application/x-www-form-urlencoded"
      //    },
      //    method: 'POST',
      //    url: app.globalData.webSite + '/Home/Wechat/orderSelectById',
      //    data: {
      //      id: options.id
      //    },
      //    success:function(res){
      //     var data=res.data;
      //     console.log(data.code);
      //     if(data.code == '200'){
      //       console.log("data.data");
      //       console.log(data.data);
      //       data.data.forEach(function (val, key) {
           
      //       if (val.id == options.id) {
      //           console.log("val");
      //           console.log(val);
      //           if (val.status == '0') {
      //             val.status = '待手术';
      //             that.setData({
      //               imgUrl: "/img/detail1.jpg",
      //               imgText: '您的手术已预约成功，祝您手术顺利'
      //             });
      //           }
      //           if (val.status == '1') {
      //             val.status = '已完成';
      //             that.setData({
      //               imgUrl: "/img/detail2.jpg",
      //               imgText: '您的手术已成功，祝您早日康复'
      //             });
      //           }
      //           if (val.status == '2') {
      //             val.status = '退款中';
      //             that.setData({
      //               imgUrl: "/img/detail3.jpg",
      //               imgText: '我们正在飞速的为您处理退款，请稍后',
      //               refund: '拨打电话'
      //             });
      //           }
      //           if (val.status == '3') {
      //             val.status = '已退款';
      //             that.setData({
      //               imgUrl: "/img/detail4.jpg",
      //               imgText: '您的退款已经完成，给您带来的不便我们深感歉意',
      //               refund: '拨打电话'
      //             });
      //           }
             
              
      //       }
      //       });
      //        that.setData({
      //          hotel:data.data
      //        });
      //     }

      //    }
      //  })
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