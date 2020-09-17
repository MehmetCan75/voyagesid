import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Bologne",
     vd: "Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "23/09/20",
     dr: "27/09/20",
     hd: "12h50",
     hr: "12h20",
     prix: "16€",
     image: require('./Pictures/Bologne.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/bolo/200923/200927/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009171223*D*BVA*BLQ*20200923*lmfr*FR%7C202009171223*D*BLQ*BVA*20200927*lmfr*FR&qp_prevCurrency=EUR&qp_prevPrice=16&qp_prevProvider=ins_month&rtn=1'
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


