

// pages/3_BasicContent/3_BasicContent.js
Page({

    /**
     * Page initial data
     */
    data: {
        checkboxitems:[
            {name:'apple',value:'apple'},
            {name:'orange',value:'orange',checked:'true'},
            {name:'pear',value:'pear'},
            {name:'strawberry',value:'strawberry'},
            {name:'grape',value:'grape'},
            {name:'banana',value:'banana'},
        ],
        selectorItems:['Chittagong','Dhaka','Khulna'], //6. Picker application
        multiSelectorItems: [['borscht', 'mushroom soup'], ['steak', 'chicken chop', 'fish steak'], ['ice cream', 'egg pudding']], //6. Picker application 

        soup: ['mushroom', 'vegetable', 'tofu'],
        maincourse: ['beaf', 'steak', 'samon'],
        tea: ['Black','Green','Raw'],
        value:[1,1,1],
        menu:[], 


        radioItems:[{name:'apple', value:'apple'}, {name:'grave', value:'grave',checked:"true"}, {name:'pear', value:'pear'}, {name:'bananana', value:'bananana'}, {name:'orange', value:'orange'}],
    },

    //************************************* */
    //6. picker application (Normal picker)
    //************************************* */
        selectorChange:function(e) {
        let i = e.detail.value;//获得选项的数组下标
        let value = this.data.selectorItems[i];//获得选项的值
        this.setData({selector:value});//将选项名称更新到WXML页面上
      },
    

       //*********************************************** */
      //6. picker application (Multiple column selector)
      //*********************************************** */
      multiSelectorChange: function (e) {
        let arrayIndex = e.detail.value;//获得选项的数组下标
        let array = this.data.multiSelectorItems;//获得选项数组
        let value = new Array();//声明一个空数组，用于存放最后选择的值
        for(let i=0;i<arrayIndex.length;i++){
          let k = arrayIndex[i];//第i个数组的元素下标
          let v = array[i][k];//获得第i个数组的元素值
          value.push(v);//往数组中追加新元素
        }
        this.setData({ multiSelector: value });//将选项名称更新到WXML页面上
      },
    

       //************************************* */
      //6. picker application (3. Time picker)
       //************************************ */
      timeChange: function (e) {
        let value = e.detail.value;//获得选择的时间
        this.setData({ time: value });//将选项名称更新到WXML页面上
      },

       //************************************* */
      //6. picker application (4. Date picker)
       //************************************ */
      dateChange: function (e) {
        let value = e.detail.value;//获得选择的日期
        this.setData({ date: value });//将选项名称更新到WXML页面上
      },

       //************************************* */
      //6. picker application (5. Province/ City selector)
       //************************************ */
       regionChange: function (e) {
       let value = e.detail.value;// Get the selected provinces and municipalities
    this.setData({ region: value });//Update the option name to the WXML page   
    },
    
    pickerviewchange:function(e){
        let v = e.detail.value;
        let menu = [];
        menu.push(this.data.soup[v[0]]);
        menu.push(this.data.maincourse[v[1]]);
        menu.push(this.data.tea[v[2]]);
        this.setData({menu:menu});
    },



    radioChange:function(e){
        console.log('Radio is changed the seclected value is '+e.detail.value);
    },



    sliderChange:function(e){
        console.log('Slider changed, the current value is '+e.detail.value);
    },


        switchChange:function(e){
            console.log('Switch is changed, the current value is '+e.detail.value);
        },
        getUserDetail:function(e){
            console.log(e.detail.userInfo)
        },





        checkboxchange:function(e){
            console.log('Checkbox is changed, the selected value: '+e.detail.value);
        },
        // getBlur:function(e){
        //     console.log("1getBlur triggered, input box lost focus current value is "+e.detail.value);
        // },
        getInput:function(e){
            console.log("2getInput triggered, input box lost focus current value is "+e.detail.value);
        },


        onSubmit1:function(e){
            console.log("From is submitted: ")
            console.log(e.detail.value);
        },
        onReset1:function(e){
            console.log("From is reset");
        },
        switchChange:function(e){
            console.log("regionChange is triggered, view has been changed ");
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