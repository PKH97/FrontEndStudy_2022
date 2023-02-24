import React from "react";
import axios from "axios";
import useAsync from "../useAsync";


async function getUsers(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/${id}');
    return response.data; // 연결된 api의 자료
}

function User({ id }) {
    const [ state, setUserId ] = useAsync(() => getUsers(id), [id]);
    const { loading, data: user, error } = state;
    
    // 예외처리
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생!!!</div>
    if(!user) return null;

    return(
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email: </b> {user.email}
            </p>
        </div>
    );

}
export default User;