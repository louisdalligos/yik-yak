import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Home from './components/layout/Home'
import Nav from './components/layout/Nav'

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