import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const inc = ({ count }) => ({ count: count + 1 });
const dec = ({ count }) => ({ count: count - 1 });
const res = () => ({ count: 0 });

class Counter extends Component {
  state = { count: parseInt(localStorage.getItem('count'), 10) || 0 };

  increment = () => {
    this.setState(this.props.onIncrement, () =>
      localStorage.setItem('count', this.state.count),
    );
  };

  decrement = () => {
    this.setState(dec);
  };

  reset = () => {
    this.setState(res);
  };

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

render(
  <Counter onIncrement={state => ({ count: state.count + 100 })} />,
  document.getElementById('root'),
);
