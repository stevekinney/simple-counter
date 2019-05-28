import React, { useState, createContext } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ increment, decrement, reset, count }}>
      {children}
    </CounterContext.Provider>
  );
};

const Counter = () => {
  const { count, increment, decrement, reset } = React.useContext(
    CounterContext,
  );

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

render(
  <CounterProvider>
    <Counter />
  </CounterProvider>,
  document.getElementById('root'),
);
