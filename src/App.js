import React from 'react';
import './App.css';
import { Header, About } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <About id="about"/>
    </div>
  );
}

export default App;
