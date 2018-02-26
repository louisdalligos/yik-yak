import React, { Component } from 'react'
import styles from './styles'

class CommentForm extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        username: '',
        body: ''
      }
    }
  }

  updateComment(e) {
    console.log('Update zone: ' + e.target.name + ' == ' + e.target.value )

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment[e.target.name] = e.target.value

    this.setState({
      comment: updatedComment
    })
  }

  submitComment(e) {
    e.preventDefault()
    
    console.log(JSON.stringify(this.state.comment))
  }

  render() {
    const formStyle = styles.form

    return(
      <div>
        <form style={formStyle.container}>
          <h4 className="mb-4">Comment Form</h4>

          <div className="form-group">
            <label>Username</label>
            <input onChange={this.updateComment.bind(this)} type="text" className="form-control" name="username" placeholder="Enter username" />
          </div>

          <div className="form-group">
            <label>Enter comment</label>
            <textarea onChange={this.updateComment.bind(this)} className="form-control" name="body" rows="3" placeholder="Enter comment"></textarea>
          </div>

          <button onClick={this.submitComment.bind(this)} className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
} 

export default CommentForm