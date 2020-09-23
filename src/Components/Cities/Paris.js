import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "San Juan",
     flag: require('./Flag/puertoRico.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "13/02/21",
     dr: "27/02/21",
     hd: "11h55",
     hr: "13h56",
     prix: "349€",
     image: require('./Pictures/PuertoRico.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/sjua/210213/210227/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009212105*I*CDG*SJU*20210213*lmfr*AC%7C202009212105*I*SJU*ORY*20210227*lmfr*LH&qp_prevCurrency=EUR&qp_prevPrice=327&qp_prevProvider=ins_month&rtn=1'
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


