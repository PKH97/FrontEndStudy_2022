import React from "react";

const History = ({history}) => {
    const goBack = () => {
        history.goBack();
    }
    const goHome = () => {
        history.push('/');
    }

    return(
        <div>
            <div>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goHome}>홈으로</button>
            </div>
        </div>
    );
}

export default History;