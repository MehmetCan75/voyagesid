import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Séville",
     flag: require('./Flag/spain.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "04/11/20",
     dr: "11/11/20",
     hd: "18h15",
     hr: "15h45",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryan Air",
     prix: "46€",
     image: require('./Pictures/Sevilla.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/sevi/201104/201111/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010101314*D*MRS*SVQ*20201104*opfr*FR%7C202010101314*D*SVQ*MRS*20201111*opfr*FR&qp_prevCurrency=EUR&qp_prevPrice=28&qp_prevProvider=ins_month&rtn=1'
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
