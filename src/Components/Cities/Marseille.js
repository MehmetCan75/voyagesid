import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Naples",
     flag: require('./Flag/italy.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "23/10/20",
     dr: "30/10/20",
     hd: "13h55",
     hr: "09h45",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryan Air",
     prix: "44€",
     image: require('./Pictures/naples.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/napl/201023/201030/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010090351*D*MRS*NAP*20201023*skyp*FR%7C202010090351*D*NAP*MRS*20201030*skyp*FR&qp_prevCurrency=EUR&qp_prevPrice=25&qp_prevProvider=ins_month&rtn=1'
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
