import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Luqa",
     flag: require('./Flag/malta.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "09/11/20",
     dr: "16/11/20",
     hd: "10h50",
     hr: "08h20",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryanair",
     prix: "20€",
     image: require('./Pictures/malta.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/luqa/201109/201116/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010161239*D*MRS*MLA*20201109*skyp*FR%7C202010161239*D*MLA*MRS*20201116*skyp*FR&qp_prevCurrency=EUR&qp_prevPrice=20&qp_prevProvider=ins_month&rtn=1'
   }



  render() {
    let style = { 
          backgroundImage: 'url(' + this.state.image + ')',
      };
    return (
      <article className="card">
        <CardHeader style={style}/>
        <CardBody destination={this.state.destination} airlines={this.state.airlines} ca={this.state.ca} flag={this.state.flag} vd={this.state.vd} ad={this.state.ad} ar={this.state.ar} dd={this.state.dd} hd= {this.state.hd} dr={this.state.dr} hr={this.state.hr} prix={this.state.prix} link={this.state.link}/>
      </article>
    )
  }
}
