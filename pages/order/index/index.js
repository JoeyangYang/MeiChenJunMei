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
    list:[
      {
        id:'1',
        content:[
          {
            id:'11',
            status: "待手术",
            address:'昆明西山区',
            name:'面部紧致提升_待手术'
          },
          {
            id: '12',
            status: "待手术",
            address: '昆明五华区',
            name: '面部紧致提升_待手术'
          },
        ]

      },
      {
        id: '2',
        content: [
          {
            id: '21',
            status: "已完成",
            address: '昆明西山区2',
            name: '面部紧致提升_已完成'
          },
          {
            id: '22',
            status: "已完成",
            address: '昆明五华区2',
            name: '面部紧致提升_已完成'
          },
        ]

      },
      {
        id: '3',
        content: [
          {
            id: '31',
            status: "退款中",
            address: '昆明西山区3',
            name: '面部紧致提升_退款中'
          },
          {
            id: '32',
            status: "退款中",
            address: '昆明五华区3',
            name: '面部紧致提升_退款中'
          },
        ]

      },
      {
        id: '4',
        content: [
          {
            id: '41',
            status: "已退款",
            address: '昆明西山区4',
            name: '面部紧致提升_已退款'
          },
          {
            id: '42',
            status: "已退款",
            address: '昆明五华区4',
            name: '面部紧致提升_已退款'
          },
        ]

      }
    ]
  },
  //事件处理
  orderNavClick: function(e) {
    var that = this;
    //获取导航index值(1开始)
    var index = e.currentTarget.dataset.active;  
    var on = 'on' + index;
    var animation='animation'+index;
    that.setData({
      on: on,
      animation: animation
    });
    //index -= 1;
    //非数据库数据
    var list=that.data.list;
    var lists=[];
    list.forEach(function(val,key){
      if(index==0){
        val.content.forEach(function(val2,key2){
          lists.push(val);
        });
      }
      
      if(val.id == index){
        val.content.forEach(function(val1,key1){
         lists.push(val);
        });
    } 
    });
    that.setData({
      listContent:lists
    });
    //请求接口数据
      // wx.request({
      //   header: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   method: 'POST',
      //   url: app.globalData.webSite + '/Home/Wechat/orderSelectByStatus',
      //   data: {
      //     status: index
      //   },
      //   success: function (res) {
      //     var data = res.data;
      //     //订单状态翻译
      //     if (data.code == '200') {
      //       data.data.forEach(function (val, key) {
      //         if (val.status == '0') {
      //           data.data[key].status = '待手术';
      //           data.data[key].refund = 'show';
      //         }
      //         if (val.status == '1') {
      //           data.data[key].status = '已完成';
      //           data.data[key].refund = 'show';
      //         }
      //         if (val.status == '2') {
      //           data.data[key].status = '退款中';
      //         }
      //         if (val.status == '3') {
      //           data.data[key].status = '已退款';
      //         }
      //       });
            
           
      //     }else{
      //       data.data=[];
      //     }
      //     //set数据
      //     that.setData({
      //       hotelList: data.data
      //     });
      //   }
      // })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that = this;
    var index=options.status;
    var animation = 'animation' + index;
    var on = 'on' + index;
     //index -= 1;
     //非数据库数据
     var list = that.data.list;
     var lists = [];
     list.forEach(function (val, key) {
       if (index == 0) {
         val.content.forEach(function (val2, key2) {
           lists.push(val);
         });
       }
       if (val.id == index) {
         val.content.forEach(function (val1, key1) {
           lists.push(val);
         });
       }
     });
     that.setData({
       listContent: lists
     });
     //请求接口数据
      // wx.request({
      //   header: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   method: 'POST',
      //   url: app.globalData.webSite + '/Home/Wechat/orderSelectByStatus',
      //   data: {
      //     status: index
      //   },
      //   success: function (res) {
      //     var data = res.data;
      //     //订单状态翻译
      //     if (data.code == '200') {
      //       data.data.forEach(function (val, key) {
      //         if (val.status == '0') {
      //           data.data[key].status = '待手术';
      //           data.data[key].refund = 'show';
      //         }
      //         if (val.status == '1') {
      //           data.data[key].status = '已完成';
      //           data.data[key].refund = 'show';
      //         }
      //         if (val.status == '2') {
      //           data.data[key].status = '退款中';
                
      //         }
      //         if (val.status == '3') {
      //           data.data[key].status = '已退款';
      //         }
      //       });
            
      //     }else{
      //      data.data=[];
      //     }
      //     //set数据
          that.setData({
            //hotelList: data.data,
            animation: animation,
            on: on
          });
        //}
      // })
    
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