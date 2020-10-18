import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Stockholm",
     flag: require('./Flag/sweden.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "11/03/21",
     dr: "14/03/21",
     hd: "12h25",
     hr: "16h50",
     ca: require('./Airlines/Norwegian.jpg'),
     airlines: "Norwegian",
     prix: "101€",
     image: require('./Pictures/Stockholm.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/stoc/210311/210314/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010150538*D*CDG*ARN*20210311*skyp*DY%7C202010150538*D*ARN*CDG*20210314*skyp*DY&qp_prevCurrency=EUR&qp_prevPrice=102&qp_prevProvider=ins_month&rtn=1'
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


