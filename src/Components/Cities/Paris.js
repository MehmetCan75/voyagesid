import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Bratislava",
     vd: "Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "27/10/20",
     dr: "03/11/20",
     hd: "12h35",
     hr: "10h05",
     prix: "23€",
     image: require('./Pictures/Bratislava.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/bras/201027/201103/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009181904*D*BVA*BTS*20201027*opfr*FR%7C202009181904*D*BTS*BVA*20201103*opfr*FR&qp_prevCurrency=EUR&qp_prevPrice=23&qp_prevProvider=ins_month&rtn=1'
   }



  render() {
    let style = { 
          backgroundImage: 'url(' + this.state.image + ')',
      };
    return (
      <article className="card">
        <CardHeader style={style}/>
        <CardBody destination={this.state.destination} vd={this.state.vd} ad={this.state.ad} ar={this.state.ar} dd={this.state.dd} hd= {this.state.hd} dr={this.state.dr} hr={this.state.hr} prix={this.state.prix} link={this.state.link}/>
      </article>
    )
  }
}


