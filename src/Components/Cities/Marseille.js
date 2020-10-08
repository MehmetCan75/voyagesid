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
     dd: "06/11/20",
     dr: "11/11/20",
     hd: "10h10",
     hr: "11h55",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryan Air",
     prix: "33€",
     image: require('./Pictures/lisboa.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/lisb/201106/201111/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010080635*D*MRS*LIS*20201106*skyp*FR%7C202010080635*D*LIS*MRS*20201111*skyp*FR&qp_prevCurrency=EUR&qp_prevPrice=28&qp_prevProvider=ins_month&rtn=1'
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
