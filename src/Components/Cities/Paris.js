import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Larnaka",
     flag: require('./Flag/cyprus.png'),
     vd: "Paris/Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "26/03/21",
     dr: "31/03/21",
     hd: "19h25",
     hr: "06h15",
     ca: require('./Airlines/Wizzair.jpg'),
     airlines: "Wizz Air",
     prix: "30€",
     image: require('./Pictures/Larnaka.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/larn/210326/210331/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010101321*D*BVA*LCA*20210326*wizz*W6%7C202010100124*D*LCA*BVA*20210331*wizz*W6&qp_prevCurrency=EUR&qp_prevPrice=30&qp_prevProvider=ins_month&rtn=1'
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


