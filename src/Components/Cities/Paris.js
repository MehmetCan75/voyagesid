import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Zanzibar",
     flag: require('./Flag/tanzania.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "03/02/21",
     dr: "17/02/21",
     hd: "15h05",
     hr: "17h15",
     prix: "448€",
     image: require('./Pictures/Zanzibar.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/znza/210203/210217/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=&qp_prevCurrency=EUR&qp_prevPrice=ReturnNoPrices&qp_prevProvider=ins_month&rtn=1'
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


