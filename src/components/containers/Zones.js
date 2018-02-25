import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import styles from './styles'
import { APIManager } from '../../utils'

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

    APIManager.get('/api/zone', null, (err, response) => {
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

    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['zipCodes'] = updatedZone.zipCode.split(',')

    APIManager.post('/api/zone', updatedZone, (err, response) => {
      
      if (err) {
        alert('ERROR: ' + err.message )
        return
      }

      console.log('ZONE CREATED', + JSON.stringify(response))

      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)

      this.setState({
        list: updatedList
      })
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