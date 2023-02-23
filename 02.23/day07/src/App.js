import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import MainPage from './main';
import Member from './components/member';
import Product from './components/product';
import Market from './components/market';
import Brand from './components/brand';
import Popup from './components/popup';
import Event from './components/event';
import Delivery from './components/delivery';
import { ItemProvider } from './context';


/* 
 1. 컴포넌트 임포트 
 2. 라우터 돔 내장시킨 후 불러오기
  react-router-dom 
  라우터 관련 함수를 내장
  => yarn add react-router-dom@5

  styled-components
  JS안에 CSS를 작성하는 라이브러리.
  => yarn add styled-components
*/

function App() {
  return (
    <> 
      <ItemProvider>
        <header className='header'>
          <div className='headerIn'>
            <h1 className='logo'><Link to='/'>메인</Link></h1>
            <ul className='nav'>
              <li><Link to='/components/member'>프리미엄멤버쉽</Link></li>
              <li><Link to='/components/product'>냉장제품</Link></li>
              <li><Link to='/components/market'>시크릿마켓</Link></li>
              <li><Link to='/components/brand'>브랜드관</Link></li>
              <li><Link to='/components/popup'>기획전</Link></li>
              <li><Link to='/components/event'>이벤트</Link></li>
              <li><Link to='/components/delivery'>가정배달</Link></li>
            </ul>
          </div>
        </header>

        {/* 3. 메인에 보이는 서브 컴포넌트(UI단위) */}
        <div>
          <Route path='/' exact={true} component={MainPage} />
          <Route path='/components/member' component={Member} />
          <Route path='/components/product' component={Product} />
          <Route path='/components/market' component={Market} />
          <Route path='/components/brand' component={Brand} />
          <Route path='/components/popup' component={Popup} />
          <Route path='/components/event' component={Event} />
          <Route path='/components/delivery' component={Delivery} />
        </div>
      </ItemProvider>
    </> 
    /* 스타일을 주지 않을 시 프레그먼트로 작성 */
  );
}

export default App;
