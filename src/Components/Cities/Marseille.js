import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Bangkok",
     flag: require('./Flag/thailand.png'),
     vd: "Marseille",
     ad: "MRS",
     ar: "MRS",
     dd: "06/01/21",
     dr: "20/01/21",
     hd: "10h10",
     hr: "23h50",
     prix: "346€",
     image: require('./Pictures/Thailande.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/mrs/bkkt/210106/210120/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009271744*I*MRS*BKK*20210106*edfr*LH%7C202009271744*I*BKK*MRS*20210120*edfr*LH&qp_prevCurrency=EUR&qp_prevPrice=346&qp_prevProvider=ins_month&rtn=1'
   }



  render() {
    let style = { 
          backgroundImage: 'url(' + this.state.image + ')',
      };
    return (
      <article className="card">
        <CardHeader style={style}/>
        <CardBody destination={this.state.destination} flag={this.state.flag} vd={this.state.vd} ad={this.state.ad} ar={this.state.ar} dd={this.state.dd} hd= {this.state.hd} dr={this.state.dr} hr={this.state.hr} prix={this.state.prix} link={this.state.link}/>
      </article>
    )
  }
}
