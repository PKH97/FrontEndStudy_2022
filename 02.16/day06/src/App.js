import React from 'react';
import './App.css';
//yarn add react-router-dom@5
import { Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Profiles from './profiles';
import History from './history';


function App() {
  return (
    <div>
      {/* <Link to="주소">문자</Link> */}
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">history 예제</Link>
        </li>
      </ul>
      <hr />
      {/* <Route path="주소" component={보여줄 컴포넌트} /> */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={History} />
    </div>
  );
}

export default App;
