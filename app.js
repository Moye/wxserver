const express = require('express'), //express 框架 
	   wechat = require('./wechat'),  //引入加密模块
       config = require('./config');//引入配置文件
//实例 express
var app = express();

var wechatApp = new wechat(config); //实例wechat 模块

//用于处理所有进入 3000 端口 get 的连接请求
app.get('/',function(req,res){
    wechatApp.auth(req,res);
});

//用于请求获取 access_token
app.get('/getAccessToken',function(req,res){
    wechatApp.getAccessToken().then(function(data){
        res.send(data);
    });    
});

//用于请求获取 access_token
app.get('/sendTemplateMessage',function(req,res){
    wechatApp.sendTemplateMessage().then(function(data){
        res.send(data);
    });
});

//监听3000端口
app.listen(3000);
