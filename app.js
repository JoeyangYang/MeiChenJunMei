//app.js
App({
  onLaunch: function () {
    var that = this;
    wx.login({
      success: res => {
        wx.request({
          url: that.globalData.webSite + '/weixin.php/wechat/getOPenid', //仅为示例，并非真实的接口地址
          data: {
            errMsg: res.errMsg,
            code: res.code,
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          method: "POST",
          success: function (res) {
            if (res.data.code == 0) {
              // wx.setStorage({
              //   key: 'weixin_user_id',
              //   data: res.data.weixin_user_id,
              // })
              wx.setStorageSync("weixin_user_id", res.data.weixin_user_id);
            }
          }
        })// 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  globalData: {
    appid: 'wx6d028d8d4087a4ba',
    userInfo: null,
    openId: '',
    loginStatus: false,
    webSite: 'http://192.168.3.13/',
    address:'昆明西山区美辰均美医疗美容',
    phone:'0871-6666666'
  }
})
