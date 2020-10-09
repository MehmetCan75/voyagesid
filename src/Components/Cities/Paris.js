import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Prague",
     flag: require('./Flag/czech-republic.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "20/11/20",
     dr: "27/11/20",
     hd: "18h25",
     hr: "20h50",
     ca: require('./Airlines/Transavia.jpg'),
     airlines: "Transavia",
     prix: "72€",
     image: require('./Pictures/prague.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/prag/201120/201127/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010080856*I*BVA*PRG*20201120*gtbf*FR%7C202010080856*I*PRG*BVA*20201127*gtbf*FR&qp_prevCurrency=EUR&qp_prevPrice=64&qp_prevProvider=ins_month&rtn=1'
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


