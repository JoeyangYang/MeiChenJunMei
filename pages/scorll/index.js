// pages/scorll/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marquee: {
      width: 12,
      text: 'hello world'
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    
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
    getWidth: (str) => {
      return [].reduce.call(str, (pre, cur, index, arr) => {
        if (str.charCodeAt(index) > 255) {// charCode大于255是汉字
          pre++;
        } else {
          pre += 0.5;
        }
        return pre;
      }, 0);
    },
    getDuration: (str) => {// 保留，根据文字长度设置时间
      return this.getWidth() / 10;
    }
  
})