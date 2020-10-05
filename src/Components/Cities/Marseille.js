import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Bogotá",
     flag: require('./Flag/colombia.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "15/01/21",
     dr: "30/01/21",
     hd: "10h30",
     hr: "00h05",
     ca: require('./Airlines/AirFrance.jpg'),
     airlines: "Air France",
     prix: "539€",
     image: require('./Pictures/Colombia.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/bog/210115/210130/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010031908*I*MRS*BOG*20210115*lmfr*LH%7C202010031908*I*BOG*MRS*20210130*lmfr*LH&qp_prevCurrency=EUR&qp_prevPrice=472&qp_prevProvider=ins_month&rtn=1'
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
