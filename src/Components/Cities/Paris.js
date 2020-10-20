import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Bombay",
     flag: require('./Flag/india.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "15/03/21",
     dr: "31/03/21",
     hd: "07h00",
     hr: "01h15",
     ca: require('./Airlines/Swissair.jpg'),
     airlines: "Swissair",
     prix: "369€",
     image: require('./Pictures/India.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/idel/210315/210331/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010151116*I*CDG*DEL*20210315*luft*LH%7C202010151116*I*DEL*CDG*20210331*luft*LX&qp_prevCurrency=EUR&qp_prevPrice=370&qp_prevProvider=ins_month&rtn=1'
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


