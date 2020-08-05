import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Marrakech",
     vd: "Beauvais",
     ad: "BVA",
     ar: "CDG",
     dd: "26/08/20",
     dr: "02/09/20",
     hd: "21h05",
     hr: "16h25",
     prix: "51€",
     image: require('./Pictures/marrakech.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/rak/200826/200902/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546125&inboundaltsenabled=false&infants=0&originentityid=27539733&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
   }



  render() {
    let style = { 
          backgroundImage: 'url(' + this.state.image + ')',
      };
    return (
      <article className="card">
        <CardHeader style={style}/>
        <CardBody destination={this.state.destination} vd={this.state.vd} ad={this.state.ad} ar={this.state.ar} dd={this.state.dd} hd= {this.state.hd} dr={this.state.dr} hr={this.state.hr} prix={this.state.prix} link={this.state.link}/>
      </article>
    )
  }
}


