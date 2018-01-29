var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域请求
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    fs.readFile("index.json",function(err,data){
        if(err){
            res.write("404 文件未找到")
        }else{
            res.write(data);
        }
        res.end()
    })

}).listen(8787);
console.log("创建服务器成功...")