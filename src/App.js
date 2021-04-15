import React, { useState } from 'react';
import Header from './Header';

export default function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header>
        &copy; 2021 - Schedule Beauty
        <br></br>
        Counter: {counter}
      </Header>
      <button onClick={increment}>Adicionar</button>
    </div>
  );
}


