import React, { Component } from 'react'

import styles from './styles'

class Zone extends Component {

  onSelectTitle(e) {
    e.preventDefault()
    console.log('onSelectTitle: ' + this.props.index)

    this.props.select(this.props.index)
  }

  render() {
    const zoneStyle = styles.zone
    const zipcode = this.props.currentZone.zipCodes[0]
    const title = (this.props.isSelected) ? <a style={zoneStyle.zoneTitleLink} href="#">{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a>

    return(
      <div style={zoneStyle.container}>
        <h3 onClick={this.onSelectTitle.bind(this)} style={zoneStyle.zoneHeading}>
          { title }
        </h3>
        <span>{zipcode}</span><br />
        <span>{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}

export default Zone