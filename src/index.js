import React, { useState, createContext } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const counterReducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return { count: state.count + 100 };
  }
  return state;
};

const useLocalStorage = (key, defaultValue) => {
  let [value, setValue] = useState(() => {
    let storedValue = localStorage.getItem(key);
    if (storedValue) return JSON.parse(storedValue);
    return defaultValue;
  });

  const setValueAndStore = newValue => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setValueAndStore];
};

const Counter = () => {
  const [count, setCount] = useLocalStorage('very-important-count');

  const increment = () => setCount(count + 1);

  return (
    <main className="Counter">
      <p className="count">{+count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
      </section>
    </main>
  );
};

render(<Counter />, document.getElementById('root'));
