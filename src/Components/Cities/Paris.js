import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Buenos Aires",
     flag: require('./Flag/argentina.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "12/02/21",
     dr: "27/02/21",
     hd: "19h35",
     hr: "18h05",
     prix: "483€",
     image: require('./Pictures/BuenosAires.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/buea/210212/210227/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009201925*I*CDG*EZE*20210212*lmfr*LH%7C202009201925*I*EZE*CDG*20210227*lmfr*LH&qp_prevCurrency=EUR&qp_prevPrice=476&qp_prevProvider=ins_month&rtn=1'
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


