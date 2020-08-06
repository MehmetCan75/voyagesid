import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Rhodes",
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "08/09/20",
     dr: "15/09/20",
     hd: "13h55",
     hr: "19h05",
     prix: "57€",
     image: require('./Pictures/rhodes.jpg'),
     link : 'https://www.skyscanner.fr/transport/flights/pari/rho/200908/200915/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546162&inboundaltsenabled=false&infants=0&originentityid=27539733&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
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


