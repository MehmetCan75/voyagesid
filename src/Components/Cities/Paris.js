import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Marrakech",
     vd: "Beauvais",
     ad: "BVA",
     ar: "BVA",
     dd: "19/09/20",
     dr: "26/09/20",
     hd: "21h25",
     hr: "16h45",
     prix: "36€",
     image: require('./Pictures/marrakech.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/marr/200919/200926/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009090839*D*BVA*RAK*20200919*opfr*FR%7C202009090839*D*RAK*BVA*20200926*opfr*FR&qp_prevCurrency=EUR&qp_prevPrice=36&qp_prevProvider=ins_month&rtn=1'
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


