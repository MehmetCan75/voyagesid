import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Crète",
     flag: require('./Flag/greece.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "14/10/20",
     dr: "21/10/20",
     hd: "15h45",
     hr: "20h05",
     prix: "52€",
     image: require('./Pictures/heraklion.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/cret/201014/201021/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009291243*D*MRS*CHQ*20201014*ryan*FR%7C202009291243*D*CHQ*MRS*20201021*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=52&qp_prevProvider=ins_month&rtn=1'
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
