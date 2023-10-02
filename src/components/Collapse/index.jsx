import React, { useState } from "react";
import "./collapse.css"; 

import arrowDown from "../../assets/Arrow__Down.svg";

const Collapse = ({ categorie, title, content, className = '' }) => {
  // On cache le contenu 
  const [isOpen, setIsOpen] = useState(false);
    // On inverse la valeur de "isOpen"
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
  
    return (
      <div className={`${className} ${categorie}__informations__card`}>
          <div 
            className={`${categorie}__informations__card__title`} 
            onClick={toggleOpen}
          >
              {title}  
              <img 
                src={arrowDown} 
                alt="Dérouler le menu" 
                className={isOpen ? "rotate" : ""} 
              />
          </div>
          
          {/* On vérifie si le contenu est un tableau ou un texte simple */}
          {Array.isArray(content) ? (
            <ul className={`${categorie}__informations__card__info ${isOpen ? "show" : ""}`}>
              {content.map((equipment, index) => (
                <li key={index} className={`${categorie}__informations__card__equipment`}>
                  {equipment}
                </li>
              ))}
            </ul>
          ) : (
            <p className={`${categorie}__informations__card__info ${isOpen ? "show" : ""}`}>
              {content}
            </p>
          )}
      </div>
    );
};

export default Collapse;
