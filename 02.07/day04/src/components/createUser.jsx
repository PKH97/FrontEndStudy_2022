import React from "react";

function CreateUser({ username, email, onChange, onCreate, usernameInput }) {
    return(
        <div>
            <input name="username" placeholder="이름을 입력하세요"
                onChange={onChange} value={username} 
                ref={usernameInput} />
            <input name="email" placeholder="이메일을 입력하세요"
                onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;