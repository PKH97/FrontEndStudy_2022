const express = require('express');
//npm i cookie-parser
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('!@#$%^&*()')); //암호화로 사용할 특수문자 기입

//http://127.0.0.1:3000/login
app.get('/login', (req, res) => {
    fs.readFile('login.html', 'utf8', (err, data) => {
        if(!err){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        }else{
            console.log(err);
        }
    });
});

//http://127.0.0.1:3000/loginOk
app.post('/loginOk', (req, res) => {
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    console.log(userid); //데이터값 확인
    console.log(userpw); //데이터값 확인

    //admin / 1234 와 같은 아이디와 패스워드 설정
    if(userid == 'admin' && userpw == '1234'){ 
        const expiresDay = new Date(Date.now() + (100 * 60 * 60 * 24));
        // 완료 날짜 new Date() -> 현재날짜 --> new Date(현재날짜객체 + 특정시간)
        
        // 쿠키설정
        res.cookie('userid', userid, {expires: expiresDay, signed: true});
        res.redirect('/welcome'); // 로그인 성공시 실행할 라우터객체
    }else{
        res.redirect('/fail'); //로그인 실패시 실행할 라우터객체
    }
});


//http://127.0.0.1:3000/welcom
app.get('/welcome', (req, res) => {
    const cookieUserid = req.signedCookies.userid; //-> 쿠키로 userid 정보를 cookieUserid에 저장.
    console.log(cookieUserid);
    if(cookieUserid){ //-> 쿠키정보의 유무
        fs.readFile('welcome.html', 'utf8', (err, data)=>{
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        });
    }else{
        res.redirect('/login');
    }
});


//http://127.0.0.1:3000/fail
app.get('/fail', (req, res) => {
    fs.readFile('fail.html', 'utf8', (err, data) => {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(data);
    });
});


//http://127.0.0.1:3000/logout
app.get('/logout', (req, res) => {
    res.clearCookie('userid'); //-> 쿠키정보삭제
    res.redirect('/login');
});


app.listen(port, () => {
    console.log(`${port}포트로 서버 실행중...`);
});
