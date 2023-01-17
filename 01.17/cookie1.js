const express = require('express');
//npm i cookie-parser
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser()); //app의 미들웨어 함수

//쿠키 생성 함수
//http://127.0.0.1:3000/setCookie
app.get('/setCookie', (req, res) => {
    console.log('setCookie 호출');
    res.cookie('member', { //쿠키 생성 옵션
        id: 'apple',
        name: '김사과',
        gender: 'female'
    }, {
       maxAge: 1000 * 60 * 3 // 만료시간 설정
            //  초    분   시
    });
    res.redirect('/showCookie');
});

app.get('/showCookie', (req, res) => {
    console.log('showCookie 호출');
    res.send(req.cookies);
    res.end();
});

app.listen(port, () => {
    console.log(`${port}포트로 서버 실행중...`);
});