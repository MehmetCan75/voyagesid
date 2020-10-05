import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Belgrade",
     flag: require('./Flag/serbia.png'),
     vd: "Paris/Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "24/11/20",
     dr: "01/12/20",
     hd: "09h30",
     hr: "06h20",
     ca: require('./Airlines/Wizzair.jpg'),
     airlines: "WizzAir",
     prix: "60€",
     image: require('./Pictures/Belgrade.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/beli/201124/201201/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010040001*D*BVA*BEG*20201124*lmfr*W6%7C202010040001*D*BEG*BVA*20201201*lmfr*W6&qp_prevCurrency=EUR&qp_prevPrice=59&qp_prevProvider=ins_month&rtn=1'
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


