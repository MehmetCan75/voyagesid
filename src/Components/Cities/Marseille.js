import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Rome",
     flag: require('./Flag/italy.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "30/12/20",
     dr: "10/01/21",
     hd: "09h20",
     hr: "06h35",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryanair",
     prix: "53€",
     image: require('./Pictures/Rome.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/rome/201230/210110/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010140556*D*MRS*CIA*20201230*ryan*FR%7C202010150727*D*CIA*MRS*20210110*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=53&qp_prevProvider=ins_month&rtn=1'
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
