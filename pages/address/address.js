//address.js
Page({
  data: {
    
  },
  formSubmit: function(e) {
    wx.navigateBack()
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  onLoad: function () {
   
  }
})
