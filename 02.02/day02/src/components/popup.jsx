import React from "react";
import Subttl from "./subttl";

function Popup() {
    return (
        <div className="sub">
            <div style={{width: '100%', height: '400px', backgroundColor: 'skyblue'}}>
                서브에 메인이미지
            </div>
            <div className="sub_contents">
                <h3>기획전</h3>
                <Subttl subTitle='남양 기획전' count='총 4건의 기획전이 있습니다' />
                <div className="list">
                    {/* <PopupItem />
                    <PopupItem />
                    <PopupItem />
                    <PopupItem /> */}
                </div>

                <Subttl subTitle='입점사 기획전' count='총 0건의 기획전이 있습니다' />
                <div className="list"></div>
            </div>
        </div>
    );
}
export default Popup;
