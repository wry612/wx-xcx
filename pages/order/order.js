//offer.js
//获取应用实例
var app = getApp()
Page({
  data: {
    orderList: [{
      orderId: 1,
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }, {
      orderId: 2,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }, {
      orderId: 3,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }, {
      orderId: 1,
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }, {
      orderId: 2,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }, {
      orderId: 3,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }, {
      orderId: 3,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }],
    height: '600px'
  },
  upper: function (e) {
    wx.showLoading({ title: '加载中……' })
    this.setData({
      orderList: [{
        orderId: 1,
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 2,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 3,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 1,
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 2,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 3,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 3,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }]
    })
    wx.hideLoading()
  },
  lower: function (e) {
    wx.showLoading({ title: '加载中……' })
    var list = [{
      orderId: 1,
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }, {
      orderId: 2,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }, {
      orderId: 3,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }, {
      orderId: 3,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      num: 2,
      state: '已发货'
    }]
    var arr = this.data.orderList.concat(list)
    this.setData({
      orderList: arr
    })
    wx.hideLoading()
  },
  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight + 'px'
        })
      }
    })
  },
  onPullDownRefresh: function () {
    this.setData({
      orderList: [{
        orderId: 1,
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 2,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 3,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 1,
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 2,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }, {
        orderId: 3,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        num: 2,
        state: '已发货'
      }]
    })
  }
})
