import React, { Component } from "react";
import MenuCities from "./MenuCities";

// COMPONENTS
import Paris from "../Cities/Paris";
import Marseille from "../Cities/Marseille";
// import Lyon from '../Cities/Lyon'
// import Toulouse from '../Cities/Toulouse'
import Header from "../Header/Header";

import Modal from "../Cities/Modal/Modal";

var Scroll = require("react-scroll");
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
    ],
  };


  render() {
    return (
      <div>
        <Header></Header>
        <Modal />
        <MenuCities listRef={this.state.listRef} lang={this.state.lang} />
        <Element name="Paris" className="PRS">
          <Paris className="PRS" />
        </Element>
        <Element name="Marseille" className="PRS">
          <Marseille></Marseille>
        </Element>
      </div>
    );
  }
}
