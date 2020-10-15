import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Rome",
     flag: require('./Flag/italy.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "25/12/20",
     dr: "01/01/21",
     hd: "07h50",
     hr: "10h25",
     ca: require('./Airlines/Easyjet.jpg'),
     airlines: "Easyjet",
     prix: "68€",
     image: require('./Pictures/Rome.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/rome/201225/210101/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
   }



  render() {
    let style = { 
        backgroundImage: 'url(' + this.state.image + ')',
      };

    return (
      <article className="card">
        <CardHeader style={style}/>
        <CardBody destination={this.state.destination} airlines={this.state.airlines} ca={this.state.ca} flag={this.state.flag} vd={this.state.vd} ad={this.state.ad} ar={this.state.ar} dd={this.state.dd} hd= {this.state.hd} dr={this.state.dr} hr={this.state.hr} prix={this.state.prix} link={this.state.link}/>
      </article>
    )
  }
}


