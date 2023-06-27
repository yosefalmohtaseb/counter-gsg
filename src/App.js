import React, { Component } from 'react';
import Counter from './components/Counter';
import './index.css'

class App extends Component {
  state = {
    counts: [0, 0, 0],
    total: 0
  };

  handleUpdateCount = (index, count) => {
    this.setState((prevState) => {
      const updatedCounts = [...prevState.counts];
      updatedCounts[index] = count;
      return { counts: updatedCounts };
    });
  };

  componentWillUpdate(nextProps, nextState) {
    const { counts } = nextState;
    const total = counts.reduce((sum, count) => sum + count, 0);
    if (this.state.total !== total) {
      this.setState({ total });
    }
  }

  render() {
    const { counts, total } = this.state;

    return (
      <div className="app">
        <Counter
          increment={1}
          decrement={1}
          count={counts[0]}
          onUpdateCount={(count) => this.handleUpdateCount(0, count)}
        />
        <Counter
          increment={2}
          decrement={2}
          count={counts[1]}
          onUpdateCount={(count) => this.handleUpdateCount(1, count)}
        />
        <Counter
          increment={3}
          decrement={3}
          count={counts[2]}
          onUpdateCount={(count) => this.handleUpdateCount(2, count)}
        />
        <p className="total">Total: {total}</p>
      </div>
    );
  }
}

export default App;
