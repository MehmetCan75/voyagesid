import React, { Component } from "react";

import './Cities.css'

import CardBody from './Card/CardBody'
import CardHeader from './Card/CardHeader'

 export default class Card extends Component {
   state = {
     destination: "Copenhague",
     vd: "Paris",
     ad: "CDG",
     ar: "CDG",
     dd: "08/01/21",
     dr: "11/01/21",
     hd: "18h05",
     hr: "09h30",
     prix: "68€",
     image: require('./Pictures/Copenhague.jpg'),
     link : 'https://www.skyscanner.fr/transport/vols/pari/cope/210108/210111/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009141952*D*CDG*CPH*20210108*t2fr*EZY%7C202009141952*D*CPH*CDG*20210111*t2fr*EZY&qp_prevCurrency=EUR&qp_prevPrice=71&qp_prevProvider=ins_month&rtn=1'
   }



  render() {
    let style = { 
          backgroundImage: 'url(' + this.state.image + ')',
      };
    return (
      <article className="card">
        <CardHeader style={style}/>
        <CardBody destination={this.state.destination} vd={this.state.vd} ad={this.state.ad} ar={this.state.ar} dd={this.state.dd} hd= {this.state.hd} dr={this.state.dr} hr={this.state.hr} prix={this.state.prix} link={this.state.link}/>
      </article>
    )
  }
}


