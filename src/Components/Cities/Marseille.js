import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Lisbonne",
     flag: require('./Flag/portugal.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "04/10/20",
     dr: "11/10/20",
     hd: "17h10",
     hr: "13h20",
     prix: "48€",
     image: require('./Pictures/lisboa.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/lisb/201004/201011/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009260859*D*MRS*LIS*20201004*ryan*FR%7C202009261101*D*LIS*MRS*20201011*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=48&qp_prevProvider=ins_month&rtn=1'
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
