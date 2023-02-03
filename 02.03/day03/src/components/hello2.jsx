import React from "react";

function Hello2(props) {
    return(
        <div>
            {/* {name='apple' color='red' isSpecial={true}} */}
            <h3 style={{color: props.color }}>
                {props.isSpecial ? <b>★</b> : null} Hello {props.name}
            </h3>
        </div>
    );
}

export default Hello2;