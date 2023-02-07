import React, { useState } from "react";

function Input() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onReset = () => { setText(''); }

    return(
        <div>
            <input onClick={onChange} value={text} />
            <button onClick={onReset}>지우기</button>
            <div>
                <b>값 : {text}</b>
            </div>
        </div>
    );
}

export default Input;