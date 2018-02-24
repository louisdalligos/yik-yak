import React, { Component } from 'react'

import Comment from '../presentation/Comment'
import styles from './styles'

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

  submitComment(e) {
    e.preventDefault();

    console.log('Submit comment')
  }

  updateUsername(e) {
    console.log('Update username: ' + e.target.value)
  }


  updateComment(e) {
    console.log('Update comment: ' + e.target.value)
  }

  render() {
    const formStyle = styles.form

    const commentList = this.state.list.map( (comment, i) => {
      return (
        <li key={i}><Comment currentComment={ comment } /></li>
      )
    })

    return(
      <div>
        <h3>Comments: Zone 1</h3>
        <ul className="list-unstyled">
          { commentList }
        </ul>

        <hr className="mt-5 mb-5" />

        <form style={formStyle.container}>
          <h4 className="mb-4">Comment Form</h4>

          <div className="form-group">
            <label>Username</label>
            <input onChange={this.updateUsername.bind(this)} type="text" className="form-control" id="userName" placeholder="Enter username" />
          </div>

          <div className="form-group">
            <label>Enter comment</label>
            <textarea onChange={this.updateComment.bind(this)} className="form-control" id="commentBody" rows="3" placeholder="Enter comment"></textarea>
          </div>

          <button onClick={this.submitComment.bind(this)} className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Comments