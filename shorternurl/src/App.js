import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [input, setData] = React.useState('')

  const inputHandler = i =>{
    setData(i.target.value);
  }
  const convertHandler = e =>{
    setData(e.target.value);
    alert(input);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input value ={input} onChange = {inputHandler} placeholder="paste your url" />
        <button onClick={convertHandler}>Shortern</button>
        <textarea class="placeholder" />
        <span id="copy">&copy; nani</span>
      </header>

    </div>
  );
}

export default App;
