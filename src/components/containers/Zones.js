import React, { Component } from 'react'
import { Zone, AddZoneForm } from '../presentation/'
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

    APIManager.get('/api/zone', null, (err, response) => {
      if (err) {
        alert('ERROR: ' + err.message)
        return
      }

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

    // pre-process our zone before sending to server
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['zipCodes'] = updatedZone.zipCode.split(',')

    console.log(updatedZone)

    APIManager.post('/api/zone', updatedZone, (err, response) => {
      
      if (err) {
        alert('ERROR: ' + err.message )
        return
      }

      console.log('ZONE CREATED: ', + JSON.stringify(response))

      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)

      this.setState({
        list: updatedList
      })
    })
  }

  render() {
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

        <AddZoneForm />
      </div>
    )
  }
}

export default Zones