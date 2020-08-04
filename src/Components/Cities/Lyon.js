import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Split (Croatie)",
     vd: "Lyon",
     ad: "LYS",
     ar: "LYS",
     dd: "02/09/20",
     dr: "09/09/20",
     hd: "10h45",
     hr: "08h35",
     prix: "49€",
     image: require('./Pictures/split.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/lyon/spli/200902/200909/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202008040203*D*LYS*SPU*20200902*volo*V7%7C202008040203*D*SPU*LYS*20200909*volo*V7&qp_prevCurrency=EUR&qp_prevPrice=49&qp_prevProvider=ins_month&rtn=1'
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
