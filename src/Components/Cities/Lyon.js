import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Corfou",
     vd: "Lyon",
     ad: "LYS",
     ar: "LYS",
     dd: "26/08/20",
     dr: "02/09/20",
     hd: "06h30",
     hr: "10h35",
     prix: "44€",
     image: require('./Pictures/corfou.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/lyon/cfu/200826/200902/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27539767&inboundaltsenabled=false&infants=0&originentityid=27544221&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
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
