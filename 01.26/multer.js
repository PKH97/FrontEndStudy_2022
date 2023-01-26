const express = require('express');
const bodyParser = require('body-parser');

// npm i serve-static
const static = require('serve-static');
//특정 폴더를 요청에 의해 직접 파일에 접근 할 수 있도록 기능을 제공하는 익스프레스 미들웨어

const path = require('path'); //url(주소를) 컨트롤하는 모듈

// npm i morgan
const logger = require('morgan'); //로그를 관리하기 위한 라이브러리 모듈

// npm i multer
const multer = require('multer'); //파일을 업로드하기 위한 익스프레스 미들웨어

const port = 3000;
const app = express();
const router = express.Router();


//127.0.0.1:3000/라우터 객체명
//127.0.0.1:3000/public/write.html
app.use(bodyParser.urlencoded({extended: false}));

// '/public'라우터 명으로 public폴더를 지정
// '/uploads'라우터 명으로 uploads폴더를 지정
app.use('/public', static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));

//서버로그 정보를 관리(요청과 응답에 대한 정보)
app.use(logger('dev')); //dev, short, common, comnined

const storage = multer.diskStorage({
    destination: (req, file, callback) => {// 업로드 되는 파일의 저장폴더
        callback(null, 'uploads');
        //에러가 없다는 조건하에 폴더 uploads를 지정
    },
    filename: (req, file, callback) => {
        const extension = path.extname(file.originalname); //apple.png
        const basename = path.basename(file.originalname, extension); //파일명만 추출
         //원래 파일명, 확장자로 분리
        callback(null, basename + "_" + Date.now() + extension);
         //apple.32904820284.png
    }
});
  
const upload = multer({
    storage: storage, // diskStoreage 설정객체
    limits: { // 제한 설정
      file: 5, // 파일 전송 개수
      fileSize: 1024 * 1024 * 100 //파일 전송 용량
    }
});

router.route('/write').post(upload.array('photo', 1), (req, res) => {
    console.log('/write 호출!');
    try {
        const title = req.body.title;
        const content = req.body.content;
        const files = req.files;
        console.log(req.files[0]);

        const originalname = files[0].originalname;
        const filename = files[0].filename;
        const mimetype = files[0].mimetype;
        const size = files[0].size;

        console.log(`파일정보 : 원본파일명:${originalname}, 파일이름: ${filename},
         mimetype:${mimetype}, 파일크기:${size}`);

        //파일업로드 정보를 화면에 출력
        res.writeHead('200', {'content-type':'text/html;charset=utf8'});
        res.write('<h2>파일 업로드 성공</h2>');
        res.write('<hr>');
        res.write(`<p>제목 : ${title}</p>`);
        res.write(`<p>내용 : ${content}</p>`);
        res.write(`<p>원본파일명 : ${originalname}</p>`);
        res.write(`<p>파일명 : ${filename}</p>`);
        res.write(`<p>mimetype : ${mimetype}</p>`);
        res.write(`<p>파일크기 : ${size}</p>`);
        res.write(`<p><img src = '/uploads/${filename}' width = '200'></p>`);
        res.end();

    }catch(e) {
        console.log(e);
    }
});
  




app.use("/", router);//라우터객체를 서버에서 사용한다고 정의

app.listen(port, () => {
    console.log(`${port}포트로 서버 동작중...`)
})