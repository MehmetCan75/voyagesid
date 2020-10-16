import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Istanbul",
     flag: require('./Flag/turkey.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "07/11/20",
     dr: "21/11/20",
     hd: "16h00",
     hr: "13h15",
     ca: require('./Airlines/Pegasus.jpg'),
     airlines: "Pegasus",
     prix: "129€",
     image: require('./Pictures/Istanbul2.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/ista/201107/201121/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010151744*D*CDG*SAW*20201107*ctfr*TK%7C202010151744*D*SAW*CDG*20201121*ctfr*TK&qp_prevCurrency=EUR&qp_prevPrice=84&qp_prevProvider=ins_month&rtn=1'
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


