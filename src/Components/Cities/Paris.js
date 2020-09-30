import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "La Havane",
     flag: require('./Flag/cuba.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "05/02/21",
     dr: "19/02/21",
     hd: "10h15",
     hr: "21h45",
     prix: "431€",
     image: require('./Pictures/cuba.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/hava/210205/210219/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009200628*I*ORY*HAV*20210205*gtbf*UX%7C202009200628*I*HAV*ORY*20210219*gtbf*UX&qp_prevCurrency=EUR&qp_prevPrice=430&qp_prevProvider=ins_month&rtn=1'
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


