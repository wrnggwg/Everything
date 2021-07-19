const http = require('http');
const fs = require('fs');
const common = require('./module/common');
const path = require('path');

http.createServer(function(req,res){
    //获取地址
    let pathname = req.url;
    //获取后缀名
    let extname = path.extname(pathname);
    console.log(extname);
    if(pathname!='/favicon.ico'){
        fs.readFile('.'+pathname,async(err,data)=>{
            if(err){
                console.log(err);
                res.end('404')
            }
            let mime = await common.getFileMime(extname);
            res.writeHead(200,{'Content-Type':mime+';charset:"utd-8"'});
            res.end(data);
        })
    }

    
}).listen(8081);
