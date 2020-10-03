import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Rome",
     flag: require('./Flag/italy.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "11/10/20",
     dr: "18/10/20",
     hd: "13h00",
     hr: "09h50",
     ca: require('./Airlines/Alitalia.jpg'),
     airlines: "Alitalia",
     prix: "70€",
     image: require('./Pictures/Rome.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/rome/201011/201018/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010031201*D*BVA*CIA*20201011*ryan*FR%7C202010030719*D*CIA*BVA*20201018*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=28&qp_prevProvider=ins_month&rtn=1'
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


