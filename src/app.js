import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div>
        <h2>YikYak App</h2>

        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))