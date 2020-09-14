import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Copenhague",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "12/12/20",
     dr: "15/12/20",
     hd: "16h45",
     hr: "19h40",
     prix: "58€",
     image: require('./Pictures/Copenhague.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/cope/201212/201215/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009141504*D*MRS*CPH*20201212*ryan*FR%7C202009141504*D*CPH*MRS*20201215*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=58&qp_prevProvider=ins_month&rtn=1'
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
