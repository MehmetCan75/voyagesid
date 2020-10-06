import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Athènes",
     flag: require('./Flag/greece.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "07/11/20",
     dr: "14/11/20",
     hd: "20h15",
     hr: "16h50",
     ca: require('./Airlines/Aegean.jpg'),
     airlines: "Aegean",
     prix: "97€",
     image: require('./Pictures/athenes.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/athe/201107/201114/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010032039*I*BVA*ATH*20201107*skyp*FR%7C202010032039*I*ATH*BVA*20201114*skyp*FR&qp_prevCurrency=EUR&qp_prevPrice=78&qp_prevProvider=ins_month&rtn=1'
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


