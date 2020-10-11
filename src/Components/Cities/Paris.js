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
     dd: "01/03/21",
     dr: "11/03/21",
     hd: "10h50",
     hr: "20h45",
     ca: require('./Airlines/AirCaraibes.jpg'),
     airlines: "Air Caraïbes",
     prix: "212€",
     image: require('./Pictures/Guadeloupe.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/ptpa/210301/210311/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010092007*D*ORY*PTP*20210301*gofr*TX%7C202010092007*D*PTP*ORY*20210311*gofr*TX&qp_prevCurrency=EUR&qp_prevPrice=215&qp_prevProvider=ins_month&rtn=1'
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


