import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Maceió",
     flag: require('./Flag/brazil.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "08/01/21",
     dr: "22/01/21",
     hd: "06h00",
     hr: "23h10",
     prix: "473€",
     image: require('./Pictures/Maceio2.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/mcz/210108/210122/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
   }



  render() {
    let style = { 
          backgroundImage: 'url(' + this.state.image + ')',
      };
    return (
      <article className="card">
        <CardHeader style={style}/>
        <CardBody destination={this.state.destination} flag={this.state.flag} vd={this.state.vd} ad={this.state.ad} ar={this.state.ar} dd={this.state.dd} hd= {this.state.hd} dr={this.state.dr} hr={this.state.hr} prix={this.state.prix} link={this.state.link}/>
      </article>
    )
  }
}
