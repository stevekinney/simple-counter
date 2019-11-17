import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const increment = (state, props) => {
  if (state.count >= props.max) return;
  return { count: state.count + 1 };
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = this.getStateFromLocalStorage();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  getStateFromLocalStorage() {
    const storage = localStorage.getItem('counterState');
    if (storage) return JSON.parse(storage);
    return { count: 0 };
  }

  storeStateInLocalStorage() {
    localStorage.setItem('counterState', JSON.stringify(this.state));
  }

  increment() {
    this.setState(increment, this.storeStateInLocalStorage);
  }

  decrement() {
    this.setState(
      { count: this.state.count - 1 },
      this.storeStateInLocalStorage,
    );
  }

  reset() {
    this.setState({ count: 0 }, this.storeStateInLocalStorage);
  }

  render() {
    const { count } = this.state;

    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </main>
    );
  }
}

render(<Counter max={10} />, document.getElementById('root'));
