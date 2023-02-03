import React, { useState } from "react";

function Counter() {
    const [number,setNumber] = useState(0); // 초기상태값이 숫자형
    const [text, setText] = useState(0); // 초기상태값의 타입 -> 문자열형
    const [isState, setisState] = useState(0); // 불리언형

    // 리액트에서 값이 바뛰는 저장공간을 선언할때는
    // const [저장공간이름, 저장공간에 값을 변화시킬 함수명] = useState(초기값);

    const plus = () => {
        setNumber(number + 1);
        console.log('1 더하기');
    }
    const minus = () => {
        setNumber(number - 1);
        console.log('1 빼기');
    }

    return(
        <div>
            <h2>{number}</h2>
            <button onClick={plus}>더하기</button>
            <button onClick={minus}>빼기</button>
        </div>
    );
}

export default Counter;