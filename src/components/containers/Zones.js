import React, { Component } from 'react'
import { Zone, AddZoneForm } from '../presentation'
import { APIManager } from '../../utils'

class Zones extends Component {
  constructor() {
    super()

    this.state = {
      selected: 0,
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

  processAddZone(zone) {

    console.log('ProcessZone')

    // pre-process our zone before sending to server
    let updatedZone = Object.assign({}, zone)
    updatedZone['zipCodes'] = updatedZone.zipCode.split(',')

    console.log(updatedZone)

    APIManager.post('/api/zone', updatedZone, (err, response) => {
      
      if (err) {
        alert('ERROR: ' + err.message )
        return
      }

      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)

      this.setState({
        list: updatedList
      })
    })
  }

  selectZone(index) {
    console.log('selectZone: ' + index)

    this.setState({
      selected: index
    })
  }

  render() {
    const listItems = this.state.list.map( (zone, i) => {
      let selected = (i===this.state.selected)

      return (
        <li key={i}>
          <Zone index={i} select={this.selectZone.bind(this)} isSelected={ selected } currentZone={ zone } />
        </li>
      )
    })

    return(
      <div>
        <ul className="list-unstyled">
          { listItems }
        </ul>

        <AddZoneForm onAddZone={this.processAddZone.bind(this)} />
      </div>
    )
  }
}

export default Zones