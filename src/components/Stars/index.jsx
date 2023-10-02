import React from "react";
import { ReactComponent as StarGrey } from "../../assets/StarGrey.svg";
import { ReactComponent as Star } from "../../assets/Star.svg";
// Style du composant
import "./stars.css"; 

const Stars = ({ rating }) => {
  console.log(rating);

  return (
    <div className="stars" >
      {parseInt(rating) > 0 ? (
        <Star className="star" />
      ) : (
        <StarGrey className="star" />
      )}
      {parseInt(rating) > 1 ? (
        <Star className="star" />
      ) : (
        <StarGrey className="star" />
      )}
      {parseInt(rating) > 2 ? (
        <Star className="star" />
      ) : (
        <StarGrey className="star" />
      )}
      {parseInt(rating) > 3 ? (
        <Star className="star" />
      ) : (
        <StarGrey className="star" />
      )}
      {parseInt(rating) > 4 ? (
        <Star className="star" />
      ) : (
        <StarGrey className="star" />
      )}
    </div>
  );
};

export default Stars;