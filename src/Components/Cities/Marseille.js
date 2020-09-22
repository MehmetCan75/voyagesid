import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Koutaïssi",
     flag: require('./Flag/georgia.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "01/11/20",
     dr: "08/11/20",
     hd: "14h10",
     hr: "21h55",
     prix: "46€",
     image: require('./Pictures/Koutaissi.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/kuta/201101/201108/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009201751*D*MRS*KUT*20201101*ryan*FR%7C202009181429*D*KUT*MRS*20201108*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=34&qp_prevProvider=ins_month&rtn=1'
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
