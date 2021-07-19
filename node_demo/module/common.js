const fs = require("fs");

// exports.getMiMe = function(extname){
//     switch(extname){
//         case '.html':
//             return 'text/html';
//         case '.css':
//             return 'text/css';
//         case '.js':
//             return 'text/javascript';
//         case 'png':
//             return 'application/x-png';
//         case 'jpg':
//             return 'image/jpg';
//         default :
//             return 'text/html';
//     }
// }

exports.getFileMime = function (extname){
    return new Promise((resolve,reject)=>{
        fs.readFile('./module/mime.json',(err,data)=>{
            if(err){
                console.log(err);
                reject(err);
                return;
            }
            let mimeObj = JSON.parse(data.toString());
            console.log(mimeObj[extname]);
            resolve(mimeObj[extname]);
        })
    })
}