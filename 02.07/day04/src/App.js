import React, { useState, useRef } from 'react';
import './App.css';
// import Counter from './components/counter';
// import Input from './components/input';
// import MultiInput from './components/multiinput';
// import UserList from './components/userlist';
import UserList2 from './components/userlist2';
import CreateUser from './components/createUser';

function App() {
  //새로추가될 배열요소를 저장하는 공간에 대해 초기값을 선언
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  //비구조할당 -> 여러개의 초기값이 설정되었다 선언

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, seatUsers] = useState([
    {
        id: 1,
        username: '김사과',
        email: 'apple@apple.com'
    },
    {
        id: 2,
        username: '오렌지',
        email: 'orenge@orenge.com'
    },
    {
        id: 3,
        username: '반하나',
        email: 'banana@banana.com'
    },
    {
        id: 4,
        username: '이메론',
        email: 'melon@melon.com'
    },
    {
        id: 5,
        username: '배애리',
        email: 'berry@berry.com'
    }
  ]);

  const nextId = useRef(6); 
  //최초에 추가할때 현재 배열에 마지막에 추가될 eq값을 미리 설정
  
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    // 배열에 새 항목을 추가할때는 spread연산자 또는 concat함수를 사용
    // setUsers([...users, user]);
    seatUsers(users.concat(user));

    // 추가하기 위해서 입력한 input태그를 빈공백으로 초기화
    setInputs({
      username: '',
      email: ''
    })
    
    // 다음에 추가될 배열요소 eq값
    nextId.current += 1;
  }

  return (
    <div>
      {/* <Counter />
      <Input />
      <MultiInput />
      <UserList /> */}
      {/* 화면에 입력해서 배열을 추가하는 함수 */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />

      {/* 화면에 보여주는 리스트 함수 */}
      <UserList2 users={users}/>
    </div>
  );
}

export default App;
