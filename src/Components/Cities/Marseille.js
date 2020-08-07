import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Prague",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "11/09/20",
     dr: "14/09/20",
     hd: "14h40",
     hr: "11h15",
     prix: "56€",
     image: require('./Pictures/prague.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/prg/200911/200914/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546033&inboundaltsenabled=false&infants=0&originentityid=32030366&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
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
