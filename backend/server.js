const express = require("express");

const server = express();

//在网页上显示APIisrunning localhost 5000
//下面这三行是为了从reticles.js 文件中获取常量const reticles的静态数据
//server.get('/api/articles', (req,res) => {
//    res.json(articles);
//});

server.get('/',(req,res)=>{

    res.send("API is running")
})


//在terminal 上显示信息
server.listen(5100, console.log("server is working on 5100"));

