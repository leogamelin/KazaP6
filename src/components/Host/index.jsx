import React from "react";
// Style du composant
import "./host.css"; 

const Host = ({ name, picture }) => {
  return (
    <div className="logement__hostname">
      <div className="logement__name">
        <p>{name.split(" ")[0]}</p>
        <p>{name.split(" ")[1]}</p>
      </div>

      <img className="disk" src={picture} alt="" />
    </div>
  );
};

export default Host;
