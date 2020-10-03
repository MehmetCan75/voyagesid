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
     dd: "09/10/20",
     dr: "12/10/20",
     hd: "14h25",
     hr: "10h45",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryanair",
     prix: "39€",
     image: require('./Pictures/malta.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/luqa/201009/201012/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010030024*D*MRS*MLA*20201009*ryan*FR%7C202010021732*D*MLA*MRS*20201012*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=51&qp_prevProvider=ins_month&rtn=1'
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
