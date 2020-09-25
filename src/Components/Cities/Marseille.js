import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Istanbul",
     flag: require('./Flag/turkey.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "06/12/20",
     dr: "10/12/20",
     hd: "13h40",
     hr: "11h25",
     prix: "56€",
     image: require('./Pictures/Istanbul2.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/ista/201206/201210/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009241025*I*MRS*SAW*20201206*gtbf*FR%7C202009241025*I*SAW*MRS*20201210*gtbf*PC&qp_prevCurrency=EUR&qp_prevPrice=91&qp_prevProvider=ins_month&rtn=1'
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
