import React from "react";
import styles from './subcom.module.css';
import Footer from '../footer';
import styled from "styled-components";

const Com1 = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 300px;
    background-color: pink;
    // &:hover {
    //     background-color: #000;
    // }
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: deeppink;
    text-align: center;
    &>h4{
        font-size: 30px;
    }
    &>p{
        font-size: 15px;
    }
`;

const Item = styled.div`
    width: 200px;
    height: 250px;
    border: 1px solid #000;
`;

function Member() {
    return(
        <div className={styles.subcom}>
            <header className={styles.header}>
                <h3>member</h3>
            </header>
            <div className={styles.mainimg}></div>
            <div className={styles.contents}>
                {/* 혜택.1 */}
                <Header>
                    <h4>웰컴 기프트로 가입비 돌려받자!</h4>
                    <p>가입비 내신 만큼 돌려드립니다. (택1)</p>
                </Header>
                <Com1>
                    <div style={{
                        margin: '0 auto',
                        paddingTop: '20px',
                        width: '830px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                     }}>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </Com1>

                {/* 혜택.2 */}
                <Header>
                    <h4>웰컴 기프트로 가입비 돌려받자!</h4>
                    <p>가입비 내신 만큼 돌려드립니다. (택2)</p>
                </Header>
                <Com1>
                    <Item />
                </Com1>

                {/* 혜택.3 */}
                <Header>
                    <h4>웰컴 기프트로 가입비 돌려받자!</h4>
                    <p>가입비 내신 만큼 돌려드립니다. (택3)</p>
                </Header>
                <Com1>
                    <Item />
                </Com1>
            </div>
            <Footer />
        </div>
    );
}

export default Member;
