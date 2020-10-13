import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Nairobi",
     flag: require('./Flag/kenya.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "02/02/21",
     dr: "16/02/21",
     hd: "17h45",
     hr: "05h10",
     ca: require('./Airlines/TurkishAirlines.jpg'),
     airlines: "Turkish Airlines",
     prix: "326€",
     image: require('./Pictures/Kenya.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/nboa/210202/210216/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010121256*I*MRS*NBO*20210202*at24*TK%7C202010121256*I*NBO*MRS*20210216*at24*TK&qp_prevCurrency=EUR&qp_prevPrice=334&qp_prevProvider=ins_month&rtn=1'
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
