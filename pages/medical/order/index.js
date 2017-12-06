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
      date:options.date,
      name:options.name,
      priceSingel:options.price,
      id:options.id
    });
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res);
    //     var userInfo = res.userInfo
    //     var nickName = userInfo.nickName
    //     var avatarUrl = userInfo.avatarUrl
    //     var gender = userInfo.gender //性别 0：未知、1：男、2：女
    //     var province = userInfo.province
    //     var city = userInfo.city
    //     var country = userInfo.country

    //     that.setData({
    //       userName: nickName
    //     });
    //    }
    // })
  },
  userName:function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  phone:function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  submit:function(){
    var that=this;
    var userName=that.data.userName;
    var phone=that.data.phone;
    var preData = {
      'name': that.data.userName,
      'phone': that.data.phone,
      'time': that.data.date
    };
    ////////////////////////////////////////
    if (userName!=''&&userName!='请输入预约人姓名'&&phone!='请输入正确的预约人电话'&&phone!=''){
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
        success: function (res) {
          console.log("----------");
          console.log(res);
          wx.navigateTo({
            url: '/pages/medical/order_pay/index',
          })
        },
      })
      
    }else{
      wx.showModal({
        title: '',
        content: '您有信息未填写',
      })
    }
    
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