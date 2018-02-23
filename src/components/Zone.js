import React, { Component } from 'react'


class Zone extends Component {
  render() {
    return(
      <div style={styles.container}>
        <h2 style={styles.zoneHeading}>
          <a style={styles.zoneTitleLink} href="#">{this.props.currentZone.name}</a>
        </h2>
        <span>{this.props.currentZone.zipCode}</span><br />
        <span>{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 15, 
    border: '1px solid #EEEEEE', 
    marginTop: 20
  },

  zoneHeading: {
    margin: 0
  },

  zoneTitleLink: {
    textDecoration: 'none', 
    color: '#222'
  }
}

export default Zone