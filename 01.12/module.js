const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.engine("html", require("ejs").renderFile); // view
app.use(bodyParser.urlencoded({ extended: false }));
//-> 노드에서 문서분석을 하는 메소드가 두가지. 이들의 충돌을 방지하기위해 선언

const module1 = require('./router/module1')(app, fs);
//const module1 = require('./router/module1')
//(해당노드파일에 패키지를 사용할수있게 매개변수로 전달);


app.listen(port, () => {
  console.log(`${port}번 포트로 실행중...`);
});
