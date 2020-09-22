import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Rio de Janeiro",
     flag: require('./Flag/brazil.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "05/02/21",
     dr: "22/02/21",
     hd: "20h35",
     hr: "17h10",
     prix: "400€",
     image: require('./Pictures/RiodeJaneiro.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/rioa/210205/210222/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009220708*I*ORY*GIG*20210205*gtbf*UX%7C202009220708*I*GIG*ORY*20210222*gtbf*TP&qp_prevCurrency=EUR&qp_prevPrice=382&qp_prevProvider=ins_month&rtn=1'
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


