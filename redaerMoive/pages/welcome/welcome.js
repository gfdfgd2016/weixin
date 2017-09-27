Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
onTap:function(){
  // wx.navigateTo({
  //   url: '../posts/post',
  // });
  wx.redirectTo({
    url: '../posts/post',
  })
  },
// onTextTap:function(){
//   console.log("text");
// },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },


})