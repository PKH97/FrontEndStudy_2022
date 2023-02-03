import React from "react";

function Subttl({ subTitle, count }) {
    const subTtl = {
        width: '100%',
        height: '50px',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return(
        <div style={subTtl}>
            <h3 style={{ fontSize: '20px' }}>{subTitle}</h3> <p style={{ fontSize: '10px' }}>{count}</p>
        </div>
    );
}
export default Subttl;