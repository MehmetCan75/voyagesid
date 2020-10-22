import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Athènes",
     flag: require('./Flag/greece.png'),
     vd: "Paris",
     ad: "ORY",
     ar: "ORY",
     dd: "06/11/20",
     dr: "13/11/20",
     hd: "06h20",
     hr: "11h25",
     ca: require('./Airlines/Transavia.jpg'),
     airlines: "Transavia",
     prix: "110€",
     image: require('./Pictures/athenes.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/athe/201106/201113/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202010201646*I*BVA*ATH*20201106*gtbf*FR%7C202010201646*I*ATH*BVA*20201113*gtbf*W6&qp_prevCurrency=EUR&qp_prevPrice=71&qp_prevProvider=ins_month&rtn=1'
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


