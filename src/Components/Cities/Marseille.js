import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Lisbonne",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "02/09/20",
     dr: "07/09/20",
     hd: "17h15",
     hr: "13h15",
     prix: "57€",
     image: require('./Pictures/lisboa.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/lisb/200902/200907/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202008040854*D*MRS*LIS*20200902*bffr*FR%7C202008040854*D*LIS*MRS*20200907*bffr*FR&qp_prevCurrency=EUR&qp_prevPrice=39&qp_prevProvider=ins_month&rtn=1'
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
