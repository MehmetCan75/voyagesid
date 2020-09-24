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
     dd: "04/11/20",
     dr: "08/11/20",
     hd: "09h20",
     hr: "14h35",
     prix: "44€",
     image: require('./Pictures/Rome.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/rome/201104/201108/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009211156*D*MRS*CIA*20201104*txfr*FR%7C202009211156*D*CIA*MRS*20201108*txfr*FR&qp_prevCurrency=EUR&qp_prevPrice=32&qp_prevProvider=ins_month&rtn=1'
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
