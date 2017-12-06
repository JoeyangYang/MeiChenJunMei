Page({
  data: {
    hidden: true
  },
  changeHidden: function () {
    this.setData({
      hidden: !this.data.hidden
    });
  }
})  