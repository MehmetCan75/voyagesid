import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "San José",
     flag: require('./Flag/costa-rica.png'),
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "06/11/20",
     dr: "24/11/20",
     hd: "07h10",
     hr: "13h53",
     ca: require('./Airlines/Klm.jpg'),
     airlines: "KLM",
     prix: "480€",
     image: require('./Pictures/CostaRica.jpg'),
     link : 'https://www.skyscanner.fr/transport/flights/pari/sjoa/201106/201124/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010221925*I*CDG*SJO*20201106*atfr*KL%7C202010221925*I*SJO*CDG*20201124*atfr*KL&qp_prevCurrency=EUR&qp_prevPrice=480&qp_prevProvider=ins_month&rtn=1'
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


