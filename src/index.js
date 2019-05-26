import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

class Application extends Component {
  render() {
    return (
      <main className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
        </section>
      </main>
    );
  }
}

render(<Application />, document.getElementById('root'));
