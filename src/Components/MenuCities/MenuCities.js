import React from "react";

import Survey from './Survey'

//CSS
import "./MenuCities.css";

var Scroll = require("react-scroll");
var scroller = Scroll.scroller;

const MenuCities = (props) => {
  const handleScrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <div className="menu">
      <div className="VID">
      <h2 className="BigTitle">Voyages ID</h2>
      <div className="airplane"></div>
      </div>
      <h1 className="Title" value="">
        Vous ne savez pas où aller ?<br />
        Vous avez un budget restreint ? <br />
        On vous informe de vols pas chers au départ de Paris et Marseille ! 1 offre par jour !
      </h1>
      <div className="">
        <div className="cont">
          {props.listRef.map((ref, i) => (
            <span
              className="cities"
              style={ref.css}
              key={i}
              onClick={() => handleScrollTo(ref.name)}
            >
              {ref.title}
            </span>
          ))}
        </div>
        <div className="contLink">
        <p className="followUs">Suivez-nous sur </p>
        <a href="https://www.instagram.com/voyagesid/?igshid=s0491mkenn9" className="link">p</a>
        </div>
            <Survey />
      </div>
    </div>
  );
};

export default MenuCities;
