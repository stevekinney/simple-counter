import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const getStateFromLocalStorage = (defaultValue, key) => {
  const storage = localStorage.getItem(key);
  if (storage) return JSON.parse(storage).value;
  return defaultValue;
};

const useLocalStorage = (defaultValue, key) => {
  const initialValue = getStateFromLocalStorage(defaultValue, key);
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
};

const Counter = ({ max }) => {
  const [count, setCount] = useLocalStorage(0, 'count');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <main className="Counter">
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
