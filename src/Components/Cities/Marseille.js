import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Marrakech",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "26/10/20",
     dr: "02/11/20",
     hd: "10h35",
     hr: "07h20",
     prix: "64€",
     image: require('./Pictures/marrakech.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/marr/201026/201102/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009181242*D*MRS*RAK*20201026*opfr*FR%7C202009181242*D*RAK*MRS*20201102*opfr*FR&qp_prevCurrency=EUR&qp_prevPrice=42&qp_prevProvider=ins_month&rtn=1'
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
