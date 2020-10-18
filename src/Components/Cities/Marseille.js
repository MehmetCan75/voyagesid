import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Stockholm",
     flag: require('./Flag/sweden.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "20/11/20",
     dr: "23/11/20",
     hd: "18h35",
     hr: "23h50",
     ca: require('./Airlines/Klm.jpg'),
     airlines: "KLM",
     prix: "138€",
     image: require('./Pictures/Stockholm2.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/stoc/201120/201123/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010151215*I*MRS*NYO*20201120*gtbf*FR%7C202010151215*I*VST*MRS*20201123*gtbf*FR&qp_prevCurrency=EUR&qp_prevPrice=96&qp_prevProvider=ins_month&rtn=1'
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
