import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Madrid",
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "02/10/20",
     dr: "05/10/20",
     hd: "20h10",
     hr: "17h20",
     prix: "59€",
     image: require('./Pictures/Madrid.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/madr/201002/201005/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009151039*D*BVA*MAD*20201002*opfr*FR%7C202009151039*D*MAD*BVA*20201005*opfr*FR&qp_prevCurrency=EUR&qp_prevPrice=34&qp_prevProvider=ins_month&rtn=1'
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


