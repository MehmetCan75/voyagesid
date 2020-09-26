import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Zakynthos",
     flag: require('./Flag/greece.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "03/10/20",
     dr: "10/10/20",
     hd: "06h20",
     hr: "11h05",
     prix: "104€",
     image: require('./Pictures/Zakynthos.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/zaki/201003/201010/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009251429*D*ORY*ZTH*20201003*t2fr*HV%7C202009251429*D*ZTH*ORY*20201010*t2fr*HV&qp_prevCurrency=EUR&qp_prevPrice=104&qp_prevProvider=ins_month&rtn=1'
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


