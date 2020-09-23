import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Bombay",
     flag: require('./Flag/india.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "13/02/21",
     dr: "27/02/21",
     hd: "17h45",
     hr: "06h50",
     prix: "378€",
     image: require('./Pictures/India.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/ibom/210213/210227/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009210246*I*MRS*BOM*20210213*lmfr*TK%7C202009210246*I*BOM*MRS*20210227*lmfr*TK&qp_prevCurrency=EUR&qp_prevPrice=376&qp_prevProvider=ins_month&rtn=1'
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
