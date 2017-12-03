import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Memes from './Memes'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Giphy app </h1>
        </header>
        <p className="App-intro">
          To get started,type a gif query to search and press Enter.
        </p>
      <Memes / >
      </div>

    );
  }
}

export default App;
