import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Mexico",
     flag: require('./Flag/mexico.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "22/01/21",
     dr: "13/02/21",
     hd: "13h35",
     hr: "04h50",
     ca: require('./Airlines/TurkishAirlines.jpg'),
     airlines: "Turkish Airlines",
     prix: "416€",
     image: require('./Pictures/Mexique.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/mexa/210122/210213/config/10413-2101221335--31734-1-13993-2101230320%7C13993-2102130450--31734-2-10413-2102140950?adultsv2=1&airlines=!DL,!KL,!AF,!TP,!UX,!UA,!VS,!LX,!AC,!LH,!AY,!AM,!AA,!IB,!SN,!BA,!OS,!multiple&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010071003*I*CDG*MEX*20210122*at24*LH%7C202010071003*I*MEX*CDG*20210213*at24*AC&qp_prevCurrency=EUR&qp_prevPrice=405&qp_prevProvider=ins_month&rtn=1'
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


