import React, { Component } from 'react'

import Comment from './Comment'

class Comments extends Component {
  constructor() {
    super()

    this.state = {
      list: [
        { body: 'comment 1', username: 'johndoe', timestamp: '10:30' },
        { body: 'comment 2', username: 'janedow', timestamp: '12:39' },
        { body: 'comment 3', username: 'mcollins', timestamp: '1:48' }
      ]
    }
  }

  render() {
    const commentList = this.state.list.map( (comment, i) => {
      return (
        <li><Comment currentComment={ comment } /></li>
      )
    })

    return(
      <div>
        <h3>Comments: Zone 1</h3>
        <ul className="list-unstyled">
          { commentList }
        </ul>
      </div>
    )
  }
}

export default Comments