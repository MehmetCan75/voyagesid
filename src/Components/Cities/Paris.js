import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Sofia",
     flag: require('./Flag/bulgaria.png'),
     vd: "Paris/Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "26/10/20",
     dr: "29/10/20",
     hd: "20h30",
     hr: "16h50",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryanair",
     prix: "46€",
     image: require('./Pictures/Sofia.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/sofi/201023/201026/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010141205*D*BVA*SOF*20201023*ryan*FR%7C202010141334*D*SOF*BVA*20201026*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=46&qp_prevProvider=ins_month&rtn=1'
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


