import React, {Component} from 'react'

// import image from '../Pictures/photo-1558782630-3dff4371ad7e.jpeg'

export default class CardHeader extends Component {
    render() {

      return (
        <header style={this.props.style} className="card-header">
          <h4 className="card-header--title">Voyages ID</h4>
        </header>
      )
    }
  }