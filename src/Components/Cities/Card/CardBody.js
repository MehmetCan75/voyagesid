import React, {Component} from 'react'

// import Button from './Button'

export default class CardBody extends Component {
    render() {
      return (
        <div className="card-body">
        <h2 className="city">Destination: {this.props.destination}</h2>

          <p className="date">Ville de Départ : {this.props.vd}</p>
          <p className="date">Aéroport de Départ : {this.props.ad}</p>
          <p className="date">Aéroport de Retour : {this.props.ar}</p>
          <p className="date">Vol Aller : {this.props.dd} || Horaire : {this.props.hd}</p>
          <p className="date">Vol Retour : {this.props.dr} || Horaire : {this.props.hr}</p>

          <p className="prix">PRIX: {this.props.prix}</p>
          <a href={this.props.link} className="linkToSky">J'y vais</a>
  
        </div>
      )
    }
  }