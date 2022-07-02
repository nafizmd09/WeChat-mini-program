// pages/7_Map_Component/7_Map_Component.js
Page({

  /**
   * Page initial data
   */
  data: {
    makers:[{
        id: '001',
        latitude: 22.330370,
        longtitude: 91.832626,
        label:{
          content:'Ganzhou'
        }
      }],

  },
  regionChange:function(e){
    console.log("regionChange is triggered, view has been changed");
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})