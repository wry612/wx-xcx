//offer.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array1: ['全部品牌', '中茶普洱', '大益', '下关沱茶', '七彩云南', '陈升号', '八角亭', '老同志', '龙园号', '澜沧古茶', '柏联普洱', '龙润', '书剑'],
    array2: ['全部品名', '七三厚砖', '七四厚砖', '七五厚砖'],
    array3: ['全部工艺', '熟茶', '生茶', '半熟茶'],
    array4: ['全部年份', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003'],
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 0,
    isDisabled: true,
    disabledClass: 'disabled',
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
    }, {
      commodityId: 3,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      value: '99999.99',
      company: '南京普洱商贸有限公司'
    }, {
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
    }, {
      commodityId: 3,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
      type: '熟茶',
      time: '2017年',
      value: '99999.99',
      company: '南京普洱商贸有限公司'
    }],
    height: '600px'
  },
  toSearch: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  bindPickerChange1: function (e) {
    if (e.detail.value == 0) {
      this.setData({
        isDisabled: true,
        index2: 0,
        disabledClass: 'disabled'
      })
    } else {
      this.setData({
        isDisabled: false,
        disabledClass: ''
      })
    }
    this.setData({
      index1: e.detail.value,
      array2: ['全部品名', '三厚砖', '四厚砖', '五厚砖']
    })
  },
  bindPickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    this.setData({
      index3: e.detail.value
    })
  },
  bindPickerChange4: function (e) {
    this.setData({
      index4: e.detail.value
    })
  },
  upper: function (e) {
    wx.showLoading({ title: '加载中……' })
    this.setData({
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
      }, {
        commodityId: 3,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        value: '99999.99',
        company: '南京普洱商贸有限公司'
      }, {
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
      }, {
        commodityId: 3,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        value: '99999.99',
        company: '南京普洱商贸有限公司'
      }]
    })
    wx.hideLoading()
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
    }, {
      commodityId: 3,
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
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
  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: (res.windowHeight - 100) + 'px'
        })
      }
    })
  },
  onPullDownRefresh: function () {
    this.setData({
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
      }, {
        commodityId: 3,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        value: '99999.99',
        company: '南京普洱商贸有限公司'
      }, {
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
      }, {
        commodityId: 3,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '明月几时哟八九文强天明月几时哟八九文强天明月几时哟八九文强天',
        type: '熟茶',
        time: '2017年',
        value: '99999.99',
        company: '南京普洱商贸有限公司'
      }]
    })
  }
})
