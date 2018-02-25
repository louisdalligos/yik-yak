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

    let updatedComment = Object.assign({}, this.state.comment)

    console.log(updatedComment)

    APIManager.post('/api/comment', updatedComment, (err, response) => {

      if (err) {
        alert('ERROR: ' + err)
        return
      }

      console.log('COMMENT CREATED: ', + JSON.stringify(response))

      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)

      this.setState({
        list: updatedList
      })
    })
  }

  updateComment(e) {
    console.log('Update zone: ' + e.target.name + ' == ' + e.target.value )

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment[e.target.name] = e.target.value

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
            <input onChange={this.updateComment.bind(this)} type="text" className="form-control" name="username" placeholder="Enter username" />
          </div>

          <div className="form-group">
            <label>Enter comment</label>
            <textarea onChange={this.updateComment.bind(this)} className="form-control" name="body" rows="3" placeholder="Enter comment"></textarea>
          </div>

          <button onClick={this.submitComment.bind(this)} className="btn btn-primary">Submit</button>

          <input type="hidden" name="timestamp" />
        </form>
      </div>
    )
  }
}

export default Comments