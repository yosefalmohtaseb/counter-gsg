import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  handleIncrement = () => {
    const { count, increment, onUpdateCount } = this.props;
    onUpdateCount(count + increment);
  };

  handleDecrement = () => {
    const { count, decrement, onUpdateCount } = this.props;
    onUpdateCount(count - decrement);
  };

  render() {
    const { count } = this.props;

    return (
      <div className="counter">
        <button className="counter-button" onClick={this.handleDecrement}>
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
