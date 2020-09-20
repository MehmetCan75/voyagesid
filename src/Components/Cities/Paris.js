import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Minorque",
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "10/10/20",
     dr: "15/10/20",
     hd: "12h10",
     hr: "10h10",
     prix: "78€",
     image: require('./Pictures/Minorque.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/mah/201010/201015/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009171727*D*ORY*MAH*20201010*gtbf*HV%7C202009171727*D*MAH*ORY*20201015*gtbf*HV&qp_prevCurrency=EUR&qp_prevPrice=77&qp_prevProvider=ins_month&rtn=1'
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


