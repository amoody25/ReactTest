import React, { useState } from 'react';
import './App.css';

import Button from './Button/Button';

function App() {
  const  [currentState, setState] = useState(0);
  const increment = () => setState(currentState + quantity);
  const quantity = 29;
  return (
    <div className="App">
      <h1>You clicked {currentState} times</h1>
      <Button handleClick={increment} title={'+' + quantity}></Button>
    </div>
  );
}

export default App;
