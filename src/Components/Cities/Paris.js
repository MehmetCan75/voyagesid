import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Rio de Janeiro",
     flag: require('./Flag/brazil.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "12/01/21",
     dr: "25/01/21",
     hd: "08h05",
     hr: "20h50",
     ca: require('./Airlines/Klm.jpg'),
     airlines: "KLM",
     prix: "426€",
     image: require('./Pictures/RiodeJaneiro.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/rioa/210112/210125/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010070753*I*BVA*SDU*20210112*gtbf*FR%7C202010070753*I*SDU*BVA*20210125*gtbf*AD&qp_prevCurrency=EUR&qp_prevPrice=345&qp_prevProvider=ins_month&rtn=1'
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


