import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Tanger",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "25/10/20",
     dr: "28/10/20",
     hd: "06h35",
     hr: "20h30",
     prix: "20€",
     image: require('./Pictures/Tanger.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/tang/201025/201028/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009151143*D*MRS*TNG*20201025*skyp*FR%7C202009151143*D*TNG*MRS*20201028*skyp*FR&qp_prevCurrency=EUR&qp_prevPrice=20&qp_prevProvider=ins_month&rtn=1'
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
