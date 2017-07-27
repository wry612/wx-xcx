//user.js
//获取应用实例
var app = getApp()
Page({
  data: {
    news: {
      title: '茶区美食一：勐海，唯有三公里考级啊加班费',
      time: '2017-03-30',
      praise: 99999,
      content: [
        {
          type: 1,
          detail: '爱茶之人中不乏爱食之人，灵敏的味觉总能将一切美好的滋味吸收聚拢。'
        },
        {
          type: 1,
          detail: '中国茶区辽阔，生态资源丰富，人杰地灵，除了产出各类品质极优的茶叶之外，还藏匿着一些我们不曾知道的美食。'
        },
        {
          type: 1,
          detail: '近期，茶语网推出茶区美食系列故事。在这个系列中，我们将分享当地最资格、最传奇、最好吃的茶区美食给广大茶友，以期让大家在品饮或行走茶区时，获得更多舌尖上的乐趣。'
        },
        {
          type: 1,
          detail: '当飞机降落在嘎洒机场时，却没能抬头享受西双版纳的一朵云。整个脑袋状如浆糊般，所有感官机体全面罢工。前一晚贪凉导致的低烧仍然持续不间断折腾，版纳湿热的天气包裹身体，绵软无力。'
        },
        {
          type: 2,
          detail: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        },
        {
          type: 1,
          detail: ' 猛喝一口水，向一旁的伙伴老王建议，休息一晚再上易武。老王笑着回应，正合心意，带你去勐海吃烤鸡，治百病。作为一枚吃货，即使病中，在听到“吃烤鸡”时，眼里也迸发出了亮光。'
        },
        {
          type: 1,
          detail: '勐海不仅产茶，还有烤鸡'
        },
        {
          type: 1,
          detail: '勐海县距州府景洪40公里，是闻名中外的“普洱茶”的故乡和中国产茶最早之地，有着1700年前的野生“茶树王”以及星罗棋布的古茶树群。'
        },
        {
          type: 1,
          detail: '从景洪驱车，45分钟到达勐海。经过县上一个小环岛，右边出口再走几百米便抵达“三公里烤鸡”的地界。'
        },
        {
          type: 3,
          detail: 'http://www.w3school.com.cn/i/movie.ogg'
        },
        {
          type: 1,
          detail: '推荐指南'
        },
        {
          type: 1,
          detail: '店名：三公里烤鸡店'
        },
        {
          type: 1,
          detail: '人均：50元'
        },
        {
          type: 1,
          detail: '地址：勐海县三公里（近勐遮方向，惠勐公路昌达汽车对面）'
        },
        {
          type: 1,
          detail: '其他美食：除了烤鸡之外，烤五花肉、包浆豆腐、烤午餐肉，也是一绝。'
        }
      ]
    },
    bookList: [
        {
          headImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: '茶言观色',
          time: '2017-04-30',
          text: '爱茶之人中不乏爱食之人，灵敏的味觉总能将一切美好的滋味吸收聚拢。'
        }, {
          headImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: '茶言观色',
          time: '2017-04-30',
          text: '爱茶之人中不乏爱食之人，灵敏的味觉总能将一切美好的滋味吸收聚拢。'
        }, {
          headImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: '茶言观色',
          time: '2017-04-30',
          text: '爱茶之人中不乏爱食之人，灵敏的味觉总能将一切美好的滋味吸收聚拢。'
        }
      ],
    height: 0,
    isShow: true,
    userBook: '',
    focus: false,
    isFocus: false
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
  praise: function () {
    console.log('赞')
  },
  lower: function () {
    wx.showLoading({ title: '加载中……' })
    var list = [{
      headImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '茶言观色',
      time: '2017-04-30',
      text: '爱茶之人中不乏爱食之人，灵敏的味觉总能将一切美好的滋味吸收聚拢。'
    }, {
      headImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '茶言观色',
      time: '2017-04-30',
      text: '爱茶之人中不乏爱食之人，灵敏的味觉总能将一切美好的滋味吸收聚拢。'
    }, {
      headImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '茶言观色',
      time: '2017-04-30',
      text: '爱茶之人中不乏爱食之人，灵敏的味觉总能将一切美好的滋味吸收聚拢。'
    }]
    var arr = this.data.bookList.concat(list)
    this.setData({
      bookList:arr
    })
    wx.hideLoading()
  },
  showTextarea: function () {
    this.setData({
      isShow: false,
      focus: false,
      isFocus: true
    })
  },
  cancel: function () {
    this.setData({
      isShow: true,
      focus: false,
      isFocus: false
    })
  },
  sendMessage: function () {
    wx.showToast({
      title: '发送成功',
      duration: 3000
    })
    this.setData({
      isShow: true,
      focus: false,
      isFocus: false
    })
  },
  getText: function (e) {
    console.log(e.detail.value)
    this.setData({
      userBook: e.detail.value
    })
  },
  onShareAppMessage: function () {
    return {
      title: '茶言观色',
      path: '/news/news',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  }
})