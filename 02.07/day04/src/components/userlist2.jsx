import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면에 사라짐');
        }
    });

    return(
        <div>
            <b onClick={() => onToggle(user.id)} style={{
                cursor: 'pointer',
                color: user.active ? 'deeppink' : 'block'
            }}>{user.username}</b><span>{user.email}</span>&nbsp;&nbsp;
            <button onClick={() => onRemove(user.id)}>삭제</button>
            {/* 
                삼항연산 =>  조건식 ? 참일때 실행문 : 거짓일때 실행문
                            조건식 && 참일때 실행문
                
                onClick={onRemove()}에서 
                onRemove()함수를 호출하면 마운트가 되면서 자동실행되므로
                onClick={onRemove} 선언해서 이벤트가 발생시 실행하겠다는 뜻

                콜백함수형식으로 함수호출 => onClick{() => onToggle(user.id)}
            */}
        </div>
    );
}

function UserList2({ users, onRemove, onToggle }) {
    return(
        <div>
            {/* <div><User user={users[0]} /></div>
            <div><User user={users[1]} /></div>
            <div><User user={users[2]} /></div>
            <div><User user={users[3]} /></div>
            <div><User user={users[4]} /></div> */}
            {users.map((user, index) => (
                <User user={user} key={index} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default UserList2;