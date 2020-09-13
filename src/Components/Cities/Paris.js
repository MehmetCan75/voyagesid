import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Abou Dabi",
     vd: "Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "11/11/20",
     dr: "17/11/20",
     hd: "08h45",
     hr: "21h55",
     prix: "127€",
     image: require('./Pictures/Abudhabi.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/auha/201111/201117/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009122119*I*BVA*AUH*20201111*gtbf*W6%7C202009122119*I*AUH*BVA*20201117*gtbf*W6&qp_prevCurrency=EUR&qp_prevPrice=116&qp_prevProvider=ins_month&rtn=1'
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


