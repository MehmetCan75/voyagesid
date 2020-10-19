import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Lisbonne",
     flag: require('./Flag/portugal.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "11/12/20",
     dr: "14/12/20",
     hd: "19h25",
     hr: "11h00",
     ca: require('./Airlines/Easyjet.jpg'),
     airlines: "Easyjet",
     prix: "57€",
     image: require('./Pictures/lisboa.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/lisb/201211/201214/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010190346*D*BVA*LIS*20201211*ryan*FR%7C202010191049*D*LIS*BVA*20201214*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=30&qp_prevProvider=ins_month&rtn=1'
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


