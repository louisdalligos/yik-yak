import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import { APIManager } from '../../utils'

class Comments extends Component {
  constructor() {
    super()

    this.state = {
      comment: {
        username: '',
        body: '',
        timestamp: ''
      },
      list: []
    }
  }

  componentDidMount() {

    APIManager.get('api/comment', null, (err, response) => {
      if (err) {
        alert('ERROR: ' + err.message)
        return
      }
      //console.log('RESULTS: ' + response.results)

      this.setState({
        list: response.results
      })
    })
  }

  submitComment(e) {
    e.preventDefault();
    console.log('Submit comment: ' + JSON.stringify(this.state.comment))

    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)

    this.setState({
      list: updatedList
    })
  }

  updateUsername(e) {
    //console.log('Update username: ' + e.target.value)

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = e.target.value

    this.setState({
      comment: updatedComment
    })
  }


  updateBody(e) {
    //console.log('Update comment: ' + e.target.value)

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = e.target.value

    this.setState({
      comment: updatedComment
    })
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
            <textarea onChange={this.updateBody.bind(this)} className="form-control" id="commentBody" rows="3" placeholder="Enter comment"></textarea>
          </div>

          <button onClick={this.submitComment.bind(this)} className="btn btn-primary">Submit</button>

          <input type="hidden" name="timestamp" />
        </form>
      </div>
    )
  }
}

export default Comments