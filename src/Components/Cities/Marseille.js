import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Istanbul",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "06/11/20",
     dr: "13/11/20",
     hd: "13h30",
     hr: "11h20",
     prix: "113€",
     image: require('./Pictures/Istanbul.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/ista/201106/201113/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009171254*D*MRS*SAW*20201106*t2fr*PC%7C202009171254*D*SAW*MRS*20201113*t2fr*PC&qp_prevCurrency=EUR&qp_prevPrice=149&qp_prevProvider=ins_month&rtn=1'
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
