import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Stockholm",
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "02/10/20",
     dr: "08/10/20",
     hd: "20h50",
     hr: "13h15",
     prix: "109€",
     image: require('./Pictures/Stockholm.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/stoc/201002/201008/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539477&inboundaltsenabled=false&infants=0&originentityid=27539733&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
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


