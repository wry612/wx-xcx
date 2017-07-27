//offerDetail.js
Page({
  data: {
    commodity: {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '挖山印象 熟茶 2016',
      value: '257.45元/饼',
      tradePrice: '230.00元/饼',
      Manufacturer: '云南沧源山挖山茶厂',
      brand: '挖山映像',
      technology: '熟茶',
      area: '云南',
      specifications: '357g',
      time: '2016年',
      historyPrice: [],
      comment: '    这款熟茶原料细嫩，香气和滋味表现不俗。 香气纯净，枣香、果香、糯香明显，同时伴有干净的米仓香气，香气持续到尾水；滋味则是有持续的甜感，茶汤里香气表现明显，水含香好；茶汤稠滑，饮完口腔带有清凉气息，茶叶耐泡度高。但喉咙稍有发干，回甘生津稍慢。',
      score: ['5.0', '5.0', '5.0', '5.0', '5.0', '5.0']
    },
    commodityList: [{
        commodityId: 1,
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        value: '99999.99',
        company: '南京普洱商贸有限公司'
      }, {
        commodityId: 2,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        value: '99999.99',
        company: '南京普洱商贸有限公司'
      }],
    height: 0,
    userIntegral: 9999,
    unitIntegral: 120,
    needIntegral: 120,
    isHidden1: true,
    isHidden2: true,
    max: 1
  },
  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        var mx = Math.floor(that.data.userIntegral / that.data.unitIntegral)
        that.setData({
          height: res.windowHeight + 'px',
          max: mx
        })
      }
    })
  },
  lower: function (e) {
    wx.showLoading({ title: '加载中……' })
    var list = [{
      commodityId: 1,
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      value: '99999.99',
      company: '南京普洱商贸有限公司'
    }, {
      commodityId: 2,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      value: '99999.99',
      company: '南京普洱商贸有限公司'
    }]
    var arr = this.data.commodityList.concat(list)
    this.setData({
      commodityList: arr
    })
    wx.hideLoading()
  },
  sliderChange: function (e) {
    console.log(e.detail.value)
    var num = e.detail.value * this.data.unitIntegral
    this.setData({
      needIntegral: num
    })
  },
  showPop1: function () {
    this.setData({
      isHidden1: false
    })
  },
  showPop2: function () {
    this.setData({
      isHidden2: false
    })
  },
  cancel: function () {
    this.setData({
      isHidden1: true,
      isHidden2: true
    })
  },
  formSubmit: function () {
    this.setData({
      isHidden1: true
    })
    wx.showModal({
      title: '兑换成功',
      content: '您已成功兑换 完善印象熟茶2016 茶样，我们会晶块为您发货',
      showCancel: false,
      success: function (res) {

      }
    })
  },
  send: function () {
    this.setData({
      isHidden2: true
    })
    wx.showModal({
      title: '已送达',
      content: '我们已经收到您的购买询价需求并晶块与您联系',
      showCancel: false,
      success: function (res) {

      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '茶言观色',
      path: '/offerDetail/offerDetail',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  }
})
