import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/todotemplate.jsx';
import TodoHead from './components/todohead.jsx';
import TodoList from './components/todolist.jsx';
import TodoCreate from './components/todocreate.jsx';
import { TodoProvider } from './context';

// [styled-components]
// JS안에 CSS를 작성하는 라이브러리입니다.
// yarn add styled-components

// [react-icons]
// http://react-icons.github.io/react-icons/#/
// yarn add react-icons

//전체를 포함하는 컴포넌트 선언
const GlobalStyle = createGlobalStyle`
  body{
    baclground-color: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
// react-icons.github.io/react-icons/#/