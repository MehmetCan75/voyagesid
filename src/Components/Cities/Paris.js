import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Palerme",
     flag: require('./Flag/italy.png'),
     vd: "Paris/Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "12/12/20",
     dr: "15/12/20",
     hd: "15h20",
     hr: "13h50",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryanair",
     prix: "30€",
     image: require('./Pictures/palerme.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/pale/201212/201215/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010240551*D*BVA*PMO*20201212*ryan*FR%7C202010221452*D*PMO*BVA*20201215*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=30&qp_prevProvider=ins_month&rtn=1'
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


