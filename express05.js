const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// http://localhost:3000/?userid=apple&userrpw=1111
// (전송방식이 get이 아니기 때문에 데이터를 받을 수 없음)
app.use(bodyparser.urlencoded({extended: false})); //문서 파싱시 메소드 충돌방지

app.use((req, res)=>{ 
    const paramId = req.body.userid; //post방식으로 데이터를 입력
    const paramPw = req.body.userpw; //post방식으로 데이터를 입력
    console.log(`paramId: ${paramId}, paramPw: ${paramPw}`);

    res.writeHead(200, {'content-type':'text/html; charset:utf-8'});
    res.write('<h2>익스프레스 서버에서 응답하는 메시지입니다.</h2>');
    res.write(`<p>아이디: ${paramId}</p>`);
    res.write(`<p>비밀번호: ${paramPw}</p>`);
    res.end();
});

app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중...`);
});
