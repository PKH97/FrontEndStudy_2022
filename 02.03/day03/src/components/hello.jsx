import React from "react";

function Hello({ name, color, isSpecial }) {
    return(
        <div>
            {/* <h3 style={{color}}>Hello {name}</h3> */}
            <h3 style={{color}}>
                {isSpecial ? <b>★</b>:null} Hello {name}
            </h3>
        </div>
    );
}

// props값이 없을대 기본으로 설정되는 값을 선언
Hello.defaultProps = {
    color: 'pink',
    name: '무명'
}

export default Hello;