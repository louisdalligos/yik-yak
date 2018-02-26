import React, { Component } from 'react'
import styles from './styles'

class AddZoneForm extends Component {
  render() {
    const formStyle = styles.form

    return(
      <div>
        <form style={formStyle.container}>
          <h5 className="mb-4">Add Zone Form</h5>

          <div className="form-group">
            <input type="text" className="form-control form-control-sm" name="name" placeholder="Enter zone name" />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-sm" name="zipCode" placeholder="Enter zone zip code" />
          </div>

          <button className="btn btn-secondary btn-sm">Submit</button>
        </form>
      </div>
    )
  }
} 

export default AddZoneForm