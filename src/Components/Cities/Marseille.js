import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Séville",
     flag: require('./Flag/spain.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "09/10/21",
     dr: "16/10/21",
     hd: "14h05",
     hr: "11h40",
     prix: "44€",
     image: require('./Pictures/Sevilla.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/sevi/201009/201016/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010011629*D*MRS*SVQ*20201009*skyp*FR%7C202010011629*D*SVQ*MRS*20201016*skyp*FR&qp_prevCurrency=EUR&qp_prevPrice=37&qp_prevProvider=ins_month&rtn=1'
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
