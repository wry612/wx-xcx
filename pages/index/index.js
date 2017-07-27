//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    height:0,
    swiperNewsList: [
      {
        newsId: 1,
        title: "左手深渊 右手悬崖 普洱好茶藏绝境",
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        newsId: 2,
        title: "左手深渊 右手悬崖 普洱好茶藏绝境",
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      },
      {
        newsId: 3,
        title: "左手深渊 右手悬崖 普洱好茶藏绝境",
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    indicatorColor: "rgba(255,255,255,0.3)",
    indicatorActiveColor: "#fff",
    newsList: [
      {
        newsId: 4,
        type: 1,
        title: "左手深渊 右手悬崖 普洱好茶藏绝境洱好茶藏绝境洱好茶藏绝境",
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        praise: 99999,
        comment: 999
      },
      {
        newsId: 5,
        type: 1,
        title: "左手深渊 右手悬崖 普洱好茶藏绝境",
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        praise: 99999,
        comment: 999
      },
      {
        newsId: 6,
        type: 1,
        title: "左手深渊 右手悬崖 普洱好茶藏绝境",
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        praise: 99999,
        comment: 999
      }, {
        newsId: 7,
        type: 2,
        title: "禅茶一味",
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        praise: 99999,
        comment: 999
      }, {
        newsId: 8,
        type: 3,
        title: "一生只做一件事，那就是不告你 其实我也不知道",
        imgList: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
        praise: 99999,
        comment: 999
      }, {
        newsId: 9,
        type: 1,
        title: "左手深渊 右手悬崖 普洱好茶藏绝境洱好茶藏绝境洱好茶藏绝境",
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        praise: 99999,
        comment: 999
      },
      {
        newsId: 10,
        type: 1,
        title: "左手深渊 右手悬崖 普洱好茶藏绝境",
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        praise: 99999,
        comment: 999
      },
      {
        newsId: 11,
        type: 1,
        title: "左手深渊 右手悬崖 普洱好茶藏绝境",
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        praise: 99999,
        comment: 999
      }
    ]
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
  upper: function (e) {
    wx.showLoading({ title: '加载中……' })
    this.setData({
      swiperNewsList: [
        {
          newsId: 1,
          title: "左手深渊 右手悬崖",
          img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        },
        {
          newsId: 2,
          title: "左手深渊 右手悬崖",
          img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
        },
        {
          newsId: 3,
          title: "左手深渊 右手悬崖 普洱好茶藏绝境",
          img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        }], newsList: [
          {
            newsId: 4,
            type: 1,
            title: "左手深渊 右手悬崖 普洱好茶藏绝境洱好茶藏绝境洱好茶藏绝境",
            img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            praise: 99999,
            comment: 999
          },
          {
            newsId: 5,
            type: 1,
            title: "左手深渊 右手悬崖 普洱好茶藏绝境",
            img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            praise: 99999,
            comment: 999
          },
          {
            newsId: 6,
            type: 1,
            title: "左手深渊 右手悬崖 普洱好茶藏绝境",
            img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            praise: 99999,
            comment: 999
          }, {
            newsId: 7,
            type: 2,
            title: "禅茶一味",
            img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            praise: 99999,
            comment: 999
          }, {
            newsId: 8,
            type: 3,
            title: "一生只做一件事，那就是不告你 其实我也不知道",
            imgList: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
            praise: 99999,
            comment: 999
          }, {
            newsId: 9,
            type: 1,
            title: "左手深渊 右手悬崖 普洱好茶藏绝境洱好茶藏绝境洱好茶藏绝境",
            img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            praise: 99999,
            comment: 999
          },
          {
            newsId: 10,
            type: 1,
            title: "左手深渊 右手悬崖 普洱好茶藏绝境",
            img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            praise: 99999,
            comment: 999
          },
          {
            newsId: 11,
            type: 1,
            title: "左手深渊 右手悬崖 普洱好茶藏绝境",
            img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            praise: 99999,
            comment: 999
          }
        ]
    })
    wx.hideLoading()
  },
  lower: function (e) {
    wx.showLoading({ title: '加载中……' })
    var list = [{
      newsId: 12,
      type: 2,
      title: "禅茶一味",
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      praise: 99999,
      comment: 999
    }, {
      newsId: 13,
      type: 3,
      title: "一生只做一件事，那就是不告你 其实我也不知道",
      imgList: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      praise: 99999,
      comment: 999
    }]
    var arr = this.data.newsList.concat(list)
    this.setData({
      newsList: arr
    })
    wx.hideLoading()
  }
})
