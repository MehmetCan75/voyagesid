import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Bucarest",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "13/11/20",
     dr: "16/11/20",
     hd: "20h10",
     hr: "10h05",
     prix: "34€",
     image: require('./Pictures/Bucarest.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/buch/201113/201116/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009201618*D*MRS*OTP*20201113*ryan*FR%7C202009190908*D*OTP*MRS*20201116*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=34&qp_prevProvider=ins_month&rtn=1'
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
