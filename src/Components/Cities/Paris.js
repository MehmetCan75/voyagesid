import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Santorin",
     vd: "Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "04/10/20",
     dr: "11/10/20",
     hd: "08h30",
     hr: "22h30",
     prix: "66€",
     image: require('./Pictures/Santorini.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/thir/201004/201011/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009190739*I*BVA*JTR*20201004*gtbf*FR%7C202009190739*I*JTR*BVA*20201011*gtbf*FR&qp_prevCurrency=EUR&qp_prevPrice=66&qp_prevProvider=ins_month&rtn=1'
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


