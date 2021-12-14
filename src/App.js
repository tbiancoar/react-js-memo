import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

//Componente no memorizado

const Counter = (props) => {
  const { counter, title } = props;

  const today = new Date()
  return (
    <div className="child">
      <h2>{title}</h2>
      <h3>{"Count: " + counter}</h3>
      <h4>{`Last render:`}</h4>
      <p>{`${today.toTimeString()}`}</p>
    </div>
  )
}

const Component = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter1(counter1 + 1);
    }, 1000);
  }, [counter1]);

  useEffect(() => {
    setTimeout(() => {
      setCounter2(counter2 + 1);
    }, 10000);
  }, [counter2]);

  return (
    <div className="parent">
      <div className="childs">
        <Counter
          title={"Count per 1 seconds"}
          counter={counter1} />

        <Counter
          title={"Count per 10 seconds"}
          counter={counter2} />

      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component />
      </header>

    </div>
  );
}

export default App;
