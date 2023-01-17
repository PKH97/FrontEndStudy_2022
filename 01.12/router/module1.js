// module.exports = (app, fs) => { //매개변수 형식을 패키지를 이어받아 사용
//     console.log('module1.js 실행');
// }

module.exports = (app, fs) => {
    // http://localhost:3000
    app.get("/", (req, res) => {
        res.render("index.ejs", { length: 10 });
    });

    // http://localhost:3000/about
    app.get("/about", (req, res) => {
        res.render("about.html");
    });

    // http://localhost:3000/list
    app.get("/list", (req, res) => {
        fs.readFile(__dirname + "/../data/member.json", "utf8", (err, data) => {
            if (!err) {
                console.log(data);
                res.writeHead(200, { "content-type": "text/json;charset=utf-8" });
                res.end(data);
            } else {
                console.log(err);
        }
        });
    });

    // http://localhost:3000/getMember/apple
    app.get("/getMember/:userid", (req, res) => {
        // 특정값을 추출할때 /라우터명/:변수 -> 웹브라우저에서는 /라우터명/변수값
        console.log("조회");
        fs.readFile(__dirname + "/../data/member.json", "utf8", (err, data) => {
            if (!err) {
                const member = JSON.parse(data);
                res.json(member[req.params.userid]); //[]-> 배열형식, 조건식
            } else {
                console.log(err);
            }
        });
    });

    // http://localhost:3000/joinMember/apple
    app.post("/joinMember/:userid", (req, res) => {
        //특정값을 추출할때 /라우터명/:변수명 -> 웹브라우저에서는 /라우터명/변수명
        const result = {}; //빈객체->서버실행상태를 저장
        const userid = req.params.userid;

        //입력된 정보 있는지 검사
        if (!req.body["password"] || !req.body["name"]) {
            // result라는 객체에 "success":100, "msg":"invalid request"
            // res.json(result); JSON파일형식으로 읽기
            result["success"] = 100; // 100 : 실패
            result["msg"] = "invalid request";
            res.json(result);
            return false; // 아래에 명령어 실행X, 여기서 프로그램 종료
        }

        fs.readFile(__dirname + "/../data/member.json", "utf8", (err, data) => {
            const member = JSON.parse(data); //member 객체명(지정 대상을 지정하기 위해)

            //아이디 중복 검사
            if (member[userid]) {
                //요청한 params가 존재한다면의 조건식
                result["success"] = 101; //101: 중복
                result["msg"] = "duplicate";
                res.json(result);
                return false;
            }
            console.log(req.body); //req.body->post방식으로 입력한 정보
            member[userid] = req.body; //입력한 정보를 요청한 userid에 대입

            //회원가입                                      //JSON.stringify() -> JSON문자열로 저장
            fs.writeHead(__dirname + "/../data/member.json", JSON.stringify(member, null, "\t"), "utf-8", (err, data) => {
                if (!err) {
                    result["success"] = 200;
                    result["msg"] = "success";
                    res.json(result);
                } else {
                    console.log(err);
                }
            }); //'\t' 아스키코드의 탭기능
        });
    });

    // http://localhost:3000/updateMember/apple
    app.put("/updateMember/:userid", (req, res) => {
        const result = {}; //상태를 저장할 공간 생성 -> 객체형 선언
        const userid = req.params.userid; //서버요청한 아이디를 저장

        if (!req.body["password"] || !req.body["name"]) {
            //post방식에 입력된 속성값들이 존재하는 확인
            result["success"] = 100; //실패
            result["mag"] = "invalid request";
            res.json(result);
            return false;
        }

        // JSON파일 읽기
        fs.readFile(__dirname + "/../data/member.json", "utf-8", (err, data) => {
            if (!err) {
                //읽어들인 json파일을 객체로 지정
                const member = JSON.parse(data);
                member[userid] = req.body; //password, name 정보를 해당 객체에 전달

                //업데이트 -> 기존파일에 쓰기
                fs.writeFile(__dirname + "/../data/member.json", JSON.stringify(member, null, "\t"), "utf-8", (err, data) => {
                    if (!err) {
                        result["success"] = 200;
                        result["msg"] = "success";
                        res.json(result);
                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        });
    });



    // http://localhost:3000/deleteMember/berry
    app.delete('/deleteMember/:userid', (req, res) => {
        let result = {};
        fs.readFile(__dirname + "/../data/member.json", 'utf-8', (err, data) => {
            const member = JSON.parse(data);
            if(!member[req.params.userid]){
                result["success"] = 102;
                result["msg"] = "not found";
                res.json(result);
                return false;
            }
            delete member[req.params.userid]; //삭제메소드
            //삭제된 json파일로 쓰기
            fs.writeFile(__dirname + '/../data/member.json', JSON.stringify(memeber, null, '\t'), 'utf-8', (err, data) => {
                result["success"] = 200;
                result["msg"] = "success";
                res.json(result);
            });
        });

    });

};
