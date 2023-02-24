import React, { useState } from "react";
import axios from "axios";
import User from "./user";
import useAsync from "../useAsync";

//yarn add axios


async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data; // 연결된 api의 자료
}

function Users() {
    const [ userId, setUserId ] = useState(null); //response.id 값을 초기화
    const [ state, refetch ] = useAsync(getUsers, [], true);
    // refetch:데이터값을 갱신하기 위해 선언
    // useAsync: API요청시 사용하는 HOOK함수이며, 두가지의 파라미터(값)을 받아온다.
    //           API의 시작함수, 함수안에 해당하는 값

    const { loading, data: users, error } = state; //API 초기값에 나머지 변수처럼 설정
    
    // 예외처리
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생!!!</div>
    if(!users) return <button onClick={refetch}>불러오기</button>

    return(
        <div>
            <ul>
                {users.map(user => ( //요철한 데이터를 배열로 설정한 후 li태그로 화면에 렌더링
                    <li key={user.id} onClick={() => setUserId(user.id)} style={{ cursor: 'pointer' }}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>다시불러오기</button>
            {/* 불러온 API의 데이터가 다시 불러오기 된다. */}

            {userId && <User id={userId} />}
        </div>
    );
}
export default Users;