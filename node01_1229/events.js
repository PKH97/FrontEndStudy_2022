const events = require('events');

//이벤트 관련 메소드를 사용할 수 있는 EventEmitter 객체를 만듭니다.
const eventEmitter = new events.EventEmitter();

const connetHandler = function(){ //3실행
    console.log('연결 성공!');
    eventEmitter.emit('data_received'); //data_received 발생 //4실행
}

//connetion 에빈트와 connetHandler 핸들러 연결
eventEmitter.on('connetion', connetHandler); //2실행

eventEmitter.on('data_received', ()=>{ //5실행
    console.log('데이터 수신!');
});

eventEmitter.emit('connetion'); //connetion 발생 1실행

console.log('프로그램을 종료합니다.');
