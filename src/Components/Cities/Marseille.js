import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Prague",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "15/10/20",
     dr: "18/10/20",
     hd: "06h00",
     hr: "21h55",
     prix: "42€",
     image: require('./Pictures/prague.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/prag/201015/201018/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009161433*D*MRS*PRG*20201015*volo*V7%7C202009160648*D*PRG*MRS*20201018*volo*V7&qp_prevCurrency=EUR&qp_prevPrice=42&qp_prevProvider=ins_month&rtn=1'
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
