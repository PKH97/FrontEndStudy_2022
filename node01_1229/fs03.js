const fs = require('fs');

//비동기처리는 동기식으로 처리 할 필요가 없음
fs.readFile('text11.txt', 'utf8', (err, data)=>{
  if(err){
    console.log('에러발생! / 비동기');
  }else{
    console.log(data);
  }
});

//동기식은 예외처리함
try{
  const text = fs.writeFileSync('text11.txt', 'utf8');
  console.log(`동기식으로 읽음 : ${text}`);
}catch(e){
  console.log('에러발생! / 동기');
}

console.log('프로그램 종료');
