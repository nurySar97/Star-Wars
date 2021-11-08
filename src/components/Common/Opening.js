import React from "react";
import starWars from "./../../assets/images/starWarsLogo.png";
import "./Opening.css";

const Opening = () => {
  return (
    <div className={"starWars"}>
      <img className={"starWars__Img"} alt={"starWars"} src={starWars} />
    </div>
  );
};

export default Opening;
