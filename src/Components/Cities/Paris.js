import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Tokyo",
     flag: require('./Flag/japan.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "03/03/21",
     dr: "18/03/21",
     hd: "18h40",
     hr: "22h55",
     ca: require('./Airlines/TurkishAirlines.jpg'),
     airlines: "Turkish Airlines",
     prix: "489€",
     image: require('./Pictures/Tokyo.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/tyoa/210303/210318/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=&qp_prevCurrency=EUR&qp_prevPrice=ReturnNoPrices&qp_prevProvider=ins_month&rtn=1'
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


