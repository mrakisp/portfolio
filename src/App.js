import React from 'react';
import './App.css';
import { Header, About, Projects } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <About id="about"/>
      <Projects/>
    </div>
  );
}

export default App;
