// pages/posts/post.js
// 得到数据 相对路径'../../data/posts-data.js'只能使用相对路径，小程序编译环境不完善
var postsData = require('../../data/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
//小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
//而这个董熊A的执行，实在onload事件执行之后发生的  this.data.postsList = postsData.postLists not work?????

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
   
    this.setData({postsList:postsData.postLists})
    
      },


})