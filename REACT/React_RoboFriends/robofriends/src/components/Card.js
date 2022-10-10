import React from "react";

const Card = (props) => {
  return (
    <div className="bg-light-green dib br2 pa2 ma3 grow shadow-5 bw2">
      <img
        src={`https://robohash.org/${props.name}?size200x200.png`}
        alt="robo_pic"
      ></img>
      <div className="tc">
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>
      </div>
    </div>
  );
};

export default Card;
