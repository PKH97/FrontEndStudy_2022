const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
// npm i mongoose
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'));

//데이터베이스 연결
let database;//데이터베이스 객체명
let UserSchema;//스키마 객체명
let UserModel;// 모델 객체명

function connectDB() {
    const url = "mongodb://localhost:27017/frontenddb2301";
    console.log('데이터베이스 연결 시도중 ... ');

    mongoose.Promise = global.Promise;
    // 몽구스의 프로미스 객체를 global의 프로미스 객체로 사용
    // 프로미스 객체는  자바스크립트 비동기 처리에 사용되는 객체
    // 특정 코드의 실행이 완료 될때까지 기다리지 않고 다음 코드를 먼저 수행
    // 하는 자바스크립트의 특성을 의미
    // 서버에서 받아온 데이터를 화면에 표시할때 사용
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    //useNewUrlParser: true-> 몽고즈에 연결이 되었는 확인
    //useUnifiedTopology: true-> 이 옵션값을 통해 같은 소캣에서 데이터를 왔다갔다 할 수 있게 하는 옵션
    //소켓은 네트워크 상에서 데이터를 내보내거나 데이터를 받기 실제 연결 고리
    database = mongoose.connection;
    //객체.on('가상의이벤트', 이벤트가 발생했을때 실행할 함수)
    database.on('error', console.error.bind(console, "mongoose 연결 실패!"));
    database.on('open', () => {
        console.log('데이터베이스 연결 성공!');
        //스키마설정
        UserSchema = mongoose.Schema({
            userid: String,
            userpw: String,
            username: String,
            gender: String
        });
        console.log('UserSchema 생성 완료!');

        //가상의 함수를 생성 list 생성시 사용
        UserSchema.static('findAll', function (callback) {
            return this.find({}, callback);
        });

        UserModel = mongoose.model('user', UserSchema);
        //몽고즈에 users는 collection이 생성

    })
}


// localhost:3000/user/regist (post) 회원가입
router.route('/user/regist').post((req, res) => {
    console.log('/user/regist 호출!');
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    const username = req.body.username;
    const gender = req.body.gender;

    console.log(`userid:${userid}, userpw:${userpw}, username:${username}, 
    gender:${gender}`);

    if (database) {
        joinMember(database, userid, userpw, username, gender, (err, result) => {
            if (!err) {
                if (result) {
                    res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
                    res.write('<h2> 회원가입성공</h2>');
                    res.end();
                } else {
                    res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
                    res.write('<h2> 회원가입실패</h2>');
                    res.end();
                }

            } else {
                res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
                res.write('<h2>서버에러! 회원가입실패</h2>');
                res.end();
            }
        })

    } else {
        res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
        res.write('<h2>데이터베이스 연결실패</h2>');
        res.end();
    }
});


// localhost:3000/user/login (post) 로그인
router.route('/user/login').post((req, res) => {
    console.log('/user/login 호출');

    const userid = req.body.userid;
    const userpw = req.body.userpw;
    console.log(`userid:${userid}, userpw:${userpw}`);

    if (database) {
        loginUser(database, userid, userpw, (err, result) => {
            if (!err) {
                if (result) {
                    console.dir(result);
                    const username = result[0].name;
                    const gender = result[0].gender;
                    res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
                    res.write('<h2> 로그인 성공</h2>');
                    res.write(`<p>아이디:${userid}</p>`);
                    res.write(`<p>이름:${username}</p>`);
                    res.write(`<p>성별:${gender}</p>`);
                    res.end();
                } else {
                    res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
                    res.write('<h2> 로그인 실패</h2>');
                    res.end();
                }

            } else {
                res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
                res.write('<h2>서버에러! 로그인 실패</h2>');
                res.end();
            }
        })

    } else {
        res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
        res.write('<h2>데이터베이스 연결실패</h2>');
        res.end();
    }

});

// localhost:3000/user/list (get) 리스트확인
router.route('/user/list').get((req, res) => {
    if (database) {
        UserModel.findAll((err, result) => {//가상의 메소드 생성
            if (!err) {
                if (result) {
                    res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
                    res.write('<h2>회원 리스트</h2>');
                    res.write('<div><ul>');//시작을 열고

                    for (let i = 0; i < result.length; i++) {
                        const userid = result[i].userid;
                        const username = result[i].username;
                        const gender = result[i].gender;

                        res.write(`<li>${i} : ${userid} / ${username} / ${gender}</li>`);
                    }
                    res.write('</ul></div>');//닫기
                    res.end();
                } else {
                    res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
                    res.write('<h2>회원 정보가 없습니다</h2>');
                    res.end();
                }
            } else {
                console.log('리스트 조회 실패');
            }
        })
    } else {
        res.writeHead('200', { 'content-type': 'text/html;charset=utf8' });
        res.write('<h2>데이터베이스 연결실패</h2>');
        res.end();
    }
});

//----------------------------------------------------------------
const joinMember = function (database, userid, userpw, username, gender, callback) {
    console.log('joinUser 호출!');
    //스키마에 맞게 객체 설정
    const users = new UserModel({
        userid: userid, userpw: userpw, username: username, gender: gender
    })

    users.save((err, result) => {
        if (!err) {
            console.log('회원 document가 추가되었습니다.');
            callback(null, result);
            return;
        }
        callback(err, null);
    })
}

const loginUser = function (database, userid, userpw, callback) {
    console.log('loginUser 호출!');

    UserModel.find({ userid: userid, userpw: userpw }, (err, result) => {
        if (!err) {
            if (result.length > 0) {
                console.log('일치하는 사용자를 찾음');
                callback(null, result);
            } else {
                console.log('일치하는 사용자가 없음');
                callback(null, null);
            }
            return;
        }
        callback(err, null);
    })
}


app.use('/', router);//라우터 정의

app.listen(port, () => {
    console.log(`${port}번 포트로 서버 실행중...`);
    connectDB();//데이터베이스 연결함수
});