import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Bangkok",
     flag: require('./Flag/thailand.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "10/03/21",
     dr: "24/03/21",
     hd: "18h35",
     hr: "23h50",
     ca: require('./Airlines/Lufthansa.jpg'),
     airlines: "Lufthansa",
     prix: "354€",
     image: require('./Pictures/Thailande.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/bkkt/210310/210324/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010151836*I*MRS*BKK*20210310*ctfr*LH%7C202010151836*I*BKK*MRS*20210324*ctfr*LH&qp_prevCurrency=EUR&qp_prevPrice=217&qp_prevProvider=ins_month&rtn=1'
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
