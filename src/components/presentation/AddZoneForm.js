import React, { Component } from 'react'
import styles from './styles'

class AddZoneForm extends Component {
  constructor() {
    super()

    this.state = {
      zone: {
        name: '',
        zipCode: ''
      }
    }

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
    this.props.onAddZone(this.state.zone)
  }

  render() {
    const formStyle = styles.form

    return(
      <div>
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

export default AddZoneForm