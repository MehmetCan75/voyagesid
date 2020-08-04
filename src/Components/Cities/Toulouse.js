import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Naples",
     vd: "Toulouse",
     ad: "TLS",
     ar: "TLS",
     dd: "02/09/20",
     dr: "09/09/20",
     hd: "08h55",
     hr: "06h25",
     prix: "46€",
     image: require('./Pictures/naples.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/tls/napl/200902/200909/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202008031503*D*TLS*NAP*20200902*bffr*FR%7C202008031503*D*NAP*TLS*20200909*bffr*FR&qp_prevCurrency=EUR&qp_prevPrice=34&qp_prevProvider=ins_month&rtn=1'
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
