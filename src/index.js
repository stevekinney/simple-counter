import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const Counter = ({ max }) => {
  const [count, setCount] = React.useState(0);

  const countRef = React.useRef();
  let message = '';

  if (countRef.current < count) message = 'Higher';
  if (countRef.current > count) message = 'Lower';

  countRef.current = count;

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <main className="Counter">
      <p>{message}</p>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
};

render(<Counter max={10} />, document.getElementById('root'));
