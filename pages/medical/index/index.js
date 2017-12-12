// pages/hotel/index/index.js
/**
 * allList:所有项目
 * category:点击类别,按类别查询
 */
var data=new Date();
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: "true",
    nightNum: '1',
    display: false,
    searchHandle: '0',
    imgSrc: '../../../img/top_bg.jpg',
    hidden:false,
   zIndex:"-1",
   on:'on1',
   toggle:'',
   box:'',
   webSite: app.globalData.webSite,
   on:''
  },
  sortPrice:function(e){
    var that=this;
    var sort;
    var num=e.currentTarget.dataset.num;
    console.log(num);
      that.setData({
        on: 'on'+num,
      })
    if(num==1){//升序
       sort='asc';
    }
    if(num==2){
      sort ='desc';
    }
    wx.request({
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'get',
      url: app.globalData.webSite + '/weixin.php/wechat/getgoods',
      data:{
         order:sort
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            priceSort: res.data.data
          })
        }
      },
    })
  },
  priceConfire:function(){
    var that=this;
    that.setData({
      color: '',
      display: false,
      searchStyle: '',
      searchHandle: '0',
      zIndex: "-1",
      box: ''
    });
    var priceSort=that.data.priceSort;
     that.setData({
       allList: priceSort
     })
  },
  //按类别查询
  tabCategory:function(e){
    var that = this;
    var searchHandle = that.data.searchHandle;
    var index = e.currentTarget.dataset.active;
    var allList = [];
    that.setData({
      hidden: true
    });
    if (searchHandle == index) {
      that.setData({
        color: '',
        display: false,
        searchStyle: '',
        searchHandle: '0',
        zIndex: "-1",
        box: ''
      });
    } else {
      var display = e.currentTarget.dataset.display;
      var color = 'change' + index;
      var searchStyle = 'active' + index;
      //当前点击内容出现
      that.setData({
        color: color,
        display: true,
        searchStyle: searchStyle,
        searchHandle: index,
        zIndex: "1",
        imgSrc: "../../../img/top_bg" + index + ".jpg",
        box: 'box'

      });
    }
    wx.request({
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'get',
      url: app.globalData.webSite + '/weixin.php/wechat/getcategory',
      success:function(res){
       if(res.data.code==0){
         res.data.data[0].active = '1';
         if (res.data.data[0].subcat==undefined){
              res.data.data[0]=[]
         }
         that.setData({
           typeLeft:res.data.data,
           listArea:res.data.data[0].subcat

         })
       }
      },
    })
  },
  //listAreaBelong点击,类别左边
  listAreaBelongChange: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var listAreaBelong = that.data.typeLeft;
    var listArea;
    //清空
    listAreaBelong.forEach(function (val,key) {
      listAreaBelong[key].active = '0';
    });
    //改变active
    listAreaBelong.forEach(function (val,key) {
      if (val.id == id) {
        listAreaBelong[key].active = '1';
        
        //根据id生成新listArea
        if (val.subcat != undefined){
          listArea = val.subcat;
        }else{
          listArea=[]
        }  
      }
     
    });
   
    //数据绑定
    that.setData({
      typeLeft: listAreaBelong,
      listArea: listArea
    });
  },

  
    //点击价格，类别显示不同的内容
  //点击价格，类别显示不同的内容
  tabChange:function(e){
    console.log(e);
    var that=this;
    var searchHandle = that.data.searchHandle;
    var index = e.currentTarget.dataset.active;
    that.setData({
      hidden: true
    });
    if(searchHandle == index) {
      that.setData({
        color: '',
        display: false,
        searchStyle: '',
        searchHandle: '0',
        zIndex:"-1",
        box:''
      });
    }else {
      var display = e.currentTarget.dataset.display;
      var color = 'change' + index;
      var searchStyle = 'active' + index;
      //当前点击内容出现
      that.setData({
        color: color,
        display: true,
        searchStyle: searchStyle,
        searchHandle: index,
        zIndex:"1",
        imgSrc:"../../../img/top_bg"+index+".jpg",
        box:'box'

      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        var screenHeight = res.screenHeight;
        var windowHeight = res.windowHeight;
        var windowWidth = res.windowWidth;
        that.setData({
          screenHeight: screenHeight,
          windowHeight: windowHeight,
          windowWidth : windowWidth
        });
      },
    })
   
   var hotelList=[];

    var listAll = [];
    var listAreaBelong = [];
    var listArea = [];
    //请求接口
    wx.request({
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'get',
      url: app.globalData.webSite + '/weixin.php/wechat/getgoods',
      success:function(res){
         if(res.data.code==0){
           hotelList = res.data.data;
           that.setData({
             allList:res.data.data
           })
         }
      },
    })
    hotelList.forEach(function(val1,key1) {
     
      //第一次加载，改变第一项active
      if(key1 == '0'){
          hotelList[key1].active = '1';
      }
      listAreaBelong.push(val1);
      val1.subcat.forEach(function(val2,key2) {
          if(key1 == '0') {
            listArea.push(val2);
          }
          
      });
    });

    //数据绑定
    that.setData({
      listAreaBelong: listAreaBelong,
      listArea:listArea,
      listAll: listAll
    });
  },

 
  //listArea点击，类别右边
  listAreaChange: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var listArea = that.data.listArea;
    var allList;
    //清空
    listArea.forEach(function (val, key) {
      listArea[key].active = '0';
    });
    //改变active
    listArea.forEach(function (val, key) {
      if (val.id == id) {
        listArea[key].active = '1';
        allList = val.subcat;
        if (listArea[key].length!=0){
          that.setData({
            categroy_two_single: listArea[key]
          }) 
        }else{
          that.setData({
            categroy_two_single: []
          })
        }
        
      }
    });
    wx.setStorage({
      key: 'listHotel',
      data: allList
    })
    that.setData({
      listArea: listArea,
    });
  },
  empty:function(){
    var that = this;
    that.setData({
      color: '',
      display: false,
      searchStyle: '',
      searchHandle: '0',
      zIndex: "-1",
      box: ''
    });
  },
  confire:function(){
    var that = this;
    that.setData({
      color: '',
      display: false,
      searchStyle: '',
      searchHandle: '0',
      zIndex: "-1",
      box: ''
    });
   console.log("二级目录");
   console.log(that.data.categroy_two_single);
    var categroy_two_single = that.data.categroy_two_single;
    wx.request({
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'get',
      data:{
        id: categroy_two_single.id
      },
      url: app.globalData.webSite + '/weixin.php/wechat/searchCate/id/2',
      success: function (res) {
        that.setData({
          allList:res.data.data
        })
      },
    })
  },
  //类别确定按钮，点击跳转到预约页面
  addChange:function(e){
    var that=this;
    var singleHotel = JSON.stringify(e.currentTarget.dataset.singlehotel);
    wx.navigateTo({
      url: '/pages/medical/detail/index?single=' + singleHotel,
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