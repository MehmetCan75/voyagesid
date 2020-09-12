import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Luqa",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "09/10/20",
     dr: "12/10/20",
     hd: "14h25",
     hr: "10h45",
     prix: "43€",
     image: require('./Pictures/malta.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/mla/201009/201012/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=46395655&inboundaltsenabled=false&infants=0&originentityid=32030366&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
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
