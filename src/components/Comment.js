import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return(
      <div className="card mb-4">
        <div className="card-body">       
          <p className="card-text">{ this.props.currentComment.body }</p>

          <ul className="list-inline">
            <li className="list-inline-item"><strong> { this.props.currentComment.username }</strong></li>
            <li className="list-inline-item font-weight-light"><small>Posted on { this.props.currentComment.timestamp }</small></li>
          </ul>          
        </div>
      </div>
    )
  }
}

export default Comment