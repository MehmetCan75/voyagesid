import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Larnaka",
     vd: "Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "06/11/20",
     dr: "09/11/20",
     hd: "19h25",
     hr: "15h20",
     prix: "30€",
     image: require('./Pictures/Larnaka.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/larn/201106/201109/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009211050*D*BVA*LCA*20201106*wizz*W6%7C202009201932*D*LCA*BVA*20201109*wizz*W6&qp_prevCurrency=EUR&qp_prevPrice=30&qp_prevProvider=ins_month&rtn=1'
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


