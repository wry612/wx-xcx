//search.js
//获取应用实例
var app = getApp()
Page({
  data: {
    historyList:['中茶大树','中茶大树','中茶大树','中茶大树','中茶大树'],
    hotList:['中茶大树','挖山茶厂','2dd016热茶','201ss6熟茶','中茶大树']
  },
  //事件处理函数
  search: function(e) {
    wx.switchTab({
      url: '../offer/offer?searchKey='+e.target.id
    })
  },
  toSearch: function(e) {
    wx.switchTab({
      url: '../offer/offer?searchKey='+e.detail.value
    })
  },
  onLoad: function () {
    
  }
})
