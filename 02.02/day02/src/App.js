import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Main from './main';
import Member from './components/member';
import Product from './components/product';
import Market from './components/market';
import Brand from './components/brand';
import Popup from './components/popup';
import Event from './components/event';
import Delivery from './components/delivery';
import Footer from './footer';

/* 
라우터 적용
react-router-dom
라우터 관련 함수를 내장
설치: yarn add react-router-dom@5
사용: 상단에 import { Route, Link } form 'react-router-dom'; 선언하고,
 1. 특정 주소에 컴포넌트 연결하는 방법
 <Route path="주소" component={보여줄 컴포넌트}>
 2. 다른주소로 이동시키기
 <Link to="주소">문자</Link>
*/


function App() {
  // 
  return (
    <div>
      {/* 리액트안에서 리턴안에 주석처리형식 */}
      <div className='header'>
        <div className='header_in'>
          <h1 className='logo'>logo</h1>
          <ul className='nav'>
            <li><Link to="/component/member">프리미엄멤버쉽</Link></li>
            <li><Link to="/component/product">냉장식품</Link></li>
            <li><Link to="/component/market">시크릿마켓</Link></li>
            <li><Link to="/component/brand">브랜드관</Link></li>
            <li><Link to="/component/popup">기획전</Link></li>
            <li><Link to="/component/event">이벤트</Link></li>
            <li><Link to="/component/delivery">가정배달</Link></li>
          </ul>
          <div className='info'>info</div>
        </div>
      </div>
      <div> {/* 화면에 보이는 서브컴포넌트 */}
        <Route path="/" exact={true} component={Main} />
        <Route path="/component/member" component={Member} />
        <Route path="/component/product" component={Product} />
        <Route path="/component/market" component={Market} />
        <Route path="/component/brand" component={Brand} />
        <Route path="/component/popup" component={Popup} />
        <Route path="/component/event" component={Event} />
        <Route path="/component/delivery" component={Delivery} />
      </div>

      {/* 하단영역 */}
      <Footer />
    </div>
  );
}

export default App;
