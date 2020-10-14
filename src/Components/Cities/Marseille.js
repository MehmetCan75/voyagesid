import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Valence",
     flag: require('./Flag/spain.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "05/11/20",
     dr: "08/11/20",
     hd: "13h30",
     hr: "14h55",
     ca: require('./Airlines/Ryanair.jpg'),
     airlines: "Ryanair",
     prix: "34€",
     image: require('./Pictures/Valencia.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/vale/201105/201108/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010131915*D*MRS*VLC*20201105*ryan*FR%7C202010141311*D*VLC*MRS*20201108*ryan*FR&qp_prevCurrency=EUR&qp_prevPrice=34&qp_prevProvider=ins_month&rtn=1'
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
