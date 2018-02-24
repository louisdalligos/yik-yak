import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />

        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))