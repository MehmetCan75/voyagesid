import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Tokyo",
     flag: require('./Flag/japan.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "10/02/21",
     dr: "25/02/21",
     hd: "12h00",
     hr: "22h55",
     prix: "465€",
     image: require('./Pictures/Tokyo.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/tyoa/210210/210225/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009250906*I*MRS*HND*20210210*bffr*TK%7C202009250906*I*HND*MRS*20210225*bffr*TK&qp_prevCurrency=EUR&qp_prevPrice=466&qp_prevProvider=ins_month&rtn=1'
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
