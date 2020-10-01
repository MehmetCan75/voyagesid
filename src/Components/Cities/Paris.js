import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Maceió",
     flag: require('./Flag/brazil.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "08/01/21",
     dr: "24/01/21",
     hd: "12h30",
     hr: "23h10",
     prix: "447€",
     image: require('./Pictures/Maceio5.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/mcz/210108/210124/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=&qp_prevCurrency=EUR&qp_prevPrice=ReturnNoPrices&qp_prevProvider=ins_month&rtn=1'
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


