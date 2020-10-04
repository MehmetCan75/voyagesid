import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Kiev",
     flag: require('./Flag/ukraine.png'),
     vd: "Paris/Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "05/11/20",
     dr: "15/11/20",
     hd: "13h55",
     hr: "10h20",
     ca: require('./Airlines/Skyup.jpg'),
     airlines: "SkyUp",
     prix: "115€",
     image: require('./Pictures/Ukraine.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/kiev/201105/201115/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1'
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


