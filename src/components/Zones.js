import React, { Component } from 'react'
import Zone from './Zone'


class Zones extends Component {
  render() {

    const firstZone = { name: 'Zone 1', zipCode: '10012', numComments: 8 }
    const secondZone = { name: 'Zone 2', zipCode: '10013', numComments: 99 }
    const thirdZone = { name: 'Zone 3', zipCode: '10014', numComments: 44 }
    const fourthZone = { name: 'Zone 4', zipCode: '10015', numComments: 24 }

    return(
      <div>
        <ol>
          <li><Zone currentZone={ firstZone } /></li>
          <li><Zone currentZone={ secondZone } /></li>
          <li><Zone currentZone={ thirdZone } /></li>
          <li><Zone currentZone={ fourthZone } /></li>
        </ol>
      </div>
    )
  }
}

export default Zones