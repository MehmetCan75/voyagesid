import React, { Component } from 'react'
import MenuCities from './MenuCities'

// COMPONENTS
import Paris from '../Cities/Paris'
import Marseille from '../Cities/Marseille'
// import Lyon from '../Cities/Lyon'
// import Toulouse from '../Cities/Toulouse'
import Header from '../Header/Header'


var Scroll = require('react-scroll');
var Element = Scroll.Element;



export default class LandPage extends Component {
  state = {
      listRef: [     
      {
        name: "Paris",
        title: "Paris",
      },
      // {
      //   name: "Lyon",
      //   title: "Lyon",
      // },
      {
        name: "Marseille",
        title: "Marseille",
      },
      // {
      //   name: "Toulouse",
      //   title: "Toulouse",
      // },
    ]
    };

  render() {
    return (
      <div>
        <Header></Header>
        <MenuCities listRef={this.state.listRef} />
        <Element name='Paris' className="PRS"><Paris></Paris></Element>
        {/* <Element name='Lyon'className="PRS"><Lyon></Lyon></Element> */}
        <Element name='Marseille' className="PRS"><Marseille></Marseille></Element>
        {/* <Element name='Toulouse' className="PRS"><Toulouse></Toulouse></Element> */}
      </div>
    )
  }
}