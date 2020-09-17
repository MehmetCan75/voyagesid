import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Séville",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "18/09/20",
     dr: "21/09/20",
     hd: "14h05",
     hr: "11h50",
     prix: "49€",
     image: require('./Pictures/Seville.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/sevi/200918/200921/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009171120*D*MRS*SVQ*20200918*ryan*FR%7C202009170934*D*SVQ*MRS*20200921*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=40&qp_prevProvider=ins_month&rtn=1'
   }



  render() {
    let style = { 
          backgroundImage: 'url(' + this.state.image + ')',
      };
    return (
      <article className="card">
        <CardHeader style={style}/>
        <CardBody destination={this.state.destination} vd={this.state.vd} ad={this.state.ad} ar={this.state.ar} dd={this.state.dd} hd= {this.state.hd} dr={this.state.dr} hr={this.state.hr} prix={this.state.prix} link={this.state.link}/>
      </article>
    )
  }
}
