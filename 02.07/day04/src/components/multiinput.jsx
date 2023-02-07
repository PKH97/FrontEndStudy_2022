import React, { useState, useRef } from "react";

function MultiInput() {
    const [inputs, setInputs] = useState({
        userid: '',
        name: ''
    });

    const useridInput = useRef();

    const {userid, name} = inputs; //비구조화 할당을 통해 값을 전달

    const onChange = (e) => {
        const {value, name} = e.target; //e.target 에서 name 과 value 가져옴
        setInputs({
            ...inputs, // ... spread 문법 (객체를 복사), 여러개의 값이 저장
            [name]: value //name 키를 가진 값을 value로 설정 
            // aaaaaa, 홍길동 -> {userid:'aaaaaa', name:'홍길동'}
        });
    }

    const onReset = (e) => {
        setInputs({
            userid: '',
            name: ''
        });

        useridInput.current.focus();
    }

    return(
        <div>
            <div>
                <input name="userid" onChange={onChange} placeholder="아이디" value={userid}
                    ref={useridInput}/>
                <input name="name" onChange={onChange} placeholder="이름" value={name}/>
                <button onClick={onReset}>지우기</button>
                <b>아이디 : {userid}</b>, <b>이름 : {name}</b>
            </div>
        </div>
    );
}
export default MultiInput;