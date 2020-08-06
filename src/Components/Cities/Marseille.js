import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Heraklion",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "15/09/20",
     dr: "22/09/20",
     hd: "06h00",
     hr: "10h20",
     prix: "58€",
     image: require('./Pictures/heraklion.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/her/200915/200922/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=81972515&inboundaltsenabled=false&infants=0&originentityid=32030366&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
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
