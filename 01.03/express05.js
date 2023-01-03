const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

const router = express.Router();
app.use(bodyparser.urlencoded({ extended: false }));

// http://localhost:3000/member/login -> post
router.route('/member/login').post((req, res) => {
    console.log('/member/login호출');
});

// http://localhost:3000/member/regist -> post
router.route('/member/regist').post((req, res) => {
    console.log('/member/regist 호출!');
});

// http://localhost:3000/member/about -> get
router.route('/member/about').post((req, res) => {
    console.log('/member/about 호출!');
});


app.use('/', router); // express내에서 router객체를 정의 

app.all('*', (req, res) => { //모든 요소에 요청과 응답을 찾을 수 없을때 표시할 문장
    res.status(404).send('<h2>페이지를 찾을 수 없습니다.</h2>')
});

app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중...`);
});