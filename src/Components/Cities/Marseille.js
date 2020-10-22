import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Faro",
     flag: require('./Flag/portugal.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "13/11/20",
     dr: "16/11/20",
     hd: "17h55",
     hr: "13h45",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryanair",
     prix: "20€",
     image: require('./Pictures/faro.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/faro/201113/201116/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010220806*D*MRS*FAO*20201113*skyp*FR%7C202010220806*D*FAO*MRS*20201116*skyp*FR&qp_prevCurrency=EUR&qp_prevPrice=20&qp_prevProvider=ins_month&rtn=1'
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
