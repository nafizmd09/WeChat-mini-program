Page({
    data:{
        msg1: 'Bangladesh ',
        msg2: 2022
    },
    myData: '2520190011',
    onLoad:function(options){
      console.log(this.myData)
    },

    butTap:function(){
        console.log('Nafiz Md Imtiaz Uddin')
        
    },

    onShareAppMessage:function(res){
        if(res=='button'){
            console.log(res.target)
        }
        return{
            title: "Share File",
            path: '/page/user?id=123'
        }
    }
  })