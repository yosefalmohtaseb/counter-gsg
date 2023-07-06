import React, { Component } from 'react';
import Counter from './components/Counter';
import './index.css';

class App extends Component {
  state = {
    counts: [0, 0, 0],
    total: 0
  };

  handleUpdateCount = (index, count) => {
    this.setState((prevState) => {
      const updatedCounts = prevState.counts.map((c, i) => (i === index ? count : c));
      return { counts: updatedCounts };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { counts } = this.state;
    const total = counts.reduce((sum, count) => sum + count, 0);
    if (prevState.total !== total) {
      this.setState({ total });
    }
  }

  render() {
    const { counts, total } = this.state;

    return (
      <div className="app">
        {counts.map((count, index) => (
          <Counter
            key={index}
            increment={index + 1}
            decrement={index + 1}
            count={count}
            onUpdateCount={(count) => this.handleUpdateCount(index, count)}
          />
        ))}
        <p className="total">Total: {total}</p>
      </div>
    );
  }
}

export default App;
