import React, { useState } from "react";

function Inpout() {
    const [text, setText] = useState(''); //초기값을 초기살태가 공백으로 설정

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText(" ");
    }

    return(
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>지우기</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default Inpout;