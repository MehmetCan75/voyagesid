import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Téhéran",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "03/11/20",
     dr: "24/11/20",
     hd: "13h30",
     hr: "04h15",
     prix: "204€",
     image: require('./Pictures/Teheran.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/thra/201103/201124/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=&qp_prevCurrency=EUR&qp_prevPrice=ReturnNoPrices&qp_prevProvider=ins_month&rtn=1'
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
