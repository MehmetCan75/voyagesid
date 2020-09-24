import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Skopje",
     flag: require('./Flag/republic-of-macedonia.png'),
     vd: "Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "05/12/20",
     dr: "12/12/20",
     hd: "21h45",
     hr: "18h15",
     prix: "27€",
     image: require('./Pictures/Macedoine.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/skop/201205/201212/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009221346*D*BVA*SKP*20201205*wizz*W6%7C202009222203*D*SKP*BVA*20201212*wizz*W6&qp_prevCurrency=EUR&qp_prevPrice=38&qp_prevProvider=ins_month&rtn=1'
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


