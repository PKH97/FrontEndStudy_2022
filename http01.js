const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'}); //응답하고자하는 문서의 타입을 설정
    res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>HTTP 모듈테스트</title></head><body style="background-color: deepskyblue;"><h2>http 모듈테스트</h2><p>처음으로 실행하는 node.js http 서버</p></body></html>'); //응답하고자 하는 결과값
}).listen(3000, ()=>{console.log('서버실행중')});

//127.0.0.1:3000 -> 이 주소를 입력하면 작성한 http.html을 실행한다.