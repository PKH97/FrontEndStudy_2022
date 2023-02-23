const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('node.png', (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.writeHead(200, {'content-type':'image/png'});
            res.end(data);
        }
    });
}).listen(3000, () => {console.log('이미지서버실행중');});


http.createServer((req, res) => {
    fs.readFile('sunny.mp3', (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.writeHead(200, {'content-type':'audio/mp3'});
            res.end(data)
;        }
    });
}).listen(3001, () => {console.log('사운드서버실행중');});