import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Oslo",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "19/10/20",
     dr: "26/10/20",
     hd: "09h25",
     hr: "06h45",
     prix: "132€",
     image: require('./Pictures/Oslo.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/oslo/201019/201026/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=&qp_prevCurrency=EUR&qp_prevPrice=ReturnNoPrices&qp_prevProvider=ins_month&rtn=1'
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
