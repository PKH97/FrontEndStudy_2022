const express = require('express'); //서버기능
const bodyParser = require('body-parser'); //문서 body영역에 데이터 분석
const fs = require('fs'); //파일을 읽거나 쓰기하는 패키지
//npm i express-session
const expressSession = require('express-session');

const app = express();
const port = 3000;

//body영역을 분석하는 모듈이 두가지 있는데 각각 모듈에 있는 메소드 중 같은 
//기능을 가지는 메소드가 충동해서 문제를 발생하는 걸 방지 하기 위해 설정
app.use(bodyParser.urlencoded({extended: false}));

//세션의 초기값 설정
app.use(expressSession({
    secret: "!@#$%^&*()",
    resave: false,
    saveUninitialized: true
}));

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
    //요청한 body영역에 userid이름을 가진 input에 value값을 userid저장공간에 저장
    const userpw = req.body.userpw;
    console.log(userid);
    console.log(userpw);

    //admin, 1234
    if(userid == 'admin' && userpw == '1234'){
        req.session.member = {
            id: userid,
            userpw: userpw,
            isauth: true //session인증이 되었는지 확인
        }
        res.redirect('/welcome');
    }else{
        res.redirect('/fail');
    }
});

//http://127.0.0.1:3000/welcome
app.get('/welcome', (req, res) => {
    if(req.session.member){
        console.log(req.session.member); //올바르게 정보전달 확인
        fs.readFile('/welcome.html', 'utf8', (err, data) => {
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        });
    }else{
        res.redirect('/login');
    }
});


//http://127.0.0.1:3000/fail
app.get('/fail', (req, res) => {
    fs.readFile('fail.html', 'utf8', (err, data)=>{
        res.writeHead(200, {'content-type': "text/html"});
        res.end(data);
    });
});


//http://127.0.0.1:3000/logout






//서버응답상태함수
app.listen(port, () => {
    console.log(`${port}포트로 서버 실행중...`);
});