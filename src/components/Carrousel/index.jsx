import React, { useState } from "react";
// Style du composant
import "./carrousel.css"; 
import arrow from "../../assets/Arrow__Left.svg";


const Carrousel = ({ pictures, alt }) => {
  // index de l'image à afficher
  const [activePicture, setActivePicture] = useState(parseInt(0));
  const numberOfPictures = pictures.length;
  const nextImage = () =>
    setActivePicture((activePicture + 1) % numberOfPictures);
  const previousImage = () =>
    setActivePicture((activePicture + numberOfPictures - 1) % numberOfPictures);

  return (
    <div className="carrousel">
      <img
        src={arrow}
        alt="carrousel flêche gauche"
        className={numberOfPictures === 1 ? "hidden" : "arrow"}
        id="left__arrow"
        onClick={previousImage}
      />
      <img
        src={arrow}
        alt="carrousel flêche droite"
        className={numberOfPictures === 1 ? "hidden" : "arrow"}
        id="right__arrow"
        onClick={nextImage}
      />
      <img
        className="carrousel__image"
        src={pictures[activePicture]}
        alt={`${alt} numéro ${activePicture + 1}`}
      />
      <span className="carrousel__span">
        {activePicture + 1}/{numberOfPictures}
      </span>
    </div>
  );
};

export default Carrousel;