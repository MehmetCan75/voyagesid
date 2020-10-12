import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Panama",
     flag: require('./Flag/panama.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "04/11/20",
     dr: "17/11/20",
     hd: "06h40",
     hr: "18h45",
     ca: require('./Airlines/AirFrance.jpg'),
     airlines: "Air France",
     prix: "473€",
     image: require('./Pictures/Panama.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/ptya/201104/201117/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010090705*I*MRS*PTY*20201104*ngfr*KL%7C202010090705*I*PTY*MRS*20201117*ngfr*AF&qp_prevCurrency=EUR&qp_prevPrice=474&qp_prevProvider=ins_month&rtn=1'
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
