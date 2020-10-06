import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Zanzibar",
     flag: require('./Flag/tanzania.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "09/02/21",
     dr: "18/02/21",
     hd: "17h45",
     hr: "04h45",
     ca: require('./Airlines/TurkishAirlines.jpg'),
     airlines: "Turkish Airlines",
     prix: "388€",
     image: require('./Pictures/Zanzibar.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/znza/210209/210218/config/14323-2102091745--31734-1-18557-2102110350%7C18557-2102180445--31734-2-14323-2102181650?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010051138*I*MRS*ZNZ*20210209*gofr*TK%7C202010051138*I*ZNZ*MRS*20210218*gofr*TK&qp_prevCurrency=EUR&qp_prevPrice=388&qp_prevProvider=ins_month&rtn=1'
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
