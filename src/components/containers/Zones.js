import React, { Component } from 'react'
import superagent from 'superagent'

import Zone from '../presentation/Zone'
import styles from './styles'

class Zones extends Component {
  constructor() {
    super()

    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      list: []
    }
  }


  componentDidMount() {
    console.log('componentDidMount')

    superagent
      .get('api/zone')
      .query(null)
      .set('Accept', 'application/json')
      .end( (err, response) => {

          if (err) {
            alert('ERROR: ' + err)
          }

          //console.log(JSON.stringify(response.body))

          let results = response.body.results
          this.setState({
            list: results
          })

      })
  }

  updateZone(e) {
    console.log('Update zone: ' + e.target.name + ' == ' + e.target.value )

    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[e.target.name] = e.target.value

    this.setState({
      zone: updatedZone
    })
  }

  addZone(e) {
    e.preventDefault()

    console.log('Add Zone: ' + JSON.stringify(this.state.zone))

    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.zone)

    this.setState({
      list: updatedList
    })
  }

  render() {
    const formStyle = styles.form

    const listItems = this.state.list.map( (zone, i) => {
      return (
        <li key={i}><Zone currentZone={ zone } /></li>
      )
    })

    return(
      <div>
        <ul className="list-unstyled">
          { listItems }
        </ul>

        <form style={formStyle.container}>
          <h5 className="mb-4">Add Zone Form</h5>

          <div className="form-group">
            <input onChange={this.updateZone.bind(this)} type="text" className="form-control form-control-sm" name="name" placeholder="Enter zone name" />
          </div>

          <div className="form-group">
            <input onChange={this.updateZone.bind(this)} type="text" className="form-control form-control-sm" name="zipCode" placeholder="Enter zone zip code" />
          </div>

          <button onClick={this.addZone.bind(this)} className="btn btn-secondary btn-sm">Submit</button>
        </form>
      </div>
    )
  }
}

export default Zones