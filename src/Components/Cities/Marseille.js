import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Istanbul",
     flag: require('./Flag/turkey.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "06/11/20",
     dr: "10/11/20",
     hd: "13h40",
     hr: "11h25",
     ca: require('./Airlines/Pegasus.jpg'),
     airlines: "Pegasus",
     prix: "76€",
     image: require('./Pictures/Istanbul.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/ista/201106/201110/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010240946*D*MRS*SAW*20201106*ctfr*PC%7C202010240946*D*SAW*MRS*20201110*ctfr*PC&qp_prevCurrency=EUR&qp_prevPrice=86&qp_prevProvider=ins_month&rtn=1'
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
