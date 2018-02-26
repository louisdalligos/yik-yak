import React, { Component } from 'react'
import { Comment, CommentForm } from '../presentation/'
import { APIManager } from '../../utils'

class Comments extends Component {
  constructor() {
    super()

    this.state = {
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

  processComment(comment) {
    console.log('Submit comment from container:' + JSON.stringify(comment))

    APIManager.post('/api/comment', comment, (err, response) => {

      if (err) {
        alert('ERROR: ' + err)
        return
      }

      console.log(JSON.stringify(response))

      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)

      this.setState({
        list: updatedList
      })
    })
  }


  render() {
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

        <CommentForm onCreate={this.processComment.bind(this)} />
      </div>
    )
  }
}

export default Comments