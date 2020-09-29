import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Pointe-à-Pitre",
     flag: require('./Flag/france.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "01/02/21",
     dr: "10/02/21",
     hd: "10h50",
     hr: "20h45",
     prix: "220€",
     image: require('./Pictures/Guadeloupe.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/ptpa/210201/210210/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009281114*D*ORY*PTP*20210201*edfr*TX%7C202009281114*D*PTP*ORY*20210210*edfr*TX&qp_prevCurrency=EUR&qp_prevPrice=232&qp_prevProvider=ins_month&rtn=1'
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


