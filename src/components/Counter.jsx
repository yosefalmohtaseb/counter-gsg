import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  handleIncrement = () => {
    const { count, increment, onUpdateCount } = this.props;
    onUpdateCount(count + increment);
  };

  handleDecrement = () => {
    const { count, decrement, onUpdateCount } = this.props;
    if (count > 0) {
      onUpdateCount(count - decrement);
    }
  };

  render() {
    const { count } = this.props;

    return (
      <div className="counter">
        <button className="counter-button" onClick={this.handleDecrement} disabled={count === 0}>
          Decrement
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-button" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
