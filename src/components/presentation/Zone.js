import React, { Component } from 'react'

import styles from './styles'

class Zone extends Component {
  render() {
    const zoneStyle = styles.zone
    const zipcode = this.props.currentZone.zipCodes[0]

    return(
      <div style={zoneStyle.container}>
        <h3 style={zoneStyle.zoneHeading}>
          <a style={zoneStyle.zoneTitleLink} href="#">{this.props.currentZone.name}</a>
        </h3>
        <span>{zipcode}</span><br />
        <span>{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}

export default Zone