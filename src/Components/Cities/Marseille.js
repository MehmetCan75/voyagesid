import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Faro",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "23/09/20",
     dr: "30/09/20",
     hd: "11h40",
     hr: "07h55",
     prix: "52€",
     image: require('./Pictures/faro.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/faro/200923/200930/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009081308*D*MRS*FAO*20200923*t2fr*FR%7C202009081308*D*FAO*MRS*20200930*t2fr*FR&qp_prevCurrency=EUR&qp_prevPrice=32&qp_prevProvider=ins_month&rtn=1'
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
