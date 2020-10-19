import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Marrakech",
     flag: require('./Flag/morocco.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "23/11/20",
     dr: "27/11/20",
     hd: "10h45",
     hr: "17h50",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryanair",
     prix: "20€",
     image: require('./Pictures/marrakech.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/marr/201123/201127/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010191057*D*MRS*RAK*20201123*opfr*FR%7C202010191057*D*RAK*MRS*20201127*opfr*FR&qp_prevCurrency=EUR&qp_prevPrice=21&qp_prevProvider=ins_month&rtn=1'
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
