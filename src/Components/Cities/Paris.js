import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Mykonos",
     vd: "Paris",
     ad: "CDG",
     ar: "ORY",
     dd: "02/09/20",
     dr: "08/09/20",
     hd: "14h40",
     hr: "19h45",
     prix: "61€",
     image: require('./Pictures/photo-1558782630-3dff4371ad7e.jpeg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/jmk/200902/200908/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=38304360&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
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


