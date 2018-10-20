import React, { Component } from 'react';
import Game from './app/content/Game'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Route exact path="/" component={Game}/>
    )
  }
}

export default App;
