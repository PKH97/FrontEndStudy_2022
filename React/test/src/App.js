import React from 'react';
import './App.css';
import Header from './header'
import Counter from './components/counter'
import Input from './components/input'

function App() {
  return (
    // <> </>
    <div>
      <Header>
        <h1>로고입니다</h1>
      </Header>
      <p>-----------------------------------------------------</p>
      <Counter />
      <Input />
    </div>
  );
}

export default App;
