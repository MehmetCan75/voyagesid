import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Milan",
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "01/09/20",
     dr: "13/09/20",
     hd: "15h25",
     hr: "06h30",
     prix: "51€",
     image: require('./Pictures/milan.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/mila/200901/200913/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27544068&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
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


