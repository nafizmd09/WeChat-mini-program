// pages/6_Media Component/6_Media Component.js
Page({

  /**
   * Page initial data
   */
  data: {
    poster: "/MediaFiles/music.jpg",
    name: "JXUST music",
    author: "xiaoMing",
    src: "/MediaFiles/JXUST_song.mp3",

    srcImage: "/MediaFiles/monalisa.jpg"

  },
  audioPlay: function (options) {
    this.audioCtx.play()
  },
  audioPause: function (options) {
    this.audioCtx.pause()
  },
  audio14: function (options) {
    this.audioCtx.seek(0)
  },

  // audioStart: function () {
  //   this.audioCtx.seek(0)
  // },
  onReady:function(){
    this.audioCtx=wx.createAudioContext('myAudio')
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */


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