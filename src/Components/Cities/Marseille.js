import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Rome",
     flag: require('./Flag/italy.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "23/10/20",
     dr: "28/10/20",
     hd: "18h00",
     hr: "11h35",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryan Air",
     prix: "41€",
     image: require('./Pictures/Rome.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/rome/201023/201028/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010070628*D*MRS*FCO*20201023*ryan*FR%7C202010070902*D*CIA*MRS*20201028*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=41&qp_prevProvider=ins_month&rtn=1'
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
