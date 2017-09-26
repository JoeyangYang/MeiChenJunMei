// pages/wordsOne/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 100,
    marquee: {
      width: 50,
      text: '集团总部设在上海。是目前国内早从事医疗投资的集团企业，也是国内规模大的医学美容连锁机构。其经营范围涉足医疗、保健、科研等多个医疗卫生领域，业务形态以专科整形美容医院为主。多年来，云南美诚均美美容医院潜心于整形美容行业，已先后在昆明、重庆、苏州'
    }
  },
  // getWidth: (str) => {
  //   return [].reduce.call(str, (pre, cur, index, arr) => {
  //     if (str.charCodeAt(index) > 1255) {// charCode大于255是汉字
  //       pre++;
  //     } else {
  //       pre += 0.5;
  //     }
  //     return pre;
  //   }, 0);
  // },
  // getDuration: (str) => {// 保留，根据文字长度设置时间
  //   return this.getWidth() / 10;
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
  upper: function (e) {
    console.log("我是upper");
    console.log(e)
  },
  lower: function (e) {
   
  },
  scroll: function (e) {
    var that = this;
    // console.log("我是scroll");
    // console.log(e);
    // console.log(that);
    var scrollTop = e.detail.scrollTop;
    var scrollHeight=e.detail.scrollHeight;
    // console.log(scrollHeight);
    that.setData({
      scrollTop:scrollTop,
      scrollHeight:scrollHeight
    });
    
    
    //var scrollTop = that.data.scrollTop;
    //var scrollHeight = that.data.scrollHeight;
    
    // var speed = 20;
    // var marqueeVal = setInterval(function () {
    //   scrollTop += 20;
    //   that.setData({
    //     scrollTop: scrollTop,
    //   });
    //   if (scrollTop > scrollHeight-scrollTop) {
    //     scrollTop = 0;
    //     scrollTop += 20;
    //     that.setData({
    //       scrollTop: scrollTop
    //     });
    //   }
    // }, 1000);
   
  },
  tap: function (e) {
    console.log("我是tap")
    console.log(e);
    var scrollTop=e.detail.scrollTop;
    console.log(scrollTop);
    var marqueeVal = setInterval(function () {
         
    }, 3000);
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})