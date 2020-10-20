import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Mexico",
     flag: require('./Flag/mexico.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "02/01/21",
     dr: "21/01/21",
     hd: "11h25",
     hr: "19h55",
     ca: require('./Airlines/Klm.jpg'),
     airlines: "KLM + Air France",
     prix: "346€",
     image: require('./Pictures/Mexique.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/mexa/210102/210121/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010180102*I*MRS*MEX*20210102*lmfr*LH%7C202010180102*I*MEX*MRS*20210121*lmfr*AC&qp_prevCurrency=EUR&qp_prevPrice=313&qp_prevProvider=ins_month&rtn=1'
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
