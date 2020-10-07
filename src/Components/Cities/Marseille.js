import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Cagliari",
     flag: require('./Flag/italy.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "16/10/21",
     dr: "19/10/21",
     hd: "12h45",
     hr: "10h05",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryan Air",
     prix: "30€",
     image: require('./Pictures/Cagliari.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/cagl/201016/201019/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010071346*D*BVA*CAG*20201016*ryan*FR%7C202010071717*D*CAG*BVA*20201019*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=28&qp_prevProvider=ins_month&rtn=1'
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
