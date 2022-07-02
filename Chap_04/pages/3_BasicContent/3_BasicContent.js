

// pages/3_BasicContent/3_BasicContent.js
Page({

    /**
     * Page initial data
     */
    data: {
        array:[1,2,3,4,5,6,7,8,9],
        iconType:['success','success-no-circle','warn','waiting','cancel','download','search','clear'],
        iconColor:['orange','pink','purple','red','green','blue','brown'],
        iconSize:[60,55,50,45,40,35,30,25,20],

        /*********************************************************/

        //nodes:'<div style="line-height:60px;color:red;">Uddin-RICH TEXT</div>',
        nodes: [{
            name: 'div',
            attrs: {
              style: 'line-height: 90px; color: green;'
            },
            children: [{
                type: 'text',
                text: 'Nafiz Md Imtiaz Uddin!'
              }]
            }],
            nodes1: [{
                name: 'div',
                attrs: {
                  style: 'line-height: 30px; color: green;font-weight:bold'
                },
                children: [{
                    type: 'text',
                    text: 'Nafiz Md Imtiaz Uddin!'
                  }]
                }],
                nodes2: [{
                    name: 'div',
                    attrs: {
                      style: 'line-height: 5px; color: red;font-weight:bold'
                    },
                    children: [{
                        type: 'text',
                        text: 'Nafiz Md Imtiaz Uddin!'
                      }]
                    }],
                    nodes3: [{
                        name: 'div',
                        attrs: {
                          style: 'line-height: 25px; color: red;font-weight:bold'
                        },
                        children: [{
                            type: 'text',
                            text: 'JXUST-2019Batch'
                          }]
                        }],
      

        /*********************************************************/

        
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {

    },

    /**
 ,    * Lifecycle function--Called when page is initially rendered
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