import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Cancún",
     flag: require('./Flag/mexico.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "12/01/21",
     dr: "26/01/21",
     hd: "07h25",
     hr: "18h40",
     ca: require('./Airlines/Lufthansa.jpg'),
     airlines: "Lufthansa",
     prix: "309€",
     image: require('./Pictures/Cancun.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/cuna/210112/210126/?adultsv2=1&airlines=!DL,!KL,!AF,!UX,!UA,!B6,!VS,!AC,!LX,!AM,!AA,!AY,!SN,!IB,!OS,!BA,!multiple&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010131012*I*CDG*CUN*20210112*at24*LH%7C202010131012*I*CUN*CDG*20210126*at24*UA&qp_prevCurrency=EUR&qp_prevPrice=278&qp_prevProvider=ins_month&rtn=1'
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


