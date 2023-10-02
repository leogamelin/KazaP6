import React from "react";
import "./tags.css"; 

const Tags = ({ tags }) => {
  return (
    <ul className="logement__tag">
      {tags.map((t, key) => (
        // Pour chaque tag, un élément <li> est crée pour assurer que chaque élément soit une clé unique 
        <li key={`tag-${key}`}>{t}</li>
      ))}
    </ul>
  );
};

export default Tags;
