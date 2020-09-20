import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Eindhoven",
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "27/10/20",
     dr: "31/10/20",
     hd: "14h30",
     hr: "13h00",
     prix: "38€",
     image: require('./Pictures/Eindoven.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/eind/201027/201031/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009191557*D*MRS*EIN*20201027*opfr*FR%7C202009191557*D*EIN*MRS*20201031*opfr*FR&qp_prevCurrency=EUR&qp_prevPrice=30&qp_prevProvider=ins_month&rtn=1'
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
