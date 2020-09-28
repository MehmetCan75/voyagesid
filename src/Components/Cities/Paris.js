import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Tromso",
     flag: require('./Flag/norway.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "27/01/21",
     dr: "03/02/21",
     hd: "12h25",
     hr: "06h30",
     prix: "157€",
     image: require('./Pictures/Tromso.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/trom/210127/210203/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009262043*I*CDG*TOS*20210127*at24*DY%7C202009262043*I*TOS*CDG*20210203*at24*DY&qp_prevCurrency=EUR&qp_prevPrice=157&qp_prevProvider=ins_month&rtn=1'
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


