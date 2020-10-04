import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Lanzarote",
     flag: require('./Flag/spain.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "07/11/20",
     dr: "14/11/20",
     hd: "06h15",
     hr: "09h20",
     ca: require('./Airlines/Volotea.jpg'),
     airlines: "Volotea",
     prix: "71€",
     image: require('./Pictures/Lanzarote.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/arre/201107/201114/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010040959*D*MRS*ACE*20201107*volo*V7%7C202010040959*D*ACE*MRS*20201114*volo*V7&qp_prevCurrency=EUR&qp_prevPrice=71&qp_prevProvider=ins_month&rtn=1'
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
