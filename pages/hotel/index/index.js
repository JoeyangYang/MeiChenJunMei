// pages/hotel/index/index.js
var data=new Date();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: "true",
    nightNum: '1',
    display: false,
    searchHandle: '0',
    imgSrc1:'../../../img/top_bg.jpg'
  },
  tabChange:function(e){
    var that=this;
    var searchHandle = that.data.searchHandle;
    var index = e.currentTarget.dataset.active;
    var listAll = [];
    if(searchHandle == index) {
      that.setData({
        color: '',
        display: false,
        searchStyle: '',
        searchHandle: '0'
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
        searchHandle: index
      });
    }

    if (e.currentTarget.dataset.ok) {
      wx.getStorage({
        key: 'listHotel',
        success: function (res) {
          that.setData({
            listAll: res.data,
          })
        },
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var hotelList = [
      {
        id: '1',
        name: "微整形中心",
        data: [
          {
            id: '1',
            name: "深V假体丰胸",
            data: []
          },
          {
            id: '2',
            name: "韩式隆鼻",
            data: []
          },
          {
            id: '3',
            name: "双眼皮",
            data: []
          },
          {
            id: '4',
            name: "祛眼袋",
            data: []
          },
          {
            id: '5',
            name: "全鼻整形",
            data: []
          },
          {
            id: '6',
            name: "全鼻整形",
            data: []
          },
          {
            id: '7',
            name: "全鼻整形",
            data: []
          }
        ]
      },
      {
      id: '2',
      name: '整形中心',
      data: [
        {
          id: '1',
          name: '韩式隆鼻',
          data: [
            {
              id: "1",
              name: '面部紧致提升',
              effect:"国际前沿微创技术",
              data: {
                id:1,
                address: '昆明市五华区XXXXXXXXX号',
                phone: '0871-46275645',
                price: '199',
                homeStyle: [
                  {
                    price: '258',
                    name: '主体大床房',
                    spec: ['20平方','大床','有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '258'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '260'
                      }
                    ],
                  },
                  {
                    price: '238',
                    name: '主题中等房',
                    spec: ['15平方', '中床', '有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '258'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '260'
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "2",
              name: '急速纳米美艳',
              effect:'避开大血管 更安全 自然',
              data: {
                id: 2,
                address: '昆明市五华区XXXXXXXXX2号',
                phone: '0871-46275645',
                price: '199',
                homeStyle: [
                  {
                    name: '主体大床房',
                    price: '288',
                    spec: ['30平方', '大床', '有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '288'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '290'
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "3",
              name: '玻尿酸',
              effect:'改变时间的烙印',
              data: {
                id: 3,
                address: '昆明市五华区XXXXXXXXX2号',
                phone: '0871-46275645',
                price: '199',
                homeStyle: [
                  {
                    name: '主体大床房',
                    price: '329',
                    spec: ['50平方', '大床', '有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '329'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '330'
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },

        {
          id: '2',
          name: '韩式隆鼻',
          data: [
            {
              id:"1",
              name: '敏感肌综合疗法',
              effect:'治疗皮肤泛红瘙痒等',
              data: {
                id: 4,
                address: '昆明市盘龙区XXXXXXXXX号',
                phone: '0871-46275645',
                price: '199',
                homeStyle: [
                  {
                    name: '主体大床房',
                    price: '258',
                    spec: ['20平方', '大床', '有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '258'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '260'
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "2",
              name: '原生俏鼻',
              effect:'精雕九大区域 重建结构',
              data: {
                id: 5,
                address: '昆明市盘龙区XXXXXXXXX2号',
                phone: '0871-46275645',
                price: '199',
                homeStyle: [
                  {
                    name: '主体大床房',
                    price: '288',
                    spec: ['30平方', '大床', '有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '288'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '290'
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "3",
              name: '嘉优隆酒店3(盘龙区)',
              data: {
                id: 6,
                address: '昆明市盘龙区XXXXXXXXX2号',
                phone: '0871-46275645',
                price: '199',
                homeStyle: [
                  {
                    name: '主体大床房',
                    price: '329',
                    spec: ['50平方', '大床', '有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '329'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '330'
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },

        {
          id: '3',
          name: '韩式隆鼻',
          data: [
            {
              id: "1",
              name: '嘉优隆酒店1(西山区)',
              data: {
                id: 7,
                address: '昆明市西山区XXXXXXXXX号',
                phone: '0871-46275645',                
                price: '199',
                homeStyle: [
                  {
                    name: '主体大床房',
                    price: '258',
                    spec: ['20平方', '大床', '有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '258'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '260'
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "2",
              name: '嘉优隆酒店2(西山区)',
              data: {
                id: 8,
                address: '昆明市西山区XXXXXXXXX2号',
                phone: '0871-46275645',
                price: '199',
                homeStyle: [
                  {
                    name: '主体大床房',
                    price: '288',
                    spec: ['30平方', '大床', '有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '288'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '290'
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "3",
              name: '嘉优隆酒店3(西山区)',
              data: {
                id: 9,
                address: '昆明市西山区XXXXXXXXX2号',
                phone: '0871-46275645',
                price: '199',
                homeStyle: [
                  {
                    name: '主体大床房',
                    price: '329',
                    spec: ['50平方', '大床', '有床'],
                    member: [
                      {
                        name: '会员价',
                        spec: ['含早'],
                        price: '329'
                      },
                      {
                        name: '会员价',
                        spec: ['含早', '免费停车'],
                        price: '330'
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        
      ]
    }
    ];

    var listAll = [];
    var listAreaBelong = [];
    var listArea = [];

    hotelList.forEach(function(val1,key1) {
      //第一次加载，改变第一项active
      if(key1 == '0'){
          hotelList[key1].active = '1';
      }
      listAreaBelong.push(val1);
      val1.data.forEach(function(val2,key2) {
          if(key1 == '0') {
            listArea.push(val2);
          }
          val2.data.forEach(function(val3,key3) {
            listAll.push(val3);
          });
      });
    });

    //数据绑定
    that.setData({
      listAreaBelong: listAreaBelong,
      listArea:listArea,
      listAll: listAll
    });
  },

  //listAreaBelong点击
  listAreaBelongChange:function (e){
     var that = this;
     var id = e.currentTarget.dataset.id;
     var listAreaBelong = that.data.listAreaBelong;
     var listArea;
     //清空
     listAreaBelong.forEach(function (val, key) {
       listAreaBelong[key].active = '0';
     });
     //改变active
     listAreaBelong.forEach(function(val,key) {
        if(val.id == id) {
          listAreaBelong[key].active = '1';
          //根据id生成新listArea
          listArea = val.data;
        }
     });

     //数据绑定
     that.setData({
       listAreaBelong: listAreaBelong,
       listArea: listArea
     });
   },

  //listArea点击
  listAreaChange: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var listArea = that.data.listArea;
    var listHotel;
    //清空
    listArea.forEach(function (val, key) {
      listArea[key].active = '0';
    });
    //改变active
    listArea.forEach(function (val, key) {
      if (val.id == id) {
        listArea[key].active = '1';
        listHotel = val.data;
      }
    });
    wx.setStorage({
      key: 'listHotel',
      data: listHotel
    })
    that.setData({
      listArea: listArea,
    });
  },

  addChange:function(e){
    var that=this;
    var singleHotel = e.currentTarget.dataset.singlehotel;
    wx.setStorage({
      key: 'singleHotel',
      data: singleHotel
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