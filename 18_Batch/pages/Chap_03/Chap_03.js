// pages/Chap_03/Chap_03.js
Page({
    data: {
        today: "2022-04-01.",
        //----------------------------------------------------------- 
        msg1: "\nHello ", 
        msg2: 2021, 

        id: "myView",

        condition: true,
        
        result: true, //////////// er por
        a:1, b: 2, c:3, 

        x:10,

        name: 'Mini Program',

        object:{
            key1: 'Hello',
            key2: 'Goodbye'
        },
        array: ['2019','2020','2021'],

        x: 3,

        value1 : 'admin',
        value2 : '123456',

        student:{
            stuID : '123',
            stuName : 'Zhangsan'
        },

        x : '123',
        y : '456',

        obj : {
             x : 1,
             y : 2
             },
        y : 6, //Here is the same key name y as in line 5, which will overwrite the former value
        
        

        array:[ '张三', '李四', '王五'],


            
        name1: 'Uddin', name2:'JXUST-19Batch'

    },

//Chapter-03~ 2. Life cycle callback function (20 page)

//Chapter-03~ 3.Page event handler function cont. (24 page)
onShareAppMessage: function (res) {
    if (res.from === 'button') {
    console.log(res.target) // information of the forward button on the page
    }
    return {
    title: ' Custom forwarding header',
     path: '/page/user?id=123' // Custom forwarding
     }
     },

//Chapter-03~ 4. Component event handler function cont (28 page)
tap:function(){
    console.log("Button is clicked"),
    console.log(e)
},
myTap:function(e){
    console.log(e)
},

//Chapter-03~ 5. route (29 page)
onShow: function () {
    console.log(this.route)
},

//Chapter-03~ 6. setData (32 page)
    changeDate:function(){
        console.log("Date clicked"),
        this.setData({today:"2022-01"})

    },



})