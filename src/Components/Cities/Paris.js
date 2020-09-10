import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Oran",
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "03/10/20",
     dr: "10/10/20",
     hd: "07h30",
     hr: "10h00",
     prix: "89€",
     image: require('./Pictures/Oran.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/orna/201003/201010/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009092227*D*ORY*ORN*20201003*t2fr*HV%7C202009092227*D*ORN*ORY*20201010*t2fr*HV&qp_prevCurrency=EUR&qp_prevPrice=92&qp_prevProvider=ins_month&rtn=1'
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


