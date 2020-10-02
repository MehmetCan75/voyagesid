import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Bogotá",
     flag: require('./Flag/mexico.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "13/01/21",
     dr: "28/01/21",
     hd: "10h15",
     hr: "21h30",
     prix: "483€",
     image: require('./Pictures/Bogota.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/boga/210113/210128/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009302109*I*ORY*BOG*20210113*gtbf*UX%7C202009302109*I*BOG*ORY*20210128*gtbf*UX&qp_prevCurrency=EUR&qp_prevPrice=450&qp_prevProvider=ins_month&rtn=1'
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


