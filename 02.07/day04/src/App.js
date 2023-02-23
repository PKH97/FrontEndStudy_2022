import React, { useState, useRef, useMemo } from 'react';
import './App.css';
// import Counter from './components/counter';
// import Input from './components/input';
// import MultiInput from './components/multiinput';
// import UserList from './components/userlist';
import UserList2 from './components/userlist2';
import CreateUser from './components/createUser';

function countActiveUser(users) {
  console.log('선택된 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

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

  const usernameInput = useRef(); //dom으로 선택선언

  const [users, setUsers] = useState([
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
    setUsers(users.concat(user));

    // 추가하기 위해서 입력한 input태그를 빈공백으로 초기화
    setInputs({
      username: '',
      email: ''
    })
    
    // 다음에 추가될 배열요소 eq값
    nextId.current += 1;

    usernameInput.current.focus();
  }

  // 배열요소 삭제하는 함수
  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // user.id가 id인 것을 제거함
    // 파라미터로 추출한 id값과 일치하지 않는 배열요소만 화면 바운딩
    // 바운딩 => 데이터를 html에 입력해서 화면에 보여주는 것을 의미
    setUsers(users.filter(user => user.id !== id));
    // 배열명.filter(조건식)=>조건이 참인 내용만 화면에 출력
  }
  
  // 배열요소 스타일 수정하는 함수
  const onToggle = id => {
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active}:user)
    );
  }
  //users.map을 통해 users배열에 배열요소 바운딩
  //user => user.id === id각각의 user에 대하여
  //조검식 설정 user.id === id 참인지
  //..user, active: !user.active은 배열요소에서 active가 안된 요소 의미.
  //: user은 조건식(userid === id)이 거짓은 경우 배열요소로 리턴

  
  //배열요소 개수 추출하는 함수
  const count = useMemo(() => countActiveUser(users), [users]); // 리턴 결과값을 다시 콜백
  //useStact() 상태값 설정, [초기상태값, 상태값설정함수명]=useState(데이터타입);
  //useRef() dom요소 선택하는 훅함수 태그에 ref='훅함수로 선택할때 사용하는 이름' 속성 지정해서 사용
  //useMemo() 성능 최적화를 위한 연산된 값을 사용하게 하는 훅함수
  //useEffect() 컴포넌트가 마운트 됐을때 (처음 나타났을때), 언마운트(컴포넌트가 사라질때)
  //useCallback() 특정함수를 새로 만들지 않고 재사용하고 싶을때(특정함수를 재사용)
  //useReducer() 컴포넌트에 상태를 분리시키는 훅함수

  
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
        usernameInput={usernameInput}
      />

      {/* 화면에 보여주는 리스트 함수 */}
      <UserList2 users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>선택된 사용자 수 : {count}</div>
    </div>
  );
}

export default App;
