import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {
  render() {
    const zoneStyle = styles.zone

    return(
      <div style={zoneStyle.container}>
        <h2 style={zoneStyle.zoneHeading}>
          <a style={zoneStyle.zoneTitleLink} href="#">{this.props.currentZone.name}</a>
        </h2>
        <span>{this.props.currentZone.zipCode}</span><br />
        <span>{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}

export default Zone