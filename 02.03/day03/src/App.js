import React from 'react';
import './App.css';

import Hello from './components/hello';
import Hello2 from './components/hello2';
import Wrapper from './wrapper';

function App() {
  const name = '임꺽정';

  const style = {
    backgroundColor: 'deepskyblue',
    color: 'white',
    fontSize: 40,
    padding: '1rem'
  }

  return (
    // <>: 단순히 섹션을 묶기위한 용도로 사용
    // 스타일을 적용할려면 <div className=""></div>를 사용
    // props -> 프로퍼티, 속성 컴포넌트에 전달해서 사용
    <>
      <Wrapper>
        <div style={{fontSize: '50px'}}>{name}</div>
        <div className='box'>선택자로 스타일을 선언하는 방법</div>
        <div style={{
          width:'500px', height:'200px', 
          marginTop: '30px', backgroundColor: 'red'
        }}>인라인으로 스타일 적용</div>
        <div style={style}>객체로 스타일 선언하고 적용하기</div>

        <Hello name='apple' color='red' isSpecial={true} />
        <Hello name='banana' color='green' isSpecial={false} />
        <Hello name='홍길동' color='blue' isSpecial={true} />
        <Hello isSpecial={true} />

        <br /><br />
        <Hello2 name='apple' color='red' isSpecial={true} />
        <Hello2 name='banana' color='green' isSpecial={false} />
        <Hello2 name='홍길동' color='blue' isSpecial={true} />
      </Wrapper>
    </>
  );
}

export default App;
