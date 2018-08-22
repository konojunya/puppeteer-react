import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

}

export default App;
